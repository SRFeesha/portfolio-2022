import Link from "next/link"

export const Navigation = () => (
  <header className="container flex px-4 mx-auto mt-6 mb-12 md:mt-8">
    <div>
      <Link href="/">
        <a className="text-3xl ease-in-out text-stone-400 hover:text-stone-600">
          Ben
        </a>
      </Link>
    </div>
    <nav className="flex items-end justify-end w-full text-lg ease-in-out text-stone-500">
      <Link href="/case-studies">
        <a className=" btn btn-flat">Case studies</a>
      </Link>
      <a href="mailto:mail@beniaminomarini.design" className=" btn btn-flat">
        Mail me
      </a>
    </nav>
  </header>
)
