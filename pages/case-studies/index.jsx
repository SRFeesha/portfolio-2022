import Link from "next/link"

const CaseStudies = () => (
  <main className="container flex flex-col max-w-[800px] gap-8 px-4 mx-auto mt-20">
    <section className="py-10">
      <h1 className="mb-2 text-2xl text-center font-semibold text-stone-800">
        Case studies
      </h1>
      <p className="mb-12 text-stone-500 text-center">
        Since 2019 I've worked in agencies, product companies, startups, and
        scale-ups.
      </p>
      <Link href="/case-studies/syntax">
        <a>
          <article className="p-16 mt-4 duration-300 ease-in-out bg-white border shadow-sm opacity-75 sm:-mx-10 radius-lg hover:border-stone-300 border-stone-200 rounded-xl hover:opacity-100 hover:shadow ">
            <h2 className="text-2xl font-semibold">Syntax Design System</h2>
            <span className="block mt-3 text-xl text-stone-700">
              Leading company Design system to unify multiple products into a
              platform
            </span>
          </article>
        </a>
      </Link>
      <Link href="/case-studies/design-system">
        <a>
          <article className="p-16 mt-4 duration-300 ease-in-out bg-white border shadow-sm opacity-75 sm:-mx-10 radius-lg hover:border-stone-300 border-stone-200 rounded-xl hover:opacity-100 hover:shadow ">
            <h2 className="text-2xl font-semibold">Wanda Design System</h2>
            <span className="block mt-3 text-xl text-stone-700">
              Full-featured open source design system.
            </span>
          </article>
        </a>
      </Link>
      <Link href="/case-studies/interaction">
        <a>
          <article className="p-16 mt-4 duration-300 ease-in-out hover:bg-white border  opacity-75 sm:-mx-10 radius-lg hover:border-stone-300 border-stone-200 rounded-xl hover:opacity-100 hover:shadow ">
            <h2 className="text-2xl font-semibold">Product Design</h2>
            <span className="block mt-3 text-xl text-stone-700">
              Saving internal resources by creating a self-service option for
              clients
            </span>
          </article>
        </a>
      </Link>
      <Link href="/case-studies/research">
        <a>
          <article className="p-16 mt-4 duration-300 ease-in-out hover:bg-white border  opacity-75 sm:-mx-10 radius-lg hover:border-stone-300 border-stone-200 rounded-xl hover:opacity-100 hover:shadow ">
            <h2 className="text-2xl font-semibold">
              Product strategy, research
            </h2>
            <span className="block mt-3 text-xl text-stone-700">
              Effortless onboarding: OORCA UX & scalable client Management
            </span>
          </article>
        </a>
      </Link>
    </section>
  </main>
)

export default CaseStudies
