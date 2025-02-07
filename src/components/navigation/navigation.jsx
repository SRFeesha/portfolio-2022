import Link from "next/link"

export const Navigation = () => (
  <header className="container flex px-4 mx-auto mt-6 mb-12 md:mt-8">
    <div>
      <Link href="/">
        <a className="text-3xl duration-500 ease-out text-stone-400 hover:text-tory-blue hover:underline underline-offset-4">
          Ben
        </a>
      </Link>
    </div>
    <nav className="flex items-end justify-end w-full text-lg ease-in-out text-stone-500">
      <Link href="/case-studies">
        <a className=" btn btn-flat">Case studies</a>
      </Link>
      <Link href="/about">
        <a className=" btn btn-flat">About me</a>
      </Link>
      <a href="mailto:mail@beniaminomarini.design" className=" btn btn-flat">
        Mail me
      </a>
    </nav>
  </header>
)
