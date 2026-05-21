"use client";

import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import Scene from "./Scene";

const GithubIcon = ({ className, size = 20 }: { className?: string, size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.5-3.8 5.2 5.2 0 0 0 .15-3.8s-1.2-.38-3.9 1.5a13.38 13.38 0 0 0-7 0C6.2 1.62 5 2 5 2a5.2 5.2 0 0 0 .15 3.8A5.2 5.2 0 0 0 3 9.56c0 5.23 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4" />
  </svg>
);

const LinkedinIcon = ({ className, size = 20 }: { className?: string, size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-[#050505]">
      {/* 3D Scene Background with interactive avatar */}
      <Scene />
      
      {/* Top Navigation Bar */}
      <nav className="absolute top-0 left-0 w-full px-8 py-6 md:px-16 flex justify-between items-center z-30 select-none">
        {/* Logo / Initials */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-extrabold tracking-widest text-white cursor-default hover:text-cyan-400 transition-colors"
        >
          SG
        </motion.div>

        {/* Center Email (Visible on desktop) */}
        <motion.a 
          href="mailto:satwikgupta0210@gmail.com"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:block text-sm font-mono tracking-widest text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          satwikgupta0210@gmail.com
        </motion.a>

        {/* Right Navigation Links */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex gap-6 md:gap-10 text-xs md:text-sm font-bold tracking-widest text-gray-300"
        >
          <a href="#projects" className="hover:text-cyan-400 transition-colors uppercase">Work</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors uppercase">About</a>
          <a href="#education" className="hover:text-cyan-400 transition-colors uppercase">Education</a>
        </motion.div>
      </nav>

      {/* Main Hero Content Split Overlay */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0 z-20 min-h-screen py-24 select-none">
        
        {/* Left Side: Hello & Name */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-5/12"
        >
          <span className="text-cyan-400 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-1">
            Hello! I'm
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[0.95] uppercase">
            Satwik<br />Gupta
          </h1>
        </motion.div>

        {/* Center Space for 3D model is naturally created by the flex spacing */}
        <div className="w-full h-[320px] md:h-0 pointer-events-none md:w-2/12"></div>

        {/* Right Side: Role & Title */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, delay: 0.15 }}
          className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-5/12"
        >
          <span className="text-cyan-400 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-1">
            A Full Stack
          </span>
          <h2 
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[0.95] text-transparent uppercase select-none"
            style={{ WebkitTextStroke: "1.5px #22d3ee" }}
          >
            Developer
          </h2>
          <h3 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[0.95] uppercase">
            Engineer
          </h3>
        </motion.div>
      </div>

      {/* Bottom Socials & Call-to-Actions Bar */}
      <div className="absolute bottom-10 left-0 w-full px-8 md:px-16 flex justify-between items-center z-30 select-none">
        {/* Left Side: Social Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex gap-4"
        >
          <a 
            href="https://github.com/iamsatwik-dev" 
            target="_blank" 
            rel="noreferrer" 
            className="p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 backdrop-blur-md text-white transition-all hover:scale-110 hover:border-cyan-400/30"
          >
            <GithubIcon size={20} />
          </a>
          <a 
            href="https://linkedin.com/in/" 
            target="_blank" 
            rel="noreferrer" 
            className="p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 backdrop-blur-md text-white transition-all hover:scale-110 hover:border-cyan-400/30"
          >
            <LinkedinIcon size={20} />
          </a>
        </motion.div>

        {/* Right Side: Resume Download Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="/resume" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 backdrop-blur-md text-xs md:text-sm font-bold tracking-widest text-white transition-all hover:scale-105 active:scale-95 hover:border-cyan-400/30"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            RESUME
          </a>
        </motion.div>
      </div>
    </section>
  );
}
