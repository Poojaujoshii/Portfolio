import { useState } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      {/* =========================
          DESKTOP + MOBILE NAVBAR
      ========================== */}

      <nav
        className="
          relative z-50
          h-[92px] sm:h-[105px] lg:h-[115px]
          overflow-hidden
          border-t-[3px] border-[#171512]
          border-b border-[#E9DDBE]
          bg-[#FFF9E8]
        "
      >

        {/* =========================
            BACKGROUND CHAOS
        ========================== */}

        {/* Big soft yellow blob */}
        <div
          className="
            absolute
            -left-20 -top-32
            h-72 w-96
            rotate-[-8deg]
            rounded-[45%_55%_60%_35%]
            bg-[#FFE39A]
          "
        />

        {/* Orange blob */}
        <div
          className="
            absolute
            right-[-35px] top-[-30px]
            h-28 w-36
            rotate-[18deg]
            rounded-[60%_40%_45%_55%]
            bg-[#FF8A3D]
          "
        />

        {/* Tiny yellow circle */}
        <div className="absolute left-[28%] top-5 h-3 w-3 rounded-full bg-[#FFC928]" />

        {/* Floating orange dots */}
        <div className="absolute right-[19%] top-7 flex gap-2">
          <span className="h-2 w-2 rounded-full bg-[#FF8A3D]" />
          <span className="mt-3 h-1.5 w-1.5 rounded-full bg-[#FFC928]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#FF8A3D]" />
        </div>


        {/* =========================
            NAV CONTENT
        ========================== */}

        <div
          className="
            relative z-10
            mx-auto
            flex h-full
            max-w-[1440px]
            items-center
            justify-between
            px-5 sm:px-8 lg:px-16
          "
        >

          {/* =========================
              LOGO
          ========================== */}

          <a
            href="/"
            onClick={closeMenu}
            className="group relative inline-flex items-center"
          >

            {/* playful rays */}
            <div className="absolute -left-8 -top-7 hidden sm:block">

              <span className="absolute left-0 top-3 h-[5px] w-7 rotate-[42deg] rounded-full bg-[#FFC928]" />

              <span className="absolute left-7 top-0 h-7 w-[5px] rotate-[8deg] rounded-full bg-[#FFC928]" />

              <span className="absolute -left-3 top-9 h-[5px] w-6 rotate-[-8deg] rounded-full bg-[#FFC928]" />

            </div>

            {/* actual logo */}
            <span
              className="
                relative
                text-[38px]
                sm:text-[46px]
                lg:text-[52px]
                font-black
                leading-none
                tracking-[-4px]
                lg:tracking-[-5px]
                text-[#171512]
                transition-transform
                duration-300
                group-hover:rotate-[-2deg]
                group-hover:scale-[1.03]
              "
            >
              POO.
            </span>

            {/* orange punctuation dot */}
            <span
              className="
                absolute
                -right-6
                bottom-0
                h-3
                w-3
                rounded-full
                bg-[#FF8A3D]
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />

            {/* squiggle */}
            <svg
              className="
                absolute
                -bottom-6
                left-[55px]
                sm:left-[75px]
                w-[62px]
                sm:w-[82px]
                rotate-[-4deg]
              "
              viewBox="0 0 90 14"
              fill="none"
            >
              <path
                d="M2 7C10 13 17 1 25 7C33 13 40 1 48 7C56 13 64 1 72 7C79 12 84 4 88 6"
                stroke="#FFC928"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>

            {/* hi */}
            <span
              className="
                absolute
                -right-12
                -top-5
                rotate-[10deg]
                text-[11px]
                font-bold
                text-[#FF8A3D]
                opacity-0
                transition-all
                duration-300
                group-hover:translate-y-[-3px]
                group-hover:opacity-100
              "
            >
              hi :)
            </span>

          </a>


          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}

          <div className="hidden lg:flex items-center gap-9">

            {/* WORK */}
            <a
              href="#work"
              className="
                group relative
                text-[15px]
                font-black
                tracking-[-0.4px]
                text-[#171512]
              "
            >
              WORK

              <svg
                className="
                  absolute
                  -bottom-4
                  left-[-4px]
                  w-[70px]
                  transition-transform
                  duration-200
                  group-hover:rotate-[-3deg]
                "
                viewBox="0 0 70 10"
                fill="none"
              >
                <path
                  d="M2 5C10 10 18 0 26 5C34 10 42 0 50 5C58 10 64 2 68 5"
                  stroke="#FFC928"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </a>


            {/* HOW I THINK */}
            <a
              href="#how-i-think"
              className="
                group relative
                text-[15px]
                font-black
                tracking-[-0.4px]
                text-[#171512]
                transition-transform
                duration-200
                hover:-translate-y-1
              "
            >
              HOW I THINK

              <span
                className="
                  absolute
                  -right-3
                  -top-3
                  text-[10px]
                  text-[#FF8A3D]
                  opacity-0
                  transition-opacity
                  group-hover:opacity-100
                "
              >
                ✦
              </span>
            </a>


            {/* ABOUT */}
            <a
              href="#about"
              className="
                group relative
                text-[15px]
                font-black
                tracking-[-0.4px]
                text-[#171512]
                transition-transform
                duration-200
                hover:translate-y-[-2px]
              "
            >
              ABOUT

              <span
                className="
                  absolute
                  -right-4
                  bottom-0
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#FF8A3D]
                  opacity-0
                  transition-all
                  group-hover:translate-x-2
                  group-hover:opacity-100
                "
              />
            </a>


            {/* CTA */}
            <a
              href="#contact"
              className="
                group relative
                ml-3
                rounded-[30%]
                bg-[#FFC928]
                px-8
                py-4
                text-[15px]
                font-black
                tracking-[-0.3px]
                text-[#171512]
                shadow-[0_4px_0_#171512]
                transition-all
                duration-200
                hover:-translate-y-1
                hover:rotate-[-1deg]
                hover:shadow-[0_7px_0_#171512]
              "
            >
              LET'S TALK →

              <span
                className="
                  absolute
                  -right-7
                  -top-6
                  text-2xl
                  text-[#FF8A3D]
                  transition-transform
                  duration-300
                  group-hover:rotate-12
                  group-hover:scale-110
                "
              >
                ✦
              </span>

              <span className="absolute -right-9 top-5 h-[3px] w-5 rotate-[65deg] rounded-full bg-[#171512]" />

              <span className="absolute -right-8 top-11 h-[3px] w-4 rotate-[-25deg] rounded-full bg-[#171512]" />

              <span className="absolute -left-3 -top-2 h-2 w-2 rounded-full bg-[#FF8A3D]" />

            </a>

          </div>


          {/* =========================
              MOBILE HAMBURGER
          ========================== */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="
              relative z-[70]
              flex lg:hidden
              h-[52px]
              w-[52px]
              items-center
              justify-center
              rounded-full
              border-[2px]
              border-[#171512]
              bg-[#FFC928]
              shadow-[0_4px_0_#171512]
              transition-all
              duration-200
              hover:-translate-y-1
              active:translate-y-[2px]
              active:shadow-[0_2px_0_#171512]
            "
          >

            {menuOpen ? (
              /* X */
              <span className="relative block h-6 w-6">

                <span
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[3px]
                    w-7
                    -translate-x-1/2
                    -translate-y-1/2
                    rotate-45
                    rounded-full
                    bg-[#171512]
                  "
                />

                <span
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[3px]
                    w-7
                    -translate-x-1/2
                    -translate-y-1/2
                    -rotate-45
                    rounded-full
                    bg-[#171512]
                  "
                />

              </span>
            ) : (
              /* Hamburger */
              <span className="flex flex-col gap-[5px]">

                <span className="h-[3px] w-6 rounded-full bg-[#171512]" />

                <span className="h-[3px] w-6 rounded-full bg-[#171512]" />

                <span className="h-[3px] w-6 rounded-full bg-[#171512]" />

              </span>
            )}

          </button>

        </div>


        {/* =========================
            BOTTOM NOTE
        ========================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-[-18px]
            left-[47%]
            hidden lg:block
            rotate-[-3deg]
            text-[10px]
            font-bold
            tracking-wider
            text-[#B89B54]
          "
        >
          currently yapping →
        </div>

      </nav>


      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-[60]
          lg:hidden
          bg-[#FFF9E8]
          transition-all
          duration-300
          ${
            menuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }
        `}
      >

        {/* =========================
            MOBILE MENU CHAOS
        ========================== */}

        {/* yellow blob */}
        <div
          className="
            absolute
            -left-20
            -top-20
            h-52
            w-80
            rotate-[-7deg]
            rounded-[50%_50%_60%_35%]
            bg-[#FFE39A]
          "
        />

        {/* orange blob */}
        <div
          className="
            absolute
            -right-16
            -top-16
            h-48
            w-64
            rounded-full
            bg-[#FF8A3D]
          "
        />

        {/* little dots */}
        <div className="absolute left-[28%] top-8 h-3 w-3 rounded-full bg-[#FFC928]" />

        <div className="absolute right-[20%] top-8 h-2 w-2 rounded-full bg-[#FF8A3D]" />

        <div className="absolute right-[17%] top-14 h-1.5 w-1.5 rounded-full bg-[#FFC928]" />


        {/* =========================
            MENU CONTENT
        ========================== */}

        <div className="relative flex h-full flex-col px-5 pt-[125px]">

          {/* heading */}
          <div className="mb-6 flex items-center justify-between">

            <p
              className="
                text-[12px]
                font-black
                tracking-[2px]
                text-[#FF8A3D]
              "
            >
              WHERE DO YOU WANNA GO?
            </p>

            <span className="text-xl text-[#FFC928]">
              ✦
            </span>

          </div>


          {/* =========================
              MENU LINKS
          ========================== */}

          <div className="flex flex-col gap-4">

            {/* WORK */}
            <a
              href="#work"
              onClick={closeMenu}
              className="
                group
                flex
                h-[63px]
                items-center
                justify-between
                rounded-[17px]
                border-[2px]
                border-[#171512]
                bg-white
                px-5
                text-[18px]
                font-black
                text-[#171512]
                shadow-[0_2px_0_#171512]
                transition-all
                duration-200
                active:translate-y-[2px]
              "
            >
              WORK

              <span className="text-[#FFC928] transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>


            {/* HOW I THINK */}
            <a
              href="#how-i-think"
              onClick={closeMenu}
              className="
                group
                flex
                h-[63px]
                items-center
                justify-between
                rounded-[17px]
                border-[2px]
                border-[#171512]
                bg-white
                px-5
                text-[18px]
                font-black
                text-[#171512]
                shadow-[0_2px_0_#171512]
                transition-all
                duration-200
                active:translate-y-[2px]
              "
            >
              HOW I THINK

              <span className="text-[#FF8A3D] transition-transform group-hover:rotate-12">
                ✦
              </span>
            </a>


            {/* ABOUT */}
            <a
              href="#about"
              onClick={closeMenu}
              className="
                group
                flex
                h-[63px]
                items-center
                justify-between
                rounded-[17px]
                border-[2px]
                border-[#171512]
                bg-white
                px-5
                text-[18px]
                font-black
                text-[#171512]
                shadow-[0_2px_0_#171512]
                transition-all
                duration-200
                active:translate-y-[2px]
              "
            >
              ABOUT

              <span className="text-[#FFC928] transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>


            {/* LET'S TALK */}
            <a
              href="#contact"
              onClick={closeMenu}
              className="
                group
                mt-1
                flex
                h-[63px]
                items-center
                justify-between
                rounded-[17px]
                border-[2px]
                border-[#171512]
                bg-[#FFC928]
                px-5
                text-[18px]
                font-black
                text-[#171512]
                shadow-[0_5px_0_#171512]
                transition-all
                duration-200
                active:translate-y-[3px]
                active:shadow-[0_2px_0_#171512]
              "
            >
              LET'S TALK

              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

          </div>


          {/* =========================
              BOTTOM NOTE
          ========================== */}

          <div className="mt-auto pb-8 text-center">

            <p
              className="
                rotate-[-2deg]
                text-[10px]
                font-bold
                tracking-[1.5px]
                text-[#B89B54]
              "
            >
              currently yapping → probably will continue
            </p>

          </div>

        </div>

      </div>
    </>
  )
}

export default Navbar