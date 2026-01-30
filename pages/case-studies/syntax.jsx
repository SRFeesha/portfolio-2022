import Link from "next/link"
import { ExplicativePicture } from "@/components/explicative-picture"
import { Button } from "@/components/button"

import alert from "@/assets/img/case-studies/syntax-design-system/alert-component.png"
import docs from "@/assets/img/case-studies/syntax-design-system/component-docs.png"
import dataviz from "@/assets/img/case-studies/syntax-design-system/dataviz.png"
import crit from "@/assets/img/case-studies/syntax-design-system/design-crit.png"
import files from "@/assets/img/case-studies/syntax-design-system/figma-files.png"
import slack from "@/assets/img/case-studies/syntax-design-system/slack-pr.png"
import storybook from "@/assets/img/case-studies/syntax-design-system/storybook.png"
import survey from "@/assets/img/case-studies/syntax-design-system/survey-results.png"
import components from "@/assets/img/case-studies/syntax-design-system/iso-comps.png"
import updates from "@/assets/img/case-studies/syntax-design-system/update-sync.png"
import changelog from "@/assets/img/case-studies/syntax-design-system/whats-new.png"
import forms from "@/assets/img/case-studies/syntax-design-system/forms-pattern.png"
import team from "@/assets/img/case-studies/syntax-design-system/syntax-team.jpg"

import keyboard from "@/assets/img/case-studies/syntax-design-system/keyboard-navigation.gif"
import tooltip from "@/assets/img/case-studies/syntax-design-system/tooltip-component.gif"

