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
      <heading>
        <h1 className="mt-20 mb-6 text-5xl font-bold sm:text-6xl md:mt-32 text-stone-800">
          Syntax Design System
        </h1>
        <p className="my-2 text-2xl leading-normal text-stone-700">
          Since January 2023, I've been leading the design direction of the
          Syntax Design System, a private and specialized system for the
          <strong> localization industry</strong>.
        </p>
      </heading>

      <section className="my-12">
        <dl className="mt-8 text-xl text-stone-600 lg:text-xl">
          <dt className="mt-8 font-semibold text-stone-800 lg:mt-12">Goal</dt>
          <dd className="text-xl text-zinc-600">
            Rebrand 2 companies into a single 1 (Memsource acquired Phrase in
            mid-2022). <br />
            Unify 5+ different product into a single platform (Selling strategy
            shifted from product focused to platform focused)
          </dd>

          <dt className="mt-6 font-semibold text-stone-800 lg:mt-12">
            Opportunity
          </dt>
          <dd className="text-xl text-zinc-600">
            Serve customer a consistent product language and reduce design +
            tech debt
          </dd>

          <dt className="mt-6 font-semibold text-stone-800 lg:mt-12">
            Problem
          </dt>
          <dd className="text-xl text-zinc-600">
            Team coming from historically different companies have different
            tech stack and ways of working
          </dd>

          <dt className="mt-6 font-semibold text-stone-800 lg:mt-12">
            ChatGPT
          </dt>
          <dd className="text-xl text-zinc-600">
            LLM and MT are disrupting the slow-moving, decades-old localization
            industry
          </dd>
        </dl>
      </section>

      <ExplicativePicture
        caption="An isometric view of some of the Syntax components — including, among others: tables, datepicker, alert and multi-select"
        src={components}
      />

      <section className="mb-48 mt-16">
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
          The design system adopts the atomic design metaphor and ships atomic
          elements like button and text input, but also bigger organisms like
          table and dropdowns
        </p>

        <div>
          <ExplicativePicture
            caption="A Figma instance of the alert component"
            src={alert}
          />
          <ExplicativePicture
            caption="Playground mode of the tooltip component in Figma"
            src={tooltip}
          />
          <ExplicativePicture
            caption="Openly sharing WIP explorations help starting conversations with different stakeholders"
            src={files}
          />
          <p className="text-xl mt-24">
            Syntax design system doesn't ship just components, but also high
            level <strong>interaction patterns</strong>. This helps ensuring a
            consistent design languages across different products in our
            platform
          </p>
          <ExplicativePicture
            caption="We use different data visualization palette based the kind of data. Palettes includes categorical data, ordinal, divergent and monochrome"
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
          As we learned on our own mistakes, unclear documentations hinder
          design system adoptions. We have a dedicated design system
          documentation websites (internal use only) which collect resources
          such as Figma components, whats new, content guidelines and demo{" "}
        </p>

        <div>
          <ExplicativePicture
            caption="A screenshot of the dropdown component. The component is a preset displaying multiple list item. The preset help designer quickly create the most common dropdown"
            src={docs}
          />
          <ExplicativePicture
            caption="Screenshot from Storybook: the Docs page acts as an overview of the component capabilities and implementation details"
            src={storybook}
          />
          <ExplicativePicture
            caption="Demonstration of the keyboard navigation in a multi-select dropdown"
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
          sharing updates and meeting people where they are
        </p>

        <ul className="space-y-2 text-xl list-disc list-outside ms-8 mt-6 list-disc-stone-100 ">
          <li>
            Regular sync updates: showoff and Q&A sessions, separate sessions
            for designer and developers
          </li>
          <li>
            Regular async Updates: announcements for minor releases and detailed
            updates, with major releases every quarter
          </li>
          <li>Ad-Hoc communications: Noteworthy updates shared via Slack</li>
          <li>
            Customer Satisfaction: Bi-annual satisfaction surveys and monthly
            adoption metrics
          </li>
        </ul>

        <div>
          <ExplicativePicture
            caption="A screenshot from our design system slack channel announcing an improved tooltip component"
            src={slack}
          />
          <ExplicativePicture
            caption="Every 2 weeks we release a minor npm version. Every 3 months a major release (including breaking changes)"
            src={changelog}
          />
          <ExplicativePicture
            caption="Presenting ideas about the datepicker component to the design team during our weekly design crit"
            src={crit}
          />
          <ExplicativePicture
            caption="We also have a weekly slot for announcing updates and discussing best practices. As you can see by stamps, the design team is pretty enthusiast by DS updates "
            src={updates}
          />
          <ExplicativePicture
            caption="Results from our bi-annual internal survey about design system satisfaction"
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

          <li>Balancing compont discoverability / capabilities</li>
          <li>Localizing components </li>
        </ul>

        <h3 className="mt-10 pb-5 text-2xl font-semibold text-stone-800">
          What I learned
        </h3>

        <ul className="space-y-2 text-xl list-disc list-outside ms-8 list-disc-stone-100 ">
          <li>Share early, share often</li>
          <li>Optimize for review</li>
          <li>Optimize components for their 80% use case</li>
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
        <h2 className="mt-4 mb-8 text-xl font-medium text-center text-zinc-700">
          Want more case studies?!
        </h2>
        <div className="flex justify-between gap-2 lg:gap-8 ">
          <Link href="/case-studies/interaction">
            <a>
              <div className="p-6 bg-white border shadow-sm opacity-75 hover:border-zinc-300 border-zinc-200 rounded-xl hover:opacity-100 hover:shadow">
                ← Interaction, UI
              </div>
            </a>
          </Link>
          <Link href="/case-studies/research">
            <a>
              <div className="p-6 bg-white border shadow-sm opacity-75 hover:border-zinc-300 border-zinc-200 rounded-xl hover:opacity-100 hover:shadow">
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
