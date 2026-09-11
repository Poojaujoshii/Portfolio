function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#151515] text-[#FFFDF7]"
    >
      {/* Decorative shapes */}

      <div className="absolute -left-20 top-20 h-48 w-48 rounded-full bg-[#FFD21F] md:h-64 md:w-64" />

      <div className="absolute right-[-70px] top-[-80px] h-64 w-64 rotate-12 rounded-[3rem] border-[3px] border-[#FFD21F] md:h-80 md:w-80" />

      <div className="absolute bottom-24 right-[12%] text-6xl text-[#FFD21F] md:text-8xl">
        ✦
      </div>

      <div className="absolute bottom-[-70px] left-[45%] h-40 w-40 rounded-full border-[3px] border-[#3A2418]" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40 lg:px-20">

        {/* Eyebrow */}

        <p className="mb-8 text-sm font-black uppercase tracking-[0.2em] text-[#FFD21F]">
          Got a story?
        </p>

        {/* Main heading */}

        <h2 className="max-w-6xl text-6xl font-black leading-[0.88] tracking-tight md:text-8xl lg:text-[9rem]">
          You probably have
          <br />
          more content
          <br />
          <span className="text-[#FFD21F]">than you think.</span>
        </h2>

        {/* Supporting text */}

        <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          <p className="max-w-xl text-xl leading-relaxed text-[#FFF1A8] md:text-2xl">
            You just haven't found the post yet.
          </p>

          <a
            href="mailto:your@email.com"
            className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#FFD21F] px-7 py-4 text-sm font-black uppercase tracking-wide text-[#151515] transition-all duration-300 hover:-translate-y-1 hover:pr-9"
          >
            Let's find it

            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

        {/* Divider */}

        <div className="mt-28 border-t border-[#FFFDF7]/20 pt-8">

          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

            {/* Brand */}

            <div>
              <p className="text-4xl font-black tracking-tight">
                POO<span className="text-[#FFD21F]">.</span>
              </p>

              <p className="mt-3 text-sm text-[#FFF1A8]">
                Founder stories → actual posts.
              </p>
            </div>

            {/* Links */}

            <div className="flex flex-col gap-3 text-sm font-bold md:text-right">
              <a
                href="#"
                className="transition-colors hover:text-[#FFD21F]"
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:your@email.com"
                className="transition-colors hover:text-[#FFD21F]"
              >
                Email ↗
              </a>
            </div>

          </div>

          {/* Bottom footer */}

          <div className="mt-16 flex flex-col gap-3 border-t border-[#FFFDF7]/10 pt-6 text-xs text-[#FFF1A8] md:flex-row md:items-center md:justify-between">

            <p>© 2026 Poo</p>

            <p>Built, designed & written by me.</p>

            <p className="font-bold text-[#FFD21F]">
              Still yapping.
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}

export default CTA