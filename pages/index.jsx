import { Button } from "@/components/button"
import { Companies } from "@/components/companies"
import { Skills } from "@/components/skills"
import { Linkedin, PDF } from "@/components/icons"
import { Resume } from "@/components/resume"

const Home = () => {
  const LinkedinLink = "https://www.linkedin.com/in/youcancallmeben/"

  return (
    <main className="sm:px-[3vw]">
      <div className="container flex flex-col max-w-4xl gap-12 px-2 py-6 mx-auto lg:gap-20 md:py-11 lg:pt-16 xl:px-16">
        <section className="p-6 mx-auto space-y-2 ">
          <h1 className="text-4xl font-bold md:text-5xl lg:leading-none text-stone-900">
            Beniamino Marini
          </h1>
          <h2 className="text-3xl font-medium font-display md:text-3xl text-stone-600 -mt-0.5">
            Senior Product Designer focused on Design Systems
          </h2>
          <p className="text-lg md:text-xl md:pt-2 text-stone-600">
            I build design systems as product infrastructure, helping teams move
            faster without sacrificing quality
          </p>
          <p className="text-lg italic md:text-lg md:pt-2 text-stone-500">
            Working at the intersection of design, engineering, and AI-assisted
            workflows
          </p>
          <span className="h-64">Linkedin button here</span>
        </section>

        <section className="max-w-4xl mx-auto my-24 space-y-4">
          <Companies />
        </section>

        <section className="my-24 space-y-4 text-center">
          <h2 className="font-semibold tracking-wider uppercase font-display text-stone-500">
            Skills
          </h2>
          <Skills />
        </section>

        <section className="w-full space-y-8">
          <Resume />
        </section>

        <section className="mt-12 text-center lg:mx-20">
          <div className="flex flex-col items-center justify-center gap-4 mt-12 lg:flex-row">
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
