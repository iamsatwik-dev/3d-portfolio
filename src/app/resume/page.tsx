"use client";

import React, { useRef } from "react";
import Link from "next/link";

export default function ResumePage() {
  const printAreaRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-105 flex flex-col font-sans print:bg-white print:text-black">
      {/* Dynamic Header Bar - Hidden on print */}
      <header className="sticky top-0 z-50 glass border-b border-white/10 px-6 py-4 flex justify-between items-center select-none print:hidden">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-sm font-bold tracking-widest text-gray-300 hover:text-cyan-400 transition-colors uppercase"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Portfolio
        </Link>
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2.5 px-5 py-2.5 bg-cyan-500 hover:bg-cyan-600 active:scale-95 text-black font-bold text-xs tracking-wider rounded-full transition-all shadow-[0_0_20px_rgba(6,182,212,0.35)]"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 6 2 18 2 18 9"></polyline>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
            <rect x="6" y="14" width="12" height="8"></rect>
          </svg>
          PRINT / SAVE AS PDF
        </button>
      </header>

      {/* Main Resume Sheet Container */}
      <main className="flex-1 flex justify-center items-start py-10 px-4 md:px-8 bg-neutral-950 print:bg-white print:p-0 print:m-0">
        <div 
          ref={printAreaRef}
          className="w-full max-w-[850px] bg-white text-neutral-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-10 md:p-12 border border-neutral-200 rounded-sm font-serif leading-relaxed print:shadow-none print:border-none print:p-0 print:m-0 print:max-w-full"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          {/* Header Section */}
          <div className="text-center border-b-[1.5px] border-neutral-300 pb-3">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 mb-1.5">
              Satwik Gupta
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-xs md:text-sm font-sans font-medium text-neutral-600 print:text-neutral-700">
              <a href="https://3d-portfolio-iamsatwik-dev.vercel.app" target="_blank" rel="noreferrer" className="text-cyan-700 hover:text-cyan-900 underline print:text-neutral-800">Portfolio</a>
              <span className="text-neutral-400">|</span>
              <a href="mailto:satwikgupta0210@gmail.com" className="hover:underline">satwikgupta0210@gmail.com</a>
              <span className="text-neutral-400">|</span>
              <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" className="text-cyan-700 hover:text-cyan-900 underline print:text-neutral-800">LinkedIn</a>
              <span className="text-neutral-400">|</span>
              <a href="https://github.com/iamsatwik-dev" target="_blank" rel="noreferrer" className="text-cyan-700 hover:text-cyan-900 underline print:text-neutral-800">GitHub</a>
              <span className="text-neutral-400">|</span>
              <span>Noida</span>
              <span className="text-neutral-400">|</span>
              <span>+91-9005613717</span>
            </div>
          </div>

          {/* Summary Section */}
          <div className="mt-5">
            <h2 className="text-base font-bold tracking-wider uppercase text-neutral-900 border-b-[1.2px] border-neutral-300 pb-0.5 mb-2">
              Summary
            </h2>
            <p className="text-[13.5px] text-neutral-800 text-justify leading-relaxed">
              Results-driven Computer Science final-year graduate with hands-on experience in full stack web development. Proficient in building end-to-end applications using modern frontend and backend technologies. Eager to contribute to innovative teams and deliver scalable, user-centric solutions.
            </p>
          </div>

          {/* Skills Section */}
          <div className="mt-5">
            <h2 className="text-base font-bold tracking-wider uppercase text-neutral-900 border-b-[1.2px] border-neutral-300 pb-0.5 mb-2">
              Skills
            </h2>
            <div className="text-[13.5px] text-neutral-800 space-y-1">
              <div>
                <strong className="font-bold">Programming Languages:</strong> C, C++, Python
              </div>
              <div>
                <strong className="font-bold">Frontend:</strong> HTML, CSS, JavaScript
              </div>
              <div>
                <strong className="font-bold">Backend:</strong> Node.js, Express.js, RESTful API
              </div>
              <div>
                <strong className="font-bold">Frameworks / Libraries:</strong> React.js, React Native, Bootstrap, Tailwind CSS
              </div>
              <div>
                <strong className="font-bold">Databases:</strong> MongoDB, SQL
              </div>
              <div>
                <strong className="font-bold">Tools & Technologies:</strong> Git, GitHub, VS Code, Postman, MS Excel, Unix/Linux Commands
              </div>
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="mt-5">
            <h2 className="text-base font-bold tracking-wider uppercase text-neutral-900 border-b-[1.2px] border-neutral-300 pb-0.5 mb-2">
              Work Experience/Internship
            </h2>
            <div className="text-[13.5px] text-neutral-800">
              <div className="flex justify-between items-baseline mb-0.5">
                <span className="font-bold text-neutral-900 text-sm">Web Development Trainee – IBM</span>
                <span className="italic text-xs font-sans text-neutral-600 print:text-neutral-700">Feb 2026 – Mar 2026</span>
              </div>
              <ul className="list-disc pl-5 mt-1 space-y-0.5 text-neutral-800">
                <li>One-month training on <strong className="font-bold text-neutral-900">MERN stack development</strong>.</li>
                <li>Built full-stack web applications and REST APIs.</li>
                <li>Practiced database integration with <strong className="font-bold text-neutral-900">MongoDB</strong>.</li>
              </ul>
            </div>
          </div>

          {/* Projects Section */}
          <div className="mt-5">
            <h2 className="text-base font-bold tracking-wider uppercase text-neutral-900 border-b-[1.2px] border-neutral-300 pb-0.5 mb-2">
              Projects
            </h2>
            <div className="text-[13.5px] text-neutral-800 space-y-4">
              {/* Project 1 */}
              <div>
                <div className="flex justify-between items-baseline mb-0.5">
                  <span className="font-bold text-neutral-900 text-[14px] flex items-center gap-1.5">
                    ● ERP System – ABC IT Solutions (MERN Stack)
                  </span>
                </div>
                <ul className="list-disc pl-5 mt-1 space-y-0.5 text-neutral-850">
                  <li>Developed a role-based MERN stack ERP with separate <strong className="font-bold text-neutral-900">Admin and Employee portals</strong>, managing modules for Enquiries, Quotations, Job Applications, Leave Approvals, and Salary Slips.</li>
                  <li>Built <strong className="font-bold text-neutral-900">leave management and salary slip generation</strong> with PDF download support and monthly quota tracking for employees.</li>
                  <li><strong className="font-bold text-neutral-850">Technologies:</strong> MongoDB, Express.js, React.js, Node.js, REST API</li>
                  <li><strong className="font-bold text-neutral-850">Link:</strong> <a href="https://github.com/iamsatwik-dev" target="_blank" rel="noreferrer" className="text-cyan-700 hover:text-cyan-900 underline print:text-neutral-800">GitHub Repo</a></li>
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex justify-between items-baseline mb-0.5">
                  <span className="font-bold text-neutral-900 text-[14px]">
                    ● Weather App Forecast - React Based Project
                  </span>
                </div>
                <ul className="list-disc pl-5 mt-1 space-y-0.5 text-neutral-850">
                  <li>Built a responsive weather application that displays real-time weather data using <strong className="font-bold text-neutral-900">OpenWeather API</strong>.</li>
                  <li><strong className="font-bold text-neutral-850">Technologies:</strong> HTML, CSS, JavaScript, Open Weather API</li>
                  <li><strong className="font-bold text-neutral-850">Link:</strong> <a href="https://github.com/iamsatwik-dev" target="_blank" rel="noreferrer" className="text-cyan-700 hover:text-cyan-900 underline print:text-neutral-800">GitHub Repo</a> | <a href="#" className="text-cyan-700 hover:text-cyan-900 underline print:text-neutral-800">Live</a></li>
                </ul>
              </div>

              {/* Project 3 */}
              <div>
                <div className="flex justify-between items-baseline mb-0.5">
                  <span className="font-bold text-neutral-900 text-[14px]">
                    ● Stayverse - Hotel Booking Platform
                  </span>
                </div>
                <ul className="list-disc pl-5 mt-1 space-y-0.5 text-neutral-850">
                  <li>Developed a hotel booking platform with <strong className="font-bold text-neutral-900">user authentication, validation, and search functionality</strong>.</li>
                  <li>Implemented CRUD operations, and a responsive UI, improving product management efficiency.</li>
                  <li><strong className="font-bold text-neutral-850">Technologies:</strong> MongoDB, Express.js, Node.js, HTML, CSS, Bootstrap</li>
                  <li><strong className="font-bold text-neutral-850">Link:</strong> <a href="https://github.com/iamsatwik-dev" target="_blank" rel="noreferrer" className="text-cyan-700 hover:text-cyan-900 underline print:text-neutral-800">GitHub Repo</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Extra-Curricular Activities */}
          <div className="mt-5">
            <h2 className="text-base font-bold tracking-wider uppercase text-neutral-900 border-b-[1.2px] border-neutral-300 pb-0.5 mb-2">
              Extra-Curricular Activities
            </h2>
            <ul className="list-disc pl-5 text-[13.5px] text-neutral-800 space-y-0.5">
              <li>Completed online courses in C++ algorithms, and web development.</li>
              <li>Solved 100+ problems on LeetCode covering arrays, linked lists, and dynamic programming.</li>
            </ul>
          </div>

          {/* Certification Section */}
          <div className="mt-5">
            <h2 className="text-base font-bold tracking-wider uppercase text-neutral-900 border-b-[1.2px] border-neutral-300 pb-0.5 mb-2">
              Certification
            </h2>
            <ul className="list-disc pl-5 text-[13.5px] text-neutral-800 space-y-0.5">
              <li><strong className="font-bold text-neutral-900">DSA with C++:</strong> By Apna College</li>
              <li><strong className="font-bold text-neutral-900">MERN Full Stack Development:</strong> By Apna College</li>
              <li>
                <strong className="font-bold text-neutral-900">Virtual Internship – Web, Mobile Development & Marketing:</strong> IBM Developer Skills Network (Feb–Mar 2026) : <a href="#" className="text-cyan-700 hover:text-cyan-900 underline print:text-neutral-800">LINK</a>
              </li>
            </ul>
          </div>

          {/* Education Section */}
          <div className="mt-5">
            <h2 className="text-base font-bold tracking-wider uppercase text-neutral-900 border-b-[1.2px] border-neutral-300 pb-0.5 mb-2">
              Education
            </h2>
            <div className="text-[13.5px] text-neutral-800 space-y-3.5">
              <div>
                <div className="flex justify-between items-baseline font-bold text-neutral-900 text-sm">
                  <span>Dronacharya Group of Institutions, Greater Noida</span>
                  <span className="italic text-xs font-sans text-neutral-600 print:text-neutral-700 font-medium">Nov'2022-May'2026</span>
                </div>
                <div className="text-neutral-750">
                  Bachelor of Technology<br />
                  Computer Science and Information Technology | <strong className="font-bold text-neutral-900">CGPA</strong> : 7.8
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-bold text-neutral-900 text-sm">
                  <span>Sri Ram Convent School, Varanasi</span>
                  <span className="italic text-xs font-sans text-neutral-600 print:text-neutral-700 font-medium">Aug| 2022</span>
                </div>
                <div className="text-neutral-750">
                  Higher Secondary(12th) | CBSE | <strong className="font-bold text-neutral-900">Percentage</strong>: 77%
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-bold text-neutral-900 text-sm">
                  <span>Sri Ram Convent School, Varanasi</span>
                  <span className="italic text-xs font-sans text-neutral-600 print:text-neutral-700 font-medium">Aug| 2020</span>
                </div>
                <div className="text-neutral-750">
                  Secondary(10th) | CBSE | <strong className="font-bold text-neutral-900">Percentage</strong>: 84%
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
