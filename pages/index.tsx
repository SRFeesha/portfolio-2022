import Image from 'next/image'
import { Button } from '../src/components/button'
import { Linkedin, PDF } from "../src/components/icons"
import BenCircle from '../public/assets/img/Beniamino-Marini--Squared--400x400.png'
import { CrazyCard } from '../src/components/crazy-card'
import Resume from '../public/assets/pdf/Beniamino-Marini--Product-Designer-resume.pdf'

const Home = () => {
  return (
    <main className='px-2 bg-gray-100 text-zinc-600'>
      <div className='container px-2 py-8 mx-auto md:py-64 xl:px-48'>
        <CrazyCard >
          <div className='flex flex-col justify-center gap-4 lg:basis-3/4'>
            <h1 className='text-4xl text-center oldstyle-nums lg:leading-tight lg:text-5xl text-zinc-800 md:text-start xl:pr-10'>Beniamino Marini, Product Designer with 3+ years of experience. </h1>
            <p className='text-lg text-center md:text-xl md:text-start text-zinc-500'>Open to new opportunities · Currently designing at Wonderflow</p>
            <Button icon={<Linkedin className="w-4 h-4 fill-white" />} className="self-center mt-4 md:self-start" >
              <a href="https://www.linkedin.com/in/youcancallmeben/" target="_blank" rel='noopener noreferrer'>
                Connect on Linkedin
              </a>
            </Button>
          </div>
          <Image src={BenCircle} alt='Beniamino Marini Product Designer' className='rounded-full sm:basis-1/4' />
        </CrazyCard>

        <p className='mt-48 text-2xl text-center lg:text-left lg:leading-snug lg:mt-64 lg:text-3xl lg:mx-20'>
          Currently designing at Wonderflow: a VC funded <strong >SaaS company</strong> which recently raised 20m in a series B round.
        </p>

        <div className='flex flex-col justify-center gap-40 mx-auto my-40 lg:gap-48 lg:flex-row w-fit'>
          <div className='flex flex-col max-w-xl gap-24 lg:gap-40 basis-2/3'>
            <div>
              <h2 className='mb-6 text-3xl font-bold text-zinc-700'>In current role</h2>
              <ul className='space-y-4 text-xl list-disc list-inside list-disc-zinc-100'>
                <li>Helped company moving from startup to scale-up: from 40 to 120+ employees in 2 yrs</li>
                <li>Helped grow 2x the design team with people with a diverse skillset: going from 3 to 6 designers</li>
                <li>Helped in the automation process of a new project: reducing 3x setup costs</li>
                <li>Working with different teams and stakeholders: PMs, Developers, Analysts, Marketers, PO...</li>
              </ul>
            </div>

            <div>
              <h2 className='mb-6 text-3xl font-bold text-zinc-700'>About next role</h2>
              <p className='text-xl'>I'm looking for a Product Designer role in a remote digital product company</p>
            </div>
          </div>

          <aside className='flex flex-col gap-20 lg:gap-24 lg:mt-2 basis-1/3'>
            <div className='flex flex-col gap-8 text-xl'>
              <h3 className='font-semibold tracking-wider uppercase text-zinc-400'>Expertise</h3>
              <ul className='space-y-4'>
                <li>UI Design</li>
                <li>Interaction Design</li>
                <li>Design System</li>
              </ul>
            </div>

            <div className='flex flex-col gap-8 text-xl'>
              <h3 className='font-semibold tracking-wider uppercase text-zinc-400'>Skills</h3>
              <ul className='space-y-4'>
                <li>Collecting requirements</li>
                <li>Wireframing</li>
                <li>High fidelity prototyping</li>
                <li>A/B Testing</li>
                <li>Writing Documentation</li>
                <li>Developer handoff</li>
                <li>Design Quality Assurance</li>
                <li>Quantitative Data analysis</li>
              </ul>
            </div>
          </aside>
        </div>

        <div className='flex gap-4'>
          <Button kind='secondary' icon={<PDF className='w-4 h-4' />}>Download my Resume / CV</Button>
          <Button kind='flat'> <a href={PDF} target="_blank" rel='noopener noreferrer'> Linkedin</a></Button>
          {PDF}
        </div>

      </div>
    </main>
  )
}

export default Home
