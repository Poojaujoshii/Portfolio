function StoryStrip() {
  return (
    <section className="relative overflow-hidden border-y-[3px] border-[#171512] bg-[#FFC928]">

      {/* =========================
          DECORATIVE BACKGROUND
      ========================== */}

      {/* Orange blob */}
      <div
        className="
          absolute
          -left-10
          top-1/2
          h-20
          w-20
          -translate-y-1/2
          rotate-[18deg]
          rounded-[40%_60%_55%_45%]
          bg-[#FF8A3D]

          sm:-left-8
          sm:h-24
          sm:w-24
        "
      />

      {/* Dots */}
      <div
        className="
          absolute
          right-8
          top-4
          h-2.5
          w-2.5
          rounded-full
          bg-[#171512]

          sm:right-12
          sm:top-5
          sm:h-3
          sm:w-3
        "
      />

      <div
        className="
          absolute
          bottom-5
          right-12
          h-2
          w-2
          rounded-full
          bg-[#FF8A3D]

          sm:right-20
          sm:bottom-6
        "
      />

      {/* Squiggle */}
      <svg
        className="
          absolute
          -right-8
          bottom-4
          w-24
          rotate-[-8deg]

          sm:-right-5
          sm:w-28

          lg:right-[-10px]
          lg:top-1/2
          lg:bottom-auto
          lg:w-32
          lg:-translate-y-1/2
        "
        viewBox="0 0 130 30"
        fill="none"
      >
        <path
          d="M3 15C13 28 23 2 33 15C43 28 53 2 63 15C73 28 83 2 93 15C103 28 113 5 127 13"
          stroke="#171512"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>


      {/* =========================
          CONTENT
      ========================== */}

      <div
        className="
          relative
          mx-auto
          flex
          max-w-[1440px]
          flex-col
          gap-4
          px-6
          py-7

          sm:px-8
          sm:py-8

          lg:flex-row
          lg:items-center
          lg:gap-16
          lg:px-16
          lg:py-12
        "
      >

        {/* Eyebrow */}
        <div
          className="
            flex
            shrink-0
            items-center
            gap-2

            sm:gap-3
          "
        >
          <span
            className="
              text-xl
              font-black
              tracking-[-0.8px]
              text-[#171512]

              sm:text-2xl
              sm:tracking-[-1px]
            "
          >
            THE THING IS...
          </span>

          <span className="text-lg text-[#FF8A3D] sm:text-xl">
            ✦
          </span>
        </div>


        {/* Main thought */}
        <p
          className="
            max-w-[850px]
            text-[22px]
            font-black
            leading-[1.05]
            tracking-[-0.8px]
            text-[#171512]

            sm:text-2xl
            sm:leading-tight
            sm:tracking-[-1px]

            lg:text-3xl
          "
        >
          Founders already have stories.

          <br className="hidden lg:block" />

          <span className="relative inline-block">
            They just don't always realise

            <span className="relative ml-1 inline-block sm:ml-2">
              they're sitting on them.

              {/* Tiny underline */}
              <svg
                className="
                  absolute
                  -bottom-2
                  left-0
                  w-full
                "
                viewBox="0 0 300 8"
                fill="none"
              >
                <path
                  d="M2 4C30 8 55 0 82 4C110 8 140 0 168 4C198 8 225 0 252 4C270 6 285 2 298 4"
                  stroke="#FF8A3D"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </span>
        </p>


        {/* Arrow */}
        <div className="hidden shrink-0 rotate-[8deg] lg:block">
          <span className="text-5xl font-black text-[#171512]">
            →
          </span>
        </div>

      </div>
    </section>
  )
}

export default StoryStrip