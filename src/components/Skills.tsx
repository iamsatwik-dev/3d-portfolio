"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Python"]
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "React Native", "Bootstrap", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "RESTful API"]
  },
  {
    title: "Databases & Tools",
    skills: ["MongoDB", "SQL", "Git", "GitHub", "VS Code", "Postman", "Unix/Linux"]
  }
];

export default function Skills() {
  return (
    <section className="py-20 bg-black/30 relative z-10" id="skills">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans flex items-center justify-center gap-3 w-full">
            <Code2 className="text-green-400" /> Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-600 mt-4 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-green-500/30 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">{category.title}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:text-green-400 hover:border-green-400/50 hover:bg-green-400/10 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
