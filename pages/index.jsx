import { Button } from "@/components/button"
import { Skills } from "@/components/skills"
import { Linkedin, PDF } from "@/components/icons"
import { Resume } from "@/components/resume"

const Home = () => {
  const LinkedinLink = "https://www.linkedin.com/in/youcancallmeben/"

  return (
    <main className="sm:px-[3vw]">
      <div className="container flex flex-col items-center gap-12 px-2 py-6 mx-auto lg:gap-20 md:py-11 lg:pt-16 xl:px-24">
        <section className="p-6 space-y-1 text-center md:gap-3">
          <h1 className="font-medium tracking-wider uppercase texl-lg md:text-xl lg:leading-none text-stone-600">
            Marini Beniamino
          </h1>
          <h2 className="max-w-3xl text-3xl font-extrabold leading-tight font-display md:text-5xl text-stone-900">
            Senior Product Designer specialized in Design system
          </h2>
          <p className="max-w-3xl text-xl italic leading-snug md:text-3xl md:pt-2 text-stone-500">
            I connect people, systems, and ideas—blending design and code into
            products that ship, scale, and succeed.
          </p>
        </section>

        <section className="flex flex-col items-center gap-16 p-4">
          <span aria-hidden className="-mb-10 text-2xl text-stone-500">
            ❖
          </span>
          <h2 className="max-w-xl px-2 text-lg leading-tight text-center md:text-xl text-stone-600">
            Building design system that drive alignment across teams to move
            faster, craft better, and scale with purpose
          </h2>

          <div className="grid grid-cols-1 gap-2 sm:grid-rows-4 sm:grid-cols-5 md:gap-4 min-h-[110svh]">
            <div className="row-span-2 sm:col-span-3 bento-box bg-stone-700 text-stone-300">
              <p className="text-sm font-semibold uppercase">
                Solving complex problem, at
              </p>
              <p className="font-extrabold text-9xl">Scale</p>
            </div>
            <div className="flex flex-col items-center row-span-1 sm:sm:col-span-2 bento-box bg-amber-400 text-amber-950">
              <p className="text-sm font-semibold uppercase">Designing for</p>
              <p className="text-3xl md:text-4xl font-black">Accessibility</p>
            </div>
            <div className="flex flex-col items-center row-span-1 text-pink-100 bg-pink-500 sm:sm:col-span-2 bento-box place-content-center">
              <p className="text-sm font-semibold uppercase text-center">
                Without compromising on
              </p>
              <p className="text-4xl font-extrabold">Quality</p>
            </div>
            <div className="flex flex-col items-center row-span-2 sm:sm:col-span-2 bg-lime-500 text-lime-900 bento-box place-content-end">
              <p className="text-sm font-semibold uppercase">
                Experiment and ship,{" "}
              </p>
              <p className="italic font-extrabold text-6xl lg:text-8xl">
                Faster
              </p>
            </div>
            <div className="row-span-2 text-indigo-100 bg-indigo-600 place-content-center sm:col-span-3 bento-box">
              <p className="text-sm font-semibold uppercase">Enabling the</p>
              <p className="font-extrabold text-7xl lg:text-8xl">AI Leverage</p>
            </div>
          </div>
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
