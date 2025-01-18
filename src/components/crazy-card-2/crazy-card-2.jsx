import { GlowEffect } from "@/components/motion-ui/glow-effect"
import { Spotlight } from "@/components/motion-ui/spotlight"

export const CrazyCard2 = ({ children }) => {
  return (
    <div className="relative h-fit">
      <div className="relative ">
        <GlowEffect
          colors={["#14b8a6", "#5b21b6", "#1d4ed8", "#0ea5e9"]}
          mode="static"
          blur="strongest"
          duration={15}
          scale={1}
        />
        <article className="relative flex flex-col items-center justify-between gap-20 px-8 py-16 bg-white border-4 border-white/50 sm:px-16 sm:py-20 2xl:gap-44 md:flex-row rounded-3xl bg-clip-padding">
          {children}
        </article>
      </div>
    </div>
  )
}
