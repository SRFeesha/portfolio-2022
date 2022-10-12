import Link from "next/link"

const CaseStudies = () => (
  <main className="container flex flex-col max-w-[800px] gap-8 px-4 mx-auto mt-20">
    <section className="py-10">
      <h1 className="mb-8 text-2xl text-center font-semibopld text-stone-800">
        Case studies
      </h1>
      <Link href="/case-studies/interaction">
        <a>
          <article className="p-16 mt-4 duration-300 ease-in-out bg-white border shadow-sm opacity-75 sm:-mx-10 radius-lg hover:border-stone-300 border-stone-200 rounded-xl hover:opacity-100 hover:shadow ">
            <h2 className="text-2xl font-semibold">
              Interaction design, UI Design
            </h2>
            <span className="block mt-3 text-xl text-stone-700">
              Save internal resources by building a self-service experience for
              clients
            </span>
          </article>
        </a>
      </Link>
      <Link href="/case-studies/design-system">
        <a>
          <article className="p-16 mt-4 duration-300 ease-in-out bg-white border shadow-sm opacity-75 sm:-mx-10 radius-lg hover:border-stone-300 border-stone-200 rounded-xl hover:opacity-100 hover:shadow ">
            <h2 className="text-2xl font-semibold">Design System</h2>
            <span className="block mt-3 text-xl text-stone-700">
              Full-featured design system; including components, symbol and
              themes.
            </span>
          </article>
        </a>
      </Link>
      <Link href="/case-studies/research">
        <a>
          <article className="p-16 mt-4 duration-300 ease-in-out bg-white border shadow-sm opacity-75 sm:-mx-10 radius-lg hover:border-stone-300 border-stone-200 rounded-xl hover:opacity-100 hover:shadow ">
            <h2 className="text-2xl font-semibold">
              Product strategy, research
            </h2>
            <span className="block mt-3 text-xl text-stone-700">
              Bringing value through automation
            </span>
          </article>
        </a>
      </Link>
    </section>

    <section>
      <header className="mt-16 mb-12 text-center">
        <h2 className="text-2xl font-semibopld text-stone-800">Projects</h2>
        <p className="text-stone-500">Some websites of projects I worked on</p>
      </header>
      {/* <Link href="/case-studies/catalog-configurator"> */}
      <div className="grid gap-8 mb-16 sm:grid-cols-3 sm:flex-row">
        <a
          href="https://www.wonderflow.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <article className="p-8 duration-300 ease-in-out border shadow-sm opacity-75 radius-lg hover:bg-white hover:border-stone-100 border-stone-200 rounded-xl hover:opacity-100 hover:shadow">
            <h2 className="text-xl font-semibold">B2B Website</h2>
            <span className="block mt-3 text-lg text-stone-700">
              Wonderflow company website, contains tons of free resources
            </span>
          </article>
        </a>

        <a
          href="https://electronics.cxtrends.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <article className="p-8 duration-300 ease-in-out border shadow-sm opacity-75 radius-lg hover:bg-white hover:border-stone-100 border-stone-200 rounded-xl hover:opacity-100 hover:shadow">
            <h2 className="text-xl font-semibold">Editorial Website</h2>
            <span className="block mt-3 text-lg text-stone-700">
              Sharing insights for people working in the consumer electronic
              industry
            </span>
          </article>
        </a>

        <a
          href="https://associazionemiso.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <article className="p-8 duration-300 ease-in-out border shadow-sm opacity-75 radius-lg hover:bg-white hover:border-stone-100 border-stone-200 rounded-xl hover:opacity-100 hover:shadow">
            <h2 className="text-xl font-semibold">Non-profit</h2>
            <span className="block mt-3 text-lg text-stone-700">
              Side project for a collective of cinema makers. Blog with Headless
              CMS
            </span>
          </article>
        </a>
        {/* </Link> */}
      </div>
    </section>
  </main>
)

export default CaseStudies
