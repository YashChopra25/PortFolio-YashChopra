"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa6'
import { ExternalLink } from 'lucide-react'
import { Total_Project } from '../_utilities/datafileds/Project'

const ProjectsPage = () => {
    return (
        <main className="min-h-screen py-20 px-6 max-w-7xl mx-auto space-y-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-4"
            >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    My <span className="text-gradient">Projects</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    A selection of my recent works, ranging from frontend experiments to full-stack applications.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Total_Project.map((project, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        key={project.id}
                        className="group relative flex flex-col glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
                    >
                        {/* Project Image */}
                        <div className="relative aspect-video overflow-hidden">
                            <Image
                                src={project.Imgsrc}
                                alt={project.Title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                <Link
                                    href={project.Github_Project_url}
                                    target="_blank"
                                    className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-colors"
                                >
                                    <FaGithub size={24} className="text-white" />
                                </Link>
                                <Link
                                    href={project.Live_Project_url}
                                    target="_blank"
                                    className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-colors"
                                >
                                    <ExternalLink size={24} className="text-white" />
                                </Link>
                            </div>
                        </div>

                        {/* Project Info */}
                        <div className="p-6 flex-1 flex flex-col gap-4">
                            <div className="flex justify-between items-start">
                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                    {project.Title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.Techniogy_used.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary rounded-md"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <p className="text-muted-foreground text-sm line-clamp-3">
                                {project.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    )
}

export default ProjectsPage