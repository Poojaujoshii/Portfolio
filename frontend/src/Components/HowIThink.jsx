function HowIThink() {
  const steps = [
    {
      number: "01",
      title: "What happened?",
      text: "Start with the mess.",
      note: "Context first. What actually happened?",
    },
    {
      number: "02",
      title: "Plot twist.",
      text: "Question the obvious answer.",
      note: "This is usually where the interesting stuff starts.",
    },
    {
      number: "03",
      title: "What's really going on?",
      text: "Find the actual problem.",
      note: "The obvious problem isn't always the real one.",
    },
    {
      number: "04",
      title: "The lesson.",
      text: "What changed?",
      note: "Find something useful that another founder can take away.",
    },
    {
      number: "05",
      title: "The post.",
      text: "Turn the thinking into something that sounds like the founder.",
      note: "No corporate robot voice. Promise.",
    },
  ]

  return (
    <section
      id="how-i-think"
      className="
        relative
        overflow-hidden
        bg-[#151515]
        px-5
        py-16
        text-[#FFFDF7]

        sm:px-6
        sm:py-20

        md:px-12
        md:py-32

        lg:px-20
      "
    >

      {/* =========================
          DECORATIVE SHAPES
      ========================== */}

      {/* Outline shape */}
      <div
        className="
          absolute
          -right-20
          top-16
          h-32
          w-32
          rotate-12
          rounded-[2rem]
          border-2
          border-[#FFD21F]
          opacity-60

          sm:h-40
          sm:w-40

          md:-right-16
          md:top-20
          md:h-56
          md:w-56
          md:opacity-80
        "
      />

      {/* Yellow circle */}
      <div
        className="
          absolute
          -bottom-5
          -left-8
          h-16
          w-16
          rounded-full
          bg-[#FFD21F]
          opacity-90

          sm:h-24
          sm:w-24

          md:bottom-16
          md:left-[-40px]
          md:h-32
          md:w-32
        "
      />

      {/* Star */}
      <div
        className="
          absolute
          bottom-10
          right-8
          text-4xl
          text-[#FFD21F]

          sm:right-12
          sm:text-5xl

          md:bottom-20
          md:right-[18%]
          md:text-7xl
        "
      >
        ✦
      </div>


      {/* =========================
          MAIN CONTENT
      ========================== */}

      <div className="relative mx-auto w-full max-w-7xl min-w-0">

        {/* =========================
            HEADER
        ========================== */}

        <div
          className="
            mb-12
            max-w-4xl

            sm:mb-16

            md:mb-20
          "
        >

          <p
            className="
              mb-4
              text-xs
              font-black
              uppercase
              tracking-[0.18em]
              text-[#FFD21F]

              sm:mb-5
              sm:text-sm
            "
          >
            How I think
          </p>

          <h2
            className="
              text-[2.65rem]
              font-black
              leading-[0.92]
              tracking-[-0.04em]

              sm:text-5xl

              md:text-7xl

              lg:text-8xl
            "
          >
            I don't just write
            <br />
            the post.
            <br />
            <span className="text-[#FFD21F]">
              I find the story first.
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-relaxed
              text-[#FFF1A8]

              sm:mt-8
              sm:text-lg

              md:text-xl
            "
          >
            A founder gives me an experience. Something went wrong. A decision
            backfired. A number looked great until they looked closer.
            That's where I start digging.
          </p>

        </div>


        {/* =========================
            STEPS
        ========================== */}

        <div className="relative min-w-0">

          {/* Connecting line — desktop only */}
          <div
            className="
              absolute
              left-5
              top-6
              hidden
              h-[calc(100%-3rem)]
              w-px
              bg-[#FFD21F]/40

              md:block
            "
          />

          <div
            className="
              space-y-5

              sm:space-y-6

              md:space-y-10
            "
          >

            {steps.map((step) => (
              <div
                key={step.number}
                className="
                  group
                  relative
                  grid
                  w-full
                  min-w-0
                  gap-5
                  rounded-[1.5rem]
                  border-2
                  border-[#FFFDF7]/20
                  bg-[#3A2418]
                  p-5
                  transition-all
                  duration-300

                  sm:rounded-[1.75rem]
                  sm:p-6

                  md:grid-cols-[90px_1fr_260px]
                  md:items-center
                  md:gap-6
                  md:rounded-[2rem]
                  md:p-8

                  hover:-translate-y-1
                  hover:border-[#FFD21F]
                  hover:shadow-[6px_6px_0px_#FFD21F]
                "
              >

                {/* Number */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-[#FFD21F]
                    bg-[#151515]
                    text-xs
                    font-black
                    text-[#FFD21F]

                    sm:h-12
                    sm:w-12
                    sm:text-sm
                  "
                >
                  {step.number}
                </div>


                {/* Main content */}

                <div className="min-w-0">

                  <h3
                    className="
                      break-words
                      text-2xl
                      font-black
                      leading-tight

                      sm:text-3xl

                      md:text-4xl
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      break-words
                      text-base
                      font-bold
                      leading-snug
                      text-[#FFD21F]

                      sm:text-lg
                    "
                  >
                    {step.text}
                  </p>

                </div>


                {/* Note */}

                <p
                  className="
                    min-w-0
                    break-words
                    text-sm
                    leading-relaxed
                    text-[#FFF1A8]

                    md:text-right
                  "
                >
                  {step.note}
                </p>

              </div>
            ))}

          </div>
        </div>


        {/* =========================
            BOTTOM STATEMENT
        ========================== */}

        <div
          className="
            mt-12
            flex
            min-w-0
            flex-col
            gap-6
            border-t-2
            border-[#FFFDF7]/20
            pt-8

            sm:mt-16
            sm:pt-10

            md:mt-20
            md:flex-row
            md:items-end
            md:justify-between
          "
        >

          <div className="max-w-2xl min-w-0">

            <p
              className="
                break-words
                text-xl
                font-black
                leading-tight

                sm:text-2xl

                md:text-4xl
              "
            >
              Basically, I ask annoying questions until we find the good story.
            </p>

          </div>


          {/* CTA */}

          <a
            href="#work"
            className="
              group
              inline-flex
              w-fit
              shrink-0
              items-center
              gap-3
              rounded-full
              bg-[#FFD21F]
              px-5
              py-3
              text-xs
              font-black
              uppercase
              tracking-wider
              text-[#151515]
              transition-all
              duration-300

              sm:px-6
              sm:text-sm

              hover:-translate-y-1
              hover:shadow-[5px_5px_0px_#FFFDF7]
            "
          >
            See the stories

            <span
              className="
                text-lg
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  )
}

export default HowIThink