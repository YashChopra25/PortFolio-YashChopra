"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Skill from '../_components/Skill'
import Education from '../_components/Education'
import Experience from '../_components/Experience'
import { User, Briefcase, GraduationCap, Code2 } from 'lucide-react'

const AboutPage = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }

    return (
        <main className="min-h-screen py-20 px-6 max-w-5xl mx-auto space-y-32">
            {/* Hero / Motto */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
                className="text-center space-y-6"
            >
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                    Beyond the <span className="text-gradient">Code</span>.
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    I am a developer who believes in building products that are not just functional,
                    but also solve real problems with elegant design.
                </p>
            </motion.section>

            {/* Biography Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
                className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start"
            >
                <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                        <User size={32} />
                    </div>
                    <h2 className="text-3xl font-bold">My Story</h2>
                </div>
                <div className="md:col-span-2 space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                        Hello! I&apos;m <span className="text-foreground font-semibold">Yash Chopra</span>,
                        a Full Stack Developer with a passion for building websites that are as functional as they are beautiful.
                    </p>
                    <p>
                        My journey in tech is driven by curiosity and a relentless desire to learn. I specialize
                        in creating user-centric digital experiences that solve complex problems through
                        clean code and intuitive design.
                    </p>
                    <p>
                        Whether it&apos;s a high-performance backend system or a pixel-perfect frontend interface,
                        I bring a detail-oriented approach to every project.
                    </p>
                </div>
            </motion.section>

            {/* Skills Section - Grid Layout */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
                className="space-y-12"
            >
                <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                        <Code2 size={32} />
                    </div>
                    <h2 className="text-3xl font-bold">Technical Arsenal</h2>
                </div>
                <div className="glass rounded-[2rem] p-8 md:p-12">
                    <Skill />
                </div>
            </motion.section>

            {/* Experience & Education - Sequential Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                {/* Experience */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={sectionVariants}
                    className="space-y-12"
                >
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                            <Briefcase size={32} />
                        </div>
                        <h2 className="text-3xl font-bold">Experience</h2>
                    </div>
                    <div className="pl-4">
                        <Experience />
                    </div>
                </motion.section>

                {/* Education */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={sectionVariants}
                    className="space-y-12"
                >
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                            <GraduationCap size={32} />
                        </div>
                        <h2 className="text-3xl font-bold">Education</h2>
                    </div>
                    <div className="pl-4">
                        <Education />
                    </div>
                </motion.section>
            </div>
        </main>
    )
}

export default AboutPage
