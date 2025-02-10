import Link from "next/link"
import {
  Activity,
  Component,
  HomeIcon,
  LinkIcon,
  Mail,
  Package,
  ScrollText,
  SunMoon,
} from "lucide-react"

import {
  Dock,
  DockIcon,
  DockItem,
  DockLabel,
} from "@/components/motion-ui/dock"

const navigation = [
  {
    title: "Home",
    icon: (
      <HomeIcon className="w-full h-full text-neutral-700 dark:text-neutral-300" />
    ),
    href: "/",
  },
  {
    title: "Case studies",
    icon: <Package className="w-full h-full text-neutral-700 " />,
    href: "/case-studies",
  },
  {
    title: "About me",
    icon: <Component className="w-full h-full text-neutral-700 " />,
    href: "/about",
  },
  {
    title: "Resume ↗",
    icon: <ScrollText className="w-full h-full text-neutral-700 " />,
    href: "/assets/pdf/Beniamino-Marini--Product-Designer-resume.pdf",
    openInNewTab: true,
  },
  {
    title: "Email ↗",
    icon: <Mail className="w-full h-full text-neutral-700" />,
    href: "mailto:mail@beniaminomarini.design",
    openInNewTab: true,
  },
]

export const MenuDock = () => {
  return (
    <navigation className="fixed z-50 max-w-full -translate-x-1/2 bottom-2 left-1/2">
      <Dock className="items-end pb-3">
        {navigation.map((item, idx) => (
          <Link href={item.href}>
            <a
              target={item.openInNewTab ? "_blank" : undefined}
              rel={item.openInNewTab ? "noopener noreferrer" : undefined}
            >
              <DockItem
                key={idx}
                className="bg-gray-200 rounded-full aspect-square dark:bg-neutral-800"
              >
                <DockLabel>{item.title}</DockLabel>
                <DockIcon>{item.icon}</DockIcon>
              </DockItem>
            </a>
          </Link>
        ))}
      </Dock>
    </navigation>
  )
}
