import { Link } from "react-router-dom";

function Growly() {
  return (
    <main className="bg-[#FFFDF7] text-[#171512] overflow-hidden">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-screen px-6 py-20 md:px-12 lg:px-20">

        {/* quirky background shapes */}
        <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-[#FFD21F]" />

        <div className="absolute left-[7%] top-[30%] h-3 w-3 rounded-full bg-[#FF7A38]" />

        <div className="absolute right-[12%] top-[28%] text-4xl text-[#FFB91F]">
          ✦
        </div>

        <div className="absolute bottom-[18%] left-[10%] text-5xl text-[#FF7A38]">
          .
        </div>

        <div className="mx-auto max-w-7xl">

          {/* eyebrow */}
          <div className="mb-10 flex items-center gap-3">
            <span className="rounded-full border-2 border-[#171512] px-4 py-2 text-xs font-black uppercase tracking-wide">
              04 / SELECTED STORY
            </span>

            <span className="text-sm font-bold text-[#FF7A38]">
              numbers doing numbers things →
            </span>
          </div>

          {/* hero content */}
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

            <div>

              <h1 className="max-w-4xl text-[clamp(4rem,9vw,9rem)] font-black leading-[0.82] tracking-[-0.07em]">
                My KPIs kept me
                <br />
                <span className="relative inline-block">
                  in delulu.
                  <span className="absolute -bottom-2 left-0 h-3 w-full -rotate-1 rounded-full bg-[#FF7A38]" />
                </span>
              </h1>

              <p className="mt-10 max-w-xl text-lg leading-relaxed text-[#3A2418] md:text-xl">
                Growly's usage numbers looked great.
                More people were logging in every month, so the founder
                assumed the product was creating more value.
              </p>

              <p className="mt-4 max-w-xl text-lg font-bold leading-relaxed">
                Then revenue barely moved.
              </p>

              {/* tags */}
              <div className="mt-8 flex flex-wrap gap-3">
                {["FOUNDER STORY", "PRODUCT THINKING", "METRICS"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="border-2 border-[#171512] px-4 py-2 text-xs font-black"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* hero visual */}
            <div className="relative">

              <div className="rotate-2 border-[3px] border-[#171512] bg-[#FFF1A8] p-8 shadow-[10px_10px_0_#171512]">

                <div className="grid gap-10">

                  {/* USERS */}
                  <div>
                    <div className="mb-4 text-sm font-black tracking-widest">
                      USERS
                    </div>

                    <div className="space-y-2 text-5xl font-black leading-none">
                      <div>↗</div>
                      <div>↗</div>
                      <div>↗</div>
                      <div>↗</div>
                      <div>↗</div>
                    </div>
                  </div>

                  {/* VALUE */}
                  <div>
                    <div className="mb-4 text-sm font-black tracking-widest">
                      VALUE
                    </div>

                    <div className="space-y-2 text-5xl font-black leading-none">
                      <div>→</div>
                      <div>→</div>
                      <div>→</div>
                      <div>→</div>
                      <div>→</div>
                    </div>
                  </div>

                </div>

                <div className="mt-10 border-t-[3px] border-[#171512] pt-6">
                  <p className="text-xl font-black uppercase">
                    The numbers were right.
                  </p>

                  <p className="mt-1 text-xl font-black uppercase text-[#FF7A38]">
                    The interpretation wasn't.
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-6 rotate-[-8deg] font-mono text-xs font-bold">
                correlation ≠ causation-ish 👀
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          CONTRADICTION STRIP
      ========================================================= */}
      <section className="relative border-y-[3px] border-[#171512] bg-[#FFD21F] px-6 py-16 md:px-12">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row">

          <div>
            <p className="text-sm font-black uppercase tracking-widest">
              WAIT, WHAT?
            </p>

            <h2 className="mt-3 text-5xl font-black tracking-tight md:text-7xl">
              ACTIVE USERS ↑
            </h2>
          </div>

          <div className="text-6xl font-black">
            VS.
          </div>

          <div>
            <h2 className="text-5xl font-black tracking-tight md:text-7xl">
              REVENUE →
            </h2>

            <p className="mt-3 rotate-[-2deg] text-right font-mono text-sm font-bold">
              hmm.
            </p>
          </div>

        </div>
      </section>


      {/* =========================================================
          SITUATION
      ========================================================= */}
      <section className="relative px-6 py-28 md:px-12 lg:px-20">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#FF7A38]">
            01 — THE SITUATION
          </p>

          <div className="mt-8 grid gap-16 lg:grid-cols-2">

            <h2 className="text-6xl font-black leading-[0.9] tracking-[-0.05em] md:text-8xl">
              Everything looked
              <br />
              <span className="text-[#FF7A38]">healthy.</span>
            </h2>

            <div className="max-w-xl text-lg leading-relaxed text-[#3A2418]">
              <p>
                Growly's monthly active users kept increasing.
              </p>

              <p className="mt-5">
                More people were logging in.
              </p>

              <p className="mt-5">
                More teams appeared to be using the product.
              </p>

              <p className="mt-5">
                So the founder assumed Growly was becoming more valuable.
              </p>

              <p className="mt-5 font-bold text-[#171512]">
                The numbers seemed to support that story.
              </p>
            </div>

          </div>


          {/* chart */}
          <div className="mt-24 grid gap-12 lg:grid-cols-2">

            <div className="border-[3px] border-[#171512] p-8">
              <p className="mb-8 text-sm font-black tracking-widest">
                ACTIVE USERS
              </p>

              <div className="space-y-5">
                {[
                  ["MONTH 1", "w-[35%]"],
                  ["MONTH 2", "w-[50%]"],
                  ["MONTH 3", "w-[70%]"],
                  ["MONTH 4", "w-[90%]"],
                ].map(([month, width]) => (
                  <div key={month} className="flex items-center gap-4">
                    <span className="w-20 text-xs font-black">
                      {month}
                    </span>

                    <div className="h-8 flex-1 border-2 border-[#171512]">
                      <div
                        className={`h-full ${width} bg-[#FFD21F]`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>


            <div className="flex flex-col justify-center border-[3px] border-[#171512] bg-[#FFF1A8] p-8">

              <p className="text-sm font-black tracking-widest">
                REVENUE
              </p>

              <div className="mt-10 text-7xl font-black tracking-tight">
                → → → →
              </div>

              <p className="mt-6 text-xl font-black">
                Growing usage.
                <br />
                Barely moving revenue.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          PLOT TWIST
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#171512] px-6 py-32 text-[#FFFDF7] md:px-12 lg:px-20">

        <div className="absolute right-10 top-10 text-6xl text-[#FFD21F]">
          ?
        </div>

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#FFD21F]">
            02 — PLOT TWIST
          </p>

          <h2 className="mt-10 max-w-5xl text-6xl font-black leading-[0.9] tracking-[-0.05em] md:text-8xl">
            So what were
            <br />
            people actually
            <br />
            doing?
          </h2>

          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-[#FFF1A8]">
            The founder stopped looking at the number and started looking
            at the behaviour behind it.
          </p>


          {/* behaviour */}
          <div className="mt-20 grid gap-6 md:grid-cols-3">

            {["LOGIN", "CHECK ONE THING", "LEAVE"].map(
              (item, index) => (
                <div key={item} className="flex items-center gap-5">

                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-[#FFD21F] text-center text-xs font-black">
                    {item}
                  </div>

                  {index < 2 && (
                    <span className="text-4xl text-[#FF7A38]">
                      →
                    </span>
                  )}

                </div>
              )
            )}

          </div>


          <div className="mt-28 border-y border-[#FFFDF7]/30 py-12">

            <p className="text-6xl font-black tracking-[-0.04em] md:text-9xl">
              ACTIVE
              <span className="text-[#FF7A38]"> ≠ </span>
              VALUE
            </p>

            <p className="mt-5 text-sm font-bold uppercase tracking-widest text-[#FFD21F]">
              being active isn't the same as getting value.
            </p>

          </div>

        </div>
      </section>


      {/* =========================================================
          WHAT WAS REALLY GOING ON
      ========================================================= */}
      <section className="px-6 py-28 md:px-12 lg:px-20">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#FF7A38]">
            03 — WHAT WAS REALLY GOING ON?
          </p>

          <h2 className="mt-8 max-w-5xl text-6xl font-black leading-[0.9] tracking-[-0.05em] md:text-8xl">
            They were active.
            <br />
            <span className="text-[#FF7A38]">
              They just weren't doing the thing Growly was built for.
            </span>
          </h2>


          <div className="mt-16 max-w-3xl space-y-6 text-lg leading-relaxed text-[#3A2418]">
            <p>
              A lot of users were logging in, checking one small piece
              of information, and leaving.
            </p>

            <p>
              They counted as active.
            </p>

            <p>
              But they weren't completing the workflows Growly was
              actually designed to help them complete.
            </p>
          </div>


          {/* comparison */}
          <div className="mt-20 overflow-hidden border-[3px] border-[#171512]">

            <div className="grid grid-cols-2 border-b-[3px] border-[#171512] bg-[#FFD21F]">
              <div className="p-5 text-sm font-black uppercase">
                What the KPI said
              </div>

              <div className="border-l-[3px] border-[#171512] p-5 text-sm font-black uppercase">
                What behaviour showed
              </div>
            </div>

            {[
              ["Users are active", "Users are checking something"],
              [
                "Product usage is growing",
                "Core workflows aren't necessarily being completed",
              ],
              ["More activity", "Not necessarily more value"],
            ].map(([left, right]) => (
              <div
                key={left}
                className="grid grid-cols-2 border-b-[2px] border-[#171512] last:border-b-0"
              >
                <div className="p-6 font-bold">
                  {left}
                </div>

                <div className="border-l-[2px] border-[#171512] p-6 text-[#3A2418]">
                  {right}
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          DECISION
      ========================================================= */}
      <section className="relative border-y-[3px] border-[#171512] bg-[#FFD21F] px-6 py-28 md:px-12 lg:px-20">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-black uppercase tracking-[0.2em]">
            04 — THE DECISION
          </p>

          <h2 className="mt-8 max-w-6xl text-6xl font-black leading-[0.88] tracking-[-0.05em] md:text-8xl">

            Stop measuring
            <br />

            <span className="text-[#FF7A38]">
              "Are they here?"
            </span>

            <br />

            <span className="text-4xl md:text-6xl">
              Start measuring:
            </span>

            <br />

            "Are they getting value?"

          </h2>


          <p className="mt-12 max-w-3xl text-lg font-medium leading-relaxed">
            The team changed what it tracked.
            Instead of focusing mainly on logins and active users,
            they started measuring whether customers were completing
            the workflows the product was built to help them complete.
          </p>


          {/* before / after */}
          <div className="mt-20 grid gap-8 md:grid-cols-2">

            <div className="border-[3px] border-[#171512] bg-[#FFFDF7] p-8 shadow-[8px_8px_0_#171512]">

              <p className="text-sm font-black tracking-widest">
                BEFORE
              </p>

              <div className="mt-10 text-center">

                <div className="text-4xl font-black">
                  LOGIN
                </div>

                <div className="my-4 text-3xl">
                  ↓
                </div>

                <div className="text-4xl font-black">
                  ACTIVE USER ✓
                </div>

              </div>

            </div>


            <div className="border-[3px] border-[#171512] bg-[#171512] p-8 text-[#FFFDF7] shadow-[8px_8px_0_#FF7A38]">

              <p className="text-sm font-black tracking-widest text-[#FFD21F]">
                AFTER
              </p>

              <div className="mt-10 text-center">

                <div className="text-4xl font-black">
                  LOGIN
                </div>

                <div className="my-4 text-3xl text-[#FFD21F]">
                  ↓
                </div>

                <div className="text-4xl font-black">
                  CORE WORKFLOW
                </div>

                <div className="my-4 text-3xl text-[#FFD21F]">
                  ↓
                </div>

                <div className="text-4xl font-black text-[#FF7A38]">
                  OUTCOME ✓
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          LESSON
      ========================================================= */}
      <section className="bg-[#3A2418] px-6 py-28 text-[#FFFDF7] md:px-12 lg:px-20">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#FFD21F]">
            05 — THE LESSON
          </p>

          <h2 className="mt-10 max-w-6xl text-6xl font-black leading-[0.88] tracking-[-0.05em] md:text-8xl">

            A good-looking KPI
            <br />

            can still be
            <br />

            <span className="text-[#FF7A38]">
              the wrong KPI.
            </span>

          </h2>

          <p className="mt-12 max-w-2xl text-lg leading-relaxed text-[#FFF1A8]">
            Metrics aren't useful just because they're going up.
            The real question is whether the metric represents the value
            your product exists to create.
          </p>

          <div className="mt-24 border-y border-[#FFFDF7]/30 py-12">

            <p className="text-4xl font-black md:text-6xl">
              DON'T JUST MEASURE ACTIVITY.
            </p>

            <p className="mt-3 text-4xl font-black text-[#FFD21F] md:text-6xl">
              MEASURE VALUE.
            </p>

          </div>

        </div>
      </section>


      {/* =========================================================
          THE POST
      ========================================================= */}
      <section className="px-6 py-28 md:px-12 lg:px-20">

        <div className="mx-auto max-w-5xl">

          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#FF7A38]">
            THE LINKEDIN POST
          </p>

          <h2 className="mt-5 text-5xl font-black tracking-tight md:text-7xl">
            Okay, here's what I turned it into.
          </h2>


          {/* editorial post */}
          <article className="relative mt-16 border-[3px] border-[#171512] bg-white p-8 shadow-[12px_12px_0_#FFD21F] md:p-12">

            <div className="absolute -right-4 -top-4 rotate-6 bg-[#FF7A38] px-4 py-2 text-xs font-black">
              GROWLY
            </div>

            <div className="mb-10 flex items-center gap-4 border-b-2 border-[#171512] pb-6">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD21F] font-black">
                S
              </div>

              <div>
                <p className="font-black">
                  Sana
                </p>

                <p className="text-xs text-gray-500">
                  Founder · Growly
                </p>
              </div>

            </div>


            <div className="space-y-5 text-[17px] leading-[1.65] text-[#171512]">

              <p className="text-2xl font-black">
                My KPIs kept me in delulu.
              </p>

              <p>
                I was proud of our monthly active users.
              </p>

              <p>
                Every month, more people were logging into Growly.
                More teams were using the product.
              </p>

              <p>
                So I assumed we were creating more value.
              </p>

              <p>
                Until one month, our revenue barely moved.
              </p>

              <p>
                That made me question what our "active users"
                actually meant.
              </p>

              <p>
                When I looked closer, I found something I hadn't noticed
                before.
              </p>

              <p>
                A lot of users weren't really using Growly.
              </p>

              <p>
                They were logging in, checking one small piece of
                information, and leaving.
              </p>

              <p>
                They were active.
                But they weren't completing the workflows Growly was
                actually built to help them complete.
              </p>

              <p className="font-bold">
                That's when I realised I had been measuring activity
                instead of value.
              </p>

              <p>
                So we changed what we tracked.
              </p>

              <p>
                Instead of focusing mainly on logins and active users,
                we started measuring whether customers were completing
                the workflows our product was built to help them complete.
              </p>

              <p>
                The numbers looked different.
              </p>

              <p>
                But they told us much more.
              </p>

              <p>
                I learned that a good-looking KPI can still be the wrong KPI.
              </p>

              <p className="font-bold">
                It doesn't matter how many times people log in.
              </p>

              <p>
                The bigger question is:
              </p>

              <p className="text-xl font-black">
                Are they actually getting the value your product was
                built to provide?
              </p>

            </div>

          </article>

        </div>
      </section>


      {/* =========================================================
          THE ANGLE
      ========================================================= */}
      <section className="border-y-[3px] border-[#171512] bg-[#FFF1A8] px-6 py-24 md:px-12 lg:px-20">

        <div className="mx-auto max-w-5xl">

          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#FF7A38]">
            THE ANGLE
          </p>

          <div className="mt-12 space-y-10">

            {[
              ["Founder assumption", "More active users = more value."],
              ["Positive signal", "Monthly active users keep increasing."],
              ["Contradiction", "Revenue barely moves."],
              ["Investigation", "What are active users actually doing?"],
              ["Real problem", "Activity was being mistaken for value."],
              [
                "Lesson",
                "Measure behaviour that reflects the outcome your product exists to create.",
              ],
            ].map(([label, text], index) => (
              <div key={label}>

                <div className="flex gap-5">

                  <span className="font-mono text-sm font-black text-[#FF7A38]">
                    0{index + 1}
                  </span>

                  <div>
                    <p className="text-xs font-black uppercase tracking-widest">
                      {label}
                    </p>

                    <p className="mt-2 text-2xl font-black md:text-3xl">
                      {text}
                    </p>
                  </div>

                </div>

                {index < 5 && (
                  <div className="ml-2 mt-6 h-6 border-l-2 border-dashed border-[#171512]" />
                )}

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          WHAT I WAS LOOKING FOR
      ========================================================= */}
      <section className="px-6 py-28 md:px-12 lg:px-20">

        <div className="mx-auto max-w-5xl">

          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#FF7A38]">
            WHAT I WAS LOOKING FOR
          </p>

          <h2 className="mt-6 text-5xl font-black md:text-7xl">
            The story underneath
            <br />
            the metric.
          </h2>

          <div className="mt-16 grid gap-10 md:grid-cols-2">

            <div className="border-l-4 border-[#FFD21F] pl-6">
              <p className="text-xs font-black uppercase tracking-widest">
                The assumption
              </p>

              <p className="mt-3 text-xl font-bold">
                "Growing active users means we're creating more value."
              </p>
            </div>

            <div className="border-l-4 border-[#FF7A38] pl-6">
              <p className="text-xs font-black uppercase tracking-widest">
                The contradiction
              </p>

              <p className="mt-3 text-xl font-bold">
                Revenue wasn't moving with usage.
              </p>
            </div>

            <div className="border-l-4 border-[#FFD21F] pl-6">
              <p className="text-xs font-black uppercase tracking-widest">
                The real problem
              </p>

              <p className="mt-3 text-xl font-bold">
                Users were active without necessarily completing
                the product's core workflows.
              </p>
            </div>

            <div className="border-l-4 border-[#FF7A38] pl-6">
              <p className="text-xs font-black uppercase tracking-widest">
                The story
              </p>

              <p className="mt-3 text-xl font-bold">
                A metric can be accurate and still answer the wrong question.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          NEXT STORY
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#171512] px-6 py-28 text-[#FFFDF7] md:px-12 lg:px-20">

        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#FF7A38]" />

        <div className="mx-auto max-w-5xl">

          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#FFD21F]">
            NEXT STORY →
          </p>

          <h2 className="mt-8 max-w-4xl text-6xl font-black leading-[0.9] tracking-[-0.05em] md:text-8xl">
            I did exactly what
            <br />
            my customers asked.
          </h2>

          <p className="mt-6 text-3xl font-black text-[#FF7A38] md:text-5xl">
            And it was still wrong.
          </p>

          <p className="mt-8 max-w-xl text-lg text-[#FFF1A8]">
            They wanted customisation.
            We gave them too much of it.
          </p>

          <Link
            to="/taskly"
            className="group mt-10 inline-flex items-center rounded-full bg-[#FFD21F] px-8 py-5 font-black text-[#171512] shadow-[6px_6px_0_#FFFDF7] transition-all hover:-translate-y-1 hover:shadow-[9px_9px_0_#FFFDF7]"
          >
            READ TASKLY
            <span className="ml-3 transition-transform group-hover:translate-x-2">
              →
            </span>
          </Link>

        </div>
      </section>

    </main>
  );
}

export default Growly;