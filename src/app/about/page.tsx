"use client"
import React from 'react'
import DP from '@/../public/dp.png'
import Image from 'next/image'
import { ChakraProvider, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import Skill from '../_components/Skill'
import Education from '../_components/Education'

const About = () => {
    return (
        <ChakraProvider>

            <div className='my-2 mx-auto text-white flex justify-center gap-10 max-md:flex-col-reverse'>
                <div className="bg-white/20 rounded-md flex justify-center">
                    <Image src={DP} alt="yash chopra" />
                </div>
                <div className='w-2/4 max-md:w-full '>
                    <h1 className='text-6xl font-bold font-sans max-md:text-center max-md:text-4xl max-md:px-3'>About Me</h1>
                    <p className='my-3 text-lg font-medium leading-6 font-sans text-white/35 capitalize max-md:px-3'>
                        Experienced full stack developer skilled in front-end technologies like HTML, CSS, JavaScript (React.js,Nextjs) and back-end technologies such as Node.js,Express.js and databases like  MongoDB,MySQL. Proficient in programming practices and passionate about creating efficient, user-friendly web applications. Constantly learning and adapting to new technologies to stay ahead in the ever-evolving tech landscape. </p>
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
                                <p>two!</p>
                            </TabPanel>
                            <TabPanel>
                                <Education />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </div>
            </div>
        </ChakraProvider>
    )
}

export default About