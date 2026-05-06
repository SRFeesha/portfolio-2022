import Link from "next/link"
import { ExplicativePicture } from "@/components/explicative-picture"

import components from "@/assets/img/case-studies/syntax-design-system/iso-comps.png"
import survey from "@/assets/img/case-studies/syntax-design-system/survey-results.png"
import Storybook from "@/assets/img/case-studies/table/storybook.png"
import TMSAdoption from "@/assets/img/case-studies/syntax-design-system/tms-adoption-march-2025.png"

import team from "@/assets/img/case-studies/syntax-design-system/syntax-team.jpg"

// NEW IMAGES - You'll need to add these
// Placeholder paths - replace with your actual image imports
// import productDiagram from "@/assets/img/case-studies/syntax-design-system/product-tech-stacks.png"
// import storybookComparison from "@/assets/img/case-studies/syntax-design-system/storybook-comparison.png"
// import componentComparison from "@/assets/img/case-studies/syntax-design-system/simple-vs-complex.png"
// import adoptionStatus from "@/assets/img/case-studies/syntax-design-system/adoption-status.png"

export default function SyntaxDesignSystem() {
  return (
    <main className="container px-4 pb-20 mx-auto max-w-[800px] text-stone-600">
      {/* HERO SECTION */}
      <h1 className="mt-20 mb-6 text-5xl font-bold sm:text-6xl md:mt-32 text-stone-800">
        Syntax Design System
      </h1>
      <h2 className="mb-10 text-2xl text-stone-700">
        Driving adoption when reality fights back
      </h2>
      <p className="mb-6 text-xl">
        Since January 2023, I've been leading the design direction of Syntax, a
        design system for the localization industry serving 6 products across a
        newly merged company.{" "}
        <span class="highlight">
          The challenge wasn't building the design system. It was getting teams
          to actually use it.
        </span>
      </p>
      <section className="mt-10 mb-16 space-y-4">
        <h2 className="text-2xl font-semibold text-stone-800">The Stakes</h2>
        <p className="text-xl">
          <strong>For customers:</strong> Inconsistent experiences across
          products. Same tasks, different patterns.
        </p>
        <p className="text-xl">
          <strong>For business:</strong> New volume-based pricing required
          platform thinking, not disconnected tools.
        </p>
        <p className="text-xl">
          <strong>For teams:</strong> Constant reinvention. No reuse.
          Compounding tech debt.
        </p>
      </section>
      <ExplicativePicture
        caption="An isometric view of some of the Syntax components"
        src={components}
      />
      <section className="mt-20 mb-32 space-y-4">
        <h2 className="text-3xl font-bold text-stone-800">The Problem</h2>
        <p className="text-xl">
          When Memsource acquired Phrase in 2022, everyone agreed we needed a
          unified design system.{" "}
          <span class="highlight">But agreement ≠ adoption.</span>
        </p>

        <div className="pt-4">
          <p className="mb-2 text-xl font-semibold text-stone-800">
            Technical reality:
          </p>
          <ul className="space-y-2 text-xl list-disc list-outside ms-8">
            <li>3 tech stacks (Vue, Rails, Grails)</li>
            <li>2 products couldn't adopt without complete rewrites</li>
            <li>Biggest product (TMS) stuck on decade-old codebase</li>
          </ul>
        </div>

        <div className="pt-4">
          <p className="mb-2 text-xl font-semibold text-stone-800">
            Organizational reality:
          </p>
          <ul className="space-y-2 text-xl list-disc list-outside ms-8">
            <li>Bottom-up desire, top-down constraints</li>
            <li>Teams buried in feature work</li>
            <li>I was new, with limited influence</li>
          </ul>
        </div>

        {/* PLACEHOLDER FOR PRODUCT DIAGRAM
        <div className="p-8 my-8 border-2 border-dashed rounded-lg bg-stone-50 border-stone-300">
          <p className="text-center text-stone-500">
            📸 Image placeholder: Product/tech stack diagram showing 6 products
            with their different stacks
          </p>
        </div> */}
      </section>
      <section className="mt-20 mb-32 space-y-4">
        <h2 className="text-3xl font-bold text-stone-800">
          My Approach: Pragmatic Incrementalism
        </h2>
        <p className="text-xl">
          I couldn't wait for perfect conditions. Instead, I focused on making
          adoption progressively easier, not forcing it.
        </p>

        <dl className="pt-6 space-y-6">
          <div>
            <dt className="text-xl font-semibold text-stone-800">
              Build for scale, not specificity
            </dt>
            <dd className="text-xl">
              Composable, modular patterns that flex across use cases. Say no to
              hyper-specialized components.
            </dd>
          </div>

          <div>
            <dt className="text-xl font-semibold text-stone-800">
              Meet teams where they are
            </dt>
            <dd className="text-xl">
              Different tech stacks = different adoption paths. Find pragmatic
              bridges, even uncomfortable ones.
            </dd>
          </div>

          <div>
            <dt className="text-xl font-semibold text-stone-800">
              <span className="-ml-1 highlight">Default to good</span>
            </dt>
            <dd className="text-xl">
              Make the right choice the easiest choice. Adoption happens
              organically, not through mandate.
            </dd>
          </div>
          <div>
            <dt className="text-xl font-semibold text-stone-800">
              Prove value in production
            </dt>
            <dd className="text-xl">
              Components must work in real product complexity, not just
              Storybook demos.
            </dd>
          </div>
        </dl>
      </section>
      <section className="mt-20 mb-32 space-y-4">
        <h2 className="text-3xl font-bold text-stone-800">
          The CSS Toolkit: An Uncomfortable Compromise
        </h2>
        <p className="text-xl">
          Two products were built in Rails. Our design system was built in Vue.
          A complete rewrite would take months the engineering team didn't have.
        </p>

        <div className="pt-4">
          <p className="mb-3 text-xl font-semibold text-stone-800">
            The options:
          </p>
          <ol className="space-y-2 text-xl list-decimal list-outside ms-8">
            <li>Force a rewrite (impossible - no capacity)</li>
            <li>Do nothing (unacceptable - permanent fragmentation)</li>
            <li>Build a CSS-only toolkit (painful but pragmatic)</li>
          </ol>
        </div>

        <p className="pt-4 text-xl font-semibold">We chose option 3.</p>

        <ExplicativePicture src={survey} className="rotate-4" />
        {/* STORYBOOK COMPARISON IMAGE
        <div className="p-8 my-8 border-2 border-dashed rounded-lg bg-stone-50 border-stone-300">
          <p className="text-center text-stone-500">
            📸 Image placeholder: Side-by-side of Vue Storybook vs CSS toolkit
            Storybook
          </p>
          <p className="mt-2 text-sm text-center text-stone-400">
            Caption: "Same visual language, different architecture"
          </p>
        </div> */}

        <div className="pt-4">
          <p className="mb-2 text-xl font-semibold text-stone-800">
            What it solved:
          </p>
          <p className="text-xl">
            Rails products could use Syntax's visual language - colors,
            typography, spacing, basic styles - without changing their tech
            stack.
          </p>
        </div>

        <div className="pt-4">
          <p className="mb-2 text-xl font-semibold text-stone-800">
            What it didn't solve:
          </p>
          <p className="text-xl">
            Complex component logic. Tables, dropdowns, filters - teams had to
            rebuild these themselves. Every update requires maintaining two
            systems.
          </p>
        </div>

        {/* COMPONENT COMPARISON IMAGE */}
        {/* <div className="p-8 my-8 border-2 border-dashed rounded-lg bg-stone-50 border-stone-300">
          <p className="text-center text-stone-500">
            📸 Image placeholder: Simple component (button ✓) vs complex
            component (table ✗)
          </p>
        </div> */}
        <ExplicativePicture
          src={TMSAdoption}
          caption={"TMS adoptio until March 2025"}
        />

        <p className="text-xl">
          Three years later: The tech debt is <em>compounding. </em>
          The gap between Vue and CSS-toolkit products grows each quarter.
          Updates take twice as long.
        </p>

        <p className="mt-8 mb-3 text-xl font-semibold text-stone-800">
          Was this the right call?
        </p>
        <p className="text-xl">
          <strong>At the time: Yes.</strong> I was new, with limited influence.
          Rails teams needed something, and a full rewrite wasn't realistic.
        </p>
        <p className="text-xl ">
          <strong>Now:</strong> It bought time and partial consistency, but
          didn't solve the underlying problem - just postponed it.
        </p>
        <p className="text-xl ">
          <strong>The lesson: </strong>
          <span className="highlight">
            Halfway solutions have a shelf life. Sometimes they're necessary to
            move forward, but you're trading immediate progress for future
            complexity.
          </span>
        </p>
      </section>
      <section className="mt-20 mb-32 space-y-4">
        <h2 className="text-3xl font-bold text-stone-800">Where We Are Now</h2>

        <p className="text-xl">
          <strong>
            4 out of 6 products have adopted the Vue design system.
          </strong>{" "}
          The remaining 2 use the CSS toolkit.
        </p>
        <p className="text-xl">
          <strong>
            TMS - our biggest, most complex product - is currently migrating.
          </strong>{" "}
          This migration is driven by engineering's KPI to escape legacy Grails,
          not by the design system team. But it's proving the system's value in
          production at scale.
        </p>
        <p className="text-xl">
          The migration is slow. TMS is extremely complex, and the
          <span className="highlight">
            team's capacity is split between migration work and strategic MVP
            projects.
          </span>
        </p>

        {/* ADOPTION STATUS IMAGE
        <div className="p-8 my-8 border-2 border-dashed rounded-lg bg-stone-50 border-stone-300">
          <p className="text-center text-stone-500">
            📸 Image placeholder: Adoption status diagram showing 4/6 adopted,
            TMS migrating
          </p>
        </div> */}
        <ExplicativePicture src={Storybook} />

        <div className="pt-8">
          <h3 className="mb-4 text-2xl font-semibold text-stone-800">
            What I learned:
          </h3>
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-xl font-semibold text-stone-800">
                You can't adoption-strategy your way out of technical debt
              </p>
              <p className="text-xl">
                No amount of great documentation or stakeholder management can
                overcome fundamental tech stack mismatches. Real change requires
                engineering capacity and top-down commitment.
              </p>
            </div>

            <div>
              <p className="mb-2 text-xl font-semibold text-stone-800">
                Build influence early
              </p>
              <p className="text-xl">
                By the time I realized we needed executive sponsorship for
                migrations, teams were already entrenched in their workarounds.
                Starting with stronger top-down support would have accelerated
                adoption significantly.
              </p>
            </div>

            <div>
              <p className="mb-2 text-xl font-semibold text-stone-800">
                <span className="-ml-1 highlight">Pragmatic beats perfect</span>
              </p>
              <p className="text-xl">
                The CSS toolkit compromise wasn't elegant, but they moved things
                forward. In constrained environments, incremental progress is
                real progress.
              </p>
            </div>

            <div>
              <p className="mb-2 text-xl font-semibold text-stone-800">
                Momentum compounds - slowly
              </p>
              <p className="text-xl">
                Three years felt long while living it. But now, with TMS
                migrating and proving the system works at scale, other teams are
                watching. The next product adoption will be easier than the
                last.
              </p>
            </div>
          </div>
        </div>

        {/* TEAM PHOTO */}
        <ExplicativePicture
          caption="Group photo from a team activity after our roadmap meetup"
          src={team}
        />
      </section>
      {/* NAVIGATION FOOTER */}
      <section className="pt-12 mt-32 duration-300 ease-in-out border-t">
        <h2 className="mt-4 mb-8 text-xl font-medium text-center text-stone-700">
          More case studies
        </h2>
        <div className="flex justify-between gap-2 lg:gap-8">
          <Link href="/case-studies/table">

            <div className="p-6 bg-white border shadow-xs opacity-75 hover:border-stone-300 border-stone-200 rounded-xl hover:opacity-100 hover:shadow-sm">
              ← Table Component
            </div>

          </Link>
          <Link href="/case-studies/research">

            <div className="p-6 bg-white border shadow-xs opacity-75 hover:border-stone-300 border-stone-200 rounded-xl hover:opacity-100 hover:shadow-sm">
              Research →
            </div>

          </Link>
        </div>
      </section>
    </main>
  );
}
