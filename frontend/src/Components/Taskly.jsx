function Taskly() {
  return (
    <div className="bg-[#FFFDF7] text-[#171512] overflow-hidden">

      {/* =========================
          HERO
      ========================== */}

      <section className="relative min-h-screen px-6 md:px-12 lg:px-24 pt-32 pb-24">

        {/* quirky background shapes */}
        <div className="absolute top-20 left-0 w-40 h-40 bg-[#FFE39A] rounded-br-[100px] -z-0" />

        <div className="absolute top-32 right-0 w-48 h-48 bg-[#FF813D] rounded-tl-[100px] rounded-bl-[80px] -z-0" />

        <div className="absolute top-28 left-[28%] text-[#FFB91F] text-4xl">
          •
        </div>

        <div className="absolute bottom-24 right-[12%] text-[#FF813D] text-5xl">
          +
        </div>

        <div className="absolute bottom-32 left-[15%] text-[#FFB91F] text-4xl">
          ~
        </div>

        <div className="relative max-w-6xl mx-auto">

          {/* eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span className="border-2 border-[#171512] rounded-full px-4 py-2 text-xs font-black tracking-wide">
              05 / SELECTED STORY
            </span>

            <span className="text-[#FF813D] text-sm font-bold">
              founder story · customer insight
            </span>
          </div>

          {/* heading */}
          <h1 className="text-[clamp(4rem,10vw,9rem)] leading-[0.82] font-black tracking-[-0.07em] max-w-5xl">
            I DID EXACTLY
            <br />
            WHAT MY
            <br />
            CUSTOMERS
            <br />

            <span className="text-[#FF813D] relative inline-block">
              ASKED.
            </span>
          </h1>

          <div className="mt-8 flex items-center gap-5">
            <div className="h-[5px] w-24 bg-[#FFB91F] rounded-full" />

            <h2 className="text-3xl md:text-5xl font-black">
              And it was still wrong.
            </h2>
          </div>

          {/* supporting copy */}
          <div className="mt-12 max-w-xl text-lg leading-relaxed">
            <p>
              Customers wanted more control over their workflows.
              The founder built exactly that.
            </p>

            <p className="mt-4 font-bold">
              Then the support tickets started coming in.
            </p>
          </div>

          {/* tags */}
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "FOUNDER STORY",
              "CUSTOMER INSIGHT",
              "PRODUCT THINKING",
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs font-black border-b-2 border-[#171512] pb-1"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* hero visual */}
          <div className="mt-24 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">

            <div className="text-center">
              <div className="text-4xl md:text-6xl font-black">
                MORE
              </div>

              <div className="text-[#FF813D] text-5xl md:text-7xl font-black">
                FREEDOM
              </div>
            </div>

            <div className="text-6xl md:text-8xl font-black">
              →
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-6xl font-black">
                MORE
              </div>

              <div className="text-[#FF813D] text-5xl md:text-7xl font-black">
                CONFUSION
              </div>
            </div>

          </div>

          <p className="mt-8 text-center font-bold text-sm rotate-[-2deg]">
            So... we may have overdone it.
          </p>

        </div>
      </section>


      {/* =========================
          WAIT WHAT STRIP
      ========================== */}

      <section className="relative bg-[#FFC928] border-y-2 border-[#171512] px-6 py-16 overflow-hidden">

        <div className="absolute -left-12 top-10 w-28 h-28 bg-[#FF813D] rounded-full" />

        <div className="absolute right-12 top-8 text-5xl">
          ✦
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">

          <div>
            <div className="text-3xl md:text-5xl font-black">
              CUSTOMERS ASKED
            </div>

            <div className="text-3xl md:text-5xl font-black">
              FOR CUSTOMISATION
            </div>
          </div>

          <div className="text-5xl font-black">→</div>

          <div className="text-3xl md:text-5xl font-black">
            WE BUILT IT
          </div>

          <div className="text-5xl font-black">→</div>

          <div>
            <div className="text-3xl md:text-5xl font-black">
              SUPPORT
            </div>

            <div className="text-[#FF813D] text-3xl md:text-5xl font-black">
              TICKETS 📈
            </div>
          </div>

        </div>

        <p className="text-center mt-10 font-bold rotate-[-1deg]">
          Not exactly the outcome we were hoping for.
        </p>

      </section>


      {/* =========================
          SITUATION
      ========================== */}

      <section className="px-6 md:px-12 lg:px-24 py-32">

        <div className="max-w-6xl mx-auto">

          <p className="text-sm font-black tracking-widest mb-8">
            01 — THE SITUATION
          </p>

          <h2 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-[-0.06em]">
            Customers wanted
            <br />
            <span className="text-[#FF813D]">custom workflows.</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 mt-16">

            <div className="text-lg leading-relaxed max-w-xl">
              <p>
                Taskly already had a standard workflow.
              </p>

              <p className="mt-5">
                But more customers were asking to modify it according to
                how they worked.
              </p>

              <p className="mt-5">
                The founder saw what looked like a product gap.
              </p>

              <p className="mt-5">
                So they spent the next couple of months building a
                highly customisable workflow.
              </p>
            </div>

            <div className="border-2 border-[#171512] p-8 rotate-[1deg] shadow-[8px_8px_0_#171512]">

              <p className="text-xs font-black tracking-widest mb-8">
                THE ASSUMPTION
              </p>

              <p className="text-3xl md:text-4xl font-black">
                Customers want
                <br />
                more flexibility.
              </p>

              <div className="text-5xl font-black my-6">
                ↓
              </div>

              <p className="text-3xl md:text-4xl font-black text-[#FF813D]">
                Give them more
                <br />
                flexibility.
              </p>

              <p className="mt-8 text-sm font-bold">
                Pretty reasonable, right?
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =========================
          PLOT TWIST
      ========================== */}

      <section className="bg-[#171512] text-[#FFFDF7] px-6 md:px-12 lg:px-24 py-32 relative overflow-hidden">

        <div className="absolute top-12 right-16 text-[#FFC928] text-5xl">
          ✦
        </div>

        <div className="absolute bottom-16 left-12 text-[#FF813D] text-6xl">
          +
        </div>

        <div className="max-w-6xl mx-auto">

          <p className="text-sm font-black tracking-widest text-[#FFC928] mb-10">
            02 — PLOT TWIST
          </p>

          <h2 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-[-0.06em]">
            Customers loved it.
            <br />
            <span className="text-[#FFC928]">
              In demos.
            </span>
          </h2>

          <p className="mt-10 text-xl max-w-xl">
            Once they actually started using it, something changed.
          </p>

          {/* demo → real workflow */}
          <div className="grid md:grid-cols-3 gap-8 items-center mt-20 text-center">

            <div>
              <p className="text-xs font-black tracking-widest mb-4">
                DEMO
              </p>

              <div className="text-8xl">
                🙂
              </div>
            </div>

            <div className="text-6xl font-black text-[#FFC928]">
              →
            </div>

            <div>
              <p className="text-xs font-black tracking-widest mb-4">
                REAL WORKFLOW
              </p>

              <div className="text-8xl">
                😵
              </div>
            </div>

          </div>

          <div className="mt-16 border-t border-[#FFFDF7]/30 pt-16">

            <p className="text-4xl md:text-6xl font-black">
              The feature wasn't failing.
            </p>

            <p className="text-4xl md:text-6xl font-black text-[#FF813D] mt-3">
              It was asking too much
              <br />
              of the customer.
            </p>

          </div>

        </div>
      </section>


      {/* =========================
          FIRST GUESS
      ========================== */}

      <section className="px-6 md:px-12 lg:px-24 py-32">

        <div className="max-w-6xl mx-auto">

          <p className="text-sm font-black tracking-widest mb-8">
            03 — FIRST GUESS
          </p>

          <h2 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-[-0.06em]">
            Maybe they just
            <br />
            needed better
            <br />
            <span className="text-[#FF813D]">
              guidance.
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 mt-16">

            <div className="text-lg leading-relaxed max-w-xl">

              <p>
                Customers were creating complicated workflows, getting
                stuck, and asking how to use them.
              </p>

              <p className="mt-6">
                So the founder assumed the problem was education.
              </p>

              <div className="mt-10 space-y-3 font-black text-2xl">
                <p>→ Tutorials.</p>
                <p>→ Help articles.</p>
                <p>→ More guidance.</p>
              </div>

            </div>

            <div className="flex flex-col items-center justify-center border-2 border-[#171512] p-12 rotate-[-2deg]">

              <p className="text-xs font-black tracking-widest">
                SUPPORT TICKETS
              </p>

              <p className="text-8xl md:text-[10rem] font-black text-[#FF813D] leading-none">
                ↑
              </p>

              <p className="text-5xl font-black rotate-[3deg]">
                Nope.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =========================
          WHAT WAS ACTUALLY HAPPENING
      ========================== */}

      <section className="bg-[#FFF1A8] px-6 md:px-12 lg:px-24 py-32">

        <div className="max-w-6xl mx-auto">

          <p className="text-sm font-black tracking-widest mb-8">
            04 — WHAT WAS REALLY GOING ON?
          </p>

          <h2 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-[-0.06em]">
            They didn't want
            <br />
            <span className="text-[#FF813D]">
              infinite flexibility.
            </span>
          </h2>

          <p className="text-3xl md:text-4xl font-black mt-8">
            They wanted just enough flexibility.
          </p>

          <p className="mt-10 max-w-2xl text-lg leading-relaxed">
            When the founder looked at how customers were actually using
            the feature, the pattern became clear.
          </p>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed">
            Customers weren't trying to create completely new workflows.
            They wanted to start with the standard workflow and change a
            few parts to fit how they worked.
          </p>

          {/* comparison */}
          <div className="grid lg:grid-cols-2 gap-10 mt-20">

            <div className="bg-[#FFFDF7] border-2 border-[#171512] p-10 shadow-[8px_8px_0_#171512]">

              <p className="text-xs font-black tracking-widest mb-10">
                WHAT WE BUILT
              </p>

              <div className="space-y-5 text-3xl md:text-4xl font-black">
                <p>START FROM NOTHING</p>
                <p className="text-[#FF813D]">+</p>
                <p>BUILD EVERYTHING</p>
                <p className="text-[#FF813D]">+</p>
                <p>FIGURE IT OUT</p>
              </div>

            </div>

            <div className="bg-[#FFC928] border-2 border-[#171512] p-10 shadow-[8px_8px_0_#171512]">

              <p className="text-xs font-black tracking-widest mb-10">
                WHAT THEY ACTUALLY WANTED
              </p>

              <div className="space-y-5 text-3xl md:text-4xl font-black">
                <p>STANDARD WORKFLOW</p>
                <p>↓</p>
                <p>CHANGE A FEW THINGS</p>
                <p>↓</p>
                <p>DONE</p>
              </div>

            </div>

          </div>

          <p className="text-4xl md:text-6xl font-black mt-20">
            FLEXIBILITY
            <span className="text-[#FF813D]"> ≠ </span>
            FREEDOM FROM STRUCTURE
          </p>

        </div>
      </section>


      {/* =========================
          DECISION
      ========================== */}

      <section className="bg-[#FFC928] border-y-2 border-[#171512] px-6 md:px-12 lg:px-24 py-32">

        <div className="max-w-6xl mx-auto">

          <p className="text-sm font-black tracking-widest mb-10">
            05 — THE DECISION
          </p>

          <h2 className="text-7xl md:text-9xl font-black leading-[0.8] tracking-[-0.07em]">
            Give them
            <br />
            <span className="text-[#FF813D]">
              just enough.
            </span>
          </h2>

          <p className="text-xl max-w-2xl mt-12 leading-relaxed">
            Taskly changed the feature so customers could start with the
            standard workflow and modify the parts they actually needed.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mt-20">

            <div className="bg-[#FFFDF7] border-2 border-[#171512] p-10 shadow-[8px_8px_0_#171512]">

              <p className="text-xs font-black tracking-widest mb-8">
                THE NEW FLOW
              </p>

              <div className="text-4xl md:text-5xl font-black space-y-4">
                <p>STANDARD</p>
                <p>↓</p>
                <p>+ CHANGE</p>
                <p>+ CHANGE</p>
                <p>↓</p>
                <p className="text-[#FF813D]">USEFUL</p>
              </div>

            </div>

            <div className="border-2 border-[#171512] p-10">

              <p className="text-xs font-black tracking-widest mb-8">
                THE OLD EXPERIENCE
              </p>

              <div className="text-4xl md:text-5xl font-black space-y-4">
                <p>BLANK CANVAS</p>
                <p>↓</p>
                <p>???</p>
                <p>↓</p>
                <p>😵</p>
              </div>

            </div>

          </div>

          <p className="mt-14 text-lg font-black rotate-[-1deg]">
            More options aren't automatically more useful options.
          </p>

        </div>
      </section>


      {/* =========================
          LESSON
      ========================== */}

      <section className="bg-[#3A2418] text-[#FFFDF7] px-6 md:px-12 lg:px-24 py-32">

        <div className="max-w-6xl mx-auto">

          <p className="text-sm font-black tracking-widest text-[#FFC928] mb-10">
            06 — THE LESSON
          </p>

          <h2 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-[-0.06em]">
            A customer request
            <br />
            isn't always the
            <br />
            <span className="text-[#FFC928]">
              customer need.
            </span>
          </h2>

          <div className="max-w-3xl mt-14 text-lg leading-relaxed">

            <p>
              That doesn't mean you should ignore what customers ask for.
            </p>

            <p className="mt-6">
              It means you should understand what they're actually trying
              to accomplish.
            </p>

            <p className="mt-6">
              The best solution isn't always the one that gives customers
              the most freedom.
            </p>

            <p className="mt-6 font-black text-2xl">
              Sometimes it's the one that gives them exactly enough.
            </p>

          </div>

          <div className="mt-20 border-t border-[#FFFDF7]/30 pt-12">

            <p className="text-4xl md:text-6xl font-black">
              LISTEN TO THE REQUEST.
            </p>

            <p className="text-4xl md:text-6xl font-black text-[#FF813D] mt-3">
              INVESTIGATE THE NEED.
            </p>

          </div>

        </div>
      </section>


      {/* =========================
          THE POST
      ========================== */}

      <section className="px-6 md:px-12 lg:px-24 py-32">

        <div className="max-w-5xl mx-auto">

          <p className="text-sm font-black tracking-widest mb-8">
            THE LINKEDIN POST
          </p>

          <h2 className="text-5xl md:text-7xl font-black mb-16">
            Okay, here's what I turned it into.
          </h2>

          {/* editorial post frame */}
          <div className="bg-white border-2 border-[#171512] p-8 md:p-12 shadow-[10px_10px_0_#171512]">

            <div className="flex items-center gap-4 border-b-2 border-[#171512] pb-6">

              <div className="w-12 h-12 rounded-full bg-[#FFC928] border-2 border-[#171512]" />

              <div>
                <p className="font-black">Founder</p>
                <p className="text-sm">Founder · Product Builder</p>
              </div>

            </div>

            <div className="mt-8 text-lg md:text-xl leading-relaxed">

              <p className="font-black text-2xl md:text-3xl">
                I did exactly what my customers asked.
              </p>

              <p className="mt-2 font-black text-2xl md:text-3xl">
                But it was still wrong.
              </p>

              <p className="mt-8">
                A few months ago, customers started asking us to customise
                their workflows.
              </p>

              <p className="mt-6">
                Taskly already had a standard workflow, but more customers
                wanted to modify it according to how they worked.
              </p>

              <p className="mt-6">
                I thought we'd found a gap in the product.
              </p>

              <p className="mt-6">
                So I spent the next couple of months building a highly
                customisable workflow.
              </p>

              <p className="mt-6">
                Customers loved it in demos.
              </p>

              <p className="mt-6">
                Then the support tickets started coming in.
              </p>

              <p className="mt-6">
                Customers were creating complicated workflows, getting
                stuck, and asking how to use them.
              </p>

              <p className="mt-6">
                I thought they needed better guidance.
              </p>

              <p className="mt-6">
                So we sent tutorials and help articles.
              </p>

              <p className="mt-6">
                The tickets kept coming.
              </p>

              <p className="mt-6">
                That's when I looked at how customers were actually using
                the feature.
              </p>

              <p className="mt-6">
                And I realised something.
              </p>

              <p className="mt-6 font-black">
                They weren't trying to create completely new workflows.
              </p>

              <p className="mt-6">
                They wanted the standard workflow, with a few changes that
                matched the way they worked.
              </p>

              <p className="mt-6">
                We had given them so much freedom that we'd actually made
                the product harder to use.
              </p>

              <p className="mt-6">
                So we changed the feature.
              </p>

              <p className="mt-6">
                Customers could start with the standard workflow and modify
                the parts they actually needed.
              </p>

              <p className="mt-8 font-black text-2xl">
                That's when I learned:
              </p>

              <p className="mt-4 font-black">
                A customer request isn't always the same as a customer need.
              </p>

              <p className="mt-6">
                And customisation shouldn't become another burden for the
                customer.
              </p>

              <p className="mt-6">
                Before building exactly what a customer asks for, understand
                what they're actually trying to accomplish.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =========================
          THE ANGLE
      ========================== */}

      <section className="px-6 md:px-12 lg:px-24 pb-32">

        <div className="max-w-5xl mx-auto">

          <p className="text-sm font-black tracking-widest mb-10">
            THE ANGLE
          </p>

          <div className="space-y-8">

            {[
              ["Customer request", "“We want custom workflows.”"],
              ["Founder interpretation", "“We need a highly customisable workflow.”"],
              ["Initial signal", "Customers love it in demos."],
              ["Contradiction", "Support tickets increase."],
              ["First diagnosis", "They need better guidance."],
              ["Investigation", "How are they actually using it?"],
              ["Real need", "Modify the existing workflow—not build everything from scratch."],
              ["Lesson", "Understand the intent behind the request."],
            ].map(([label, text], index) => (
              <div
                key={label}
                className="grid md:grid-cols-[240px_1fr] gap-4 md:gap-12 border-b-2 border-[#171512] pb-6"
              >
                <p className="text-xs font-black tracking-widest">
                  {String(index + 1).padStart(2, "0")} / {label}
                </p>

                <p className="text-2xl md:text-3xl font-black">
                  {text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =========================
          WHAT I WAS LOOKING FOR
      ========================== */}

      <section className="bg-[#FFF1A8] px-6 md:px-12 lg:px-24 py-28">

        <div className="max-w-5xl mx-auto">

          <p className="text-sm font-black tracking-widest mb-8">
            WHAT I WAS LOOKING FOR
          </p>

          <h2 className="text-5xl md:text-7xl font-black mb-16">
            The interesting part
            <br />
            was underneath the request.
          </h2>

          <div className="space-y-10">

            <div>
              <p className="font-black text-sm uppercase">
                The assumption:
              </p>

              <p className="text-2xl font-black mt-2">
                “Customers want more customisation.”
              </p>
            </div>

            <div>
              <p className="font-black text-sm uppercase">
                The contradiction:
              </p>

              <p className="text-2xl font-black mt-2">
                More flexibility created more confusion.
              </p>
            </div>

            <div>
              <p className="font-black text-sm uppercase">
                The real problem:
              </p>

              <p className="text-2xl font-black mt-2">
                Customers wanted to modify an existing workflow,
                not build entirely new ones.
              </p>
            </div>

            <div>
              <p className="font-black text-sm uppercase">
                The story:
              </p>

              <p className="text-2xl font-black mt-2">
                The best response to a customer request starts with
                understanding what they're actually trying to accomplish.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          FINAL PORTFOLIO ENDING
      ========================== */}

      <section className="relative bg-[#171512] text-[#FFFDF7] px-6 md:px-12 lg:px-24 py-40 overflow-hidden">

        <div className="absolute top-12 left-10 text-[#FFC928] text-6xl">
          +
        </div>

        <div className="absolute top-20 right-16 text-[#FF813D] text-5xl">
          ✦
        </div>

        <div className="absolute bottom-16 right-10 text-[#FFC928] text-7xl">
          ~
        </div>

        <div className="max-w-6xl mx-auto">

          <p className="text-sm font-black tracking-widest text-[#FFC928] mb-10">
            THAT'S ALL FIVE.
          </p>

          <h2 className="text-7xl md:text-[9rem] font-black leading-[0.78] tracking-[-0.07em]">

            FIVE
            <br />

            STORIES.

          </h2>

          <p className="text-3xl md:text-5xl font-black mt-16 max-w-3xl">
            Same question every time:
          </p>

          <p className="text-5xl md:text-7xl font-black text-[#FFC928] mt-5 max-w-4xl">
            What's actually
            <br />
            going on here?
          </p>

          <p className="mt-12 text-xl max-w-xl">
            That's usually where the interesting post starts.
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center mt-12 bg-[#FFC928] text-[#171512] px-8 py-5 rounded-full font-black shadow-[6px_6px_0_#FFFDF7] transition-all hover:translate-y-[-4px] hover:shadow-[8px_8px_0_#FFFDF7]"
          >
            WANT TO FIND YOURS?

            <span className="ml-4 transition-transform group-hover:translate-x-2">
              →
            </span>
          </a>

        </div>

      </section>

    </div>
  );
}

export default Taskly;