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
      <main className="flex-1 flex justify-center items-start py-8 px-4 md:px-8 bg-neutral-950 print:bg-white print:p-0 print:m-0">
        <div 
          ref={printAreaRef}
          className="w-full max-w-[850px] bg-white text-black shadow-[0_20px_50px_rgba(0,0,0,0.5)] px-10 py-8 border border-neutral-200 font-serif leading-[1.35] print:shadow-none print:border-none print:p-0 print:m-0 print:max-w-full"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          {/* Header Section */}
          <div className="text-center pb-2">
            <h1 className="text-[26px] font-bold text-black mb-1">
              Satwik Gupta
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-x-2 text-[12.5px] text-blue-700 font-medium print:text-blue-700">
              <a href="https://3d-portfolio-iamsatwik-dev.vercel.app" target="_blank" rel="noreferrer">Portfolio</a>
              <a href="mailto:satwikgupta0210@gmail.com">satwikgupta0210@gmail.com</a>
              <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/iamsatwik-dev" target="_blank" rel="noreferrer">GitHub</a>
              <span className="text-black font-normal">Noida</span>
              <span className="text-blue-700">+91-9005613717</span>
            </div>
          </div>

          {/* Section: SUMMARY */}
          <div className="mt-1">
            <h2 className="text-[13.5px] font-bold uppercase text-black border-b-[1px] border-black pb-0.5 mb-1.5">
              SUMMARY
            </h2>
            <p className="text-[12px] text-black text-justify">
              Results-driven Computer Science final-year graduate with hands-on experience in full stack web development. Proficient in building end-to-end applications using modern frontend and backend technologies. Eager to contribute to innovative teams and deliver scalable, user-centric solutions.
            </p>
          </div>

          {/* Section: SKILLS */}
          <div className="mt-2.5">
            <h2 className="text-[13.5px] font-bold uppercase text-black border-b-[1px] border-black pb-0.5 mb-1.5">
              SKILLS
            </h2>
            <div className="text-[12px] text-black space-y-0.5">
              <div><strong className="font-bold">Programming Languages:</strong> C, C++, Python</div>
              <div><strong className="font-bold">Frontend:</strong> HTML, CSS, JavaScript,</div>
              <div><strong className="font-bold">Backend:</strong> Node.js, Express.js, RESTful API</div>
              <div><strong className="font-bold">Frameworks / Libraries:</strong> React.js, React Native, Bootstrap, Tailwind CSS</div>
              <div><strong className="font-bold">Databases:</strong> MongoDB, SQL</div>
              <div><strong className="font-bold">Tools & Technologies:</strong> Git, GitHub, VS Code, Postman, MS Excel, Unix/Linux Commands</div>
            </div>
          </div>

          {/* Section: WORK EXPERIENCE/INTERNSHIP */}
          <div className="mt-2.5">
            <h2 className="text-[13.5px] font-bold uppercase text-black border-b-[1px] border-black pb-0.5 mb-1.5">
              WORK EXPERIENCE/INTERNSHIP
            </h2>
            <div className="text-[12px] text-black">
              <div className="font-bold text-black text-[12px]">Web Development Trainee - IBM</div>
              <div className="italic text-[12px] text-black mb-1">Feb 2026 - Mar 2026</div>
              <ul className="list-none space-y-0.5 text-black ml-1.5">
                <li className="flex gap-1.5"><span className="text-[10px] mt-[1px]">●</span> <span>One-month training on <strong className="font-bold">MERN stack development</strong>.</span></li>
                <li className="flex gap-1.5"><span className="text-[10px] mt-[1px]">●</span> <span>Built full-stack web applications and REST APIs.</span></li>
                <li className="flex gap-1.5"><span className="text-[10px] mt-[1px]">●</span> <span>Practiced database integration with <strong className="font-bold">MongoDB</strong>.</span></li>
              </ul>
            </div>
          </div>

          {/* Section: PROJECTS */}
          <div className="mt-2.5">
            <h2 className="text-[13.5px] font-bold uppercase text-black border-b-[1px] border-black pb-0.5 mb-1.5">
              PROJECTS
            </h2>
            <div className="text-[12px] text-black space-y-2.5">
              {/* Project 1 */}
              <div>
                <div className="font-bold text-black text-[12px] flex gap-1.5 mb-0.5">
                  <span className="text-[10px] mt-[1px]">●</span> ERP System – ABC IT Solutions (MERN Stack)
                </div>
                <ul className="list-none space-y-0.5 text-black ml-5">
                  <li className="flex gap-1.5"><span className="text-[10px] mt-[1px]">●</span> <span>Developed a role-based MERN stack ERP with separate <strong className="font-bold">Admin and Employee portals</strong>, managing modules for Enquiries, Quotations, Job Applications, Leave Approvals, and Salary Slips.</span></li>
                  <li className="flex gap-1.5"><span className="text-[10px] mt-[1px]">●</span> <span>Built <strong className="font-bold">leave management and salary slip generation</strong> with PDF download support and monthly quota tracking for employees.</span></li>
                  <li className="flex gap-1.5"><span className="text-[10px] mt-[1px]">●</span> <span><strong className="font-bold">Technologies:</strong> MongoDB, Express.js, React.js, Node.js, REST API</span></li>
                  <li className="flex gap-1.5"><span className="text-[10px] mt-[1px]">●</span> <span><strong className="font-bold">Link:</strong> <a href="#" className="text-blue-700 underline">GitHub Repo</a> | <a href="#" className="text-blue-700 underline">Live</a></span></li>
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <div className="font-bold text-black text-[12px] flex gap-1.5 mb-0.5">
                  <span className="text-[10px] mt-[1px]">●</span> MyVideoCall - Video Conferencing Web Application:
                </div>
                <ul className="list-none space-y-0.5 text-black ml-5">
                  <li className="flex gap-1.5"><span className="text-[10px] mt-[1px]">●</span> <span>Developed a real-time video conferencing application with video/audio calling, screen sharing, live chat, and peer-to-peer communication using <strong className="font-bold">WebRTC and Socket.io</strong>.</span></li>
                  <li className="flex gap-1.5"><span className="text-[10px] mt-[1px]">●</span> <span><strong className="font-bold">Technologies:</strong> React.js, Node.js, Express.js, Socket.io, WebRTC, MongoDB | <a href="#" className="text-blue-700 underline">GitHub Repo</a> | <a href="#" className="text-blue-700 underline">Live</a></span></li>
                </ul>
              </div>

              {/* Project 3 */}
              <div>
                <div className="font-bold text-black text-[12px] flex gap-1.5 mb-0.5">
                  <span className="text-[10px] mt-[1px]">●</span> Stayverse - Hotel Booking Platform:
                </div>
                <ul className="list-none space-y-0.5 text-black ml-5">
                  <li className="flex gap-1.5"><span className="text-[10px] mt-[1px]">●</span> <span>Developed a hotel booking platform with <strong className="font-bold">user authentication, validation, and search functionality</strong>.</span></li>
                  <li className="flex gap-1.5"><span className="text-[10px] mt-[1px]">●</span> <span>Implemented CRUD operations, and a responsive UI, improving product management efficiency.</span></li>
                  <li className="flex gap-1.5"><span className="text-[10px] mt-[1px]">●</span> <span><strong className="font-bold">Technologies:</strong> MongoDB, Express.js, Node.js, HTML, CSS, Bootstrap</span></li>
                  <li className="flex gap-1.5"><span className="text-[10px] mt-[1px]">●</span> <span><strong className="font-bold">Link:</strong> <a href="#" className="text-blue-700 underline">GitHub Repo</a></span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: EXTRA-CURRICULAR ACTIVITIES */}
          <div className="mt-2.5">
            <h2 className="text-[13.5px] font-bold uppercase text-black border-b-[1px] border-black pb-0.5 mb-1.5">
              EXTRA-CURRICULAR ACTIVITIES
            </h2>
            <ul className="list-none space-y-0.5 text-[12px] text-black ml-1.5">
              <li className="flex gap-1.5"><span className="text-[10px] mt-[1px]">●</span> <span>Completed online courses in C++ algorithms, and web development.</span></li>
              <li className="flex gap-1.5"><span className="text-[10px] mt-[1px]">●</span> <span>Solved 100+ problems on LeetCode covering arrays, linked lists, and dynamic programming.</span></li>
            </ul>
          </div>

          {/* Section: CERTIFICATION */}
          <div className="mt-2.5">
            <h2 className="text-[13.5px] font-bold uppercase text-black border-b-[1px] border-black pb-0.5 mb-1.5">
              CERTIFICATION
            </h2>
            <ul className="list-none space-y-0.5 text-[12px] text-black ml-1.5">
              <li className="flex gap-1.5"><span className="text-[10px] mt-[1px]">●</span> <span><strong className="font-bold">DSA with C++:</strong> By Apna College</span></li>
              <li className="flex gap-1.5"><span className="text-[10px] mt-[1px]">●</span> <span><strong className="font-bold">MERN Full Stack Development:</strong> By Apna College</span></li>
              <li className="flex gap-1.5"><span className="text-[10px] mt-[1px]">●</span> <span><strong className="font-bold">Virtual Internship – Web, Mobile Development & Marketing,</strong> IBM Developer Skills Network (Feb–Mar 2026) : <a href="#" className="text-blue-700 underline">LINK</a></span></li>
            </ul>
          </div>

          {/* Section: EDUCATION */}
          <div className="mt-2.5">
            <h2 className="text-[13.5px] font-bold uppercase text-black border-b-[1px] border-black pb-0.5 mb-1.5">
              EDUCATION
            </h2>
            <div className="text-[12px] text-black space-y-2">
              {/* College */}
              <div>
                <div className="flex justify-between items-baseline font-bold text-black mb-0.5">
                  <span>Dronacharya Group of Institutions , Greater Noida</span>
                  <span className="font-normal text-black text-[12px]">Nov 2022-May 2026</span>
                </div>
                <div>Bachelor of Technology</div>
                <div>Computer Science and Information Technology | <strong className="font-bold">CGPA :7.8</strong></div>
              </div>

              {/* School */}
              <div>
                <div className="font-bold text-black mb-0.5">Sri Ram Convent School, Varanasi</div>
                <div className="flex justify-between items-baseline mb-0.5">
                  <span>Higher Secondary(12th) | CBSE |Percentage: 77%</span>
                  <span className="text-black text-[12px]">Aug 2022</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span>Secondary(10th) | CBSE | Percentage: 84%</span>
                  <span className="text-black text-[12px]">Aug 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
