import Image from "next/image"
import { Button } from "@/components/button"
import { Linkedin, PDF } from "@/components/icons"

import BenCircle from "@/assets/img/Beniamino-Marini--Squared--400x400.png"

const Home = () => {
  const PDFLink = "/assets/pdf/Beniamino-Marini--Product-Designer-resume.pdf"
  const LinkedinLink = "https://www.linkedin.com/in/youcancallmeben/"

  return (
    <main className="sm:px-[3vw]">
      <div className="container px-2 py-6 mx-auto md:py-11 xl:px-24">
        <section className="flex flex-col items-center gap-1 p-6 text-center md:gap-3 ">
          <h1 className="font-medium tracking-wider uppercase texl-lg md:text-xl lg:leading-none text-zinc-600">
            Marini Beniamino
          </h1>
          <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl text-zinc-900">
            Senior Product Designer specialized in Design system
          </h2>
          <p className="max-w-4xl text-xl italic leading-snug md:text-3xl text-zinc-500">
            I connect people, systems, and ideas—blending design and code into
            products that ship, scale, and succeed.
          </p>
        </section>

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
