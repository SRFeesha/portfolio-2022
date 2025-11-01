import Image from "next/image"
import { Button } from "@/components/button"
import { Linkedin, PDF } from "@/components/icons"

import BenCircle from "@/assets/img/Beniamino-Marini--Squared--400x400.png"

const Home = () => {
  const PDFLink = "/assets/pdf/Beniamino-Marini--Product-Designer-resume.pdf"
  const LinkedinLink = "https://www.linkedin.com/in/youcancallmeben/"

  return (
    <main className="sm:px-[3vw] text-zinc-600">
      <div className="container px-2 py-6 mx-auto md:pt-32 xl:px-24">
        <div className="flex flex-col justify-center gap-4 md:basis-3/4">
          <h1 className="text-4xl text-center lg:leading-none lg:text-6xl text-zinc-400 md:text-start xl:pr-10"></h1>
          <h2 className="-mt-0.5 text-3xl italic leading-none tracking-tight text-zinc-500 lg:text-4xl">
            Senior Product Designer
          </h2>
        </div>

        <section className="mt-16 text-center lg:mt-32 lg:mx-20">
          <p className="space-y-4 text-2xl font-light lg:text-3xl lg:leading-snug ">
            My work is focused on human relationships: with users, stakeholders,
            and team members.
          </p>

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
