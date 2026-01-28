import { Button } from "@/components/button"
import { Companies } from "@/components/companies"
import { Skills } from "@/components/skills"
import { Linkedin, PDF } from "@/components/icons"
import { Resume } from "@/components/resume"
import { useState } from "react"

const Home = () => {
  const LinkedinLink = "https://www.linkedin.com/in/youcancallmeben/"
  const email = "mail@beniaminomarini.design"
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)

      setTimeout(() => setCopied(false), 3000)
    } catch {
      alert("Could not copy email")
    }
  }

  return (
    <main className="sm:px-[3vw]">
      <div className="container flex flex-col max-w-4xl mx-auto py-12 gap-12 p-4">
        <section className="mx-auto space-y-2  md:py-16">
          <h1 className="text-4xl font-bold md:text-5xl lg:leading-none text-stone-900">
            Beniamino Marini
          </h1>
          <h2 className="text-2xl font-medium font-display md:text-3xl text-stone-500 -mt-0.5 md:leading-normal tracking-wide text-pretty">
            Senior Product Designer focused on Design Systems
          </h2>
          <p className="text-lg md:text-xl md:pt-2 text-stone-600 text-pretty">
            I build design systems as product infrastructure, helping teams move
            faster without sacrificing quality
          </p>
          <p className="text-md italic md:text-lg py-1 text-stone-500">
            Working at the intersection of design, engineering, and AI-assisted
            workflows
          </p>

          <div className="flex gap-2 my-4 flex-wrap flex-row">
            <Button
              href={LinkedinLink}
              icon={<Linkedin className="w-4 h-4 fill-white" />}
            >
              Connect on Linkedin
            </Button>
            <button
              className="btn btn-secondary cursor-pointer"
              onClick={handleCopy}
            >
              {copied ? "Copied!" : "Copy email"}
            </button>
          </div>
        </section>

        <section className="max-w-4xl mx-auto pt-4 pb-6 space-y-4 w-full">
          <Companies />
        </section>

        <section className="max-w-4xl mx-auto my-24 space-y-12">
          <div className="space-y-4">
            <h2 className="font-bold text-3xl leading-none text-stone-800">
              What I do
            </h2>
            <p className="text-xl sm:text-2xl text-stone-700 leading-normal">
              I design and lead design systems so teams can stop arguing about
              implementation and focus on real product decisions.
            </p>
            <p className="text-lg sm:text-xl text-stone-600 leading-normal">
              Components, tokens, patterns, and documentation are the output.
              Alignment, speed, and consistency at scale are the result. My work
              supports dozens of designers and engineers working across multiple
              product teams.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="font-bold text-3xl leading-none text-stone-800">
              How I do it
            </h2>
            <p className="text-xl sm:text-2xl text-stone-700 leading-normal">
              I work systemically and pragmatically, combining product thinking,
              system governance, and strong technical fluency.
            </p>
            <p className="text-lg sm:text-xl text-stone-600 leading-normal">
              My focus is on interaction design, motion, and token-based systems
              that scale across products and platforms. With a background in web
              development, I collaborate closely with engineers to build systems
              that are resilient and accessible under real-world constraints.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold text-3xl leading-none text-stone-800">
              Where this matters
            </h2>
            <p className="text-xl sm:text-2xl text-stone-700 leading-normal">
              I have 6+ years of product design experience, including 3 years
              leading a design system team in complex B2B products and last mile
              delivery.
            </p>
            <p className="text-lg sm:text-xl text-stone-600 leading-normal">
              These environments are messy, fast-moving, and unforgiving. Design
              systems here aren’t optional. They’re infrastructure teams rely on
              every day.
            </p>
          </div>
        </section>

        <section className="w-full space-y-8">
          <Resume />
          <p className="text-xl text-stone-600 text-center">
            Born in Italy, based in Berlin. Working across teams and time zones
          </p>
        </section>

        <section className="my-24 space-y-4 text-center">
          <h2 className="font-semibold tracking-wider uppercase font-display text-stone-500">
            Skills
          </h2>
          <Skills />
        </section>

        <section className="mt-12 text-center lg:mx-20">
          <div className="flex flex-col items-center justify-center gap-2 mt-12 lg:flex-row">
            <Button
              href={LinkedinLink}
              icon={<Linkedin className="w-4 h-4 fill-white" />}
            >
              Connect on Linkedin
            </Button>
            <Button
              kind="secondary"
              openInNewTab={false}
              href={"/case-studies"}
            >
              Go to case studies
            </Button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home
