"use client";

import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";

const technologies = [
  { name: "HTML 5", icon: "/assets/tech/html.png" },
  { name: "CSS 3", icon: "/assets/tech/css.png" },
  { name: "JavaScript", icon: "/assets/tech/javascript.png" },
  { name: "React JS", icon: "/assets/tech/reactjs.png" },
  { name: "Tailwind CSS", icon: "/assets/tech/tailwind.png" },
  { name: "Node JS", icon: "/assets/tech/nodejs.png" },
  { name: "MongoDB", icon: "/assets/tech/mongodb.png" },
  { name: "git", icon: "/assets/tech/git.png" },
  { name: "figma", icon: "/assets/tech/figma.png" },
];

export default function Skills() {
  return (
    <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0" id="skills">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">
          My Technical Arsenal
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mb-10">
          Skills.
        </h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
        {technologies.map((technology, index) => (
          <motion.div 
            className='w-28 h-28' 
            key={technology.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <BallCanvas icon={technology.icon} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
