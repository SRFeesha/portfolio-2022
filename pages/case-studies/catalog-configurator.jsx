import Image from "next/image"
import { ExplicativePicture } from "@/components/explicative-picture"
import i1a from "@/assets/img/case-studies/catalog-configurator/1-a.png"
import i1b from "@/assets/img/case-studies/catalog-configurator/1-b.png"
import i2a from "@/assets/img/case-studies/catalog-configurator/2-a.png"
import i3a from "@/assets/img/case-studies/catalog-configurator/3-a.png"
import i3b from "@/assets/img/case-studies/catalog-configurator/3-b.png"
import i4a from "@/assets/img/case-studies/catalog-configurator/4-a.png"

// import i1b from "@/assets/img/case-studies/1b.png"

const CatalogConfigurator = () => {
  return (
    <main className="container px-4 py-20 mx-auto max-w-[800px]">
      <h1 className="text-4xl font-semibold">Catalog Configurator</h1>
      <section className="py-12">
        <h2 className="py-4 text-3xl font-medium text-stone-800">
          About this project
        </h2>
        <p className="max-w-3xl text-lg text-stone-600">
          To support the company financial ambition for 2022 we needed to
          redesign the analysis part of our product. Project was mostly
          involving internal refactor to automate process and scale capability
          of n of client served.
        </p>
        <ul className="grid gap-8 py-8 my-8 text-lg md:grid-flow-col text-stone-600">
          <li>
            <strong className="text-stone-700">Goal</strong>
            <p>
              Automate project setup, Enhance user self service experience,
              scale linguistic analysis
            </p>
          </li>
          <li>
            <strong className="text-stone-700">Stakeholder</strong>
            <p>
              <em>Internal</em>: operation specialist, linguists, pre-sale
              engineer.
            </p>
            <p>
              <em>External</em>: power users
            </p>
          </li>
          <li>
            <strong className="text-stone-700">When</strong>
            <p>2022</p>
            <p>The project is still ongoing</p>
          </li>
          <li>
            <strong className="text-stone-700">Team</strong>
            <p>
              This initiative was a cross-department effort in Wonderflow. Based
              on the phase of the project we interfaced with different people,
              including PMs, team lead, CTO
            </p>
          </li>
        </ul>
        <h3 className="my-3 text-2xl font-semibold text-stone-800">
          Business Requirements
        </h3>
        <ul className="space-y-4 list-disc list-outside">
          <li className="ml-4">
            Support company financial ambition by scaling number of clients we
            are able to serve
            <em className="block text-stone-500">KR: scale 10x n of clients</em>
          </li>
          <li className="ml-4">
            Enable users to tweak their data sources, shortening their feedback
            loop while monitoring products.{" "}
            <em className="block pt-1 text-stone-500">
              KR: deliveries 2x more frequently
            </em>
          </li>
          <li className="ml-4">
            Reduce Operation specialist and Customer care effort by adding an
            automation layer in the setup phase of a project.{" "}
            <em className="block pt-1 text-stone-500">
              KR: reducing 3x worker-days for setup
            </em>
          </li>
        </ul>
      </section>

      <section className="py-8 my-48 text-xl italic text-center border-dashed border-y text-stone-500 border-stone-300">
        Since you’re here, here’s something that you could find interesting
      </section>

      <section className="my-60">
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
          className="from-indigo-500 to-indigo-400 via-indigo-700 bg-blend-multiply"
        />
        <ExplicativePicture
          caption="We wanted to organise collected knowledge in a visual way: we developed a Service blueprint ant described system properties with Object Oriented UX methodology"
          src={i1b}
          className="from-indigo-500 to-indigo-400 via-indigo-700"
        />
      </section>

      <section className="my-60">
        <h2 className="py-4 text-3xl font-medium text-stone-800">
          Feasibility testing
        </h2>
        <p>
          During the journey we came across technical and business conundrum
          about scalability, linguistic analysis and computational time.
        </p>

        <ExplicativePicture
          caption="Loom was my best friend—very effective in communicating ideas with stakeholders, all having different schedules"
          src={i2a}
          className="from-sky-500 to-sky-400 via-sky-700"
        />
      </section>

      <section className="my-60">
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

      <section className="my-60">
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
