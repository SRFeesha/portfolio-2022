import Image from "next/image"
import { ExplicativePicture } from "@/components/explicative-picture"
import { Button } from "@/components/button"
import { Linkedin } from "@/components/icons"

const DesignSystem = () => {
  const DocLink = "https://wanda.wonderflow.ai/"
  return (
    <main className="container px-4 pb-20 mx-auto max-w-[800px]">
      <heading>
        <h1 className="mt-20 mb-4 text-5xl font-bold sm:text-6xl md:mt-32 text-stone-800">
          Wanda Design System
        </h1>
        <p className="my-2 text-xl italic leading-normal text-stone-500">
          Wanda is a open-source design system focused on accessibility.
          Featured on Sidebar, Backlight.dev and TheyMakeDesign among others.
        </p>
        <Button kind="secondary" className="block mt-4 -ml-2" href={DocLink}>
          Live website
        </Button>
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

      <section className="my-20">
        <h2 className="pb-5 text-3xl font-semibold text-stone-800">
          My contribution
        </h2>

        <ul className="space-y-4 text-xl list-disc list-inside md:list-outside list-disc-stone-100 ">
          <li>Driving and advocating adoption</li>
          <li>Shaping design guidelines & writing documentation</li>
          <li>Shaping in the early phase</li>
          <li>Enabled search across website</li>
          <li>Storybook & components check</li>
        </ul>
      </section>
      <section className="my-20">
        <h2 className="pb-5 text-3xl font-semibold text-stone-800">
          Wanda artefacts
        </h2>

        <ul className="space-y-4 text-xl list-disc list-inside md:list-outside list-disc-stone-100 ">
          <li>Component library in React symbol, themes, config</li>
          <li>Symbol package</li>
          <li>Design tokens & themes</li>
          <li>JS Linter, CSS Linter, Typescript Type definition</li>
          <li>Figma component library</li>
          <li>Documentation website</li>
          <li>github open source repo</li>
          <li>Storybook </li>
        </ul>
      </section>
      <section className="my-20">
        <h2 className="pb-5 text-3xl font-semibold text-stone-800">
          What I learned
        </h2>

        <ul className="space-y-4 text-xl list-disc list-inside md:list-outside list-disc-stone-100 ">
          <li>Adoptions is key component </li>
          <li>Maintaining is a huge effort </li>
          <li>Scale the project based on available resources </li>
          <li>How important is to foster collaboration</li>
        </ul>
      </section>
    </main>
  )
}

export default DesignSystem
