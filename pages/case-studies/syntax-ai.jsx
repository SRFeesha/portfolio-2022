import Link from "next/link"

export default function SyntaxAI() {
  return (
    <main className="container px-4 pb-20 mx-auto max-w-[800px] text-stone-600">
      {/* HERO */}
      <header className="mt-20 md:mt-32">
        <h1 className="mb-6 text-5xl font-bold sm:text-6xl text-stone-800 font-display">
          Teaching the design system to teach itself
        </h1>
        <p className="mb-2 text-2xl text-stone-700">
          A design system spike at Phrase, and what it exposed
        </p>
        <p className="text-sm tracking-wide uppercase text-stone-500">
          Senior Product Designer · Design Systems · 2026
        </p>

        {/*
          VISUAL BRIEF — Hero.
          Typographic or abstract treatment that signals "system as artifact."
          Not a UI screenshot. Should hold the page on its own. Confident,
          slightly contrarian, more book cover than feature shot.
          Replace this region with the final asset when ready.
        */}
        <figure
          role="img"
          aria-label="Hero visual placeholder"
          className="flex items-center justify-center w-full mt-12 border aspect-[4/3] rounded-xl border-stone-200 bg-stone-100"
        >
          <span className="text-sm text-stone-400">Hero visual</span>
        </figure>
      </header>

      {/* AT A GLANCE */}
      <section className="my-24">
        <h2 className="mb-10 text-sm tracking-widest uppercase text-stone-500">
          At a glance
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          <div>
            <p
              className="font-semibold leading-none tabular-nums text-6xl md:text-7xl text-stone-800 font-display"
              aria-label="125"
            >
              125
            </p>
            <p className="mt-4 text-base text-stone-500">
              Vue components in Syntax
            </p>
          </div>
          <div>
            <p
              className="font-semibold leading-none tabular-nums text-6xl md:text-7xl text-stone-800 font-display"
              aria-label="13 of 14"
            >
              13<span className="text-stone-400">/</span>14
            </p>
            <p className="mt-4 text-base text-stone-500">
              Content prompts where the grounded version won
            </p>
          </div>
          <div>
            <p
              className="font-semibold leading-none tabular-nums text-6xl md:text-7xl text-stone-800 font-display"
              aria-label="2 weeks"
            >
              2<span className="ml-2 text-3xl text-stone-500 align-baseline font-sans font-medium">weeks</span>
            </p>
            <p className="mt-4 text-base text-stone-500">
              Spike duration, sponsored by the CPTO
            </p>
          </div>
        </div>
      </section>

      {/* THE SETUP */}
      <section className="my-24">
        <h2 className="mb-6 text-3xl font-bold text-stone-800">The setup</h2>
        <p className="mb-6 text-xl">
          Phrase is a localization platform. Our design system, Syntax, is
          around 125 Vue 3 components shipped across the product. Most engineers
          want to use it well. Many can't, because nobody can hold a
          125-component system in their head while building under deadline. The
          result is the gap every design system team knows: wrong components,
          hardcoded copy, layouts that almost belong.
        </p>
        <p className="mb-6 text-xl">
          The default 2025 answer was to give designers AI tools so they ship
          faster. Figma Make, Lovable, design-to-code in a click.
        </p>
        <p className="text-xl">I went the other way.</p>
      </section>

      {/* THE REFRAME */}
      <section className="my-24">
        <h2 className="mb-6 text-3xl font-bold text-stone-800">The reframe</h2>
        <p className="mb-6 text-xl">
          The interesting question wasn't{" "}
          <em>how do we help designers ship faster?</em> It was{" "}
          <em>
            how do we make Syntax legible enough that anyone — engineer, PM,
            anyone vibe-coding a settings page — can self-serve compliant UI
            without pulling a designer in?
          </em>
        </p>
        <p className="text-xl">
          This isn't an AI problem. It's a documentation problem AI happens to
          expose. The same gaps that make a junior engineer struggle are the
          gaps that make an LLM hallucinate.
        </p>

        <blockquote className="my-16 md:my-20 md:-mx-8">
          <p className="text-3xl md:text-4xl font-display font-medium text-stone-800 leading-tight">
            The bottleneck isn't that designers ship slowly. It's that
            everything outside a designer's queue drifts away from the system.
          </p>
        </blockquote>
      </section>

      {/* THE CONTRARIAN CALL */}
      <section className="my-24">
        <h2 className="mb-8 text-3xl font-bold text-stone-800">
          The contrarian call
        </h2>

        {/*
          VISUAL — Three-column comparison: Figma Make / Lovable / Claude Code.
          Rows: Framework, Repo access, Output type. Only Claude Code returns
          "real Syntax." This is the case-defining visual.
        */}
        <div className="my-10 sm:-mx-6 md:-mx-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                tool: "Figma Make",
                framework: "React",
                access: "External, no repo",
                output: "Syntax-shaped",
                accent: false,
              },
              {
                tool: "Lovable",
                framework: "React",
                access: "External, no repo",
                output: "Syntax-shaped",
                accent: false,
              },
              {
                tool: "Claude Code",
                framework: "Vue",
                access: "Inside the repo, Nexus + VPN",
                output: "Real Syntax",
                accent: true,
              },
            ].map((col) => (
              <div
                key={col.tool}
                className={
                  "p-6 rounded-xl border " +
                  (col.accent
                    ? "border-stone-800 bg-stone-800 text-stone-100"
                    : "border-stone-200 bg-white text-stone-700")
                }
              >
                <p
                  className={
                    "mb-6 text-lg font-semibold font-display " +
                    (col.accent ? "text-white" : "text-stone-800")
                  }
                >
                  {col.tool}
                </p>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt
                      className={
                        "tracking-wide uppercase text-xs " +
                        (col.accent ? "text-stone-400" : "text-stone-400")
                      }
                    >
                      Framework
                    </dt>
                    <dd className="mt-1">{col.framework}</dd>
                  </div>
                  <div>
                    <dt
                      className={
                        "tracking-wide uppercase text-xs " +
                        (col.accent ? "text-stone-400" : "text-stone-400")
                      }
                    >
                      Repo access
                    </dt>
                    <dd className="mt-1">{col.access}</dd>
                  </div>
                  <div>
                    <dt
                      className={
                        "tracking-wide uppercase text-xs " +
                        (col.accent ? "text-stone-400" : "text-stone-400")
                      }
                    >
                      Output type
                    </dt>
                    <dd
                      className={
                        "mt-1 font-medium " +
                        (col.accent ? "text-white" : "text-stone-800")
                      }
                    >
                      {col.output}
                    </dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>

        <p className="mb-6 text-xl">
          Figma Make and Lovable both generate React. Phrase ships Vue. Both
          live outside our network. They can't authenticate to Nexus, can't see
          private repos, can't import the actual <code>SynButton</code>. What
          they produce is <em>Syntax-shaped,</em> never Syntax.
        </p>
        <p className="mb-6 text-xl">
          Claude Code runs in the product repository, with full Nexus and VPN
          access. It imports the real component. The output isn't an
          approximation. It's actual code that ships.
        </p>
        <p className="text-xl">
          That difference between "Syntax-shaped" and "Syntax" is the whole
          project.
        </p>
      </section>

      {/* WHAT IT PRODUCES */}
      <section className="my-24">
        <h2 className="mb-6 text-3xl font-bold text-stone-800">
          What it produces
        </h2>
        <p className="mb-6 text-xl">
          To get a read on where we actually were, we ran a small blind
          comparison. Same prompts, two repos, one with the grounding layer,
          one without. Outputs randomized, scored by an anonymous panel.
        </p>

        {/*
          VISUAL — Side-by-side modal comparison. Left: vanilla. Right: grounded.
          Annotations marking the differences: sentence case, object reference,
          conciseness.
        */}
        <div className="grid grid-cols-1 gap-6 my-10 md:grid-cols-2 sm:-mx-6 md:-mx-12">
          <figure className="p-6 bg-white border shadow-xs rounded-xl border-stone-200">
            <figcaption className="mb-4 text-xs tracking-widest uppercase text-stone-400">
              Vanilla
            </figcaption>
            <p className="mb-3 text-lg font-semibold text-stone-800 font-display">
              Delete Translation Memory
            </p>
            <p className="text-base text-stone-600">
              Are you sure you want to delete 'Product Strings TM'? This action
              cannot be undone and all data will be permanently removed.
            </p>
          </figure>
          <figure className="p-6 border shadow-xs rounded-xl border-stone-800 bg-stone-50">
            <figcaption className="mb-4 text-xs tracking-widest uppercase text-stone-500">
              Grounded
            </figcaption>
            <p className="mb-3 text-lg font-semibold text-stone-800 font-display">
              Delete Product Strings TM
            </p>
            <p className="text-base text-stone-700">
              This translation memory will be permanently removed. This action
              cannot be undone.
            </p>
          </figure>
        </div>
        <ul className="flex flex-wrap gap-2 my-6 sm:-mx-6 md:-mx-12">
          {["sentence case", "object reference", "conciseness"].map((tag) => (
            <li
              key={tag}
              className="px-3 py-1 text-xs tracking-wide rounded-full text-stone-600 bg-stone-100 border border-stone-200"
            >
              {tag}
            </li>
          ))}
        </ul>

        <p className="mb-6 text-xl">
          Twelve words instead of thirty-one. Specific noun. No rhetorical
          question. Smaller, sharper, more specific. The pattern held across
          the rest of the panel.
        </p>
        <p className="text-xl">
          This wasn't proof the approach works. We already knew the trajectory
          was right. It was a thermometer reading: how good is the system
          already, today?
        </p>
      </section>

      {/* THE HARDER TRUTH */}
      <section className="my-24">
        <h2 className="mb-6 text-3xl font-bold text-stone-800">
          The harder truth
        </h2>

        {/*
          VISUAL — Quiet, lower-key spread. A single image — a partially
          completed system, a half-finished diagram — that signals
          "still being built."
        */}
        <figure
          role="img"
          aria-label="Harder-truth visual placeholder"
          className="flex items-center justify-center w-full my-10 border aspect-[16/9] rounded-xl border-stone-200 bg-stone-50"
        >
          <span className="text-sm text-stone-400">
            Still being built
          </span>
        </figure>

        <p className="mb-6 text-xl">
          Teaching AI to read Syntax is the smaller half of the problem.
        </p>
        <p className="mb-6 text-xl">
          The bigger half is this: every rule that currently lives inside
          people's experience and taste now has to be encoded as an explicit
          decision the machine can read. Why this component and not that one.
          When sentence case stops and title case begins. Which density variant
          goes with which surface. What "feels right" used to be enough,
          because a designer was in the room. Now the room includes engineers,
          PMs, and agents — and "feels right" doesn't compile.
        </p>
        <p className="mb-6 text-xl">
          That's a lot of work. It's slower than the spike. It's less
          photogenic. And it's where the actual leverage lives.
        </p>
        <p className="text-xl">
          A spike's job is to produce a go/no-go recommendation. We got the go.
          The work that turns the result into a system hasn't started yet.
        </p>
      </section>

      {/* THE CLOSING ARGUMENT */}
      <section className="my-24">
        <h2 className="mb-6 text-3xl font-bold text-stone-800">
          The closing argument
        </h2>

        {/*
          VISUAL — Closing visual. A single emblematic image — the
          .ai-context/ file tree, the modal pair, or a three-layer diagram.
          Whatever closes the rhythm.
        */}
        <figure
          role="img"
          aria-label="Closing visual placeholder"
          className="flex items-center justify-center w-full my-10 border aspect-[16/9] rounded-xl border-stone-200 bg-stone-100"
        >
          <span className="text-sm text-stone-400">Closing visual</span>
        </figure>

        <p className="mb-6 text-xl">
          Most "AI for design" work is automating designer activities. That's
          the obvious 70%, and it's the wrong 70%. The interesting work is the
          inverse: making the system itself self-serve, so design support stops
          being a bottleneck for the work that doesn't need a designer's eye to
          begin with.
        </p>
        <p className="text-xl">
          <span className="highlight">
            You don't need a perfect system. You need one legible enough to
            teach.
          </span>
        </p>
      </section>

      {/* SIGNATURE */}
      <section className="pt-10 my-20 border-t border-stone-200">
        <p className="italic text-stone-500">
          Ben Marini · benmarini.com · ben@…
        </p>
        <p className="italic text-stone-500">
          Full case study, ADRs, and evaluation data available on request.
        </p>
      </section>

      {/* NAVIGATION FOOTER */}
      <section className="pt-12 mt-32 duration-300 ease-in-out border-t">
        <h2 className="mt-4 mb-8 text-xl font-medium text-center text-stone-700">
          More case studies
        </h2>
        <div className="flex justify-between gap-2 lg:gap-8">
          <Link href="/case-studies/syntax">
            <a>
              <div className="p-6 bg-white border shadow-xs opacity-75 hover:border-stone-300 border-stone-200 rounded-xl hover:opacity-100 hover:shadow-sm">
                ← Syntax Design System
              </div>
            </a>
          </Link>
          <Link href="/case-studies/table">
            <a>
              <div className="p-6 bg-white border shadow-xs opacity-75 hover:border-stone-300 border-stone-200 rounded-xl hover:opacity-100 hover:shadow-sm">
                Table Component →
              </div>
            </a>
          </Link>
        </div>
      </section>
    </main>
  )
}
