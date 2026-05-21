"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section className="py-20 relative z-10" id="education">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold font-sans flex items-center gap-3">
                <GraduationCap className="text-orange-400" /> Education
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-yellow-500 mt-4 rounded-full"></div>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="glass p-6 rounded-2xl border-l-4 border-l-orange-500"
              >
                <h3 className="text-xl font-bold text-white mb-1">Dronacharya Group of Institutions</h3>
                <p className="text-orange-300 text-sm font-medium mb-3">Greater Noida | Nov 2022 - May 2026</p>
                <p className="text-gray-300">B.Tech in Computer Science and Information Technology</p>
                <p className="text-gray-400 mt-2 font-mono">CGPA: 7.8</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="glass p-6 rounded-2xl border-l-4 border-l-orange-500/50"
              >
                <h3 className="text-xl font-bold text-white mb-1">Sri Ram Convent School</h3>
                <p className="text-orange-300/80 text-sm font-medium mb-3">Varanasi</p>
                <p className="text-gray-300">Higher Secondary (12th) - Aug 2022 <span className="text-gray-500 mx-2">|</span> 77%</p>
                <p className="text-gray-300">Secondary (10th) - Aug 2020 <span className="text-gray-500 mx-2">|</span> 84%</p>
              </motion.div>
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold font-sans flex items-center gap-3">
                <Award className="text-yellow-400" /> Certifications & Activities
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-amber-600 mt-4 rounded-full"></div>
            </motion.div>

            <div className="space-y-4">
              {[
                { title: "DSA with C++", org: "Apna College" },
                { title: "MERN Full Stack Development", org: "Apna College" },
                { title: "Virtual Internship – Web, Mobile Dev & Marketing", org: "IBM Developer Skills Network (Feb–Mar 2026)" },
              ].map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
                  className="glass p-5 rounded-xl flex items-start gap-4"
                >
                  <div className="mt-1 p-2 bg-yellow-500/10 rounded-lg text-yellow-400 shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{cert.title}</h4>
                    <p className="text-gray-400 text-sm">{cert.org}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="mt-6 p-5 border border-dashed border-white/20 rounded-xl"
              >
                <h4 className="font-bold text-gray-200 mb-2">Extra-Curricular</h4>
                <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                  <li>Completed online courses in C++ algorithms and web development.</li>
                  <li>Solved 100+ problems on LeetCode covering arrays, linked lists, and DP.</li>
                </ul>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
