import Image from "next/image"
// import { Button } from "@/components/button"
import BenPolaroid from "@/assets/img/Ben-polaroid.png"

const Home = () => {
  return (
    <main className="sm:px-[3vw] text-zinc-600">
      <div className="container px-2 mx-auto leading-relaxed md:pt-8 xl:px-24 ">
        <section className="py-4 space-y-6 text-xl lg:py-8 ">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            My name is Beniamino, but you can call me Ben
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
            tech journey started at age 3—either playing Pokémon on an emulator
            or battling a terminal-based math game (my dad’s way of balancing
            screen time).
          </p>
          <p>
            <strong>Curiosity</strong> drives everything I do. I’ve studied
            algorithms, computer science, communication, psychology,
            neuroscience, sociology, and design—because why pick just one?
          </p>
          <p>
            With a background in web development and industrial automation, I
            thrive in complex systems. I love making order out of chaos (or at
            least controlled chaos).
          </p>
          <p>
            Big believer in <em>mens sana in corpore sano</em>.{" "}
            <strong>Movement</strong> keeps my creativity sharp and my stress
            levels in check. I walk every day, climb rocks, skate, do yoga,
            snowboard, and surf.
          </p>
          <p>
            Also, a devoted Huberman Lab listener and an occasional lo-fi beat
            producer.
          </p>
        </section>
        <section className="py-8 ">
          <h2 className="mb-3 text-3xl font-bold text-zinc-700">Fun facts</h2>
          <ul className="max-w-screen-sm space-y-2 text-lg leading-normal list-disc list-outside ms-8 list-disc-zinc-100">
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
              Rain or shine, I make sure to get fresh air every day. Berlin
              winters test my commitment.
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
