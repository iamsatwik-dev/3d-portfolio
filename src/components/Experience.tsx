"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section className="py-20 bg-black/50 relative z-10" id="experience">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans flex items-center gap-3">
            <Briefcase className="text-blue-500" /> Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full"></div>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          
          <motion.div 
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            </div>

            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl hover:border-blue-500/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="font-bold text-xl text-white">Web Development Trainee</h3>
                <span className="text-blue-400 text-sm font-medium">Feb 2026 – Mar 2026</span>
              </div>
              <h4 className="text-lg text-gray-300 mb-4">IBM</h4>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>One-month training on <strong className="text-gray-200">MERN stack development</strong>.</li>
                <li>Built full-stack web applications and REST APIs.</li>
                <li>Practiced database integration with <strong className="text-gray-200">MongoDB</strong>.</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
