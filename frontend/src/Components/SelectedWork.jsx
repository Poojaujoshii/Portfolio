import { Link } from "react-router-dom"

const stories = [
  {
    number: "01",
    name: "InvoiceFlow",
    title: "I burdened my own app and my customers without realising it.",
    visual: "11 → 0",
    description:
      "The founder thought the product needed more features. Turns out, it needed less.",
    className: "md:col-span-2",
    path: "/invoiceflow",
  },
  {
    number: "02",
    name: "Leaderly",
    title: "I thought I needed more people to get the work done.",
    visual: "23 PEOPLE ≠ FASTER",
    description:
      "23 hires later, the work was still slow. The problem wasn't headcount.",
    path: "/leaderly",
  },
  {
    number: "03",
    name: "Meetly",
    title: "We kept missing deadlines, and I thought my team was incapable.",
    visual: "TEAM → WAIT → FOUNDER",
    description:
      "The team wasn't stuck. They were waiting for the founder.",
    path: "/meetly",
  },
  {
    number: "04",
    name: "Growly",
    title: "My KPIs kept me in delulu.",
    visual: "USERS ↑  VALUE →",
    description:
      "The numbers looked great. They just weren't measuring the thing that mattered.",
    path: "/growly",
  },
  {
    number: "05",
    name: "Taskly",
    title: "I did exactly what my customers asked. But it was still wrong.",
    visual: "MORE FREEDOM → MORE CONFUSION",
    description:
      "Customers asked for customisation. What they actually needed was just enough flexibility.",
    path: "/taskly",
  },
]

function SelectedWork() {
  return (
    <section
      id="work"
      className="bg-[#FFFDF7] px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#3A2418]">
            Selected work
          </p>

          <h2 className="text-5xl font-black leading-[0.95] tracking-tight text-[#151515] md:text-7xl">
            Okay, here's
            <span className="text-[#F5B800]"> the good stuff.</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#3A2418] md:text-xl">
            Five founder stories. Five different problems. A suspicious amount
            of “wait… that's not what I thought was happening.”
          </p>
        </div>

        {/* Story grid */}
        <div className="grid gap-6 md:grid-cols-2">

          {stories.map((story) => (
            <Link
              key={story.name}
              to={story.path}
              className={`group relative overflow-hidden rounded-[2rem] border-2 border-[#151515] bg-[#FFF1A8] p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[10px_10px_0px_#151515] md:p-9 ${
                story.className || ""
              }`}
            >

              {/* Top row */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-black tracking-widest text-[#3A2418]">
                  {story.number}
                </span>

                <span className="rounded-full border border-[#151515] bg-[#FFFDF7] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#151515]">
                  Founder story
                </span>
              </div>

              {/* Visual hook */}
              <div className="my-12">
                <p className="text-4xl font-black leading-none tracking-tight text-[#151515] md:text-6xl">
                  {story.visual}
                </p>
              </div>

              {/* Story */}
              <div className="max-w-2xl">
                <p className="mb-2 text-sm font-black uppercase tracking-wider text-[#3A2418]">
                  {story.name}
                </p>

                <h3 className="text-2xl font-black leading-tight text-[#151515] md:text-3xl">
                  {story.title}
                </h3>

                <p className="mt-4 max-w-xl text-base leading-relaxed text-[#3A2418]">
                  {story.description}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-8 flex items-center justify-between">
                <span className="text-sm font-black uppercase tracking-wider text-[#151515]">
                  Read the story
                </span>

                <span className="text-3xl transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  )
}

export default SelectedWork