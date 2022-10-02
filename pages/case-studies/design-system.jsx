import Image from "next/image"
import { ExplicativePicture } from "@/components/explicative-picture"

const DesignSystem = () => {
  return (
    <main className="container px-4 pb-20 mx-auto max-w-[800px]">
      <heading>
        <h1 className="mt-20 mb-4 text-6xl font-bold md:mt-32 text-stone-800">
          Wanda Design System
        </h1>
        <p className="my-2 text-xl leading-normal text-stone-700">
          Wanda is a open-source design system focused on accessibility. Wanda
          collected some notable mentions across the web (featured on Sidebar,
          Backlight.dev and TheyMakeDesign among others).
        </p>
      </heading>

      <section className="my-20">
        <h2 className="pb-5 text-3xl font-semibold text-stone-800">
          What covers
        </h2>

        <ul className="space-y-4 text-xl list-disc list-inside md:list-outside list-disc-stone-100 ">
          <li>
            Foundations
            <span className="block ml-7 md:m-0 text-stone-500">
              Colors, typography, design tokens, themes, motion
            </span>
          </li>
          <li>
            Components
            <span className="block ml-7 md:m-0 text-stone-500">
              Interactive playground included
            </span>
          </li>
          <li>
            Brand assets
            <span className="block ml-7 md:m-0 text-stone-500">
              Logos, colors, Palette
            </span>
          </li>
          <li>
            Symbols
            <span className="block ml-7 md:m-0 text-stone-500">
              3 styles of icons: solid, outlined and duotone
            </span>
          </li>
          <li>
            Design guidelines
            <span className="block ml-7 md:m-0 text-stone-500">
              Layout, composition, motion
            </span>
          </li>
        </ul>

        {/* <ExplicativePicture
          caption="We had a couple of co-design workshops to understand how different stakeholder participated to the system’s success"
          src={i1a}
          className="from-indigo-500 to-indigo-400 via-indigo-700 "
        />
        <ExplicativePicture
          caption="We wanted to organise collected knowledge in a visual way: we developed a Service blueprint ant described system properties with Object Oriented UX methodology"
          src={i1b}
          className=" from-indigo-500 to-indigo-400 via-indigo-700"
        /> */}
      </section>
    </main>
  )
}

export default DesignSystem
