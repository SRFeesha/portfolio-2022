import Image from "next/image"
import { ExplicativePicture } from "@/components/explicative-picture"
import i1a from "@/assets/img/case-studies/catalog-configurator/1-a.png"
import i1b from "@/assets/img/case-studies/catalog-configurator/1-b.png"
import i2a from "@/assets/img/case-studies/catalog-configurator/2-a.png"
import i3a from "@/assets/img/case-studies/catalog-configurator/3-a.png"
import i3b from "@/assets/img/case-studies/catalog-configurator/3-b.png"
import i4a from "@/assets/img/case-studies/catalog-configurator/4-a.png"

const CatalogConfigurator = () => {
  return (
    <main className="container px-4 pb-20 mx-auto max-w-[800px]">
      <h1 className="invisible text-2xl font-semibold text-stone-800">
        Automating WonderBoard data ingestion
      </h1>
      <section className="pt-16">
        <h2 className="py-2 text-xl font-semibold text-stone-500">
          Business Problem
        </h2>
        <p className="mt-2 font-serif text-3xl italic leading-snug font-base text-stone-800">
          As is, when a new client joins Wonderflow, it takes lot of resource
          and manual work to setup the environment, tweak the linguistic
          analysis and do customer service. To support company growth plan and
          reduce manual input we had to invest in automation.
        </p>

        <h3 className="py-2 mt-20 mb-1 text-xl font-semibold text-stone-800">
          Business Objectives
        </h3>
        <ul className="space-y-2 list-disc list-outside">
          <li className="ml-4">
            Support company growth plan by scaling number of clients we are able
            to serve
            <span className="block text-stone-500">
              KR: scale 10x n of clients
            </span>
          </li>
          <li className="ml-4">
            Enable users to tweak their data sources, shortening their feedback
            loop while monitoring products.
            <span className="block pt-1 text-stone-500">
              KR: deliveries 2x more frequently
            </span>
          </li>
          <li className="ml-4">
            Reduce Operation specialist and Customer care effort by adding an
            automation layer in the setup phase of a project.
            <span className="block pt-1 text-stone-500">
              KR: reducing 3x worker-days for setup
            </span>
          </li>
        </ul>

        <ul className="grid gap-8 py-8 mt-12 mb-8 text-lg md:gap-20 md:grid-flow-col text-stone-600">
          <li>
            <strong className="text-stone-700">Stakeholder</strong>
            <p>
              <em>Internal</em>: operation specialist, linguists, pre-sale
              engineer.
            </p>
            <p className="pt-2">
              <em>External</em>: power users
            </p>
          </li>
          <li>
            <strong className="text-stone-700">Team</strong>
            <p>
              This initiative was a cross-department effort. Based on the phase
              of the project we interfaced with different people, including PMs,
              team lead, developers..
            </p>
          </li>
          <li>
            <strong className="text-stone-700">When</strong>
            <p>2022</p>
            <p className="mt-2">Project is still ongoing</p>
          </li>
        </ul>
      </section>

      <section className="py-4 italic text-center border-dashed mb-28 text-md border-y text-stone-500 border-stone-300">
        disclaimer: materials shown here represent iterations, a lot of context
        is intentionally missing to prevent sharing company sensible
        information.
      </section>

      <section className="my-20">
        <h2 className="py-4 text-3xl font-medium text-stone-800">
          Collecting information
        </h2>
        <p>
          After talking with some of the main stakeholder we realised that no
          one known the process from A to Z:{" "}
          <strong>information were distributed across many people.</strong>
        </p>
        <p className="pt-2">
          The project was involving department from all over the company: from
          development to operations, from linguists to design.
        </p>
        <ExplicativePicture
          caption="We had a couple of co-design workshops to understand how different stakeholder participated to the system’s success"
          src={i1a}
          className="from-indigo-500 to-indigo-400 via-indigo-700 "
        />
        <ExplicativePicture
          caption="We wanted to organise collected knowledge in a visual way: we developed a Service blueprint ant described system properties with Object Oriented UX methodology"
          src={i1b}
          className=" from-indigo-500 to-indigo-400 via-indigo-700"
        />
      </section>

      <section className="my-20">
        <h2 className="py-4 text-3xl font-medium text-stone-800">
          Feasibility testing
        </h2>
        <p>
          During the journey we came across technical and business conundrum
          about scalability, linguistic analysis and computational time.
        </p>
        <p>
          A critical aspect in our plan definition was to cluster features into
          minimum usable releases
        </p>

        <ExplicativePicture
          caption="Loom was my best friend—very effective in communicating ideas with stakeholders, all having different schedules"
          src={i2a}
          className="from-sky-500 to-sky-400 via-sky-700"
        />
      </section>

      <section className="my-20">
        <h2 className="py-4 text-3xl font-medium text-stone-800">
          Idea validation
        </h2>
        <p>
          Thanks to our design system, we could rapidly create hi-fi mockups and
          focus on interactions, so that stakeholder could immerse themselves
          into the end scenario.
        </p>

        <ExplicativePicture
          caption="Validating with hi-fi prototype give us a change to highlight some technical aspects about feasibility which got overseen during the more abstract flow iteration"
          src={i3a}
          className="from-teal-500 to-teal-400 via-teal-700"
        />
        <ExplicativePicture
          caption="Designing a maintainable and scalable hi-fidelity table in Figma was a challenge all by its own"
          src={i3b}
          className="from-teal-500 to-teal-400 via-teal-700"
        />
      </section>

      <section className="my-20">
        <h2 className="py-4 text-3xl font-medium text-stone-800">Iterations</h2>
        <p>
          Iterations happened in many different way: alignment meeting, QC with
          engineers, asynchronously broadcasted videos
        </p>
        <ExplicativePicture
          caption="We wanted to keep track of every step of iteration. We did record not just design decisions, but also the context related to that choice"
          src={i4a}
          className="from-pink-500 to-pink-400 via-pink-700"
        />
      </section>
    </main>
  )
}

export default CatalogConfigurator
