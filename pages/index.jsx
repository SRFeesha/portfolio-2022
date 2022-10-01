import Image from "next/image"
import { Button } from "@/components/button"
import { Linkedin, PDF } from "@/components/icons"
import { CrazyCard } from "@/components/crazy-card"
import BenCircle from "@/assets/img/Beniamino-Marini--Squared--400x400.png"

const Home = () => {
  const PDFLink = "/assets/pdf/Beniamino-Marini--Product-Designer-resume.pdf"
  const LinkedinLink = "https://www.linkedin.com/in/youcancallmeben/"

  return (
    <main className="px-2 text-zinc-600">
      <div className="container px-2 py-6 mx-auto md:pt-32 xl:px-48">
        <CrazyCard>
          <div className="flex flex-col justify-center gap-4 lg:basis-3/4">
            <h1 className="text-4xl text-center oldstyle-nums lg:leading-tight lg:text-5xl text-zinc-800 md:text-start xl:pr-10">
              Beniamino Marini, Product Designer with 3+ years of experience.
            </h1>
            <p className="text-lg text-center md:text-xl md:text-start text-zinc-500">
              Open to new opportunities
            </p>
            <Button
              icon={<Linkedin className="w-4 h-4 fill-white" />}
              className="self-center mt-4 md:self-start"
              href={LinkedinLink}
            >
              Connect on Linkedin
            </Button>
          </div>
          <Image
            src={BenCircle}
            alt="Beniamino Marini Product Designer"
            className="rounded-full sm:basis-1/4"
          />
        </CrazyCard>

        <div className="mt-40 space-y-4 font-mono text-xl text-center lg:leading-snug lg:mt-60 lg:text-2xl lg:mx-20 ">
          <p>
            <strong class>Fluent in the full design cycle</strong> — from early
            problem exploration and definition, over detailed UX and visual
            design, to implementation and collaboration with developers.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-40 mx-auto my-40 lg:gap-48 lg:flex-row w-fit">
          <div className="flex flex-col max-w-xl gap-24 lg:gap-32 basis-2/3">
            <div>
              <h2 className="mb-5 text-3xl font-bold text-zinc-700">
                What makes me stand out
              </h2>
              <ul className="space-y-4 text-xl leading-normal list-disc list-inside list-disc-zinc-100 md:list-outside">
                <li>
                  In the past I <strong>worked as a web dev</strong> and
                  industrial automation dev. Turns out it really helps
                  understand technical challenges and meet developers where they
                  are.
                </li>
                <li>
                  My skillset mixes a{" "}
                  <strong>tech background and a BS in Psychology</strong> / HCI.
                  I’m fascinated by human behavior and complex systems.
                </li>
                <li>
                  Experience collaborating in{" "}
                  <strong>cross-functional teams</strong> with devs, designers,
                  PMs, marketers...
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-zinc-700">Impact</h2>
              <p className="mb-4 text-xl text-zinc-500">
                Currently designing at <em>Wonderflow</em>: a data analytics
                SaaS company working with NLP in the Customer Experience
                industry.
              </p>
              <p className="mb-6 text-xl text-zinc-500">
                Following, some note-worthy results:
              </p>
              <ul className="space-y-4 text-xl list-disc list-inside list-disc-zinc-100 md:list-outside ">
                <li>
                  Constributed <strong>reducing costs by 10x</strong> on new
                  project setup through automation
                </li>
                <li>
                  Helped <strong>double the design team</strong>, going from 3
                  to 6 people
                </li>
                <li>
                  Helped shape and evangelize company{" "}
                  <strong>design system</strong>
                </li>
              </ul>
            </div>
          </div>

          <aside className="flex flex-col gap-20 lg:gap-24 lg:mt-2 basis-1/3">
            <div className="flex flex-col gap-8 text-xl">
              <h3 className="font-semibold tracking-wider uppercase text-zinc-400">
                Where I shine
              </h3>
              <ul className="space-y-4">
                <li>UI design</li>
                <li>Interaction design</li>
                <li>Design systems</li>
              </ul>
            </div>

            <div className="flex flex-col gap-8 text-xl">
              <h3 className="font-semibold tracking-wider uppercase text-zinc-400">
                Skills
              </h3>
              <ul className="space-y-4">
                <li>Hi-fi prototyping</li>
                <li>A/B Testing</li>
                <li>Quantitative data analysis</li>
                <li>Behavioural analysis</li>
                <li>HTML, CSS, JS</li>
                <li>React</li>
                <li>A11y</li>
                <li>User testing</li>
                <li>Shaping success metrics</li>
                <li>Facilitating workshops</li>
                <li>Developer handoff</li>
              </ul>
            </div>
          </aside>
        </div>

        <section className="mt-16 text-center lg:leading-snug lg:mt-32 lg:mx-20">
          <div className="space-y-4 text-2xl lg:text-2xl ">
            {/* <p>I’m a value-driven, business-focused product designer.</p> */}
            <p>
              My work is focused on human relationships: with users,
              stakeholders, and team members.
            </p>
            {/* <blockquote className="italic">
            Design is about navigating through ambiguity, negotiating trade-off
            and communicating visions.
          </blockquote> */}
          </div>

          <div className="flex flex-col items-center justify-center gap-4 mt-12 lg:flex-row">
            <Button
              href={PDFLink}
              icon={<PDF className="w-4 h-4 bg-white fill-white" />}
            >
              Download my Resume
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
