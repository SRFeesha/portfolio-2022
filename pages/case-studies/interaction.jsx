import Link from "next/link"

const Research = () => {
  return (
    <main className="container px-4 pb-20 mx-auto max-w-[800px]">
      <h1 className="mt-20 mb-10 text-5xl font-bold sm:text-6xl md:mt-32 text-stone-800">
        Interaction design, UI design
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
            Let user setup their own project analysis. Enable self service a
            analysis configurations
          </dd>

          <dt className="mt-20 font-semibold text-stone-800 lg:mt-24">
            Stakeholders
          </dt>
          <dd>
            <em>Internal</em>: operation specialist, linguists, pre-sale
            engineer.
            <em className="pl-1">External</em>: power users
          </dd>

          <dt className="mt-12 font-semibold text-stone-800 lg:mt-16">Team</dt>
          <dd>
            Cross-disciplinal team: designers, engineers, PM, Operation
            Specialist
          </dd>

          <dt className="mt-12 font-semibold text-stone-800 lg:mt-16">
            My role in the project
          </dt>
          <dd className="text-xl text-zinc-600 lg:text-2xl">
            Interaction designer, UI Designer
          </dd>

          <dt className="mt-12 font-semibold text-stone-800 lg:mt-16">When</dt>
          <dd>Mar 2022 → Jun 2022</dd>
        </dl>
        <p className="pt-20 text-zinc-500">
          This case study is the second part of a bigger project — to check
          research material which drove our decision making process, have a look
          at my{" "}
          <Link href="/case-studies/research">
            <a className="border-b-2 text-tory-blue">research case study</a>
          </Link>
          .
        </p>
      </section>

      <section className="py-8 my-32 italic text-center border-dashed text-md border-y text-stone-500 border-stone-300">
        <p>
          This case study is an ongoing project. I’ve decided to release even
          unpolished material, hoping that it could provide value and entice
          conversations.
        </p>
        <p className="mt-4 font-mono text-sm">Last update: October 12, 2022 </p>
      </section>

      <section className="my-32">
        <h2 className="pb-5 text-3xl font-semibold text-stone-800">Process</h2>

        <ul className="space-y-4 text-xl list-disc list-inside list-disc-stone-100 ">
          <li>Flow validation</li>
          <li>working on epics / stories batch </li>
          <li>Check for technical feasibility</li>
          <li>Documenting system states and edge cases</li>
          <li>hi-fi Prototyping</li>
          <li>Iterate</li>
          <li>Dev handoff</li>
          <li>
            Design Quality check (a11y, compliancy with design, real world
            performance issues)
          </li>
          <li>Gradual feature release with feature flag</li>
          <li>A/B testing (Maze)</li>
          <li>Behavioural analytics (Hotjar)</li>
          <li>Quantitative analytics (Mixpanel)</li>
        </ul>
      </section>

      <section className="my-32">
        <h2 className="pb-5 text-3xl font-semibold text-stone-800">
          Techniques used
        </h2>

        <ul className="space-y-4 text-xl list-disc list-inside list-disc-stone-100 ">
          <li>Async communication (Loom, Figma comments)</li>
          <li>hi-fi design + Prototyping</li>
          <li>User testing</li>
          <li>A/B Testing</li>
        </ul>
      </section>

      <section className="my-32">
        <h2 className="pb-5 text-3xl font-semibold text-stone-800">
          Results and outcomes
        </h2>

        <ul className="space-y-4 text-xl list-disc list-inside list-disc-stone-100 ">
          <li>Real world application</li>
          <li>
            User can now setup their analysis (gradually, based on the feature
            release)
          </li>
          <li>
            We’re able to ship deliveries 2x faster (next steps — remove
            deliveries concept, deliver changes in real time){" "}
          </li>
        </ul>
      </section>

      <section className="my-32">
        <h2 className="pb-5 text-3xl font-semibold text-stone-800">
          What I learned
        </h2>

        <ul className="space-y-4 text-xl list-disc list-inside list-disc-stone-100 ">
          <li>
            Bringing developer early into the process is an invaluable resource
            for designing real world application (Handshake process instead of
            dev handoff). Performance issue would have arose later in the
            journey
          </li>
          <li>
            Carefully documenting iterations with context and justifying design
            decision is a compound investment, it pays really well in the long
            term
          </li>
        </ul>
      </section>
    </main>
  )
}

export default Research
