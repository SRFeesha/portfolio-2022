import { useEffect, useRef } from "react"

export const Skills = () => {
  const skillList = [
    "Procuct vision ",
    "Rapid prototyping ",
    "Fast iteration ",
    "Design system ",
    "CSS",
    "Storybook ",
    "Design tokens ",
    "Documentation ",
    "Accessibility ",
    "System thinking",
    "Accessibility (A11y",
    "Stakeholder management",
    "Vibe coding",
    "User research",
    "Facilitating Workshop ",
    "Design QA",
    "Data informed decision",
    "HTML",
    "Javascript (JS)",
    "Release strategy",
    "Problem framing",
  ]

  const trackRef = useRef(null)
  const speedRef = useRef(60) // pixels per second (default speed)
  const posRef = useRef(0)
  const lastTimeRef = useRef(0)
  const halfWidthRef = useRef(0)

  const slowSpeed = 15 // hover speed

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    const measureWidth = () => {
      halfWidthRef.current = el.scrollWidth / 2
    }
    measureWidth()
    window.addEventListener("resize", measureWidth)

    const tick = (ts) => {
      if (!lastTimeRef.current) lastTimeRef.current = ts
      const dt = (ts - lastTimeRef.current) / 1000
      lastTimeRef.current = ts

      posRef.current -= speedRef.current * dt
      const half = halfWidthRef.current || 1
      if (posRef.current <= -half) posRef.current += half

      el.style.transform = `translateX(${posRef.current}px)`
      requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)

    return () => window.removeEventListener("resize", measureWidth)
  }, [])

  const handleEnter = () => {
    speedRef.current = slowSpeed
  }

  const handleLeave = () => {
    speedRef.current = 60
  }

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative w-[98dvw] overflow-hidden white-h-fade"
    >
      <ul
        ref={trackRef}
        className="flex w-max gap-3 py-2 will-change-transform"
      >
        {[...skillList, ...skillList].map((skill, i) => (
          <li key={i} className="shrink-0 rounded-xl bg-stone-200 px-4 py-2">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}
