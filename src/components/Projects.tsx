"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
}

const projects: Project[] = [
  {
    title: "FactGuard AI – Automated Fact-Checker",
    category: "backend",
    tech: ["Streamlit", "Python", "LLaMA 3.3", "SerpAPI", "pdfplumber"],
    description: "An AI-powered fact-checking dashboard that uploads PDFs, extracts verifiable claims, queries Google live via SerpAPI, and verifies assertions using LLaMA 3.3 to flag inaccuracies.",
    github: "https://github.com/iamsatwik-dev/factguard-ai",
    live: "https://factguard-ai.streamlit.app/"
  },
  {
    title: "Lyftr AI – Ingestion Service",
    category: "backend",
    tech: ["FastAPI", "Python", "SQLite", "Docker", "Docker Compose"],
    description: "A production-ready FastAPI microservice for webhook ingestion featuring HMAC signature security, idempotent storage constraints, and containerized deployment.",
    github: "https://github.com/iamsatwik-dev/lftyr-ai-backend"
  },
  {
    title: "ERP System – ABC IT Solutions",
    category: "fullstack",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "REST API"],
    description: "A role-based MERN stack ERP with separate Admin and Employee portals, managing modules for Enquiries, Quotations, Job Applications, Leave Approvals, and Salary Slips with PDF export support.",
    github: "https://github.com/iamsatwik-dev/ERP_SYSTEM"
  },
  {
    title: "Stayverse - Hotel Booking Platform",
    category: "fullstack",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Bootstrap", "HTML/CSS"],
    description: "Developed a hotel booking platform with user authentication, validation, and search functionality. Implemented full CRUD features for rooms, dynamic reviews, and a responsive UI.",
    github: "https://github.com/iamsatwik-dev/Stayverse"
  },
  {
    title: "myVideoCall – WebRTC Video Conferencing",
    category: "fullstack",
    tech: ["WebRTC", "Socket.io", "React.js", "Node.js", "Express.js"],
    description: "A full-stack peer-to-peer video conferencing application built with WebRTC and Socket.io for real-time signaling, complete with audio/video toggles.",
    github: "https://github.com/iamsatwik-dev/myVideoCall"
  },
  {
    title: "Taskify – Advanced Todo List",
    category: "frontend",
    tech: ["React.js", "Vite", "TailwindCSS", "Local Storage"],
    description: "A premium kanban-style project tracking board supporting multiple categories, priority badges, responsive interfaces, and offline local storage persistence.",
    github: "https://github.com/iamsatwik-dev/my-todo-list",
    live: "https://taskify-lite.netlify.app/"
  },
  {
    title: "AtmosView – React Weather App",
    category: "frontend",
    tech: ["React.js", "Vite", "OpenWeather API", "CSS"],
    description: "A high-fidelity weather metrics tracking client rendering real-time atmospheric data, intuitive icons, and custom city forecast charts.",
    github: "https://github.com/iamsatwik-dev/weather-app-react",
    live: "https://atmosview.netlify.app/"
  },
  {
    title: "Weather Forecast Dashboard",
    category: "frontend",
    tech: ["React.js", "Vite", "OpenWeather API", "TailwindCSS"],
    description: "Interactive real-time atmospheric dashboard providing precise multi-city searches, custom analytical indicators, and weather widgets.",
    github: "https://github.com/iamsatwik-dev/Weather-forecast-react",
    live: "https://weather-forecast-react-s9yw.onrender.com"
  },
  {
    title: "Django Blogging Website",
    category: "backend",
    tech: ["Django", "Python", "SQLite", "Bootstrap", "HTML/CSS"],
    description: "A full-featured server-rendered publishing workspace with secure user authentication, post curation, comment management, and media uploads.",
    github: "https://github.com/iamsatwik-dev/django-blog-project"
  },
  {
    title: "E-Commerce App",
    category: "fullstack",
    tech: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB"],
    description: "Full-stack e-commerce marketplace featuring robust state tracking using Redux, a unified cart experience, product catalogs, and order search.",
    github: "https://github.com/iamsatwik-dev/E-Commerce"
  },
  {
    title: "Social Media Dashboard",
    category: "frontend",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    description: "Sleek analytics tracking dashboard with dark mode switching, premium micro-animations, dynamic cards, and fully responsive grids.",
    github: "https://github.com/iamsatwik-dev/Social_media_dashboard"
  },
  {
    title: "Zerodha Web Clone",
    category: "fullstack",
    tech: ["React.js", "Chart.js", "TailwindCSS", "Node.js"],
    description: "A beautiful trading workspace clone of the Zerodha Kite app, featuring financial chart displays, portfolios, and investment metrics.",
    github: "https://github.com/iamsatwik-dev/Zerodha-clone"
  },
  {
    title: "Student Registration Portal",
    category: "frontend",
    tech: ["JavaScript", "HTML", "CSS", "Local Storage"],
    description: "A responsive database UI for student records enabling quick registrations, validations, live searches, and seamless CRUD storage persistence.",
    github: "https://github.com/iamsatwik-dev/student-registration"
  }
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full-Stack & Web" },
  { id: "backend", label: "AI & Backend" },
  { id: "frontend", label: "Frontend & Utils" }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <section className="py-20 relative z-10" id="projects">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-sans flex items-center gap-3">
              <FolderGit2 className="text-purple-500" /> Curated Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mt-4 rounded-full"></div>
          </motion.div>

          {/* Premium Filter Tabs */}
          <motion.div 
            className="flex flex-wrap gap-2 bg-white/5 p-1 rounded-xl backdrop-blur-md border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "text-white shadow-lg"
                    : "text-gray-400 hover:text-white cursor-pointer"
                }`}
              >
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Dynamic Project Grid with AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="glass rounded-2xl p-6 flex flex-col h-full group hover:-translate-y-2 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <FolderGit2 className="w-10 h-10 text-purple-400" />
                  <div className="flex gap-3">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/5 hover:border-white/20 text-gray-300 hover:text-white transition-all hover:scale-105"
                      >
                        <GithubIcon size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/5 hover:border-white/20 text-gray-300 hover:text-white transition-all hover:scale-105"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-mono text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
