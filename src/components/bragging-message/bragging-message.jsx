import { GlowEffect } from "@/components/motion-ui/glow-effect"
import { Spotlight } from "@/components/motion-ui/spotlight"
import { PhraseLogo } from "../icons"

export const BraggingMessage = ({ children }) => {
  return (
    <div className="space-y-4 text-2xl font-medium leading-relaxed lg:mt-2 text-md lg:text-3xl text-zinc-500">
      <p>
        Currently scaling{" "}
        <PhraseLogo className="inline-block w-8 h-8 pb-1 mr-0.5" />
        Phrase design system.
      </p>
      <p>
        Streamlinining workflows, shaping AI adoption and solving complex
        interaction problems
      </p>
    </div>
  )
}
