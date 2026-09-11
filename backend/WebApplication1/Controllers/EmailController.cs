using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly EmailService _emailService;

        public ContactController(EmailService emailService)
        {
            _emailService = emailService;
        }

        [HttpPost]
        public async Task<IActionResult> SendMessage(
            [FromBody] ContactRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Name))
                return BadRequest("Name is required.");

            if (string.IsNullOrWhiteSpace(request.Email))
                return BadRequest("Email is required.");

            if (string.IsNullOrWhiteSpace(request.Story))
                return BadRequest("Story is required.");

            try
            {
                await _emailService.SendContactEmail(request);

                return Ok(new
                {
                    message = "Your story has been sent successfully!"
                });
            }
            catch
            {
                return StatusCode(500, new
                {
                    message = "Something went wrong while sending your message."
                });
            }
        }
    }
}