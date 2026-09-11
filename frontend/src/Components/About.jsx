import poo from "../assets/poo.png"

function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#3A2418]
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
          DECORATIVE CIRCLE
      ========================== */}

      <div
        className="
          absolute
          -right-24
          top-10
          h-36
          w-36
          rounded-full
          border-2
          border-[#FFD21F]
          opacity-70

          sm:h-48
          sm:w-48

          md:-right-20
          md:top-16
          md:h-72
          md:w-72
          md:border-[3px]
        "
      />


      {/* =========================
          DECORATIVE YELLOW SHAPE
      ========================== */}

      <div
        className="
          absolute
          -bottom-8
          -left-10
          h-24
          w-24
          rotate-12
          rounded-[1.5rem]
          bg-[#FFD21F]

          sm:h-28
          sm:w-28

          md:bottom-10
          md:left-[-30px]
          md:h-44
          md:w-44
          md:rounded-[2rem]
        "
      />


      {/* =========================
          SPARKLE
      ========================== */}

      <div
        className="
          absolute
          bottom-14
          right-6
          text-4xl
          text-[#FFD21F]

          sm:right-10
          sm:text-5xl

          md:bottom-20
          md:right-[12%]
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
            SECTION LABEL
        ========================== */}

        <p
          className="
            mb-5
            text-xs
            font-black
            uppercase
            tracking-[0.18em]
            text-[#FFD21F]

            sm:mb-6
            sm:text-sm
          "
        >
          About
        </p>


        {/* =========================
            MAIN GRID
        ========================== */}

        <div
          className="
            grid
            min-w-0
            gap-12

            sm:gap-14

            lg:grid-cols-[1.1fr_0.9fr]
            lg:items-start
          "
        >

          {/* =========================
              LEFT — TEXT
          ========================== */}

          <div className="min-w-0">

            <h2
              className="
                max-w-4xl
                text-[2.75rem]
                font-black
                leading-[0.92]
                tracking-[-0.04em]

                sm:text-5xl

                md:text-7xl

                lg:text-8xl
              "
            >
              Okay, so
              <br />
              <span className="text-[#FFD21F]">
                who am I?
              </span>
            </h2>


            {/* Body */}

            <div
              className="
                mt-7
                max-w-2xl
                space-y-5
                text-base
                leading-relaxed
                text-[#FFF1A8]

                sm:mt-8
                sm:space-y-6
                sm:text-lg

                md:mt-10
                md:text-xl
              "
            >

              <p>
                I'm a UX/UI designer, full-stack developer, full-time learner,
                singer, and a speaker who probably talks a little more than
                necessary.
              </p>

              <p>
                I've worked across MERN and .NET, designed products, built
                them, broken them, fixed them, and learned something new from
                the process every time.
              </p>

              <p>
                I'm naturally curious, which is probably why I haven't figured
                out how to stick to just one thing.
              </p>

              <p>
                I like understanding why people use something, how it should
                work, and how to make it feel good while doing it.
              </p>

              <p>
                And somewhere between all the designing, coding, learning,
                singing, and talking, I found myself really enjoying something
                else:
              </p>


              {/* Highlighted line */}

              <p
                className="
                  text-xl
                  font-black
                  leading-tight
                  text-[#FFFDF7]

                  sm:text-2xl

                  md:text-3xl
                "
              >
                turning experiences into stories people actually want to read.
              </p>

            </div>

          </div>


          {/* =========================
              RIGHT — PHOTO
          ========================== */}

          <div
            className="
              relative
              min-w-0

              lg:pt-16
            "
          >

            {/* Photo card */}

            <div
              className="
                relative
                mx-auto
                w-[min(100%,22rem)]
                rotate-2
                rounded-[1.5rem]
                border-2
                border-[#151515]
                bg-[#FFFDF7]
                p-3
                text-[#151515]
                shadow-[8px_8px_0px_#FFD21F]
                transition-transform
                duration-300

                sm:w-[min(100%,24rem)]
                sm:rounded-[2rem]
                sm:p-5
                sm:shadow-[10px_10px_0px_#FFD21F]

                md:shadow-[12px_12px_0px_#FFD21F]

                hover:rotate-0
              "
            >

              {/* Image */}

              <div
                className="
                  aspect-[4/5]
                  overflow-hidden
                  rounded-[1.1rem]
                  bg-[#FFF1A8]

                  sm:rounded-[1.5rem]
                "
              >

                <img
                  src={poo}
                  alt="Poo"
                  className="
                    h-full
                    w-full
                    object-cover
                    object-[55%_45%]
                  "
                />

              </div>


              {/* Caption */}

              <div
                className="
                  mt-3
                  flex
                  items-end
                  justify-between
                  gap-3

                  sm:mt-5
                  sm:gap-4
                "
              >

                <div className="min-w-0">

                  <p
                    className="
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.08em]

                      sm:text-sm
                      sm:tracking-wider
                    "
                  >
                    Designer · Developer · Writer
                  </p>

                  <p
                    className="
                      mt-1
                      text-[9px]
                      text-[#3A2418]

                      sm:text-xs
                    "
                  >
                    Professional yapper, apparently.
                  </p>

                </div>

                <span
                  className="
                    shrink-0
                    text-2xl

                    sm:text-3xl
                  "
                >
                  ↗
                </span>

              </div>

            </div>


            {/* =========================
                LITTLE ANNOTATION
            ========================== */}

            <div
              className="
                absolute
                -bottom-7
                left-1/2
                z-10
                -translate-x-1/2
                -rotate-3
                whitespace-nowrap
                rounded-full
                bg-[#FFD21F]
                px-4
                py-2
                text-[10px]
                font-black
                text-[#151515]

                sm:-bottom-8
                sm:px-5
                sm:py-3
                sm:text-sm

                lg:left-0
                lg:translate-x-0
                lg:-rotate-6
              "
            >
              yes, I made this website too :)
            </div>

          </div>

        </div>


        {/* =========================
            BOTTOM SKILL STRIP
        ========================== */}

        <div
          className="
            mt-20
            border-t-2
            border-[#FFFDF7]/20
            pt-6

            sm:mt-24
            sm:pt-8

            md:mt-24
          "
        >

          <div
            className="
              flex
              flex-wrap
              gap-x-4
              gap-y-2
              text-[10px]
              font-black
              uppercase
              tracking-[0.12em]
              text-[#FFD21F]

              sm:gap-x-6
              sm:text-xs

              md:gap-x-8
              md:gap-y-3
              md:text-base
              md:tracking-[0.15em]
            "
          >

            <span>Design</span>
            <span>·</span>

            <span>Development</span>
            <span>·</span>

            <span>Writing</span>
            <span>·</span>

            <span>Product Thinking</span>
            <span>·</span>

            <span>Curious About Everything</span>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About