"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0" id="experience">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">
          What I have done so far
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          <VerticalTimelineElement
            contentStyle={{
              background: "#1d1836",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date="Feb 2026 – Mar 2026"
            iconStyle={{ background: "#383E56" }}
            icon={
              <div className='flex justify-center items-center w-full h-full'>
                <Briefcase className="text-white" />
              </div>
            }
          >
            <div>
              <h3 className='text-white text-[24px] font-bold'>Web Development Trainee</h3>
              <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
                IBM
              </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
              <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
                One-month training on MERN stack development.
              </li>
              <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
                Built full-stack web applications and REST APIs.
              </li>
              <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
                Practiced database integration with MongoDB.
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}
