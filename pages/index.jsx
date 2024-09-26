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
      <div className="container px-2 py-6 mx-auto md:pt-32 xl:px-24">
        <CrazyCard>
          <div className="flex flex-col justify-center gap-4 lg:basis-3/4">
            <h1 className="text-4xl text-center oldstyle-nums lg:leading-tight lg:text-5xl text-zinc-800 md:text-start xl:pr-10">
              Beniamino Marini, <br />
              Senior Product Designer
            </h1>
            <p className="text-lg text-center md:text-xl md:text-start text-zinc-500">
              Specialized in Design System — currently at{" "}
              <a
                href="https://www.phrase.com/"
                className="hover:underline underline-offset-4"
                target="_blank"
                rel="noreferrer noopener"
              >
                Phrase
              </a>{" "}
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
            className="sm:basis-1/4 animate-border-radius"
          />
        </CrazyCard>

        <section className="mt-40 space-y-4 text-center lg:mt-60 lg:mx-20 ">
          <h2
            className="font-[Sligoil] text-xl sm:text-2xl lg:text-4xl flex items-center justify-center gap-1 text-zinc-700 font-base"
            style={{ fontFeatureSettings: '"ss01" on, "calt" off' }}
          >
            <span>✨</span> Fluent in the full product cycle <span>✨</span>
          </h2>
          <p className="lg:mt-2 text-md lg:text-2xl text-zinc-500">
            From early problem validation, to delivery and iteration
          </p>
        </section>

        <div className="flex flex-col justify-center gap-40 mx-auto my-40 lg:gap-48 lg:flex-row w-fit">
          <div className="flex flex-col max-w-xl gap-24 lg:gap-32 basis-2/3">
            <div>
              <h2 className="mb-5 text-3xl font-bold text-zinc-700">
                What makes me stand out
              </h2>
              <ul className="space-y-4 text-xl leading-normal list-disc list-otside ms-8 list-disc-zinc-100">
                <li>
                  Experience as a <strong>web developer</strong> and industrial
                  automation developer, enhancing my understanding of technical
                  challenges and communication with engineers.
                </li>
                <li>
                  Unique skillset combining technical expertise with a{" "}
                  <strong>degree in Psychology</strong> and Human-Computer
                  Interaction.
                </li>
                <li>
                  Proven ability to collaborate in
                  <strong> cross-functional teams</strong> with engineers,
                  analysts, designers, PMs, marketers...
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-5 text-3xl font-bold text-zinc-700">Impact</h2>
              <ul className="space-y-3 text-xl leading-normal list-disc list-otside ms-8 list-disc-zinc-100">
                <li>
                  Spearheading the direction of Phrase{" "}
                  <strong>design system</strong>, serving 11 designers, 20+ team
                  and over 5 products.
                </li>
                <li>
                  Experience <strong>growing a design team</strong>, going from
                  3 to 6 people
                </li>
                <li>
                  Contributed to a <strong>10x cost reduction</strong> on new
                  project setup through an automation initiative.
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
                <li>Design System</li>
                <li>Visual design</li>
                <li>Stakeholder management</li>
              </ul>
            </div>

            <div className="flex flex-col gap-8 text-xl">
              <h3 className="font-semibold tracking-wider uppercase text-zinc-400">
                Skills
              </h3>
              <ul className="space-y-4">
                <li>Hi-fi prototyping</li>
                <li>Product vision</li>
                <li>A11y</li>
                <li>User testing</li>
                <li>Developer handoff</li>
                <li>Design QA</li>
                <li>A/B Testing</li>
                <li>Quantitative data analysis</li>
                <li>HTML, CSS, JS</li>
                <li>React</li>
                <li>Facilitating workshops</li>
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
              View my Resume
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
