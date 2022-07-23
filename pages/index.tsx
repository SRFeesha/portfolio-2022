import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Button } from '../src/components/button'
import { Linkedin } from "../src/components/icons"
import BenCircle from '../public/assets/img/Beniamino-Marini--Squared--400x400.png'
import { CrazyCard } from '../src/components/crazy-card'

const Home: NextPage = () => {
  return (
    <main className='flex items-center justify-center min-h-screen bg-gray-100 lg:overflow-hidden lg:h-screen '>
      <div className='container flex justify-center px-2 py-8 mx-auto align-middle md:py-64 xl:px-48'>
        <CrazyCard >
          <div className='flex flex-col justify-center gap-6 lg:basis-3/4'>
            <h1 className='text-4xl text-center lg:leading-tight lg:text-5xl text-zinc-800 md:text-start'>I’m Beniamino Marini, Product Designer with 3+ years of experience. </h1>
            <p className='text-xl text-center md:text-start text-zinc-500'>Open to new opportunities · Currently designing at Wonderflow</p>
            <Button icon={<Linkedin className="w-4 h-4 fill-white" />} className="self-center md:self-start" >Connect on Linkedin</Button>
          </div>
          <Image src={BenCircle} alt='Beniamino Marini Product Designer' className='rounded-full sm:basis-1/4' />
        </CrazyCard>
      </div>
    </main>
  )
}

export default Home
