import { useState } from "react"

function Contact() {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    story: ""
    })

    const [status, setStatus] = useState("")

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
    e.preventDefault()

    setStatus("Sending...")

    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
        })

        const data = await response.json()

        if (response.ok) {
        setStatus(data.message)
        setFormData({
            name: "",
            email: "",
            company: "",
            story: ""
        })
        } else {
        setStatus(data.message || "Something went wrong.")
        }
    } catch (error) {
            setStatus("Could not connect to the server.")
        }
    }
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#151515] px-5 py-20 text-[#FFFDF7] sm:px-6 md:px-12 md:py-28 lg:px-20"
    >
      {/* ================= DECORATIONS ================= */}

      {/* Yellow circle */}
      <div
        className="
          absolute -right-24 -top-20
          h-56 w-56
          rounded-full
          bg-[#FFC928]
          sm:h-64 sm:w-64
          md:-right-24 md:-top-24 md:h-72 md:w-72
        "
      />

      {/* Orange circle */}
      <div
        className="
          absolute right-[6%] top-[30%]
          h-16 w-16
          rounded-full
          border-2 border-[#FF8A3D]
          sm:h-20 sm:w-20
          md:right-[12%] md:top-[28%] md:h-24 md:w-24
        "
      />

      {/* Sparkle */}
      <div
        className="
          absolute left-[8%] top-[18%]
          text-3xl text-[#FFC928]
          sm:text-4xl
        "
      >
        ✦
      </div>

      {/* Small orange dot */}
      <div
        className="
          absolute bottom-[15%] right-[6%]
          h-3 w-3
          rounded-full
          bg-[#FF8A3D]
          sm:h-4 sm:w-4
        "
      />

      {/* ================= CONTENT ================= */}

      <div className="relative mx-auto max-w-7xl">

        {/* ================= INTRO ================= */}

        <div className="max-w-4xl">

          <p
            className="
              mb-5
              text-[10px] font-black uppercase
              tracking-[0.22em]
              text-[#FFC928]
              sm:text-xs
              md:mb-6 md:text-sm
            "
          >
            GOT A STORY?
          </p>

          <h2
            className="
              max-w-[320px]
              text-5xl font-black
              leading-[0.9]
              tracking-[-2px]
              sm:max-w-none sm:text-6xl
              md:text-7xl md:tracking-tight
              lg:text-8xl
            "
          >
            Let&apos;s find
            <br />
            <span className="text-[#FFC928]">
              the post.
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-[330px]
              text-sm leading-6
              text-[#FFFDF7]/70
              sm:max-w-xl sm:text-base
              md:mt-8 md:text-xl md:leading-relaxed
            "
          >
            You probably have more content than you think.
            <br />
            You just haven&apos;t found the post yet.
          </p>

        </div>

        {/* ================= CONTACT CONTENT ================= */}

        <div
          className="
            mt-12
            grid gap-12
            lg:mt-16
            lg:grid-cols-[0.8fr_1.2fr]
            lg:items-start
          "
        >

          {/* ================= LEFT ================= */}

          <div className="max-w-md">

            <h3
              className="
                text-2xl font-black
                leading-[1.05]
                sm:text-3xl
                md:text-4xl
              "
            >
              No corporate forms.
              <br />
              Just tell me the story.
            </h3>

            <p
              className="
                mt-5
                text-sm leading-6
                text-[#FFFDF7]/65
                sm:text-base sm:leading-7
                md:mt-6
              "
            >
              You don&apos;t need a perfectly written brief.
              You don&apos;t even need to know what the post
              should be about.
            </p>

            <p
              className="
                mt-4
                text-sm leading-6
                text-[#FFFDF7]/65
                sm:text-base sm:leading-7
              "
            >
              Tell me what happened, what went wrong, what
              surprised you, or what&apos;s been living rent-free
              inside your founder brain.
            </p>

            <p
              className="
                mt-4
                text-sm leading-6
                text-[#FFFDF7]/65
                sm:text-base sm:leading-7
              "
            >
              I&apos;ll help find the interesting part.
            </p>

            {/* ================= SOCIAL ================= */}

            <div className="mt-8 sm:mt-10">

              <p
                className="
                  mb-4
                  text-[10px] font-black uppercase
                  tracking-[0.2em]
                  text-[#FFFDF7]/40
                  sm:text-xs
                "
              >
                OR FIND ME HERE
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3">

                <a
                  href="https://www.linkedin.com/in/pooja-u-joshi-028861280"
                  target="_blank"
                  className="
                    rounded-full
                    border border-[#FFFDF7]/20
                    px-4 py-2.5
                    text-xs font-bold
                    transition
                    hover:border-[#FFC928]
                    hover:bg-[#FFC928]
                    hover:text-[#151515]
                    sm:px-5 sm:py-3 sm:text-sm
                  "
                >
                  LinkedIn ↗
                </a>

                <a
                  href="mailto:poojaujoshi2@gmail.com"
                  className="
                    rounded-full
                    border border-[#FFFDF7]/20
                    px-4 py-2.5
                    text-xs font-bold
                    transition
                    hover:border-[#FFC928]
                    hover:bg-[#FFC928]
                    hover:text-[#151515]
                    sm:px-5 sm:py-3 sm:text-sm
                  "
                >
                  Email ↗
                </a>

              </div>

            </div>

          </div>

          {/* ================= FORM ================= */}

          <div className="relative">

            {/* Yellow offset */}
            <div
              className="
                absolute inset-0
                translate-x-2 translate-y-2
                rounded-[1.5rem]
                bg-[#FFC928]
                sm:translate-x-3 sm:translate-y-3
                sm:rounded-3xl
              "
            />

            <form
             onSubmit={handleSubmit}
              className="
                relative
                rounded-[1.5rem]
                bg-[#FFFDF7]
                p-5
                text-[#151515]
                sm:rounded-3xl sm:p-7
                md:p-10
              "
            >

              {/* ================= NAME ================= */}

              <div className="mb-5 sm:mb-6">

                <label
                  className="
                    mb-1.5 block
                    text-[9px] font-black uppercase
                    tracking-[0.12em]
                    text-[#151515]/50
                    sm:text-xs
                  "
                >
                  Name
                </label>

                <input
                  type="text"
                  placeholder="What should I call you?"
                   name="name"
                    value={formData.name}
                    onChange={handleChange}
                  className="
                    w-full
                    border-b-2 border-[#151515]/15
                    bg-transparent
                    px-0 py-2.5
                    text-sm
                    outline-none
                    placeholder:text-[#151515]/30
                    focus:border-[#FFC928]
                    sm:py-3 sm:text-base
                    md:text-lg
                  "
                />

              </div>

              {/* ================= EMAIL ================= */}

              <div className="mb-5 sm:mb-6">

                <label
                  className="
                    mb-1.5 block
                    text-[9px] font-black uppercase
                    tracking-[0.12em]
                    text-[#151515]/50
                    sm:text-xs
                  "
                >
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Where can I find you?"
                   name="email"
                    value={formData.email}
                    onChange={handleChange}
                  className="
                    w-full
                    border-b-2 border-[#151515]/15
                    bg-transparent
                    px-0 py-2.5
                    text-sm
                    outline-none
                    placeholder:text-[#151515]/30
                    focus:border-[#FFC928]
                    sm:py-3 sm:text-base
                    md:text-lg
                  "
                />

              </div>

              {/* ================= COMPANY ================= */}

              <div className="mb-5 sm:mb-6">

                <label
                  className="
                    mb-1.5 block
                    text-[9px] font-black uppercase
                    tracking-[0.12em]
                    text-[#151515]/50
                    sm:text-xs
                  "
                >
                  Company / Startup
                </label>

                <input
                  type="text"
                  placeholder="Optional. What are you building?"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="
                    w-full
                    border-b-2 border-[#151515]/15
                    bg-transparent
                    px-0 py-2.5
                    text-sm
                    outline-none
                    placeholder:text-[#151515]/30
                    focus:border-[#FFC928]
                    sm:py-3 sm:text-base
                    md:text-lg
                  "
                />

              </div>

              {/* ================= MESSAGE ================= */}

              <div className="mb-7 sm:mb-8">

                <label
                  className="
                    mb-1.5 block
                    text-[9px] font-black uppercase
                    tracking-[0.12em]
                    text-[#151515]/50
                    sm:text-xs
                  "
                >
                  Your story
                </label>

                <textarea
                  rows="4"
                  placeholder="Tell me the messy version. That's usually where the good story is."
                  name="story"
                    value={formData.story}
                    onChange={handleChange}
                  className="
                    w-full
                    resize-none
                    border-b-2 border-[#151515]/15
                    bg-transparent
                    px-0 py-2.5
                    text-sm
                    leading-6
                    outline-none
                    placeholder:text-[#151515]/30
                    focus:border-[#FFC928]
                    sm:text-base
                    md:text-lg
                  "
                />

              </div>

              {/* ================= CTA ================= */}

              <button
                type="submit"
                className="
                  group
                  flex w-full
                  items-center justify-between
                  rounded-full
                  bg-[#FFC928]
                  px-5 py-3.5
                  text-xs font-black
                  transition
                  hover:-translate-y-1
                  hover:bg-[#FF8A3D]
                  sm:px-6 sm:py-4 sm:text-sm
                  md:text-base
                "
              >
                LET&apos;S FIND IT

                <span
                  className="
                    text-lg
                    transition-transform
                    group-hover:translate-x-1
                    sm:text-xl
                  "
                >
                  →
                </span>

              </button>

            </form>

          </div>

        </div>

        {/* ================= BOTTOM CTA ================= */}

        <div
          className="
            mt-16
            border-t border-[#FFFDF7]/15
            pt-8
            sm:mt-20 sm:pt-10
            md:mt-24
          "
        >

          <div
            className="
              flex flex-col gap-6
              md:flex-row
              md:items-end
              md:justify-between
              md:gap-8
            "
          >

            <div>

              <p
                className="
                  text-xl font-black
                  leading-tight
                  sm:text-2xl
                  md:text-3xl
                "
              >
                Founder stories → actual posts.
              </p>

              <p
                className="
                  mt-2
                  max-w-xs
                  text-[10px]
                  leading-5
                  text-[#FFFDF7]/40
                  sm:text-sm sm:leading-normal
                "
              >
                currently accepting stories → probably will
                continue yapping
              </p>

            </div>

            <p
              className="
                text-xs font-bold
                text-[#FFFDF7]/40
                sm:text-sm
              "
            >
              Still yapping.
            </p>

          </div>

          {/* ================= FOOTER ================= */}

          <div
            className="
              mt-8
              flex flex-col gap-4
              border-t border-[#FFFDF7]/10
              pt-5
              text-[10px]
              text-[#FFFDF7]/40
              sm:mt-12 sm:gap-5 sm:pt-6 sm:text-sm
              md:flex-row md:items-center md:justify-between
            "
          >

            <p>POO</p>

            <div className="flex gap-5 sm:gap-6">

              <a
                href="https://www.linkedin.com/in/pooja-u-joshi-028861280"
                target="_blank"
                className="transition hover:text-[#FFC928]"
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:poojaujoshi2@gmail.com"
                className="transition hover:text-[#FFC928]"
              >
                Email ↗
              </a>

            </div>

            <p>
              © 2026 Poo. Built, designed &amp; written by me.
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact