import Link from "next/link"

const CaseStudies = () => (
  <main className="container mx-auto">
    <Link href="/case-studies/catalog-configurator">
      <a href="./catalog-configurator">
        <article className="p-16 duration-500 ease-in-out border shadow-sm opacity-75 radius-lg hover:bg-white hover:border-stone-100 border-stone-200 rounded-xl hover:opacity-100 hover:shadow-md">
          <h2 className="text-xl font-semibold">Wonderflow</h2>
          <span className="my-8 text-lg">Catalog configurator</span>
        </article>
      </a>
    </Link>
  </main>
)

export default CaseStudies
