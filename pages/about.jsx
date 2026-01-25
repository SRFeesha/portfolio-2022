import Image from "next/image"
import BenPolaroid from "@/assets/img/ben-polaroid.png"

const Home = () => {
  return (
    <main className="sm:px-[3vw] text-stone-600">
      <div className="container px-2 mx-auto leading-relaxed md:pt-8 xl:px-24 ">
        <section className="py-4 space-y-6 text-xl lg:py-8 ">
          <h1 className="mb-4 text-3xl font-bold md:text-6xl text-stone-900 text-pretty">
            <span className="text-stone-500">My name is Beniamino, but</span>{" "}
            you can call me Ben
          </h1>
          <div className="float-right h-auto -rotate-[5deg] sm:max-w-80 lg:mb-32 m-12 2xl:-translate-y-32">
            <Image
              src={BenPolaroid}
              alt="Beniamino Marini Product Designer"
              className="object-cover "
            />
          </div>

          <p className="min-w-96">
            Based in <strong>Berlin</strong>, born in Northern Italy in 1995. My
            tech journey started at age 3: playing Pokémon on an emulator or
            battling a math game in the terminal my dad built to keep me
            “balanced”.
          </p>
          <p>
            <strong>Curiosity</strong> defines me. I’ve explored computer
            science, neuroscience, sociology, and design. Every field added a
            new way to understand people and systems.
          </p>
          <p>
            With a background in web development and industrial automation, I
            approach complexity with care and curiosity. I like to bring order
            to chaos, not by control but by clarity.
          </p>
          <p>
            Outside work, I move. Climb, skate, surf, walk. Always learning.
            Always curious.
          </p>
          <p>
            When I’m quiet, I listen to Huberman Lab or make lo-fi beats no one
            really asked for.
          </p>
        </section>

        <section className="py-8 ">
          <h2 className="mb-3 text-3xl font-bold text-stone-900">Fun facts</h2>
          <ul className="max-w-(--breakpoint-sm) space-y-2 text-lg leading-normal list-disc list-outside ms-8 list-disc-stone-100">
            <li>
              I was born in a tiny town with more pigs than people. Not a
              metaphor.
            </li>
            <li>
              I have 5 sisters, 1 brother and 16 nephews. Yes, family gatherings
              are loud.
            </li>
            <li>
              I walk every day. At 19, I took it to the next level and walked
              the entire Camino de Santiago ~750 km on foot. No regrets (except
              for my blisters).
            </li>
            <li>
              In 2024, Spotify told me I’m in the top 5% of users by played
              songs. Basically, I treat life like a personal movie soundtrack.
            </li>
            <li>
              I’m 163 cm tall. Compact, efficient, and great at fitting into
              small spaces.
            </li>
          </ul>
        </section>
      </div>
    </main>
  )
}

export default Home
