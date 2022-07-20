import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Button } from '../src/components/button'

const Home: NextPage = () => {
  return (
    <main className='bg-gray-100'>

      <div className='container py-64 mx-auto '>
        <article className='flex flex-col gap-6 px-16 py-20 bg-white rounded-3xl'>
          <h1 className='text-5xl'>I’m Beniamino Marini, Product Designer with 3+ years of experience. </h1>
          <p className='text-2xl text-stone-500'>Open to new opportunities · Currently designing at Wonderflow</p>
          <Button>Connect with me on Linkedin</Button>
        </article>
      </div>
    </main>
  )
}

export default Home
