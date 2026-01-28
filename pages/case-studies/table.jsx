import Link from "next/link"
import { ExplicativePicture } from "@/components/explicative-picture"
import { Button } from "@/components/button"

import EmptyState from "@/assets/img/case-studies/table/empty-state.png"
import TablePreset from "@/assets/img/case-studies/table/table-preset.png"
import CellSpecs from "@/assets/img/case-studies/table/cell-specs.png"
import DocsWebsite from "@/assets/img/case-studies/table/docs-website.png"
import Storybook from "@/assets/img/case-studies/table/storybook.png"
import LogicalOperators from "@/assets/img/case-studies/table/logical-operators.png"

export default function Table() {
  return (
    <main className="container px-4 pb-20 mx-auto max-w-[800px] text-pretty text-stone-700">
      <h1 className="mt-20 mb-6 text-5xl font-bold sm:text-6xl md:mt-32 text-stone-800">
        Establishing a scalable data table pattern across products
      </h1>

      <section className="mt-16 mb-48 space-y-4">
        <h2 className="text-3xl font-bold text-stone-800">Context</h2>
        <p className="text-xl">
          Our platform is made of six different products, built at different
          times with different technologies. Over the years, tables quietly
          multiplied. Same purpose, different behaviors. Filters worked
          differently. Actions moved around. Accessibility was inconsistent.
          Performance varied depending on who built what and when.
        </p>

        <p className="text-xl">
          The result was predictable. A fragmented experience for users and
          constant friction for designers and developers.
        </p>

        <p className="text-xl">
          Tables were not broken in isolation. The pattern was.
        </p>

        <ExplicativePicture src={EmptyState} />
      </section>

      <section className="mt-16 mb-48 space-y-4">
        <h2 className="text-3xl font-bold text-stone-800">Goal</h2>
        <p className="text-xl">The goal was not to redesign a single table.</p>

        <p className="text-xl">
          It was to establish a{" "}
          <strong>scalable, accessible table pattern</strong> that could work
          across products, technologies, and use cases.
        </p>

        <p className="text-xl">
          One that:
          <ul className="space-y-2 text-xl list-disc list-outside ms-8 mt-2 list-disc-stone-100 ">
            <li>Feels consistent for users</li>
            <li>Is fast to design in Figma</li>
            <li>Is modular and predictable to implement</li>
            <li>Scales from simple lists to complex data-heavy views</li>
          </ul>
        </p>

        <p className="text-xl">
          The table became the test case for aligning design, code, and product
          teams around a shared system pattern.
        </p>
        <ExplicativePicture src={TablePreset} />
      </section>

      <section className="mt-16 mb-48 space-y-4">
        <h2 className="text-3xl font-bold text-stone-800">Approach</h2>
        <p className="text-xl">
          Instead of optimizing for one “perfect” table, I focused on
          <strong> modularity</strong>.
        </p>

        <p className="text-xl">
          The table was designed as a <strong>composition </strong>of
          interchangeable parts rather than a monolithic component. Layout,
          filters, search, pagination, row actions, loading states, and column
          behavior could be mixed and matched depending on context.
        </p>

        <p className="text-xl">
          This allowed teams to build what they needed without reinventing
          interaction patterns or breaking consistency.
        </p>

        <ExplicativePicture src={CellSpecs} />
      </section>

      <section className="mt-16 mb-48 space-y-4">
        <h2 className="text-3xl font-bold text-stone-800">
          Spotlight: Filters as a system
        </h2>
        <p className="text-xl">
          Filters were one of the most impactful pieces of the pattern.
        </p>

        <p className="text-xl">
          Previously, each product solved filtering differently. Now, filters
          are designed as a plug-and-play system:
        </p>

        <p className="text-xl">
          <ul className="space-y-2 text-xl list-disc list-outside ms-8 mt-2 list-disc-stone-100 ">
            <li>Multiple filter types with clear data models</li>
            <li>A dedicated filter menu and active filter bar</li>
            <li>Strict interaction and visual guidelines</li>
            <li>Accessibility baked in from the start</li>
            <li>Validated through research, not vibes</li>
          </ul>
        </p>

        <p className="text-xl">
          For developers, filters became composable and predictable. For users,
          filtering became familiar across products, even when the data changed.
        </p>

        <ExplicativePicture src={DocsWebsite} />
      </section>

      <section className="mt-16 mb-48 space-y-4">
        <h2 className="text-3xl font-bold text-stone-800">Impact so far</h2>
        <p className="text-xl">
          This work is still evolving, but the benefits are already visible:
          <ul className="space-y-2 text-xl list-disc list-outside ms-8 mt-2 list-disc-stone-100 ">
            <li>Faster implementation thanks to clear component boundaries</li>
            <li>Stronger alignment between design and code</li>
            <li>More consistent experiences across products</li>
            <li>
              Accessible filtering patterns reused instead of re-implemented
            </li>
          </ul>
        </p>

        <p className="text-xl">
          Even when individual tables are not yet “perfect” in production, teams
          now have a clear reference point instead of guesswork.
        </p>

        <ExplicativePicture src={Storybook} />
      </section>

      <section className="mt-16 mb-48 space-y-4">
        <h2 className="text-3xl font-bold text-stone-800">
          Reflection and next steps
        </h2>

        <p className="text-xl">
          The table pattern proved that complex components are best designed as
          systems, not one-off solutions.
        </p>

        <p className="text-xl">
          Filters are only one piece of the puzzle. Next steps include more
          advanced filtering logic, such as negation, conditional operators, and
          richer query building. The same modular thinking will guide those
          additions.
        </p>
        <p className="text-xl">
          This case study is less about tables and more about how a design
          system can turn fragmentation into momentum.
        </p>

        <ExplicativePicture src={LogicalOperators} />
      </section>
    </main>
  )
}
