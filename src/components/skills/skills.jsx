import { useEffect, useRef, useState } from "react"

export const Skills = () => {
  const skillList = [
    "Product vision",
    "Rapid prototyping",
    "Fast iteration",
    "Design system",
    "CSS",
    "Storybook",
    "Design tokens",
    "Documentation",
    "Accessibility (A11y)",
    "System thinking",
    "Stakeholder management",
    "Vibe coding",
    "User research",
    "Facilitating Workshop",
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
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  const slowSpeed = 15 // hover speed

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el || prefersReducedMotion) return

    const measureWidth = () => {
      halfWidthRef.current = el.scrollWidth / 2
    }
    measureWidth()
    window.addEventListener("resize", measureWidth)

    let animationId

    const tick = (ts) => {
      if (!lastTimeRef.current) lastTimeRef.current = ts
      const dt = (ts - lastTimeRef.current) / 1000
      lastTimeRef.current = ts

      posRef.current -= speedRef.current * dt
      const half = halfWidthRef.current || 1
      if (posRef.current <= -half) posRef.current += half

      el.style.transform = `translateX(${posRef.current}px)`
      animationId = requestAnimationFrame(tick)
    }

    animationId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener("resize", measureWidth)
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [prefersReducedMotion])

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
      className="relative w-full overflow-hidden white-h-fade"
    >
      <ul
        ref={trackRef}
        className="flex gap-3 py-2 w-max will-change-transform"
      >
        {[...skillList, ...skillList].map((skill, i) => (
          <li
            key={`${skill}-${i}`}
            className="px-4 py-2 shrink-0 rounded-xl bg-stone-200"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}
