import Link from "next/link"
import { useRouter } from "next/router"
import clsx from "clsx"
import {
  Home,
  Briefcase,
  User,
  SquareArrowOutUpRight,
  FileText,
  AtSign,
} from "lucide-react"

export const Navigation = () => {
  const router = useRouter()

  return (
    <nav className=" shadow-xs flex justify-center w-max mx-auto text-lg text-stone-600 font-medium p-2.5 mt-6 mb-12 md:mt-8 border border-stone-300 rounded-3xl fixed -top-4 left-1/2 -translate-x-1/2 bg-stone-50/70 z-20 backdrop-blur hover:scale-125 ease-in-out duration-200 hover:backdrop-blur-none hover:bg-stone-50">
      <Link href="/">
        <a
          className={clsx(
            "btn btn-navigation",
            router.pathname === "/" && "btn-navigation-active",
          )}
        >
          <Home size={24} />
          <span className="hidden sm:block">Home</span>
        </a>
      </Link>
      <Link href="/case-studies">
        <a
          className={clsx(
            "btn btn-navigation",
            router.pathname === "/case-studies" && "btn-navigation-active",
          )}
        >
          <Briefcase size={24} />
          <span className="hidden sm:block">Work</span>
        </a>
      </Link>
      {/* <Link href="/about">
        <a
          className={clsx(
            "btn btn-navigation",
            router.pathname === "/about" && "btn-navigation-active"
          )}
        >
          <User size={24} />
          <span className="hidden sm:block">About</span>
        </a>
      </Link> */}
      <a
        href="mailto:mail@beniaminomarini.design"
        className=" btn btn-navigation"
      >
        <AtSign size={24} />
        <span className="hidden sm:block">Contact</span>
        <SquareArrowOutUpRight
          className="stroke-stone-500 hidden sm:block"
          size={20}
        />
      </a>
    </nav>
  )
}
