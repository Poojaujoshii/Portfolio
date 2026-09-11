function BeyondWriting() {
  return (
    <section
      id="beyond-writing"
      className="
        relative
        overflow-hidden
        bg-[#FFFDF7]
        px-6
        py-20
        text-[#151515]
        sm:px-8
        md:px-12
        md:py-32
        lg:px-20
      "
    >

      {/* =========================
          DECORATIVE SHAPES
      ========================== */}

      {/* Yellow circle */}
      <div
        className="
          absolute
          -left-20
          top-16
          h-28
          w-28
          rounded-full
          bg-[#FFD21F]
          sm:h-36
          sm:w-36
          md:-left-16
          md:top-24
          md:h-44
          md:w-44
        "
      />

      {/* Sparkle */}
      <div
        className="
          absolute
          right-6
          top-12
          text-4xl
          text-[#3A2418]
          sm:right-10
          md:right-12
          md:top-16
          md:text-7xl
        "
      >
        ✦
      </div>

      {/* Bottom outlined shape */}
      <div
        className="
          absolute
          -bottom-10
          -right-20
          h-32
          w-32
          rotate-12
          rounded-[2rem]
          border-[3px]
          border-[#FFD21F]
          sm:h-40
          sm:w-40
          md:bottom-16
          md:right-[-30px]
          md:h-56
          md:w-56
        "
      />

      {/* =========================
          MAIN CONTENT
      ========================== */}

      <div className="relative mx-auto max-w-7xl">

        {/* =========================
            SECTION LABEL
        ========================== */}

        <div className="mb-6 flex items-center gap-3">

          <span className="h-2 w-2 shrink-0 rounded-full bg-[#FFD21F]" />

          <p
            className="
              text-xs
              font-black
              uppercase
              tracking-[0.16em]
              text-[#3A2418]
              sm:text-sm
              sm:tracking-[0.2em]
            "
          >
            Beyond writing
          </p>

        </div>


        {/* =========================
            HEADING
        ========================== */}

        <div className="max-w-4xl">

          <h2
            className="
              text-[48px]
              font-black
              leading-[0.92]
              tracking-[-0.045em]
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >
            Yes, I do
            <br />
            <span className="text-[#FFD21F]">
              other stuff too.
            </span>
          </h2>

          <p
            className="
              mt-7
              max-w-2xl
              text-base
              leading-relaxed
              text-[#3A2418]
              sm:text-lg
              md:mt-8
              md:text-xl
            "
          >
            Writing is what brought you here. But understanding products,
            designing them, and building them has a lot to do with how I think
            about stories too.
          </p>

        </div>


        {/* =========================
            CARDS
        ========================== */}

        <div
          className="
            mt-12
            grid
            gap-5
            sm:mt-14
            md:mt-16
            md:grid-cols-2
          "
        >

          {/* =========================
              DESIGN
          ========================== */}

          <div
            className="
              group
              relative
              min-h-[300px]
              overflow-hidden
              rounded-[1.75rem]
              border-2
              border-[#3A2418]
              bg-[#FFF1A8]
              p-6
              transition-transform
              duration-300
              hover:-translate-y-2
              sm:min-h-[320px]
              sm:p-8
              md:min-h-[330px]
              md:rounded-[2rem]
              md:p-10
            "
          >

            {/* Top */}

            <div className="flex items-start justify-between">

              <span className="text-xs font-black text-[#3A2418] sm:text-sm">
                01
              </span>

              <span
                className="
                  text-3xl
                  transition-transform
                  duration-300
                  group-hover:rotate-12
                  sm:text-4xl
                "
              >
                ↗
              </span>

            </div>


            {/* Content */}

            <div className="mt-16 sm:mt-20">

              <p
                className="
                  mb-2
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.15em]
                  text-[#3A2418]
                  sm:mb-3
                  sm:text-sm
                "
              >
                UX / UI
              </p>

              <h3
                className="
                  text-4xl
                  font-black
                  leading-none
                  sm:text-5xl
                "
              >
                Design
              </h3>

              <p
                className="
                  mt-4
                  max-w-md
                  text-sm
                  leading-relaxed
                  text-[#3A2418]
                  sm:mt-5
                  sm:text-base
                  md:text-lg
                "
              >
                I like figuring out how products should work before making
                them look pretty.
              </p>

            </div>


            {/* Decorative circle */}

            <div
              className="
                absolute
                bottom-6
                right-6
                h-12
                w-12
                rounded-full
                border-2
                border-[#3A2418]
                transition-transform
                duration-300
                group-hover:scale-125
                sm:bottom-7
                sm:right-8
                sm:h-16
                sm:w-16
              "
            />

          </div>


          {/* =========================
              DEVELOPMENT
          ========================== */}

          <div
            className="
              group
              relative
              min-h-[300px]
              overflow-hidden
              rounded-[1.75rem]
              border-2
              border-[#FFFDF7]
              bg-[#151515]
              p-6
              text-[#FFFDF7]
              transition-transform
              duration-300
              hover:-translate-y-2
              sm:min-h-[320px]
              sm:p-8
              md:min-h-[330px]
              md:rounded-[2rem]
              md:p-10
            "
          >

            {/* Top */}

            <div className="flex items-start justify-between">

              <span className="text-xs font-black text-[#FFD21F] sm:text-sm">
                02
              </span>

              <span
                className="
                  text-3xl
                  text-[#FFD21F]
                  transition-transform
                  duration-300
                  group-hover:rotate-12
                  sm:text-4xl
                "
              >
                ↗
              </span>

            </div>


            {/* Content */}

            <div className="mt-16 sm:mt-20">

              <p
                className="
                  mb-2
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.15em]
                  text-[#FFD21F]
                  sm:mb-3
                  sm:text-sm
                "
              >
                MERN + .NET
              </p>

              <h3
                className="
                  text-4xl
                  font-black
                  leading-none
                  sm:text-5xl
                "
              >
                Development
              </h3>

              <p
                className="
                  mt-4
                  max-w-md
                  text-sm
                  leading-relaxed
                  text-[#FFF1A8]
                  sm:mt-5
                  sm:text-base
                  md:text-lg
                "
              >
                MongoDB. Express. React. Node. .NET. SQL. Angular. Because apparently one
                tech stack wasn't enough.
              </p>

            </div>


            {/* Code decoration */}

            <div
              className="
                absolute
                bottom-5
                right-6
                font-mono
                text-4xl
                font-black
                text-[#3A2418]
                sm:bottom-7
                sm:right-8
                sm:text-5xl
              "
            >
              {"</>"}
            </div>

          </div>


          {/* =========================
              PRODUCT THINKING
          ========================== */}

          <div
            className="
              group
              relative
              min-h-[310px]
              overflow-hidden
              rounded-[1.75rem]
              border-2
              border-[#3A2418]
              bg-[#3A2418]
              p-6
              text-[#FFFDF7]
              transition-transform
              duration-300
              hover:-translate-y-2
              sm:min-h-[340px]
              sm:p-8
              md:col-span-2
              md:min-h-[360px]
              md:rounded-[2rem]
              md:p-10
            "
          >

            {/* Top */}

            <div className="flex items-start justify-between">

              <span className="text-xs font-black text-[#FFD21F] sm:text-sm">
                03
              </span>

              <span
                className="
                  text-3xl
                  text-[#FFD21F]
                  transition-transform
                  duration-300
                  group-hover:rotate-12
                  sm:text-4xl
                "
              >
                ↗
              </span>

            </div>


            {/* Content */}

            <div
              className="
                mt-16
                max-w-4xl
                sm:mt-20
              "
            >

              <p
                className="
                  mb-2
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.15em]
                  text-[#FFD21F]
                  sm:mb-3
                  sm:text-sm
                "
              >
                The thing connecting all of it
              </p>

              <h3
                className="
                  text-4xl
                  font-black
                  leading-[0.95]
                  sm:text-5xl
                  md:text-6xl
                "
              >
                Product thinking.
              </h3>

              <p
                className="
                  mt-5
                  max-w-2xl
                  text-base
                  leading-relaxed
                  text-[#FFF1A8]
                  sm:mt-6
                  sm:text-lg
                  md:text-xl
                "
              >
                I like understanding what people are actually trying to do —
                not just what they say they want.
              </p>

            </div>


            {/* Bottom statement */}

            <div
              className="
                absolute
                bottom-6
                left-6
                max-w-[220px]
                text-xs
                font-black
                uppercase
                tracking-wider
                text-[#FFF1A8]
                sm:bottom-8
                sm:left-auto
                sm:right-8
                sm:max-w-xs
                sm:text-right
              "
            >
              Understand the problem.
              <br />
              Then build the right thing.
            </div>


            {/* Top-right circle */}

            <div
              className="
                absolute
                -right-12
                -top-12
                h-32
                w-32
                rounded-full
                border-[3px]
                border-[#FFD21F]
                transition-transform
                duration-500
                group-hover:scale-110
                sm:h-40
                sm:w-40
              "
            />


            {/* Bottom yellow circle */}

            <div
              className="
                absolute
                -bottom-16
                left-[35%]
                h-28
                w-28
                rounded-full
                bg-[#FFD21F]
                opacity-90
                transition-transform
                duration-500
                group-hover:translate-y-3
                sm:h-32
                sm:w-32
              "
            />

          </div>

        </div>


        {/* =========================
            CLOSING LINE
        ========================== */}

        <div
          className="
            mt-14
            flex
            flex-col
            gap-7
            border-t-2
            border-[#3A2418]/20
            pt-7
            sm:mt-16
            sm:pt-8
            md:flex-row
            md:items-end
            md:justify-between
          "
        >

          <p
            className="
              max-w-2xl
              text-2xl
              font-black
              leading-tight
              sm:text-3xl
            "
          >
            Different skills.
            <br />
            <span className="text-[#FFD21F]">
              Same obsession: understanding things.
            </span>
          </p>


          <p
            className="
              max-w-sm
              text-sm
              leading-relaxed
              text-[#3A2418]
              sm:text-base
            "
          >
            And yes, I'm still learning. A lot. Because “I know everything I
            need to know” sounds like a pretty boring place to stop.
          </p>

        </div>

      </div>

    </section>
  )
}

export default BeyondWriting