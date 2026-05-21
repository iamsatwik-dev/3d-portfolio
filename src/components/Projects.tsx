"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tilt } from "react-tilt";
import { FolderGit2, ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 24, className }: { size?: number, className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.5-3.8 5.2 5.2 0 0 0 .15-3.8s-1.2-.38-3.9 1.5a13.38 13.38 0 0 0-7 0C6.2 1.62 5 2 5 2a5.2 5.2 0 0 0 .15 3.8A5.2 5.2 0 0 0 3 9.56c0 5.23 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4" />
  </svg>
);

interface Project {
  title: string;
  tech: string[];
  description: string;
  github: string;
  live?: string;
  category: "fullstack" | "backend" | "frontend";
  image?: string;
}

const projects: Project[] = [
  {
    title: "ERP System",
    category: "fullstack",
    tech: ["MongoDB", "Express", "React", "Node"],
    description: "A role-based MERN stack ERP with separate Admin and Employee portals.",
    github: "https://github.com/iamsatwik-dev/ERP_SYSTEM",
    live: "https://erp-system-3ux9.onrender.com/",
    image: "/assets/erpSystem.png"
  },
  {
    title: "myVideoCall",
    category: "fullstack",
    tech: ["WebRTC", "Socket.io", "React", "Node"],
    description: "A full-stack peer-to-peer video conferencing application built with WebRTC.",
    github: "https://github.com/iamsatwik-dev/myVideoCall",
    live: "https://my-video-call-one.vercel.app/hy",
    image: "/assets/myVideoCall.png"
  },
  {
    title: "Stayverse",
    category: "fullstack",
    tech: ["MongoDB", "Express", "React", "Node"],
    description: "Developed a hotel booking platform with user authentication, validation, and search.",
    github: "https://github.com/iamsatwik-dev/Stayverse"
  },
  {
    title: "FactGuard AI",
    category: "backend",
    tech: ["Streamlit", "Python", "LLaMA 3.3"],
    description: "An AI-powered fact-checking dashboard that verifies assertions using LLaMA 3.3.",
    github: "https://github.com/iamsatwik-dev/factguard-ai",
    live: "https://factguard-ai.streamlit.app/",
    image: "/assets/factguard.png"
  },
  {
    title: "Weather Forecast",
    category: "frontend",
    tech: ["React", "API", "TailwindCSS"],
    description: "A responsive weather forecasting application providing real-time data and conditions.",
    github: "https://github.com/iamsatwik-dev/weather-app-react",
    live: "https://atmosview.netlify.app/",
    image: "/assets/weatherapp.png"
  },
  {
    title: "Taskify",
    category: "frontend",
    tech: ["React", "Vite", "TailwindCSS"],
    description: "A premium kanban-style project tracking board supporting multiple categories.",
    github: "https://github.com/iamsatwik-dev/my-todo-list",
    live: "https://taskify-lite.netlify.app/"
  }
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0" id="projects">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">
          My work
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          Projects.
        </h2>
      </motion.div>

      <div className='w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-4'>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center md:text-left'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it.
        </motion.p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mt-6 md:mt-0">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                activeCategory === category.id
                  ? "bg-[#915EFF] text-white"
                  : "bg-tertiary text-secondary hover:text-white"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: index * 0.1 }}
            >
              <Tilt
                options={{ max: 45, scale: 1, speed: 450 }}
                className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full min-h-[380px] flex flex-col shadow-card'
              >
                <div className='relative w-full h-[180px] bg-black-100 rounded-2xl p-4 flex items-center justify-center overflow-hidden'>
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover absolute inset-0 rounded-xl" />
                  ) : (
                    <FolderGit2 className="w-20 h-20 text-[#915EFF] opacity-20 absolute" />
                  )}
                  
                  <div className='absolute inset-0 flex justify-end m-3 gap-2'>
                    {project.live && (
                      <div
                        onClick={() => window.open(project.live, "_blank")}
                        className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-all'
                      >
                        <ExternalLink size={18} className="text-white" />
                      </div>
                    )}
                    <div
                      onClick={() => window.open(project.github, "_blank")}
                      className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-all'
                    >
                      <GithubIcon size={18} className="text-white" />
                    </div>
                  </div>
                </div>

                <div className='mt-5 flex-grow'>
                  <h3 className='text-white font-bold text-[24px]'>{project.title}</h3>
                  <p className='mt-2 text-secondary text-[14px]'>{project.description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                  {project.tech.map((tag) => (
                    <p
                      key={`${project.title}-${tag}`}
                      className='text-[14px] blue-text-gradient font-medium'
                    >
                      #{tag}
                    </p>
                  ))}
                </div>
              </Tilt>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
