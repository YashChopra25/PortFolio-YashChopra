"use client"
import { Typewriter } from 'react-simple-typewriter'
import DP from '@/../public/dp.png'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="max-h-screen mt-10 grid grid-cols-2 grid-rows-1 max-md:grid-cols-1 max-md:min-h-fit max-md:grid-rows-2" >
        <div className="h-3/4 ml-12 px-6 flex flex-col mt-10 justify-center gap-10 max-md:h-full max-md:m-0" data-aos="fade-right">
          <h1 className="text-white text-8xl font-sans font-bold max-md:text-6xl">
            Hi, I&apos;m
          </h1>
          <span className='mx-auto text-6xl text--500 font-bold h-1/4 text-white max-md:text-5xl'>
            <Typewriter
              cursorBlinking={true}
              words={['Frontend Devloper', 'Backend Developer', 'UI Developer', "Fast Learner"]}
              cursorColor='white'
              loop={false}
              cursor
              cursorStyle='|'
              typeSpeed={50}
              deleteSpeed={50}

            />
          </span>
          <div className='max-md:mt-10  max-md:flex justify-evenly'>
            <a className=' text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-500 dark:focus:ring-orange-800' href={process.env.RESUME_LINK} download={"YashChorpaResume.png"}>Resume</a>
            <a href='/contact' className='text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-500 dark:focus:ring-orange-800'>Hire me</a>
          </div>
        </div>
        <div className="path mx-auto px-5 max-md:mt-5" >
          <Image src={DP} alt="yash chopra" className='dd2' />
        </div>

      </div>
    </>
  )
}
