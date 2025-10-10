"use client"

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion"
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView('About', 0.5);
  return (
    <motion.section 
      ref ={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{delay:0.175}}
      id="about"
    >

      <SectionHeading>About Me</SectionHeading>
        <p className="mb-3">
          I&apos;m a Computer Science student at Florida International University with a passion for building scalable and efficient software. I have experience in both {" "}
          <span className="font-medium">full-stack web development</span> and{" "}
          <span className="font-medium">software engineering</span>, with a focus on building real-world applications 
          through <span className="font-medium">React, Next.js, Node.js, MySQL, Go, and C++ (JUCE)</span>.  
          <span className="italic">What excites me most about programming</span> is the challenge of solving complex problems (often a lot more challenging than I think) and building systems that are both robust and user-friendly. I am always looking to expand my skillset and am currently seeking a {" "}
          <span className="font-medium">Software Development New Grad Role</span> where I can contribute to a team and continue to grow as an engineer.
        </p>

        <p>
          <span className="italic">Beyond coding</span>, I enjoy exploring the intersection of technology and creativity. I am passionate about music production and have experience building audio plugins with C++ and the JUCE framework. I also enjoy learning about music theory and sound design.
        </p>
    </motion.section>
  )
}