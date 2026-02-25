"use client"

import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Link from "next/link"
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from "react-icons/fa6"
import { RiTwitterXFill } from "react-icons/ri"
import { SiLeetcode } from 'react-icons/si'
import { ArrowRight, Download } from 'lucide-react'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <main className="relative min-h-[calc(100vh-80px)] overflow-hidden flex items-center justify-center py-20 px-4">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full text-center space-y-12"
      >
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-xl md:text-2xl font-medium text-primary tracking-wide">
            Hi, I&apos;m Yash Chopra
          </h2>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight">
            I build <span className="text-gradient">exceptional</span> digital experiences.
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="h-16 text-2xl md:text-4xl font-semibold text-muted-foreground">
          <Typewriter
            words={['Frontend Developer', 'Backend Developer', 'Full Stack Engineer', 'UI/UX Enthusiast']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.div>

        <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
          I specialize in crafting high-performance, accessible, and visually stunning web applications
          that solve real-world problems.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-6">
          <Link
            href="/contact"
            className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            Hire me
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={process.env.RESUME_LINK || "#"}
            className="px-8 py-4 border border-border hover:bg-muted/50 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            download="YashChopraResume.pdf"
          >
            Resume
            <Download className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-8 pt-8 border-t border-border/50">
          {[
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/yashchopra25/", color: "hover:text-[#0077b5]", label: "LinkedIn" },
            { icon: FaGithub, href: "https://github.com/YashChopra25/", color: "hover:text-foreground", label: "GitHub" },
            { icon: RiTwitterXFill, href: "https://twitter.com/YashChopra25", color: "hover:text-foreground", label: "X" },
            { icon: SiLeetcode, href: "https://leetcode.com/YashChopra25/", color: "hover:text-[#ffa116]", label: "LeetCode" }
          ].map((social, index) => (
            <Link
              key={index}
              href={social.href}
              target="_blank"
              className={`text-muted-foreground transition-all duration-300 hover:-translate-y-1 ${social.color}`}
            >
              <social.icon size={28} />
              <span className="sr-only">{social.label} focus:outline-none Profile</span>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </main>
  )
}
