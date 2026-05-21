"use client";

import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import { ComputersCanvas } from "./canvas";

const GithubIcon = ({ className, size = 20 }: { className?: string; size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.5-3.8 5.2 5.2 0 0 0 .15-3.8s-1.2-.38-3.9 1.5a13.38 13.38 0 0 0-7 0C6.2 1.62 5 2 5 2a5.2 5.2 0 0 0 .15 3.8A5.2 5.2 0 0 0 3 9.56c0 5.23 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4" />
  </svg>
);

const LinkedinIcon = ({ className, size = 20 }: { className?: string; size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  return (
    <section className="relative w-full h-screen mx-auto bg-hero-pattern bg-cover bg-no-repeat bg-center">
      
      {/* Top Navigation Bar */}
      <nav className="absolute top-0 left-0 w-full px-8 py-6 md:px-16 flex justify-between items-center z-30 select-none bg-transparent">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl font-extrabold tracking-widest text-white cursor-default hover:text-[#915EFF] transition-colors"
        >
          SG
        </motion.div>

        <motion.a 
          href="mailto:satwikgupta0210@gmail.com"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="hidden md:block text-sm font-mono tracking-widest text-secondary hover:text-white transition-colors cursor-pointer"
        >
          satwikgupta0210@gmail.com
        </motion.a>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex gap-6 md:gap-10 text-xs md:text-sm font-bold tracking-widest text-secondary"
        >
          <a href="#projects" className="hover:text-white transition-colors uppercase">Work</a>
          <a href="#experience" className="hover:text-white transition-colors uppercase">About</a>
          <a href="#contact" className="hover:text-white transition-colors uppercase">Contact</a>
        </motion.div>
      </nav>

      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 md:px-16 flex flex-row items-start gap-5 pointer-events-none">
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Hi, I'm <span className='text-[#915EFF]'>Satwik</span>
          </h1>
          <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
            An aspiring Software Engineer
          </p>
        </div>
      </div>

      <ComputersCanvas />

      {/* Bottom Socials & Call-to-Actions Bar */}
      <div className="absolute bottom-10 left-0 w-full px-8 md:px-16 flex justify-between items-center z-30 select-none">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex gap-4"
        >
          <a 
            href="https://github.com/iamsatwik-dev" 
            target="_blank" 
            rel="noreferrer" 
            className="p-3 bg-tertiary hover:bg-[#915EFF] rounded-full text-white transition-all hover:scale-110 shadow-card"
          >
            <GithubIcon size={20} />
          </a>
          <a 
            href="https://linkedin.com/in/" 
            target="_blank" 
            rel="noreferrer" 
            className="p-3 bg-tertiary hover:bg-[#915EFF] rounded-full text-white transition-all hover:scale-110 shadow-card"
          >
            <LinkedinIcon size={20} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <a 
            href="/resume" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3 bg-tertiary hover:bg-[#915EFF] rounded-full text-xs md:text-sm font-bold tracking-widest text-white transition-all hover:scale-105 active:scale-95 shadow-card"
          >
            <FileText className="w-4 h-4 text-white" />
            RESUME
          </a>
        </motion.div>
      </div>

      <div className='absolute bottom-32 w-full flex justify-center items-center'>
        <a href='#experience'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
}