const DesignSystem = () => {
  const DocLink = "https://wanda.wonderflow.ai/"
  return (
    <main className="container px-4 pb-20 mx-auto max-w-[800px]">
      <header>
        <h1 className="mt-20 mb-6 text-5xl font-bold sm:text-6xl md:mt-32 text-stone-800">
          Syntax Design System
        </h1>
        <p className="my-2 text-2xl leading-normal text-stone-700">
          Since January 2023, I've been leading the design direction of the
          Syntax Design System, a private and specialized system for the
          <strong> localization industry</strong>.
        </p>
      </header>

      <section className="my-12">
        <dl className="mt-8 text-xl text-stone-600 lg:text-xl">
          <dt className="mt-8 font-semibold text-stone-800 lg:mt-12">Goal</dt>
          <dd className="text-xl text-stone-600">
            Initially: Rebrand 2 companies into a single one (Memsource acquired
            Phrase in mid-2022). Later: unify 5+ different products into a
            single platform — pricing strategy shifted from product-access to
            volume-based monetization.
          </dd>

          <dt className="mt-6 font-semibold text-stone-800 lg:mt-12">
            Opportunity
          </dt>
          <dd className="text-xl text-stone-600">
            Serve customers a consistent product language and reduce design and
            tech debt.
          </dd>

          <dt className="mt-6 font-semibold text-stone-800 lg:mt-12">
            Problem
          </dt>
          <dd className="text-xl text-stone-600">
            Team coming from historically different companies have different
            ways of working and tech stack.
          </dd>

          <dt className="mt-6 font-semibold text-stone-800 lg:mt-12">
            ChatGPT
          </dt>
          <dd className="text-xl text-stone-600">
            LLM and MT are disrupting the slow-moving, decades-old localization
            industry.
          </dd>
        </dl>
      </section>

      <ExplicativePicture
        caption="An isometric view of some of the Syntax components — including, among others: tables, datepicker, alert and multi-select"
        src={components}
      />

      <section className="mt-16 mb-48">
        <h2 className="pb-5 text-3xl font-semibold text-stone-800">
          Key Highlights
        </h2>

        <ul className="space-y-2 text-xl list-disc list-outside ms-8 list-disc-stone-100 ">
          <li>
            <strong>Team:</strong> dedicated team of 6 people: 3 designers (team
            lead, system designer, content designer) and 3 engineers (lead and 2
            UI developers)
          </li>
          <li>
            <strong>Impact:</strong> shaping design language of 11 designers,
            20+ teams, 5+ products
          </li>
          <li>
            <strong>Technology:</strong> built on Vue and Typescript,
            distributed through npm. Components tested and localized
          </li>
          <li>
            <strong>Libraries:</strong> multiple Figma libraries: Tokens,
            Components, Icons, Illustrations and Templates
          </li>
          <li>
            <strong>Guidelines</strong>: including usage guidelines, Content
            design, a11y, interaction patterns, data visualization
          </li>
        </ul>
      </section>

      <section className="my-32">
        <h2 className="pb-5 text-3xl font-semibold text-stone-800">
          Components
        </h2>

        <p className="text-xl">
          The design system embraces the atomic design metaphor and leverages
          <em> composability</em>. Syntax ships atomic elements like button and
          text input, but also bigger organisms like table and dropdowns.
        </p>

        <div>
          <ExplicativePicture
            caption="A Figma instance of the Alert component. The Alert's visual appearance can morph based on context and intended prominency, while maintaining its semantics"
            src={alert}
          />
          <ExplicativePicture
            caption="Playground mode of the tooltip component in Figma. Props are displayed conditionally, leveraging progressive disclosure "
            src={tooltip}
          />
          <ExplicativePicture
            caption="Openly sharing WIP explorations help starting conversations with different stakeholders"
            src={files}
          />
          <p className="mt-24 text-xl">
            Syntax design system doesn't ship just components, but also high
            level <strong>interaction patterns</strong>. This helps ensuring a
            consistent design languages across products in our platform.
          </p>
          <ExplicativePicture
            caption="We use different data visualization palettes based on the relationship with the data: categorical, ordinal, and divergent"
            src={dataviz}
          />
          <ExplicativePicture
            caption="Form guidelines include reccomendations about accessibility, writing guidelines, which component to use and validation strategy"
            src={forms}
          />
        </div>
      </section>

      <section className="my-32">
        <h2 className="pb-5 text-3xl font-semibold text-stone-800">
          Documentation
        </h2>

        <p className="text-xl">
          From my own mistakes, I learned that unclear documentation hinders
          design system adoption. To address this, I actively maintain a
          dedicated design system documentation website that collects resources
          such as Figma components, changelog, content guidelines, and demos.
          <em className="block pt-2 text-stone-700">
            The documentation website is available for internal use only, can't
            share the link, sorry :(
          </em>
        </p>

        <div>
          <ExplicativePicture
            caption="A screenshot of the dropdown component. The component is a preset grouping multiple list items and distributing UI conventions like max-height, search, sections, footer, etc. The preset help designers quickly generate dropdowns (a notoriously tedious job)"
            src={docs}
          />
          <ExplicativePicture
            caption="Screenshot from Storybook: the Docs page acts as an overview of the component capabilities and implementation details"
            src={storybook}
          />
          <ExplicativePicture
            caption="Demonstration of the keyboard navigation in a multi-select dropdown. Live demo are included in every component."
            src={keyboard}
          />
        </div>
      </section>
      <section className="my-32">
        <h2 className="pb-5 text-3xl font-semibold text-stone-800">
          Stakeholder Management
        </h2>

        <p className="text-xl">
          As a design system designer, a big part of my job is helping people
          stay updated with our ever-evolving design system. This involves
          sharing updates and meeting people where they are:
        </p>

        <ul className="mt-6 space-y-2 text-xl list-disc list-outside ms-8 list-disc-stone-100 ">
          <li>
            <strong>regular sync updates</strong>: showoff and Q&A sessions —
            separate sessions for designer and developers
          </li>
          <li>
            <strong>regular async updates</strong>: announcements for minor
            releases once every two weeks; major releases every quarter
          </li>
          <li>
            <strong>ad-hoc communications</strong>: noteworthy updates shared
            via Slack
          </li>
          <li>
            <strong>tracking customer satisfaction</strong>: bi-annual
            satisfaction surveys and monthly adoption metrics
          </li>
        </ul>

        <div>
          <ExplicativePicture
            caption="A screenshot from #design-system Slack channel announcing tooltip component improvements"
            src={slack}
          />
          <ExplicativePicture
            caption="Every 2 weeks we release a minor npm version; every 3 months a major release (including breaking changes)"
            src={changelog}
          />
          <ExplicativePicture
            caption="Presenting ideas about the datepicker component to the design team during our weekly design crit"
            src={crit}
          />
          <ExplicativePicture
            caption="We also have a weekly slot for announcing updates and discussing best practices. As you can see by stamps, the design team is very enthusiasticic about DS updates"
            src={updates}
          />
          <ExplicativePicture
            caption="A FigJam screenshot about the results from our bi-annual internal survey about design system satisfaction"
            src={survey}
          />
        </div>
      </section>

      <section className="my-32">
        <h2 className="pb-5 text-3xl font-semibold text-stone-800">
          Challenges
        </h2>

        <ul className="space-y-2 text-xl list-disc list-outside ms-8 list-disc-stone-100 ">
          <li>Collecting feedback from a non-engaged audience </li>

          <li>
            Adjusting strategy when resources & priorities are constantly
            shifting
          </li>

          <li>Balancing components discoverability / capabilities</li>
          <li>Shipping localization-proof components</li>
        </ul>

        <h3 className="pb-5 mt-12 text-2xl font-semibold text-stone-800">
          What I learned
        </h3>

        <ul className="space-y-2 text-xl list-disc list-outside ms-8 list-disc-stone-100 ">
          <li>Share early, share often</li>
          <li>Optimize for review</li>
          <li>Ask developers</li>
          <li>Have fun! </li>
        </ul>
        <div>
          <ExplicativePicture
            caption="Group photo from a team activity after our roadmap meetup"
            src={team}
          />
        </div>
      </section>

      <section className="pt-12 mt-64 duration-300 ease-in-out border-t -mb-60">
        <h2 className="mt-4 mb-8 text-xl font-medium text-center text-stone-700">
          Want more case studies?!
        </h2>
        <div className="flex justify-between gap-2 lg:gap-8 ">
          <Link href="/case-studies/interaction">
            <a>
              <div className="p-6 bg-white border shadow-xs opacity-75 hover:border-stone-300 border-stone-200 rounded-xl hover:opacity-100 hover:shadow-sm">
                ← Interaction, UI
              </div>
            </a>
          </Link>
          <Link href="/case-studies/research">
            <a>
              <div className="p-6 bg-white border shadow-xs opacity-75 hover:border-stone-300 border-stone-200 rounded-xl hover:opacity-100 hover:shadow-sm">
                Research →
              </div>
            </a>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default DesignSystem
