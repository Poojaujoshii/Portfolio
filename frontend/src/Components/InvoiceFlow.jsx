import { Link } from "react-router-dom"
function InvoiceFlow() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#FFF9E8] px-8 py-24 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px]">

        {/* =====================================
            SECTION INTRO
        ====================================== */}

        <div className="mb-20 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="text-sm font-black tracking-[2px]">
                SELECTED WORK
              </span>

              <span className="text-xl text-[#FF8A3D]">✦</span>
            </div>

            <h2 className="max-w-[800px] text-[clamp(60px,8vw,120px)] font-black leading-[0.82] tracking-[-0.07em]">
              Okay, here's
              <br />
              <span className="text-[#FF8A3D]">the good stuff.</span>
            </h2>
          </div>

          <div className="max-w-[320px] rotate-[-2deg] pb-2 lg:pb-4">
            <p className="text-lg font-bold leading-[1.4]">
              Five founder stories.
              <br />
              Five different problems.
              <br />
              <span className="text-[#FF8A3D]">
                A suspicious amount of
              </span>{" "}
              "wait… that's not what I thought was happening."
            </p>
          </div>

        </div>


        {/* =====================================
            INVOICEFLOW HERO
        ====================================== */}

        <article className="relative overflow-hidden rounded-[36px] border-[3px] border-[#171512] bg-[#FFC928] p-7 shadow-[8px_8px_0_#171512] lg:p-14">

          {/* decorative blobs */}
          <div className="absolute -right-20 -top-24 h-72 w-72 rotate-[18deg] rounded-[50%_40%_60%_35%] bg-[#FFE39A]" />

          <div className="absolute bottom-[-80px] left-[-50px] h-48 w-56 rotate-[-12deg] rounded-[60%_40%_30%_70%] bg-[#FF8A3D]" />

          {/* dots */}
          <div className="absolute right-[25%] top-8 flex gap-3">
            <span className="h-3 w-3 rounded-full bg-[#FF8A3D]" />
            <span className="mt-4 h-2 w-2 rounded-full bg-[#171512]" />
            <span className="h-2 w-2 rounded-full bg-[#FF8A3D]" />
          </div>

          <div className="relative z-10">

            {/* story number */}
            <div className="mb-16 flex items-center justify-between">
              <span className="text-sm font-black tracking-[2px]">
                01 / INVOICEFLOW
              </span>

              <span className="rotate-[4deg] text-sm font-black">
                FOUNDER STORY ✦
              </span>
            </div>


            {/* title */}
            <div className="max-w-[1000px]">

              <h3 className="text-[clamp(58px,8vw,115px)] font-black leading-[0.84] tracking-[-0.07em]">
                I thought we needed
                <br />
                <span className="text-[#FF8A3D]">
                  more features.
                </span>
              </h3>

              <div className="relative mt-5 inline-block">

                <p className="text-[clamp(34px,4vw,60px)] font-black leading-none tracking-[-0.05em]">
                  Turns out, we needed less.
                </p>

                {/* squiggle */}
                <svg
                  className="absolute -bottom-5 left-0 w-[70%]"
                  viewBox="0 0 400 15"
                  fill="none"
                >
                  <path
                    d="M3 8C30 14 55 2 82 8C110 14 138 2 166 8C194 14 222 2 250 8C278 14 306 2 335 8C360 13 382 5 397 7"
                    stroke="#171512"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>

              </div>

            </div>


            {/* intro */}
            <div className="mt-16 max-w-[620px]">

              <p className="text-xl font-medium leading-[1.55]">
                InvoiceFlow was losing customers.
                <br />
                The founder's first instinct was simple:
              </p>

              <p className="mt-2 text-3xl font-black">
                build more.
              </p>

            </div>


            {/* =================================
                BIG NUMBERS
            ================================== */}

            <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-3">

              <Stat number="11" label="FEATURES" />

              <Stat number="6" label="MONTHS" />

              <Stat
                number="0"
                label="RETENTION IMPROVEMENT"
                accent
              />

            </div>

          </div>
        </article>


        {/* =====================================
            THE SITUATION
        ====================================== */}

        <div className="grid gap-12 py-28 lg:grid-cols-[0.7fr_1.3fr] lg:py-36">

          <SectionLabel number="01" title="THE SITUATION" />

          <div className="max-w-[720px] space-y-7 text-xl leading-[1.6]">

            <p>
              InvoiceFlow had been losing customers, and the founder
              assumed the problem was simple: the product wasn't
              feature-rich enough.
            </p>

            <p>
              So whenever a customer asked for something, they built it.
              More requests meant more features. More features meant a
              stronger product.
            </p>

            <p className="font-black">
              At least, that was the theory.
            </p>

          </div>

        </div>


        {/* =====================================
            PLOT TWIST
        ====================================== */}

        <section className="relative overflow-hidden rounded-[32px] bg-[#171512] px-7 py-20 text-[#FFF9E8] lg:px-16 lg:py-28">

          {/* decorative orange blob */}
          <div className="absolute -right-16 -top-16 h-48 w-48 rotate-[25deg] rounded-[50%_40%_60%_35%] bg-[#FF8A3D]" />

          {/* yellow circle */}
          <div className="absolute bottom-12 right-[20%] h-5 w-5 rounded-full bg-[#FFC928]" />

          <div className="relative z-10">

            <div className="mb-12 flex items-center gap-3">
              <span className="text-sm font-black tracking-[2px] text-[#FFC928]">
                THE PLOT TWIST
              </span>

              <span className="text-[#FF8A3D]">✦</span>
            </div>


            <div className="max-w-[950px]">

              <p className="text-xl font-bold text-[#FFC928]">
                A cancelled customer didn't ask for another feature.
              </p>

              <blockquote className="mt-8 text-[clamp(42px,6vw,78px)] font-black leading-[0.95] tracking-[-0.05em]">
                "You already have
                <br />
                everything we need."
              </blockquote>

            </div>


            {/* divider */}
            <div className="my-20 h-[2px] w-full bg-[#FFF9E8]/20" />


            <p className="max-w-[900px] text-[clamp(32px,4vw,55px)] font-black leading-[1] tracking-[-0.04em]">

              THE CUSTOMER WASN'T
              <span className="text-[#FF8A3D]"> ASKING FOR MORE.</span>

              <br />

              THE CUSTOMER WAS ASKING
              <span className="text-[#FFC928]"> FOR CLARITY.</span>

            </p>


            {/* onboarding flow */}
            <div className="mt-20">

              <p className="mb-8 text-sm font-black tracking-[2px] text-[#FFC928]">
                WHAT THE PRODUCT HAD BECOME
              </p>

              <div className="flex flex-col gap-3">

                <FlowItem text="14 onboarding steps" highlight />

                <FlowArrow />

                <FlowItem text="tutorials" />

                <FlowArrow />

                <FlowItem text="tooltips" />

                <FlowArrow />

                <FlowItem text="pop-ups" />

                <FlowArrow />

                <FlowItem text="documentation" />

                <FlowArrow />

                <div className="mt-2 text-5xl">
                  😵
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================
            WHAT WAS ACTUALLY HAPPENING
        ====================================== */}

        <div className="grid gap-12 py-28 lg:grid-cols-[0.7fr_1.3fr] lg:py-36">

          <SectionLabel number="02" title="WHAT WAS ACTUALLY HAPPENING" />

          <div className="max-w-[760px]">

            <p className="text-[clamp(35px,4vw,58px)] font-black leading-[1] tracking-[-0.05em]">
              The product wasn't lacking functionality.
            </p>

            <p className="mt-8 text-[clamp(35px,4vw,58px)] font-black leading-[1] tracking-[-0.05em] text-[#FF8A3D]">
              It had accumulated too much complexity.
            </p>

            <div className="mt-12 border-l-[5px] border-[#FFC928] pl-6 text-lg font-medium leading-[1.6]">
              The problem wasn't that customers couldn't get
              enough from the product.
              <br />
              <br />
              The problem was that they couldn't easily understand
              what they already had.
            </div>

          </div>

        </div>


        {/* =====================================
            DECISION
        ====================================== */}

        <section className="relative overflow-hidden rounded-[32px] bg-[#FFE39A] px-7 py-20 lg:px-16 lg:py-24">

          <div className="absolute right-10 top-8 rotate-[12deg] text-4xl">
            ✦
          </div>

          <div className="relative z-10 max-w-[900px]">

            <div className="mb-8 text-sm font-black tracking-[2px]">
              03 / THE DECISION
            </div>

            <h3 className="text-[clamp(42px,5vw,70px)] font-black leading-[0.95] tracking-[-0.05em]">
              Stop adding.
              <br />
              <span className="text-[#FF8A3D]">
                Start simplifying.
              </span>
            </h3>

            <p className="mt-10 max-w-[650px] text-xl font-medium leading-[1.55]">
              Instead of building another feature, the founder
              simplified onboarding and focused on getting customers
              to their first invoice faster.
            </p>

          </div>

          {/* arrow */}
          <div className="absolute bottom-8 right-12 hidden rotate-[-10deg] lg:block">
            <span className="text-7xl font-black">→</span>
          </div>

        </section>


        {/* =====================================
            LESSON
        ====================================== */}

        <section className="relative py-28 lg:py-36">

          <div className="absolute right-[8%] top-20 h-4 w-4 rounded-full bg-[#FF8A3D]" />

          <div className="max-w-[1100px]">

            <div className="mb-8 flex items-center gap-3">
              <span className="text-sm font-black tracking-[2px]">
                04 / THE LESSON
              </span>

              <span className="text-[#FF8A3D]">✦</span>
            </div>

            <h3 className="text-[clamp(60px,8vw,120px)] font-black leading-[0.85] tracking-[-0.07em]">
              More doesn't
              <br />
              automatically
              <br />
              mean{" "}
              <span className="text-[#FF8A3D]">
                better.
              </span>
            </h3>

            <p className="mt-12 max-w-[680px] text-xl font-medium leading-[1.6]">
              Customer requests are worth listening to.
              But they're worth understanding even more.
              Sometimes the best product decision isn't adding
              another capability — it's removing the friction
              around the capabilities customers already have.
            </p>

          </div>

        </section>


        {/* =====================================
            THE POST
        ====================================== */}

        <section className="relative">

          <div className="mb-10 flex items-center gap-4">

            <div className="h-[3px] w-12 bg-[#171512]" />

            <span className="text-sm font-black tracking-[3px]">
              THE POST
            </span>

            <span className="text-[#FF8A3D]">✦</span>

          </div>


          {/* editorial post frame */}
          <div className="relative mx-auto max-w-[900px] rotate-[-0.5deg] border-[3px] border-[#171512] bg-white p-7 shadow-[8px_8px_0_#171512] lg:p-12">

            {/* post header */}
            <div className="mb-10 flex items-center justify-between border-b-2 border-[#171512] pb-6">

              <div>
                <p className="text-lg font-black">
                  POO.
                </p>

                <p className="text-xs font-medium text-black/50">
                  Founder-led LinkedIn post
                </p>
              </div>

              <span className="rotate-[3deg] text-xs font-black text-[#FF8A3D]">
                STORY → POST
              </span>

            </div>


            {/* post content */}
            <div className="space-y-6 text-[18px] leading-[1.65] text-[#171512]">

              <p className="text-2xl font-black">
                I burdened my own app and my customers without realising it.
              </p>

              <p>
                InvoiceFlow had been losing customers, and I thought I knew why.
              </p>

              <p>
                We needed more features.
              </p>

              <p>
                So whenever a customer asked for something, we built it.
              </p>

              <p>
                Over six months, we launched 11 new features.
              </p>

              <p>
                Our roadmap looked great.
                <br />
                Our retention didn't.
              </p>

              <p>
                So I finally spoke to a customer who had cancelled.
              </p>

              <p>
                I expected him to tell me what feature we were missing.
              </p>

              <p className="border-l-4 border-[#FFC928] pl-5 text-xl font-bold">
                Instead, he said:
                <br />
                "Honestly, InvoiceFlow already does everything we need.
                We just don't know which parts we should be using."
              </p>

              <p>
                That made me look at our product differently.
              </p>

              <p>
                So I went through our onboarding myself.
              </p>

              <p>
                There were 14 steps before a new customer could complete
                their first invoice.
              </p>

              <p>
                We had tutorials, tooltips, pop-ups and documentation
                everywhere, all trying to help.
              </p>

              <p>
                But somewhere along the way, we had made the product
                harder to understand.
              </p>

              <p className="text-2xl font-black text-[#FF8A3D]">
                We didn't have a feature problem.
                <br />
                We had a simplicity problem.
              </p>

              <p>
                So instead of adding another feature, we removed unnecessary
                steps from onboarding and focused on getting customers to
                their first invoice faster.
              </p>

              <p>
                That's when I realised:
              </p>

              <p className="text-2xl font-black">
                More features don't automatically make a better product.
              </p>

              <p>
                Customer requests are worth listening to, but they are
                worth understanding even more.
              </p>

              <p>
                And sometimes, improving a product doesn't mean adding something.
              </p>

              <p className="font-black">
                It means taking something away.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================
            NEXT STORY
        ====================================== */}

        <div className="relative mt-32 overflow-hidden border-t-[3px] border-[#171512] pt-16">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <p className="mb-5 text-sm font-black tracking-[2px]">
                NEXT STORY →
              </p>

              <h3 className="max-w-[750px] text-[clamp(40px,5vw,70px)] font-black leading-[0.95] tracking-[-0.05em]">
                I thought I needed
                <br />
                <span className="text-[#FF8A3D]">
                  more people.
                </span>
              </h3>

              <p className="mt-5 text-lg font-bold">
                23 hires later, the problem was still there.
              </p>

            </div>

            <Link
                to="/leaderly"
                className="
                    group
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
                 READ LEADERLY

                <span className="ml-3 transition-transform group-hover:translate-x-1">
                     →
                </span>
            </Link>

          </div>

        </div>

      </div>
    </section>
  )
}


/* =========================================
   SMALL REUSABLE COMPONENTS
========================================= */

function Stat({ number, label, accent }) {
  return (
    <div
      className={`
        rounded-[24px]
        border-[3px]
        border-[#171512]
        p-7
        ${accent ? "bg-[#FF8A3D]" : "bg-[#FFF9E8]"}
      `}
    >
      <div className="text-[70px] font-black leading-none tracking-[-0.06em]">
        {number}
      </div>

      <div className="mt-3 text-xs font-black tracking-[2px]">
        {label}
      </div>
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


function FlowItem({ text, highlight }) {
  return (
    <div
      className={`
        w-fit
        rounded-full
        border-2
        border-[#FFF9E8]
        px-6
        py-3
        text-lg
        font-black
        ${highlight ? "bg-[#FFC928] text-[#171512]" : ""}
      `}
    >
      {text}
    </div>
  )
}


function FlowArrow() {
  return (
    <div className="ml-8 text-xl font-black text-[#FF8A3D]">
      ↓
    </div>
  )
}


export default InvoiceFlow