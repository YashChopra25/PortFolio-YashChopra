"use client"
import { Typewriter } from 'react-simple-typewriter'
import DP from '@/../public/dp.png'
import Image from 'next/image'
import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { SiLeetcode } from 'react-icons/si'
import Link from "next/link"

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
            <a className=' text-orange-500 hover:text-white border border-orange-500 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-500 dark:focus:ring-orange-800' href={process.env.RESUME_LINK} download={"YashChopraResume.pdf"}>Resume</a>
            <Link href='/contact' className='text-orange-500 hover:text-white border border-orange-500 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-500 dark:focus:ring-orange-800'>Hire me</Link>
          </div>
          <div className="flex gap-4 max-md:px-5">
            <Link href="https://www.linkedin.com/in/yashchopra25/" target='_linkedIn'>
              <FaLinkedin size={30} color='blue' className='bg-white' />
              <span className="sr-only">LinkedIn Profile</span>
            </Link>
            <Link href="https://twitter.com/YashChopra25" target='_Twitter'>
              <RiTwitterXFill size={25} color='white' />
              <span className="sr-only">X(twitter) Profile</span>
            </Link>
            <Link href="https://leetcode.com/YashChopra25/" target='_leetcode'>
              <SiLeetcode size={25} color='#ffa116' />
              <span className="sr-only">Leetcode Profile</span>
            </Link>
          </div>
        </div>
        <div className="path mx-auto px-5 max-md:mt-5" >
          <Image src={DP} alt="yash chopra" className='dd2' />
        </div>

      </div>
    </>
  )
}
