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

        <div className="mt-40 space-y-4 text-2xl text-center lg:text-left lg:leading-snug lg:mt-60 lg:text-3xl lg:mx-20">
          <p>
            I'm comfortable covering the full <strong>end-to-end</strong>{" "}
            product design life cycle: from early problem exploration and
            definition, over detailed UX and visual design, to collaboration
            with developers during implementation.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-40 mx-auto my-40 lg:gap-48 lg:flex-row w-fit">
          <div className="flex flex-col max-w-xl gap-24 lg:gap-32 basis-2/3">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-zinc-700">
                Some results
              </h2>

              <ul className="space-y-4 text-xl list-disc list-inside list-disc-zinc-100 md:list-outside">
                <li>
                  <strong>Automation</strong>: Reduced company costs by 10x on
                  new project setup human effort
                </li>
                <li>
                  <strong>Team</strong>: helped gracefully scale the design team
                  by going from 3 to 6 people
                </li>
                <li>
                  <strong>Company</strong>: helped company to grow from startup
                  to scale-up: from 40 to 110+ employees in 2 yrs
                </li>
              </ul>
              <p className="mt-8 text-xl text-zinc-500">
                Currently designing at <em>Wonderflow</em>: a data analytics
                SaaS company working with NLP in the Customer Experience
                industry.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold text-zinc-700">
                You may find interesting
              </h2>
              <ul className="space-y-4 text-lg list-disc list-inside list-disc-zinc-100 md:list-outside">
                <li>
                  Experience working in <strong>cross-functional teams</strong>{" "}
                  and collaborating with devs, designers, product
                  managers,marketers…
                </li>
                <li>
                  My skillset mixes a tech background with a BS in Psychology
                  and HCI. I’m naturally fascinated by human behavior and{" "}
                  <strong>complex systems</strong>.
                </li>
                <li>
                  Before being a designer, I{" "}
                  <strong>worked as a developer</strong> (web developer and
                  industrial automation) — this helps me understand technical
                  challenges and meet developers where they are.
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

        <div className="mt-16 space-y-4 text-2xl text-center lg:text-left lg:leading-snug lg:mt-32 lg:text-2xl lg:mx-20">
          {/* <p>I’m a value-driven, business-focused product designer.</p> */}
          <p>
            My work is focused on human relationships: with users, stakeholders,
            and team members.
          </p>
          <p>
            To me being a designer is about navigating through ambiguity,
            negotiating trade-off and communicating visions.
          </p>
        </div>

        <div className="flex flex-col items-center max-w-xl gap-4 mx-auto mt-12 xl:mx-20 md:items-start lg:flex-row">
          <Button
            kind="secondary"
            href={PDFLink}
            icon={<PDF className="w-4 h-4" />}
          >
            Download my Resume
          </Button>
          <Button kind="flat" href={LinkedinLink}>
            Linkedin
          </Button>
        </div>
      </div>
    </main>
  )
}

export default Home
