import { GlowEffect } from "@/components/motion-ui/glow-effect"
import { Spotlight } from "@/components/motion-ui/spotlight"

export const CrazyCard2 = ({ children }) => {
  return (
    <div className="relative h-fit ">
      {/* <div className="relative "> */}
      <GlowEffect
        colors={["#14b8a6", "#5b21b6", "#1d4ed8", "#0ea5e9"]}
        mode="static"
        blur="strongest"
        duration={15}
        scale={1}
      />
      <article className="ring-1 ring-white/80 relative flex flex-col items-center justify-between gap-12 px-6 py-12 bg-white/95 border-8 border-white/50 sm:px-16 sm:py-12 2xl:gap-44 md:flex-row rounded-[56px] bg-clip-padding overflow-hidden">
        {children}
      </article>
      {/* </div> */}
    </div>
  )
}
