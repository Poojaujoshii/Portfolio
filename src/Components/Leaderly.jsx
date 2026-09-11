import { Link } from "react-router-dom";    
function Leaderly() {
  return (
    <section
      id="leaderly"
      className="relative overflow-hidden bg-[#FFF9E8] px-8 py-24 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px]">

        {/* =====================================
            01 — HERO
        ====================================== */}

        <section className="relative min-h-[720px]">

          {/* decorative shapes */}
          <div className="absolute -left-24 top-10 h-48 w-48 rotate-[20deg] rounded-[45%_55%_60%_40%] bg-[#FFE39A]" />

          <div className="absolute right-[-80px] top-20 h-64 w-64 rounded-full bg-[#FF8A3D]" />

          <div className="absolute right-[18%] top-12 h-4 w-4 rounded-full bg-[#FFC928]" />

          <div className="absolute left-[45%] bottom-28 h-3 w-3 rounded-full bg-[#FF8A3D]" />

          {/* scribble */}
          <svg
            className="absolute bottom-24 right-8 w-28 rotate-[8deg]"
            viewBox="0 0 120 30"
            fill="none"
          >
            <path
              d="M3 15C13 28 23 2 33 15C43 28 53 2 63 15C73 28 83 2 93 15C103 28 113 5 117 13"
              stroke="#171512"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>

          <div className="relative z-10 grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

            {/* LEFT */}
            <div>

              <div className="mb-8 flex items-center gap-3">
                <span className="rounded-full border-2 border-[#171512] px-4 py-2 text-xs font-black tracking-[1.5px]">
                  02 / SELECTED STORY
                </span>

                <span className="text-[#FF8A3D]">✦</span>
              </div>

              <h1 className="text-[clamp(60px,8vw,120px)] font-black leading-[0.82] tracking-[-0.07em]">
                I thought I needed
                <br />
                <span className="text-[#FF8A3D]">
                  more people.
                </span>
              </h1>

              <div className="relative mt-7 inline-block">

                <p className="text-[clamp(36px,4vw,58px)] font-black leading-none tracking-[-0.05em]">
                  I was wrong.
                </p>

                <svg
                  className="absolute -bottom-5 left-0 w-full"
                  viewBox="0 0 300 10"
                  fill="none"
                >
                  <path
                    d="M3 5C30 9 55 1 82 5C110 9 140 1 168 5C198 9 225 1 252 5C270 7 285 3 298 5"
                    stroke="#FFC928"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>

              </div>

              <div className="mt-12 max-w-[600px] space-y-5 text-lg font-medium leading-[1.6]">

                <p>
                  Work at Leaderly kept moving slower than expected.
                  The founder responded the way many founders would:
                  <strong> hire more people.</strong>
                </p>

                <p>
                  It didn't fix the problem.
                </p>

              </div>

              {/* tags */}
              <div className="mt-10 flex flex-wrap gap-3">
                <Tag>FOUNDER STORY</Tag>
                <Tag>LEADERSHIP</Tag>
                <Tag>OPERATIONAL THINKING</Tag>
              </div>

            </div>


            {/* RIGHT — VISUAL */}
            <div className="relative flex min-h-[500px] items-center justify-center">

              <div className="relative rotate-[3deg]">

                <p className="text-[clamp(70px,10vw,145px)] font-black leading-[0.8] tracking-[-0.08em]">
                  23
                </p>

                <p className="ml-3 text-[clamp(34px,4vw,58px)] font-black leading-none tracking-[-0.05em] text-[#FF8A3D]">
                  PEOPLE
                </p>

                <div className="my-2 text-center text-[clamp(90px,12vw,170px)] font-black leading-[0.8]">
                  ≠
                </div>

                <p className="text-right text-[clamp(60px,8vw,110px)] font-black leading-[0.8] tracking-[-0.07em]">
                  FASTER
                </p>

                {/* annotation */}
                <div className="absolute -right-20 top-10 rotate-[8deg] text-xs font-bold">
                  wait... 🤨
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================
            02 — WAIT WHAT STRIP
        ====================================== */}

        <section className="relative -mx-8 overflow-hidden border-y-[3px] border-[#171512] bg-[#FFC928] lg:-mx-16">

          <div className="absolute left-[-30px] top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-[#FF8A3D]" />

          <div className="absolute right-[-20px] bottom-[-40px] h-32 w-32 rounded-[50%] bg-[#FFE39A]" />

          <div className="relative mx-auto grid max-w-[1280px] gap-8 px-8 py-12 md:grid-cols-3 lg:px-16">

            <NumberBlock number="8" label="MONTHS" />

            <NumberBlock number="23" label="HIRES" />

            <NumberBlock number="STILL SLOW" label="..." />

          </div>

          <p className="relative pb-10 text-center text-sm font-black italic">
            okay... so hiring wasn't the answer.
          </p>

        </section>


        {/* =====================================
            03 — THE SITUATION
        ====================================== */}

        <section className="grid gap-14 py-28 lg:grid-cols-[0.65fr_1.35fr] lg:py-36">

          <SectionLabel number="01" title="THE SITUATION" />

          <div>

            <h2 className="text-[clamp(48px,6vw,82px)] font-black leading-[0.9] tracking-[-0.06em]">
              When work was slow,
              <br />
              <span className="text-[#FF8A3D]">
                I hired.
              </span>
            </h2>

            <div className="mt-12 max-w-[700px] space-y-6 text-xl leading-[1.6]">

              <p>
                Whenever something took longer than expected, the founder
                assumed the team needed more people.
              </p>

              <p>
                So she kept hiring.
              </p>

              <p>
                In eight months, she hired <strong>23 people.</strong>
              </p>

              <p>
                But the work was still taking too long.
              </p>

            </div>


            {/* assumption */}
            <div className="mt-16 grid gap-10 border-t-[3px] border-[#171512] pt-10 md:grid-cols-2">

              <div>
                <p className="mb-4 text-xs font-black tracking-[2px] text-[#FF8A3D]">
                  THE ASSUMPTION
                </p>

                <p className="text-3xl font-black leading-tight">
                  More people
                  <br />
                  ↓
                  <br />
                  More capacity
                  <br />
                  ↓
                  <br />
                  Faster work.
                </p>
              </div>


              {/* loop */}
              <div className="rounded-[24px] border-[3px] border-[#171512] bg-[#FFE39A] p-7">

                <p className="text-lg font-black">
                  THE LOOP
                </p>

                <div className="mt-7 space-y-3 text-lg font-black">
                  <Flow text="SLOW WORK" />
                  <Arrow />
                  <Flow text='"WE NEED MORE PEOPLE"' />
                  <Arrow />
                  <Flow text="+ HIRE" orange />
                  <Arrow />
                  <Flow text="SLOW WORK" />
                  <Arrow />
                  <Flow text="+ HIRE" orange />
                  <Arrow />
                  <span className="text-[#FF8A3D]">...</span>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================
            04 — PLOT TWIST
        ====================================== */}

        <section className="relative overflow-hidden rounded-[32px] bg-[#171512] px-7 py-20 text-[#FFF9E8] lg:px-16 lg:py-28">

          {/* decorations */}
          <div className="absolute right-[-50px] top-[-50px] h-52 w-52 rounded-full bg-[#FF8A3D]" />

          <div className="absolute bottom-10 left-[10%] h-4 w-4 rounded-full bg-[#FFC928]" />

          <div className="relative z-10">

            <div className="mb-12 flex items-center gap-3">
              <span className="text-sm font-black tracking-[2px] text-[#FFC928]">
                02 — PLOT TWIST
              </span>

              <span className="text-[#FF8A3D]">✦</span>
            </div>

            <h2 className="max-w-[850px] text-[clamp(54px,7vw,100px)] font-black leading-[0.85] tracking-[-0.07em]">
              Why was a
              <br />
              <span className="text-[#FFC928]">
                small feature
              </span>
              <br />
              taking three weeks?
            </h2>

            <p className="mt-12 max-w-[650px] text-xl font-medium leading-[1.6] text-[#FFF9E8]/80">
              Instead of hiring again, the founder decided to look
              closely at what was actually happening to the work.
            </p>


            {/* WORKFLOW */}
            <div className="mt-20 grid gap-5 md:grid-cols-2">

              <div className="space-y-3">

                <FlowDark text="FEATURE" yellow />
                <DarkArrow />
                <FlowDark text="WAIT" />
                <DarkArrow />
                <FlowDark text="APPROVAL" yellow />
                <DarkArrow />
                <FlowDark text="WAIT" />
                <DarkArrow />
                <FlowDark text="ANOTHER TEAM" />
                <DarkArrow />

              </div>

              <div className="space-y-3">

                <FlowDark text="WAIT" />
                <DarkArrow />
                <FlowDark text="DECISION" yellow />
                <DarkArrow />
                <FlowDark text="WAIT" />
                <DarkArrow />
                <FlowDark text="DONE" orange />

              </div>

            </div>


            {/* key line */}
            <div className="mt-20 border-t-2 border-[#FFF9E8]/20 pt-14">

              <p className="text-[clamp(35px,5vw,65px)] font-black leading-[0.95] tracking-[-0.05em]">
                The work wasn't waiting
                <br />
                for people.
              </p>

              <p className="mt-5 text-[clamp(35px,5vw,65px)] font-black leading-[0.95] tracking-[-0.05em] text-[#FF8A3D]">
                People were waiting
                <br />
                for other people.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================
            05 — WHAT WAS REALLY GOING ON
        ====================================== */}

        <section className="grid gap-14 py-28 lg:grid-cols-[0.65fr_1.35fr] lg:py-36">

          <SectionLabel
            number="03"
            title="WHAT WAS REALLY GOING ON?"
          />

          <div>

            <h2 className="text-[clamp(50px,6vw,85px)] font-black leading-[0.88] tracking-[-0.06em]">
              The bottleneck
              <br />
              wasn't
              <br />
              <span className="text-[#FF8A3D]">
                headcount.
              </span>
            </h2>

            <div className="mt-12 max-w-[720px] space-y-6 text-xl leading-[1.6]">

              <p>
                Almost every piece of ongoing work depended on something
                else being completed or approved first.
              </p>

              <p>
                Adding more people hadn't removed those dependencies.
              </p>

              <p className="font-black">
                It had just created more people inside the same system.
              </p>

            </div>


            {/* BEFORE / AFTER */}
            <div className="mt-16 grid gap-5 md:grid-cols-2">

              <Comparison
                title="BEFORE"
                items={[
                  "23 PEOPLE",
                  "DEPENDENCY",
                  "WAITING",
                  "SLOW WORK",
                ]}
              />

              <Comparison
                title="AFTER"
                orange
                items={[
                  "CLEAR OWNERSHIP",
                  "FEWER DEPENDENCIES",
                  "FASTER DECISIONS",
                  "WORK MOVES",
                ]}
              />

            </div>

          </div>

        </section>


        {/* =====================================
            06 — DECISION
        ====================================== */}

        <section className="relative overflow-hidden rounded-[32px] bg-[#FFC928] px-7 py-20 lg:px-16 lg:py-24">

          <div className="absolute right-12 top-10 rotate-[12deg] text-5xl">
            ✦
          </div>

          <div className="absolute bottom-[-50px] left-[-40px] h-36 w-36 rounded-full bg-[#FF8A3D]" />

          <div className="relative z-10">

            <div className="mb-8 text-sm font-black tracking-[2px]">
              04 — THE DECISION
            </div>

            <h2 className="text-[clamp(55px,7vw,100px)] font-black leading-[0.83] tracking-[-0.07em]">
              Stop hiring.
              <br />
              Start fixing
              <br />
              <span className="text-[#FF8A3D]">
                how work moves.
              </span>
            </h2>


            <div className="mt-16 grid gap-5 md:grid-cols-2">

              <DecisionCard
                number="01"
                title="Clearer ownership"
              >
                People knew who owned projects and decisions.
              </DecisionCard>

              <DecisionCard
                number="02"
                title="Fewer unnecessary meetings"
              >
                Less waiting around for conversations that didn't
                need to happen.
              </DecisionCard>

            </div>


            <p className="mt-14 max-w-[700px] text-xl font-bold leading-[1.5]">
              The goal wasn't to make the team work harder.
              <br />
              It was to make the work easier to move.
            </p>

          </div>

        </section>


        {/* =====================================
            07 — LESSON
        ====================================== */}

        <section className="relative -mx-8 mt-28 overflow-hidden bg-[#3A2418] px-8 py-28 text-[#FFF9E8] lg:-mx-16 lg:px-16 lg:py-36">

          <div className="absolute right-[-30px] top-[-30px] h-48 w-48 rotate-[15deg] rounded-full bg-[#FF8A3D]" />

          <div className="absolute bottom-16 left-[8%] text-4xl text-[#FFC928]">
            ✦
          </div>

          <div className="relative z-10 mx-auto max-w-[1280px]">

            <div className="mb-8 flex items-center gap-3">
              <span className="text-sm font-black tracking-[2px] text-[#FFC928]">
                05 — THE LESSON
              </span>

              <span className="text-[#FF8A3D]">✦</span>
            </div>

            <h2 className="max-w-[1000px] text-[clamp(55px,7vw,105px)] font-black leading-[0.84] tracking-[-0.07em]">
              More people
              <br />
              don't automatically
              <br />
              mean more
              <span className="text-[#FFC928]">
                {" "}speed.
              </span>
            </h2>

            <p className="mt-14 max-w-[720px] text-xl leading-[1.65] text-[#FFF9E8]/85">
              When something is slow, it's tempting to add resources.
              But before hiring again, look at what the work is actually
              waiting for.
              <br />
              <br />
              Sometimes the answer isn't more people.
              <br />
              It's fewer dependencies and clearer ownership.
            </p>

            <div className="mt-20 border-t-2 border-[#FFF9E8]/30 pt-10">
              <p className="text-[clamp(45px,6vw,85px)] font-black leading-none tracking-[-0.06em] text-[#FFC928]">
                HEADCOUNT ≠ EFFICIENCY
              </p>
            </div>

          </div>

        </section>


        {/* =====================================
            08 — THE POST
        ====================================== */}

        <section className="py-28 lg:py-36">

          <div className="mb-10">

            <p className="mb-4 text-xs font-black tracking-[3px] text-[#FF8A3D]">
              THE LINKEDIN POST
            </p>

            <h2 className="text-[clamp(45px,6vw,78px)] font-black leading-[0.9] tracking-[-0.06em]">
              Okay, here's what
              <br />
              I turned it into.
            </h2>

          </div>


          {/* SAME EDITORIAL POST FRAME */}
          <div className="relative mx-auto max-w-[900px] rotate-[0.4deg] border-[3px] border-[#171512] bg-white p-7 shadow-[8px_8px_0_#171512] lg:p-12">

            <div className="mb-10 flex items-center justify-between border-b-2 border-[#171512] pb-6">

              <div>
                <p className="text-lg font-black">
                  POO.
                </p>

                <p className="text-xs font-medium text-black/50">
                  Founder-led LinkedIn post
                </p>
              </div>

              <span className="rotate-[-3deg] text-xs font-black text-[#FF8A3D]">
                STORY → POST
              </span>

            </div>


            <div className="space-y-6 text-[18px] leading-[1.65] text-[#171512]">

              <p className="text-2xl font-black">
                I thought I needed more people to get the work done.
              </p>

              <p>
                I was wrong.
              </p>

              <p>
                Months ago, whenever something took longer than expected,
                I assumed we needed more people.
              </p>

              <p>
                So I kept hiring.
              </p>

              <p>
                In eight months, I hired 23 people.
              </p>

              <p>
                But the work was still taking too long.
              </p>

              <p>
                The process was just as slow as before.
              </p>

              <p>
                So I decided to look at why even a small feature was taking
                almost three weeks.
              </p>

              <p>
                That's when I noticed something.
              </p>

              <p>
                Almost every piece of ongoing work was waiting for another
                piece of work to be completed or approved.
              </p>

              <p>
                I thought I was solving the dependency problem by adding
                more people.
              </p>

              <p>
                I wasn't.
              </p>

              <p>
                The problem wasn't how many people we had.
              </p>

              <p>
                It was how work moved between them.
              </p>

              <p>
                So instead of hiring again, we changed the way we worked.
              </p>

              <p>
                We gave clearer ownership to projects and decisions,
                and removed unnecessary meetings.
              </p>

              <p>
                Work started moving faster.
              </p>

              <p className="text-2xl font-black text-[#FF8A3D]">
                That's when I learned:
              </p>

              <p className="text-2xl font-black">
                More people don't automatically make a team more efficient.
              </p>

              <p>
                Before hiring another person, look at what's actually
                slowing the work down.
              </p>

              <p>
                Sometimes, you don't need more people.
              </p>

              <p className="font-black">
                You need fewer dependencies and clearer ownership.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================
            09 — THE ANGLE
        ====================================== */}

        <section className="relative border-t-[3px] border-[#171512] py-24 lg:py-32">

          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">

            <SectionLabel number="06" title="THE ANGLE" />

            <div className="max-w-[800px]">

              <div className="space-y-0">

                <AngleStep
                  label="FOUNDER ASSUMPTION"
                  text='"We need more people."'
                />

                <AngleArrow />

                <AngleStep
                  label="CONTRADICTION"
                  text="23 hires later, work was still slow."
                  orange
                />

                <AngleArrow />

                <AngleStep
                  label="INVESTIGATION"
                  text="Why was a small feature taking three weeks?"
                />

                <AngleArrow />

                <AngleStep
                  label="REAL PROBLEM"
                  text="Dependencies + unclear ownership."
                  orange
                />

                <AngleArrow />

                <AngleStep
                  label="LESSON"
                  text="Fix the way work moves before adding more people."
                />

              </div>

            </div>

          </div>

        </section>


        {/* =====================================
            10 — WHAT I WAS LOOKING FOR
        ====================================== */}

        <section className="relative overflow-hidden rounded-[32px] bg-[#FFE39A] px-7 py-20 lg:px-16 lg:py-24">

          <div className="absolute right-10 top-8 text-4xl">
            🔎
          </div>

          <div className="relative z-10">

            <p className="mb-5 text-xs font-black tracking-[3px] text-[#FF8A3D]">
              THE GHOSTWRITING BRAIN
            </p>

            <h2 className="text-[clamp(45px,6vw,78px)] font-black leading-[0.9] tracking-[-0.06em]">
              What I was
              <br />
              looking for.
            </h2>

            <div className="mt-14 grid gap-5 md:grid-cols-2">

              <LookingCard
                title="THE ASSUMPTION"
                text='"We need more people."'
              />

              <LookingCard
                title="THE CONTRADICTION"
                text="The team grew, but the work didn't get faster."
              />

              <LookingCard
                title="THE REAL PROBLEM"
                text="Too many dependencies and unclear ownership."
              />

              <LookingCard
                title="THE STORY"
                text="Before adding resources, understand what's actually slowing the system down."
              />

            </div>

          </div>

        </section>


        {/* =====================================
            11 — NEXT STORY
        ====================================== */}

        <section className="relative mt-32 border-t-[3px] border-[#171512] pt-16">

          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <p className="mb-6 text-sm font-black tracking-[2px]">
                NEXT STORY →
              </p>

              <h2 className="max-w-[850px] text-[clamp(45px,6vw,82px)] font-black leading-[0.88] tracking-[-0.06em]">
                We kept missing deadlines.
                <br />
                <span className="text-[#FF8A3D]">
                  And I thought my team was incapable.
                </span>
              </h2>

              <p className="mt-6 text-lg font-bold">
                Turns out, they were waiting for me.
              </p>

            </div>

           <Link
  to="/meetly"
  className="
    inline-flex
    w-fit
    items-center
    rounded-full
    bg-[#FFC928]
    px-8
    py-5
    text-sm
    font-black
    shadow-[5px_5px_0_#171512]
    transition-all
    hover:-translate-y-1
    hover:shadow-[7px_7px_0_#171512]
  "
>
  READ MEETLY
  <span className="ml-3">→</span>
</Link>

          </div>

        </section>

      </div>
    </section>
  )
}


/* =========================================
   REUSABLE COMPONENTS
========================================= */

function Tag({ children }) {
  return (
    <span className="rounded-full border-2 border-[#171512] px-4 py-2 text-xs font-black tracking-[1px]">
      {children}
    </span>
  )
}


function NumberBlock({ number, label }) {
  return (
    <div className="text-center">
      <p className="text-[clamp(55px,7vw,90px)] font-black leading-none tracking-[-0.06em]">
        {number}
      </p>

      <p className="mt-2 text-xs font-black tracking-[2px]">
        {label}
      </p>
    </div>
  )
}


function SectionLabel({ number, title }) {
  return (
    <div className="lg:sticky lg:top-10 lg:self-start">
      <p className="mb-2 text-xs font-black tracking-[2px] text-[#FF8A3D]">
        {number}
      </p>

      <p className="text-sm font-black tracking-[1.5px]">
        {title}
      </p>
    </div>
  )
}


function Flow({ text, orange }) {
  return (
    <div
      className={`
        rounded-full
        border-2
        border-[#171512]
        px-5
        py-3
        text-sm
        font-black
        ${orange ? "bg-[#FF8A3D]" : "bg-[#FFF9E8]"}
      `}
    >
      {text}
    </div>
  )
}


function Arrow() {
  return (
    <div className="ml-6 text-lg font-black">
      ↓
    </div>
  )
}


function FlowDark({ text, yellow, orange }) {
  return (
    <div
      className={`
        rounded-full
        border-2
        px-6
        py-4
        text-base
        font-black
        ${
          yellow
            ? "border-[#FFC928] bg-[#FFC928] text-[#171512]"
            : orange
              ? "border-[#FF8A3D] bg-[#FF8A3D] text-[#171512]"
              : "border-[#FFF9E8]/40 bg-[#FFF9E8]/5"
        }
      `}
    >
      {text}
    </div>
  )
}


function DarkArrow() {
  return (
    <div className="ml-6 text-[#FF8A3D]">
      ↓
    </div>
  )
}


function Comparison({ title, items, orange }) {
  return (
    <div
      className={`
        rounded-[24px]
        border-[3px]
        border-[#171512]
        p-7
        ${orange ? "bg-[#FF8A3D]" : "bg-[#FFF9E8]"}
      `}
    >
      <p className="mb-7 text-xs font-black tracking-[2px]">
        {title}
      </p>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={item}>

            <div className="rounded-full border-2 border-[#171512] px-5 py-3 text-sm font-black">
              {item}
            </div>

            {index < items.length - 1 && (
              <div className="py-2 text-center font-black">
                ↓
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  )
}


function DecisionCard({ number, title, children }) {
  return (
    <div className="rounded-[24px] border-[3px] border-[#171512] bg-[#FFF9E8] p-7">

      <div className="mb-5 flex items-center justify-between">
        <span className="text-xs font-black tracking-[2px]">
          {number}
        </span>

        <span className="text-[#FF8A3D]">✦</span>
      </div>

      <h3 className="text-2xl font-black">
        {title}
      </h3>

      <p className="mt-4 text-base font-medium leading-[1.5]">
        {children}
      </p>

    </div>
  )
}


function AngleStep({ label, text, orange }) {
  return (
    <div className="flex flex-col gap-3 border-l-[4px] border-[#FFC928] py-2 pl-6">

      <p className="text-xs font-black tracking-[2px] text-[#FF8A3D]">
        {label}
      </p>

      <p
        className={`
          text-[clamp(25px,3vw,38px)]
          font-black
          leading-tight
          tracking-[-0.03em]
          ${orange ? "text-[#FF8A3D]" : ""}
        `}
      >
        {text}
      </p>

    </div>
  )
}


function AngleArrow() {
  return (
    <div className="py-4 pl-7 text-2xl font-black">
      ↓
    </div>
  )
}


function LookingCard({ title, text }) {
  return (
    <div className="rounded-[24px] border-[3px] border-[#171512] bg-[#FFF9E8] p-7">

      <p className="text-xs font-black tracking-[2px] text-[#FF8A3D]">
        {title}
      </p>

      <p className="mt-5 text-xl font-black leading-[1.3]">
        {text}
      </p>

    </div>
  )
}


export default Leaderly