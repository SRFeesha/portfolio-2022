import { ExplicativePicture } from "@/components/explicative-picture"

import actors from "@/assets/img/case-studies/research/actors.png"
import asIs from "@/assets/img/case-studies/research/as-is.png"
import flow from "@/assets/img/case-studies/research/flow.png"
import ooux from "@/assets/img/case-studies/research/ooux.png"
import validation from "@/assets/img/case-studies/research/validation.png"

import blueprint from "@/assets/img/case-studies/research/blueprint.png"
import db from "@/assets/img/case-studies/research/db.png"
import flows from "@/assets/img/case-studies/research/flows.png"
import workshop from "@/assets/img/case-studies/research/workshop.png"

import datalake from "@/assets/img/case-studies/research/datalake.png"
import releases from "@/assets/img/case-studies/research/releases.png"
import roadmap from "@/assets/img/case-studies/research/roadmap.png"

import loom from "@/assets/img/case-studies/research/loom.png"

const Research = () => {
  return (
    <main className="container px-4 pb-20 mx-auto max-w-[800px]">
      <h1 className="mt-20 mb-10 text-5xl font-bold sm:text-6xl md:mt-32 text-stone-800">
        Product strategy, research
      </h1>

      <section className="my-12">
        <dl className="mt-8 text-xl text-stone-600 lg:text-2xl">
          <dt className="mt-12 font-semibold text-stone-800 lg:mt-16">Goal</dt>
          <dd>
            Scale the number of clients the company is able to serve in a given
            amount of time.
          </dd>

          <dt className="mt-12 font-semibold text-stone-800 lg:mt-16">
            Problem
          </dt>
          <dd className="text-xl text-zinc-600 lg:text-2xl">
            Lot of manual work and resources needed to set up the environment
            and tweak the linguistic analysis for new projects
          </dd>

          <dt className="mt-12 font-semibold text-stone-800 lg:mt-16">
            Solution
          </dt>
          <dd>
            Improve automations and data sharing between projects, let user
            setup their own dashboard. How: creation of a shared data lake of
            product reviews
          </dd>

          <dt className="mt-20 font-semibold text-stone-800 lg:mt-24">
            Stakeholders
          </dt>
          <dd>
            <em>Internal</em>: operation specialist, linguists, pre-sale
            engineer.
            <em>External</em>: power users
          </dd>

          <dt className="mt-12 font-semibold text-stone-800 lg:mt-16">Team</dt>
          <dd>
            Cross-disciplinal team: engineers, PM, Operation Specialist,
            Linguists
          </dd>

          <dt className="mt-12 font-semibold text-stone-800 lg:mt-16">
            My role in the project
          </dt>
          <dd className="text-xl text-zinc-600 lg:text-2xl">UX Designer</dd>

          <dt className="mt-12 font-semibold text-stone-800 lg:mt-16">When</dt>
          <dd>Dec 2021 → Apr 2022</dd>
        </dl>
      </section>

      <section className="py-8 my-32 italic text-center border-dashed text-md border-y text-stone-500 border-stone-300">
        <p>
          This case study is an ongoing project. I’ve decided to release even
          unpolished material, hoping that it could provide value and entice
          conversations.
        </p>
        <p className="mt-4 font-mono text-sm">Last update: October 11, 2022 </p>
      </section>

      <section className="my-32">
        <h2 className="pb-5 text-3xl font-semibold text-stone-800">Process</h2>

        <ul className="space-y-4 text-xl list-disc list-inside list-disc-stone-100 ">
          <li>Business requirements</li>
          <li>Information gathering </li>
          <li>Problem Definition </li>
          <li>Idea generation</li>
          <li>Idea design & validation</li>
        </ul>

        <details className="mt-10 text-xl">
          <summary>What actually happened</summary>

          <ul className="mt-4 space-y-2 text-xl list-outside ml-7 list-disc-stone-100 ">
            <li>Business requirement </li>
            <li>Goal </li>
            <li>OKR </li>
            <li className="pt-4">
              Some internal research to understand the flow AS-IS
            </li>
            <li>Stakeholder analysis, Personas </li>
            <li className="pt-4">Created an OOUX diagram</li>

            <li>Service blueprint to understand As-Is flow </li>
            <li className="pt-4">Drafted flow To-Be</li>
            <li>Understanding value: what to reach and when to stop </li>
            <li> collected features, clustered by releases </li>
            <li>Validation with stakeholder</li>
            <li className="pt-4">Started creating Epics and user stories </li>
            <li className="pt-4">
              Creating low level flows and validated with stakeholder
            </li>
          </ul>
        </details>

        <div className="my-12">
          <ExplicativePicture
            caption="As is process mapping — seen from the perspective of a dev team supporting linguistic team"
            src={asIs}
          />
          <ExplicativePicture
            caption="Mapping actors and relationship"
            src={actors}
          />
          <ExplicativePicture
            caption="The Object Oriented UX technique was useful to describe how different objects in a system interact with each other"
            src={ooux}
          />
          <ExplicativePicture caption="A user flow to be validate" src={flow} />
          <ExplicativePicture
            caption="Flow Validation recap"
            src={validation}
          />
        </div>
      </section>

      <section className="my-32">
        <h2 className="pb-5 text-3xl font-semibold text-stone-800">
          Techniques and design deliverables
        </h2>

        <ul className="space-y-4 text-xl list-disc list-inside list-disc-stone-100 ">
          <li>Discovery workshop</li>
          <li>Stakeholder analysis </li>
          <li>OOUX diagrams </li>
          <li>User flow and use cases</li>
          <li>
            Contributed creating the roadmap: Initiatives, epics, user stories
          </li>
        </ul>

        <div className="my-12">
          <ExplicativePicture
            caption="Outcome of the first workshop. We defined use cases, milestones, challenges"
            src={workshop}
          />
          <ExplicativePicture
            caption="Initially i tried to map use cases with service blueprint, but it turned out not to be the effective tool given the resources"
            src={blueprint}
          />
          <ExplicativePicture caption="User flow" src={flows} />
          <ExplicativePicture
            caption="Airtable database to store research insights, my understanding of the system, stakeholder, use cases. It eventually evolved into an high level roadmap"
            src={db}
          />
        </div>
      </section>

      <section className="my-32">
        <h2 className="pb-5 text-3xl font-semibold text-stone-800">
          Results and outcomes{" "}
        </h2>

        <ul className="space-y-4 text-xl list-disc list-inside list-disc-stone-100 ">
          <li>Simplified linguistic analysis process</li>
          <li>Creation of a product review data lake </li>
          <li>Reduced 3x worker-days for setup </li>
          <li>
            Envisioned the self service experience (other case study — which has
            enabled to deliver 2x more frequently)
          </li>
        </ul>

        <div className="my-12">
          <ExplicativePicture
            caption="Hi-level list of milestones in the releases"
            src={releases}
          />
          <ExplicativePicture
            caption="Breakdown of epics roadmap"
            src={roadmap}
          />
          <ExplicativePicture caption="User flow" src={flows} />
          <ExplicativePicture
            caption="URL management panel, the access point to query URL to the data lake"
            src={datalake}
          />
        </div>
      </section>

      <section className="my-32">
        <h2 className="pb-5 text-3xl font-semibold text-stone-800">
          What I learned
        </h2>

        <ul className="space-y-4 text-xl list-disc list-inside list-disc-stone-100 ">
          <li>Shared understanding is pivotal to productive conversation</li>
          <li>Facilitation is about letting other people shine.</li>
          <li>
            Async communication is a very powerful when documenting complex
            project
          </li>
        </ul>

        <div className="my-12">
          <ExplicativePicture caption="Loom over loom over loom" src={loom} />
        </div>
      </section>
    </main>
  )
}

export default Research
