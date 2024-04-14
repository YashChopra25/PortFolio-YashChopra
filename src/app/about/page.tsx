"use client"
import React from 'react'
import DP from '@/../public/dp.png'
import Image from 'next/image'
import { ChakraProvider, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import Skill from '../_components/Skill'
import Education from '../_components/Education'
import Experience from '../_components/Experience'

const About = () => {

    return (
        <ChakraProvider>

            <div className='my-2 mx-auto text-white flex justify-center gap-10 max-md:flex-col-reverse'>
                <div className="bg-white/20 rounded-md  max-h-[610px]">
                    <Image src={DP} alt="yash chopra" className='dd' />
                </div>
                <div className='w-2/4 max-md:w-full '>
                    <h1 className='text-4xl font-bold font-sans max-md:text-center max-md:text-4xl max-md:px-3'>About Me</h1>
                    <p className='my-3 text-lg font-medium leading-6 tracking-wide font-sans text-white/35 capitalize max-md:px-3'>
                Hello! I&apos;m Yash Chopra, an aspiring website developer with a passion for crafting captivating digital experiences. While I&apos;m new to the field, my enthusiasm and dedication drive me to create user-friendly websites that blend stunning design with seamless functionality. I thrive on collaborating closely with clients to bring their visions to life, whether it&apos;s establishing an online presence, launching an e-commerce platform, or revamping existing sites. Despite my limited professional experience, I&apos;m committed to staying updated on the latest trends and technologies in web development. I invite you to explore my portfolio to see examples of my work. If you&apos;re looking for a collaborative partner to help bring your digital ideas to fruition, I&apos;d be thrilled to work with you. Let&apos;s create something remarkable together!
                    
                    </p>
                    <div className='max-md:px-3'>
                        <Tabs position="relative" variant="unstyled" marginTop={15} borderColor={"red"} overflow={'hidden'}>
                            <TabList gap={17} >
                                <Tab>Skills</Tab>
                                <Tab>Experience</Tab>
                                <Tab>Education</Tab>
                            </TabList>
                            <TabIndicator
                                mt="-1.5px"
                                height="2px"
                                bg="#f97316"
                                borderRadius="1px"
                            />

                            <TabPanels>
                                <TabPanel>
                                    <Skill />
                                </TabPanel>
                                <TabPanel>
                                    <Experience />
                                </TabPanel>
                                <TabPanel>
                                    <Education />
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </div>
                </div>
            </div>
        </ChakraProvider>
    )
}

export default About
