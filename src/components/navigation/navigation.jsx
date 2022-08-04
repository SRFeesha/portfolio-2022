import Link from "next/link"

export const Navigation = () => (
  <header className="container flex mx-auto mt-4 mb-12">
    <div>
      <Link href="/">
        <a className="text-3xl ease-in-out text-stone-400 hover:text-stone-600">
          Ben
        </a>
      </Link>
    </div>
    <nav className="flex items-end justify-center w-full gap-8 text-lg font-semibold ease-in-out text-stone-400">
      <Link href="/">
        <a className="hover:text-stone-600">Quick intro</a>
      </Link>
      <Link href="/case-studies">
        <a className=" hover:text-stone-600">Case studies</a>
      </Link>
      <a
        href="mailto:mail@beniaminomarini.design"
        className=" hover:text-stone-600"
      >
        Contact
      </a>
    </nav>
  </header>
)
