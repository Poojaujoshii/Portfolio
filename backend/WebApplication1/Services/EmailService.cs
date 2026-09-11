using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;
using WebApplication1.Models;

namespace WebApplication1.Services
{
    public class EmailService
    {
        private readonly IConfiguration _configuration;

        public EmailService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task SendContactEmail(ContactRequest request)
        {
            var email = new MimeMessage();

            email.From.Add(new MailboxAddress(
                "Portfolio Contact Form",
                _configuration["EmailSettings:Username"]
            ));

            email.To.Add(new MailboxAddress(
                "Poo",
                "poojaujoshi2@gmail.com"
            ));
            email.ReplyTo.Add(new MailboxAddress(
                request.Name,
                request.Email
            ));

            email.Subject = $"New Portfolio Message from {request.Name}";

            email.Body = new TextPart("plain")
            {
                Text =
                    $"Name: {request.Name}\n" +
                    $"Email: {request.Email}\n" +
                    $"Company: {request.Company}\n\n" +
                    $"Story:\n{request.Story}"
            };

            using var smtp = new SmtpClient();

            await smtp.ConnectAsync(
                "smtp.gmail.com",
                587,
                SecureSocketOptions.StartTls
            );

            await smtp.AuthenticateAsync(
                _configuration["EmailSettings:Username"],
                _configuration["EmailSettings:Password"]
            );

            await smtp.SendAsync(email);

            await smtp.DisconnectAsync(true);
        }
    }
}