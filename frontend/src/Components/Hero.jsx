function Hero() {
  return (
    <section
      className="
        relative
        min-h-[calc(100vh-80px)]
        overflow-hidden
        bg-[#FFF9E8]

        md:min-h-[calc(100vh-115px)]
      "
    >

      {/* =========================
          BACKGROUND SHAPES
      ========================== */}

      {/* Giant soft yellow blob */}
      <div
        className="
          absolute
          -right-32
          -top-16
          h-[280px]
          w-[280px]
          rotate-[18deg]
          rounded-[48%_52%_65%_35%]
          bg-[#FFE39A]

          sm:-right-28
          sm:-top-20
          sm:h-[340px]
          sm:w-[340px]

          md:-right-28
          md:top-[-80px]
          md:h-[430px]
          md:w-[430px]
        "
      />

      {/* Orange blob peeking from right */}
      <div
        className="
          absolute
          -bottom-24
          -right-24
          h-[190px]
          w-[260px]
          rotate-[-15deg]
          rounded-[60%_40%_30%_70%]
          bg-[#FF8A3D]

          sm:-bottom-28
          sm:-right-24
          sm:h-[230px]
          sm:w-[300px]

          md:-bottom-32
          md:-right-20
          md:h-[280px]
          md:w-[340px]
        "
      />

      {/* Yellow circle */}
      <div
        className="
          absolute
          left-[8%]
          top-[27%]
          h-3
          w-3
          rounded-full
          bg-[#FFC928]

          sm:h-4
          sm:w-4

          md:top-[24%]
          md:h-5
          md:w-5
        "
      />

      {/* Orange circle */}
      <div
        className="
          absolute
          left-[13%]
          top-[34%]
          h-2
          w-2
          rounded-full
          bg-[#FF8A3D]

          sm:h-3
          sm:w-3

          md:left-[12%]
          md:top-[31%]
        "
      />

      {/* Floating dots */}
      <div
        className="
          absolute
          right-[12%]
          top-[18%]
          flex
          gap-2

          sm:right-[18%]

          md:right-[30%]
          md:top-[17%]
          md:gap-3
        "
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#FFC928] md:h-2 md:w-2" />

        <span className="mt-3 h-2.5 w-2.5 rounded-full bg-[#FF8A3D] md:mt-4 md:h-3 md:w-3" />

        <span className="h-1.5 w-1.5 rounded-full bg-[#FFC928] md:h-2 md:w-2" />
      </div>


      {/* =========================
          MAIN CONTENT
      ========================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1440px]
          px-6
          pb-20
          pt-12

          sm:px-8
          sm:pb-24
          sm:pt-16

          md:px-8
          md:pt-20

          lg:px-16
          lg:pt-28
        "
      >

        {/* =========================
            EYEBROW
        ========================== */}

        <div
          className="
            mb-7
            flex
            flex-wrap
            items-center
            gap-3

            sm:mb-8
            sm:gap-4
          "
        >

          <span
            className="
              rounded-full
              border-2
              border-[#171512]
              px-3
              py-1.5
              text-[9px]
              font-black
              tracking-[1.2px]
              text-[#171512]

              sm:px-4
              sm:py-2
              sm:text-[11px]
              sm:tracking-[1.5px]

              md:px-4
              md:py-2
              md:text-[11px]
            "
          >
            FOUNDER-LED CONTENT
          </span>

          <span
            className="
              text-[10px]
              font-bold
              text-[#FF8A3D]

              sm:text-[12px]

              md:text-[13px]
            "
          >
            WITHOUT THE CORPORATE YAP ✦
          </span>

        </div>


        {/* =========================
            BIG HEADLINE
        ========================== */}

        <div className="relative max-w-[1050px]">

          <h1
            className="
              text-[43px]
              font-black
              leading-[0.88]
              tracking-[-0.065em]
              text-[#171512]

              sm:text-[56px]
              sm:tracking-[-0.07em]

              md:text-[clamp(64px,9vw,142px)]
              md:leading-[0.86]
              md:tracking-[-0.075em]
            "
          >
            YOU BUILD
            <br />

            <span className="relative inline-block">
              THE COMPANY.

              <svg
                className="
                  absolute
                  -bottom-3
                  left-0
                  w-[68%]
                  rotate-[-2deg]

                  sm:-bottom-3
                  sm:w-[66%]

                  md:-bottom-5
                  md:w-[65%]
                "
                viewBox="0 0 500 24"
                fill="none"
              >
                <path
                  d="M4 13C45 3 73 22 112 12C150 2 182 22 220 12C260 2 292 22 330 12C370 2 410 21 496 8"
                  stroke="#FFC928"
                  strokeWidth="9"
                  strokeLinecap="round"
                />
              </svg>
            </span>

            <br />

            <span className="text-[#FF8A3D]">
              I&apos;LL HELP YOU
            </span>

            <br />

            <span className="relative inline-block">

              YAP ABOUT IT.

              {/* tiny doodle */}
              <span
                className="
                  absolute
                  right-0
                  -top-4
                  rotate-[12deg]
                  text-xl
                  text-[#FFC928]

                  sm:-right-2
                  sm:-top-5
                  sm:text-2xl

                  md:-right-12
                  md:-top-8
                  md:text-4xl
                "
              >
                ✦
              </span>

            </span>
          </h1>


          {/* =========================
              SIDE NOTE
          ========================== */}

          <div
            className="
              absolute
              -right-5
              top-[35%]
              hidden
              w-[170px]
              rotate-[7deg]

              lg:block
            "
          >

            <svg
              viewBox="0 0 170 80"
              className="absolute -left-16 top-5 w-20"
              fill="none"
            >
              <path
                d="M165 8C120 2 85 15 60 35C42 50 27 60 5 62"
                stroke="#171512"
                strokeWidth="3"
                strokeLinecap="round"
              />

              <path
                d="M14 52L4 62L17 66"
                stroke="#171512"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="text-center text-[13px] font-black leading-tight text-[#171512]">
              yes, this is
              <br />
              basically my
              <br />
              job ✍️
            </p>

          </div>

        </div>


        {/* =========================
            DESCRIPTION + CTA
        ========================== */}

        <div
          className="
            mt-10
            flex
            flex-col
            gap-6

            sm:mt-12
            sm:gap-7

            md:mt-14
            md:gap-8

            lg:ml-[18%]
            lg:max-w-[620px]
          "
        >

          <p
            className="
              max-w-[600px]
              text-base
              font-medium
              leading-[1.55]
              text-[#171512]/75

              sm:text-lg

              md:text-lg

              lg:text-xl
            "
          >
            You&apos;re busy building, breaking, fixing, learning,
            and occasionally questioning every decision you&apos;ve
            ever made.
          </p>

          <p
            className="
              max-w-[560px]
              text-base
              font-bold
              leading-[1.5]
              text-[#171512]

              sm:text-lg

              md:text-lg

              lg:text-xl
            "
          >
            I turn those experiences into LinkedIn posts people
            actually wanna read — without making them sound like
            they were written by a content bot.
          </p>


          {/* CTA */}
          <div
            className="
              relative
              flex
              flex-wrap
              items-center
              gap-3

              sm:gap-4
            "
          >

            <a
              href="#work"
              className="
                group
                relative
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#FFC928]
                px-6
                py-4
                text-[12px]
                font-black
                text-[#171512]
                shadow-[0_4px_0_#171512]
                transition-all
                duration-200

                hover:-translate-y-1
                hover:rotate-[-1deg]
                hover:shadow-[0_8px_0_#171512]

                sm:gap-3
                sm:px-8
                sm:py-5
                sm:text-[15px]
              "
            >
              SEE WHAT I&apos;VE COOKED

              <span
                className="
                  text-base
                  transition-transform
                  duration-200
                  group-hover:translate-x-1

                  sm:text-lg
                "
              >
                →
              </span>

              {/* tiny orange dot */}
              <span
                className="
                  absolute
                  -right-2
                  -top-2
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-[#FF8A3D]

                  sm:-right-3
                  sm:h-3
                  sm:w-3
                "
              />
            </a>


            {/* little handwritten-ish note */}
            <span
              className="
                rotate-[-4deg]
                text-[10px]
                font-bold
                text-[#B18F38]

                sm:text-[11px]
              "
            >
              trust me →
            </span>

          </div>

        </div>


        {/* =========================
            BOTTOM DOODLES
        ========================== */}

        {/* Squiggle */}
        <svg
          className="
            absolute
            bottom-8
            left-[6%]
            w-20
            rotate-[8deg]

            sm:bottom-10
            sm:w-24

            md:bottom-14
            md:w-32
          "
          viewBox="0 0 130 30"
          fill="none"
        >
          <path
            d="M3 15C13 28 23 2 33 15C43 28 53 2 63 15C73 28 83 2 93 15C103 28 113 5 127 13"
            stroke="#FFC928"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>


        {/* Little cross */}
        <div
          className="
            absolute
            bottom-12
            right-[24%]
            rotate-[15deg]

            sm:right-[28%]

            md:bottom-20
            md:right-[35%]
          "
        >
          <span
            className="
              absolute
              h-6
              w-1.5
              rounded-full
              bg-[#FF8A3D]

              md:h-8
              md:w-2
            "
          />

          <span
            className="
              absolute
              h-1.5
              w-6
              rounded-full
              bg-[#FF8A3D]

              md:h-2
              md:w-8
            "
          />
        </div>


        {/* Tiny orange dots */}
        <div
          className="
            absolute
            bottom-8
            right-[10%]
            flex
            gap-1.5

            sm:right-[14%]

            md:bottom-12
            md:right-[20%]
            md:gap-2
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#FF8A3D] md:h-2 md:w-2" />

          <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#FFC928] md:mt-3 md:h-3 md:w-3" />

          <span className="h-1.5 w-1.5 rounded-full bg-[#FF8A3D] md:h-2 md:w-2" />
        </div>

      </div>

    </section>
  )
}

export default Hero