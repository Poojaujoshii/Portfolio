import { Link } from "react-router-dom";

export default function Meetly() {
  return (
    <main className="bg-[#FFFDF7] text-[#151515] overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen px-6 py-24 md:px-16 lg:px-24">

        {/* Decorative shapes */}
        <div className="absolute top-20 left-8 h-20 w-20 rounded-full bg-[#FFD21F] opacity-80" />
        <div className="absolute top-32 right-10 h-32 w-32 rounded-full bg-[#FF813D]" />
        <div className="absolute bottom-20 left-16 text-5xl text-[#FFD21F]">
          ✦
        </div>

        <div className="relative mx-auto max-w-6xl">

          <div className="mb-10 flex items-center gap-3 text-xs font-black uppercase tracking-wider">
            <span className="rounded-full border-2 border-[#151515] px-4 py-2">
              03 / SELECTED STORY
            </span>
            <span className="text-[#FF813D]">LEADERSHIP STORY ✦</span>
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>
              <h1 className="text-[clamp(4rem,9vw,9rem)] font-black leading-[0.82] tracking-[-0.07em]">
                WE KEPT
                <br />
                MISSING
                <br />
                <span className="text-[#FF813D]">DEADLINES.</span>
              </h1>

              <p className="mt-8 max-w-xl text-xl font-bold leading-relaxed md:text-2xl">
                And I thought my team was incapable.
              </p>

              <p className="mt-5 max-w-xl text-base leading-relaxed">
                Meetly's founder was making every important decision himself.
                As the company grew, that habit quietly turned into a
                bottleneck.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["FOUNDER STORY", "LEADERSHIP", "TEAM OWNERSHIP"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#151515] px-4 py-2 text-xs font-black"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* HERO VISUAL */}
            <div className="relative flex justify-center">
              <div className="rotate-2 rounded-[2rem] border-4 border-[#151515] bg-[#FFF1A8] p-8 shadow-[10px_10px_0_#151515] md:p-12">

                <div className="space-y-3 text-center text-3xl font-black md:text-5xl">
                  <div>TEAM</div>
                  <div>↓</div>
                  <div>WAIT</div>
                  <div>↓</div>
                  <div className="text-[#FF813D]">FOUNDER</div>
                  <div>↓</div>
                  <div>APPROVAL</div>
                  <div>↓</div>
                  <div>WORK</div>
                </div>

              </div>
            </div>

          </div>

          <div className="mt-20">
            <p className="text-[clamp(3rem,7vw,7rem)] font-black leading-[0.85] tracking-[-0.06em]">
              THE BOTTLENECK
              <br />
              <span className="text-[#FF813D]">WAS ME.</span>
            </p>
          </div>

        </div>
      </section>


      {/* WAIT WHAT STRIP */}
      <section className="relative border-y-4 border-[#151515] bg-[#FFD21F] px-6 py-12 md:px-16">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">

          <div className="text-2xl font-black">
            DEADLINES SLIPPING
          </div>

          <div className="text-4xl">→</div>

          <div className="text-2xl font-black">
            TEAM GETS PUSHED HARDER
          </div>

          <div className="text-4xl">→</div>

          <div className="text-2xl font-black">
            NOTHING REALLY CHANGES
          </div>

        </div>

        <p className="mt-8 text-center text-sm font-bold">
          yeah... maybe the problem wasn't effort.
        </p>

      </section>


      {/* SITUATION */}
      <section className="px-6 py-28 md:px-16 lg:px-24">

        <div className="mx-auto max-w-6xl">

          <p className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-[#FF813D]">
            01 — THE SITUATION
          </p>

          <h2 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.05em] md:text-8xl">
            I thought my team
            <br />
            wasn't moving
            <br />
            <span className="text-[#FF813D]">fast enough.</span>
          </h2>

          <div className="mt-12 grid gap-12 lg:grid-cols-2">

            <div className="space-y-5 text-lg leading-relaxed">
              <p>
                Initially, the founder made every decision at Meetly.
              </p>

              <p>
                He believed he knew the product better, so he thought he
                should be the one making the decisions.
              </p>

              <p>
                But as the company grew, his responsibilities grew too.
              </p>

              <p>
                Then deadlines started slipping.
              </p>

              <p className="text-2xl font-black">
                His response?
                <br />
                Push the team harder.
              </p>
            </div>

            <div className="rotate-1 border-4 border-[#151515] bg-[#FFF1A8] p-8 shadow-[8px_8px_0_#151515]">
              <div className="space-y-5 text-center text-xl font-black md:text-3xl">
                <div>DEADLINE MISSED</div>
                <div>↓</div>
                <div>PUSH HARDER</div>
                <div>↓</div>
                <div>DEADLINE MISSED</div>
                <div>↓</div>
                <div>PUSH HARDER</div>
                <div>↓</div>
                <div className="text-5xl">🤨</div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* PLOT TWIST */}
      <section className="relative bg-[#151515] px-6 py-28 text-[#FFFDF7] md:px-16 lg:px-24">

        <div className="absolute right-10 top-10 text-5xl text-[#FFD21F]">
          ✦
        </div>

        <div className="mx-auto max-w-6xl">

          <p className="mb-8 text-xs font-black uppercase tracking-[0.2em] text-[#FFD21F]">
            02 — PLOT TWIST
          </p>

          <h2 className="max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.05em] md:text-8xl">
            “We're not waiting
            <br />
            because we don't know
            <br />
            <span className="text-[#FFD21F]">what to do.”</span>
          </h2>

          <p className="mt-10 max-w-3xl text-2xl font-bold leading-relaxed">
            “We're waiting because we're not sure what you'll think.”
          </p>

          <div className="my-24 h-px bg-[#FFFDF7]/20" />

          <h3 className="text-5xl font-black leading-[0.9] md:text-8xl">
            THE TEAM WASN'T
            <br />
            THE BOTTLENECK.
            <br />
            <span className="text-[#FF813D]">
              THE FOUNDER WAS.
            </span>
          </h3>

        </div>
      </section>


      {/* WHAT WAS REALLY GOING ON */}
      <section className="px-6 py-28 md:px-16 lg:px-24">

        <div className="mx-auto max-w-6xl">

          <p className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-[#FF813D]">
            03 — WHAT WAS REALLY GOING ON?
          </p>

          <h2 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.05em] md:text-8xl">
            He had accidentally
            <br />
            trained the team
            <br />
            <span className="text-[#FF813D]">to wait.</span>
          </h2>

          <div className="mt-16 grid gap-16 lg:grid-cols-2">

            <div className="border-l-4 border-[#FFD21F] pl-8">
              {[
                "TEAM HAS AN IDEA",
                "“SHOULD WE DO THIS?”",
                "WAIT FOR FOUNDER",
                "FOUNDER REVIEWS",
                "APPROVAL",
                "WORK CONTINUES",
              ].map((item, index) => (
                <div key={item}>
                  <div className="py-4 text-xl font-black md:text-2xl">
                    {item}
                  </div>

                  {index < 5 && (
                    <div className="text-xl font-black">↓</div>
                  )}
                </div>
              ))}
            </div>

            <div className="self-center">

              <p className="mb-4 text-xs font-black uppercase tracking-widest">
                THE DEPENDENCY
              </p>

              <p className="text-xl leading-relaxed md:text-2xl">
                The team already had enough context to make many of these
                decisions.
              </p>

              <p className="mt-8 text-4xl font-black leading-tight">
                But the system had taught them:
                <br />
                <span className="text-[#FF813D]">Wait for Rohan.</span>
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* DECISION */}
      <section className="border-y-4 border-[#151515] bg-[#FFD21F] px-6 py-28 md:px-16 lg:px-24">

        <div className="mx-auto max-w-6xl">

          <p className="mb-6 text-xs font-black uppercase tracking-[0.2em]">
            04 — THE DECISION
          </p>

          <h2 className="max-w-5xl text-6xl font-black leading-[0.85] tracking-[-0.06em] md:text-9xl">
            Stop being
            <br />
            the approval
            <br />
            <span className="text-[#FF813D]">button.</span>
          </h2>

          <p className="mt-12 max-w-2xl text-xl font-bold leading-relaxed">
            The founder started giving the team ownership of decisions instead
            of making every decision himself.
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-2">

            <div className="rounded-3xl border-4 border-[#151515] bg-[#FFFDF7] p-8">
              <p className="text-sm font-black">01</p>
              <h3 className="mt-4 text-3xl font-black">
                Clearer ownership
              </h3>
              <p className="mt-4 leading-relaxed">
                People knew who owned projects and decisions.
              </p>
            </div>

            <div className="rounded-3xl border-4 border-[#151515] bg-[#FFFDF7] p-8">
              <p className="text-sm font-black">02</p>
              <h3 className="mt-4 text-3xl font-black">
                Fewer unnecessary meetings
              </h3>
              <p className="mt-4 leading-relaxed">
                Less waiting around for conversations that didn't need to
                happen.
              </p>
            </div>

          </div>

          <p className="mt-12 text-lg font-black">
            Not every decision needs the founder's fingerprint.
          </p>

        </div>
      </section>


      {/* LESSON */}
      <section className="bg-[#3A2418] px-6 py-28 text-[#FFFDF7] md:px-16 lg:px-24">

        <div className="mx-auto max-w-6xl">

          <p className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-[#FFD21F]">
            05 — THE LESSON
          </p>

          <h2 className="max-w-5xl text-5xl font-black leading-[0.88] tracking-[-0.05em] md:text-8xl">
            Leadership isn't
            <br />
            making every
            <br />
            <span className="text-[#FFD21F]">decision.</span>
          </h2>

          <p className="mt-12 max-w-3xl text-xl leading-relaxed md:text-2xl">
            It's building a team that can make decisions, own them, and move
            forward without constantly waiting for you.
          </p>

          <div className="mt-20 border-t-2 border-[#FFFDF7]/30 pt-10">

            <p className="text-sm font-black uppercase tracking-widest">
              THE SHIFT
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              <div className="border-2 border-[#FFFDF7]/30 p-8">
                <p className="text-sm">BEFORE</p>
                <p className="mt-4 text-3xl font-black">
                  APPROVAL MACHINE
                </p>
              </div>

              <div className="border-2 border-[#FFD21F] p-8">
                <p className="text-sm text-[#FFD21F]">AFTER</p>
                <p className="mt-4 text-3xl font-black">
                  DECISION ENABLER
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* POST */}
      <section className="px-6 py-28 md:px-16 lg:px-24">

        <div className="mx-auto max-w-5xl">

          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FF813D]">
            THE LINKEDIN POST
          </p>

          <h2 className="mt-5 text-5xl font-black leading-tight md:text-7xl">
            Okay, here's what I turned it into.
          </h2>

          {/* POST FRAME */}
          <article className="mt-16 rotate-[-1deg] border-4 border-[#151515] bg-white p-8 shadow-[10px_10px_0_#151515] md:p-12">

            <div className="mb-10 flex items-center justify-between border-b-2 border-[#151515]/10 pb-5">
              <div className="font-black">ROHAN</div>
              <div className="text-xs font-bold">FOUNDER STORY</div>
            </div>

            <div className="space-y-5 text-lg leading-relaxed md:text-xl">

              <p className="font-black text-2xl md:text-3xl">
                We kept missing deadlines, and I thought my team was
                incapable.
              </p>

              <p>
                Initially, I made every decision at Meetly.
              </p>

              <p>
                I thought I knew the product better, so I believed I should be
                the one making the decisions.
              </p>

              <p>
                But as the company grew, the team grew too.
              </p>

              <p>
                And so did my responsibilities.
              </p>

              <p>
                Then I started noticing that deadlines weren't being met.
              </p>

              <p>
                So I pushed the team harder.
              </p>

              <p>
                Until one of my developers said something that made me stop.
              </p>

              <p className="border-l-4 border-[#FF813D] pl-5 font-bold">
                “Rohan, we're not waiting because we don't know what to do.
                We're waiting because we're not sure what you'll think.”
              </p>

              <p>
                That changed how I looked at the problem.
              </p>

              <p>
                I went through our reports from the previous few weeks and
                realised something uncomfortable:
              </p>

              <p className="font-black">
                I had made my team dependent on me.
              </p>

              <p>
                Every decision was waiting for my approval, even when the team
                already knew what needed to be done.
              </p>

              <p>
                I wasn't helping the team move faster.
              </p>

              <p className="font-black">
                I was becoming the bottleneck.
              </p>

              <p>
                So I started giving the team ownership of decisions instead
                of making every decision myself.
              </p>

              <p>
                That's when I realised:
              </p>

              <p className="font-black text-2xl">
                Leadership isn't about the leader making every decision.
              </p>

              <p>
                It's about building a team that can make decisions, own them,
                and move forward without waiting for the leader.
              </p>

            </div>

          </article>

        </div>
      </section>


      {/* ANGLE */}
      <section className="bg-[#FFF1A8] px-6 py-24 md:px-16">

        <div className="mx-auto max-w-5xl">

          <p className="text-xs font-black uppercase tracking-[0.2em]">
            THE ANGLE
          </p>

          <div className="mt-12 space-y-10">

            {[
              ["Founder assumption", "“My team isn't capable enough.”"],
              ["Visible problem", "Deadlines keep slipping."],
              ["Founder response", "Push harder."],
              ["Contradiction", "The team says they're waiting for the founder."],
              ["Real problem", "Founder-created dependency."],
              ["Lesson", "Leadership means creating ownership, not becoming the approval layer."],
            ].map(([label, text], index) => (
              <div
                key={label}
                className="grid gap-3 border-b-2 border-[#151515]/20 pb-8 md:grid-cols-[240px_1fr]"
              >
                <p className="text-sm font-black uppercase">{label}</p>
                <p className="text-2xl font-black md:text-3xl">{text}</p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* WHAT I WAS LOOKING FOR */}
      <section className="px-6 py-28 md:px-16 lg:px-24">

        <div className="mx-auto max-w-5xl">

          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FF813D]">
            WHAT I WAS LOOKING FOR
          </p>

          <h2 className="mt-5 text-5xl font-black md:text-7xl">
            The interesting part
            <br />
            wasn't the deadline.
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2">

            <div>
              <p className="font-black">THE ASSUMPTION</p>
              <p className="mt-3 text-xl">
                “My team isn't capable enough.”
              </p>
            </div>

            <div>
              <p className="font-black">THE CONTRADICTION</p>
              <p className="mt-3 text-xl">
                The team knew what to do.
              </p>
            </div>

            <div>
              <p className="font-black">THE REAL PROBLEM</p>
              <p className="mt-3 text-xl">
                They had learned to wait for the founder's approval.
              </p>
            </div>

            <div>
              <p className="font-black">THE STORY</p>
              <p className="mt-3 text-xl">
                Sometimes the thing slowing a team down is the leader trying
                too hard to help.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* NEXT STORY */}
      <section className="border-t-4 border-[#151515] bg-[#FF813D] px-6 py-24 md:px-16">

        <div className="mx-auto max-w-6xl">

          <p className="text-sm font-black uppercase tracking-widest">
            NEXT STORY →
          </p>

          <h2 className="mt-8 max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.05em] md:text-8xl">
            My KPIs kept me
            <br />
            <span className="text-[#FFFDF7]">in delulu.</span>
          </h2>

          <p className="mt-8 text-xl font-bold">
            Users were going up. Value wasn't.
          </p>

          <Link
            to="/growly"
            className="group mt-10 inline-flex items-center rounded-full border-4 border-[#151515] bg-[#FFD21F] px-8 py-5 font-black shadow-[6px_6px_0_#151515] transition hover:-translate-y-1 hover:shadow-[8px_8px_0_#151515]"
          >
            READ GROWLY
            <span className="ml-3 transition-transform group-hover:translate-x-2">
              →
            </span>
          </Link>

        </div>
      </section>

    </main>
  );
}