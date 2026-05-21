"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EarthCanvas, StarsCanvas } from "./canvas";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setLoading(true);
    
    // Simulate API form submission latency
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setLoading(false);
    setIsSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    
    // Reset submission state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative z-0 sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      
      <StarsCanvas />

      <motion.div
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl relative z-10"
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">
          Get in touch
        </p>
        <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          Contact.
        </h3>

        <form
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none'
            />
          </label>

          <AnimatePresence>
            {isSubmitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-green-400 font-medium"
              >
                Thank you! I will get back to you as soon as possible.
              </motion.p>
            )}
          </AnimatePresence>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#915EFF] transition-colors disabled:opacity-50'
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] relative z-10'
      >
        <EarthCanvas />
      </motion.div>
    </section>
  );
}
