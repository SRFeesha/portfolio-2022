import Image from "next/image"
import { Button } from "@/components/button"
import { Linkedin, PDF } from "@/components/icons"
import { CrazyCard2 } from "@/components/crazy-card-2"

import { TextEffect } from "@/components/motion-ui/text-effect"
import { SpinningText } from "@/components/motion-ui/spinning-text"

import BenCircle from "@/assets/img/Beniamino-Marini--Squared--400x400.png"

const Home = () => {
  const PDFLink = "/assets/pdf/Beniamino-Marini--Product-Designer-resume.pdf"
  const LinkedinLink = "https://www.linkedin.com/in/youcancallmeben/"

  return (
    <main className="sm:px-[3vw] text-zinc-600">
      <div className="container px-2 py-6 mx-auto md:pt-32 xl:px-24">
        <CrazyCard2>
          <div className="flex flex-col justify-center gap-4 md:basis-3/4">
            <h1 className="text-4xl text-center oldstyle-nums lg:leading-none lg:text-6xl text-zinc-700 md:text-start xl:pr-10">
              <span className="block font-semibold">Beniamino Marini</span>
              <TextEffect
                per="word"
                preset="fade-in-blur"
                delay={0.2}
                speedReveal={0.7}
                as="span"
                className="leading-none tracking-tight ext-3xl text-zinc-500 lg:text-4xl"
              >
                Senior Product Designer
              </TextEffect>
            </h1>
            <Button
              magnetic={false}
              icon={<Linkedin className="w-4 h-4 fill-white" />}
              className="self-center my-2 sm:mt-6 md:self-start hover:scale-[1.02]"
              href={LinkedinLink}
            >
              Connect on Linkedin
            </Button>
          </div>
          <div className="relative p-4 sm:m-8">
            <SpinningText
              radius={12}
              fontSize={1.3}
              duration={100}
              className="absolute inset-0 font-mono font-medium leading-none uppercase bottom-2 text-zinc-400"
            >
              {`Design System Specialist — Design System Specialist — Design System Specialist — `}
            </SpinningText>
            <Image
              src={BenCircle}
              alt="Beniamino Marini Product Designer"
              className="absolute inset-0 rounded-full "
            />
          </div>
        </CrazyCard2>

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
                  I have a unique mix of technical and human-centered skills. My
                  background in web development and industrial automation helps
                  me understand technical challenges deeply.
                </li>
                <li>
                  A degree in Psychology and Human-Computer Interaction allows
                  me to design with both users and business goals in mind.
                </li>
                <li>
                  Problem-solving is my strength. Whether it’s refining
                  workflows or aligning stakeholders, I thrive in complex
                  environments.
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
                <li>Stakeholder management</li>
                <li>Rapid prototyping</li>
              </ul>
            </div>

            <div className="flex flex-col gap-8 text-xl">
              <h3 className="font-semibold tracking-wider uppercase text-zinc-400">
                Skills
              </h3>
              <ul className="space-y-4">
                <li>Product vision</li>
                <li>A11y</li>
                <li>User testing</li>
                <li>User interview</li>
                <li>Concept validation</li>
                <li>Developer handoff</li>
                <li>Design QA</li>
                <li>A/B Testing</li>
                <li>Data analysis</li>
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
