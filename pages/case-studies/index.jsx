import Link from "next/link"

const CaseStudies = () => (
  <main className="container flex flex-col max-w-[800px] gap-8 px-4 mx-auto mt-20">
    <section className="py-10">
      <h1 className="mb-2 text-2xl font-semibold text-center text-stone-800">
        Case studies
      </h1>
      <p className="mb-12 text-center text-stone-500">
        Currently scaling Design System in B2B SaaS
      </p>
      <Link href="/case-studies/syntax">
        <a>
          <article className="p-16 mt-4 duration-300 ease-in-out bg-white border shadow-sm opacity-75 sm:-mx-10 radius-lg hover:border-stone-300 border-stone-200 rounded-xl hover:opacity-100 hover:shadow-md ">
            <h2 className="text-2xl font-semibold">Syntax Design System</h2>
            <span className="block mt-3 text-xl text-stone-700">
              Working to unify 5+ products into a single, consistent platform
            </span>
          </article>
        </a>
      </Link>
      <Link href="/case-studies/design-system">
        <a>
          <article className="p-16 mt-4 duration-300 ease-in-out bg-white border shadow-sm opacity-75 sm:-mx-10 radius-lg hover:border-stone-300 border-stone-200 rounded-xl hover:opacity-100 hover:shadow-md ">
            <h2 className="text-2xl font-semibold">Wanda Design System</h2>
            <span className="block mt-3 text-xl text-stone-700">
              Full-featured open source design system
            </span>
          </article>
        </a>
      </Link>
      <Link href="/case-studies/interaction">
        <a>
          <article className="p-16 mt-4 duration-300 ease-in-out border opacity-75 hover:bg-white sm:-mx-10 radius-lg hover:border-stone-300 border-stone-200 rounded-xl hover:opacity-100 hover:shadow-md ">
            <h2 className="text-2xl font-semibold">
              Interaction design, UI design
            </h2>
            <span className="block mt-3 text-xl text-stone-700">
              Saving internal resources by creating a self-service flow for
              clients
            </span>
          </article>
        </a>
      </Link>
      <Link href="/case-studies/research">
        <a>
          <article className="p-16 mt-4 duration-300 ease-in-out border opacity-75 hover:bg-white sm:-mx-10 radius-lg hover:border-stone-300 border-stone-200 rounded-xl hover:opacity-100 hover:shadow-md ">
            <h2 className="text-2xl font-semibold">
              Product strategy, research
            </h2>
            <span className="block mt-3 text-xl text-stone-700">
              Effortless onboarding: OOUX for scalable client Management
            </span>
          </article>
        </a>
      </Link>
    </section>
  </main>
)

export default CaseStudies
