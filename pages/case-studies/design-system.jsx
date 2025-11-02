import Link from "next/link"
import { ExplicativePicture } from "@/components/explicative-picture"
import { Button } from "@/components/button"

import component from "@/assets/img/case-studies/design-system/component.png"
import symbols from "@/assets/img/case-studies/design-system/symbols.png"
import preview from "@/assets/img/case-studies/design-system/preview.png"

import figma from "@/assets/img/case-studies/design-system/figma.png"
import timing from "@/assets/img/case-studies/design-system/timing.png"
import statues from "@/assets/img/case-studies/design-system/statues.png"

import guidelines from "@/assets/img/case-studies/design-system/guidelines.png"
import receipe from "@/assets/img/case-studies/design-system/receipe.png"
import docs from "@/assets/img/case-studies/design-system/docs.png"

const DesignSystem = () => {
  const DocLink = "https://wanda.wonderflow.ai/"
  return (
    <main className="container px-4 pb-20 mx-auto max-w-[800px]">
      <heading>
        <h1 className="mt-20 mb-6 text-5xl font-bold sm:text-6xl md:mt-32 text-stone-800">
          Wanda Design System
        </h1>
        <p className="my-2 text-xl leading-normal text-stone-700">
          Wanda is a open-source design system focused on accessibility.
          Featured on Sidebar, Backlight.dev and TheyMakeDesign among others.
        </p>
        <Button kind="secondary" className="block mt-6 -ml-2" href={DocLink}>
          Live website
        </Button>
      </heading>

      <section className="my-20">
        <h2 className="pb-5 text-3xl font-semibold text-stone-800">
          What covers
        </h2>

        <ul className="space-y-4 text-xl list-disc list-inside list-disc-stone-100 ">
          <li>
            Foundations
            <span className="block ml-7 text-stone-500">
              Colors, typography, design tokens, themes, motion
            </span>
          </li>
          <li>
            Components
            <span className="block ml-7 text-stone-500">
              Interactive playground included
            </span>
          </li>
          <li>
            Brand assets
            <span className="block ml-7 text-stone-500">
              Logos, colors, Palette
            </span>
          </li>
          <li>
            Symbols
            <span className="block ml-7 text-stone-500">
              3 styles of icons: solid, outlined and duotone
            </span>
          </li>
          <li>
            Design guidelines
            <span className="block ml-7 text-stone-500">
              Layout, composition, motion
            </span>
          </li>
        </ul>

        <div className="">
          <ExplicativePicture
            caption="The archetype of a component page: the button"
            src={component}
          />
          <ExplicativePicture
            caption="Interactive playground to test components in the browser."
            src={preview}
          />
          <ExplicativePicture
            caption="Icons in 3 styles: solid, outline-solid and duotone"
            src={symbols}
          />
        </div>
      </section>

      <section className="my-32">
        <h2 className="pb-5 text-3xl font-semibold text-stone-800">
          Wanda artefacts
        </h2>

        <ul className="space-y-4 text-xl list-disc list-inside list-disc-stone-100 ">
          <li>Component library in React symbol, themes, config</li>
          <li>Symbol package</li>
          <li>Design tokens & themes</li>
          <li>JS Linter, CSS Linter, Typescript Type definition</li>
          <li>Figma component library</li>
          <li>Documentation website</li>
          <li>github open source repo</li>
          <li>Storybook </li>
        </ul>

        <div>
          <ExplicativePicture
            caption="Multiple component instances of the Button component in Figma"
            src={figma}
          />
          <ExplicativePicture
            caption="Interactive motion guidelines on the website"
            src={timing}
          />
          <ExplicativePicture
            caption="low-key flex of brand identity on empty states"
            src={statues}
          />
        </div>
      </section>

      <section className="my-32">
        <h2 className="pb-5 text-3xl font-semibold text-stone-800">
          My contribution
        </h2>

        <ul className="space-y-4 text-xl list-disc list-inside list-disc-stone-100 ">
          <li>Driving and advocating adoption</li>
          <li>Shaping design guidelines & writing documentation</li>
          <li>Shaping in the early phase</li>
          <li>Enabled search across website</li>
          <li>Storybook & components check</li>
        </ul>

        <div>
          <ExplicativePicture
            caption="In depth guidelines about specific use cases"
            src={receipe}
          />
          <ExplicativePicture
            caption="Guidelines about layout and composition"
            src={guidelines}
          />
          <ExplicativePicture
            caption="Visual examples to include in the guidelines"
            src={docs}
          />
        </div>
      </section>

      <section className="my-32">
        <h2 className="pb-5 text-3xl font-semibold text-stone-800">
          What I learned
        </h2>

        <ul className="space-y-4 text-xl list-disc list-inside list-disc-stone-100 ">
          <li>Adoptions is key component </li>
          <li>Maintaining is a huge effort </li>
          <li>Scale the project based on available resources </li>
          <li>How important is to foster collaboration</li>
        </ul>
      </section>

      <section className="pt-12 mt-64 duration-300 ease-in-out border-t -mb-60">
        <h2 className="mt-4 mb-8 text-xl font-medium text-center text-stone-700">
          Want more case studies?!
        </h2>
        <div className="flex justify-between gap-2 lg:gap-8 ">
          <Link href="/case-studies/interaction">
            <a>
              <div className="p-6 bg-white border shadow-xs opacity-75 hover:border-stone-300 border-stone-200 rounded-xl hover:opacity-100 hover:shadow-sm">
                ← Interaction, UI
              </div>
            </a>
          </Link>
          <Link href="/case-studies/research">
            <a>
              <div className="p-6 bg-white border shadow-xs opacity-75 hover:border-stone-300 border-stone-200 rounded-xl hover:opacity-100 hover:shadow-sm">
                Research →
              </div>
            </a>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default DesignSystem
