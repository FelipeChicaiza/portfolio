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
          I&apos;m currently pursuing a{" "}
          <span className="font-medium">Bachelor of Arts in Computer Science</span> with a{" "}
          <span className="font-medium">Minor in Engineering Mathematics</span> at Florida International University, 
          where I&apos;ve maintained a <span className="font-medium">3.7 GPA</span> and earned 
          <span className="font-medium"> Dean&apos;s List honors</span>. Over the past year, I&apos;ve gained 
          hands-on experience in both{" "}
          <span className="font-medium">full-stack web development</span> and{" "}
          <span className="font-medium">software engineering</span>, with a focus on building real-world applications 
          through <span className="font-medium">React, Next.js, Node.js, MySQL, and C++ (JUCE)</span>.  
          <span className="italic">What excites me most about programming</span> is tackling challenging 
          problems and finding elegant solutions that make a real impact. I&apos;m also expanding my skills by learning{" "}
          <span className="font-medium">TypeScript and MongoDB</span>. Currently, I&apos;m seeking a{" "}
          <span className="font-medium">software development internship</span> where I can continue to grow, 
          collaborate, and contribute.
        </p>

        <p>
          <span className="italic">Beyond coding</span>, I enjoy blending creativity and technology. I&apos;m passionate 
          about <span className="font-medium">music production</span>I&apos;ve built audio plugins with C++ and the 
          JUCE framework, and I love diving into <span className="font-medium">music theory and sound design</span>. 
          Outside of tech and music, you can usually find me playing video games, watching films, or learning something new 
          (currently teaching myself guitar 🎸).
        </p>
    </motion.section>
  )
}
