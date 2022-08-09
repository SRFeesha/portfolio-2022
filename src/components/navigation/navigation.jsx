import Link from "next/link"

export const Navigation = () => (
  <header className="container flex px-4 mx-auto mt-4 mb-12">
    <div>
      <Link href="/">
        <a className="text-3xl ease-in-out text-stone-400 hover:text-stone-600">
          Ben
        </a>
      </Link>
    </div>
    <nav className="flex items-end justify-end w-full gap-4 text-lg ease-in-out sm:gap-8 text-stone-500">
      <Link href="/case-studies">
        <a className=" hover:text-stone-600">Case studies</a>
      </Link>
      <a
        href="mailto:mail@beniaminomarini.design"
        className=" hover:text-stone-600"
      >
        Mail me
      </a>
    </nav>
  </header>
)
