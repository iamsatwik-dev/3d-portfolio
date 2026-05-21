"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, Check, Copy, ExternalLink } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = "satwikgupta0210@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate API form submission latency
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    
    // Reset submission state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 relative w-full overflow-hidden bg-[#050505]">
      {/* Background Neon Accent Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-400 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase"
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mt-2 text-white uppercase"
          >
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-20 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Contact Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white tracking-wide">Let's talk about everything!</h3>
              <p className="text-gray-400 text-[14.5px] leading-relaxed">
                Have a project idea, job opportunity, or just want to say hello? Drop a message. I'm always open to discussing new opportunities, full-stack roles, or custom web projects.
              </p>
            </div>

            <div className="space-y-4 my-8 lg:my-0">
              {/* Email Card */}
              <div className="p-5 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between gap-4 group hover:border-cyan-400/30 transition-all backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 bg-cyan-950/40 text-cyan-400 rounded-xl group-hover:scale-110 transition-all border border-cyan-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</h4>
                    <a href={`mailto:${emailAddress}`} className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                      {emailAddress}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 hover:bg-white/5 rounded-lg text-gray-400 hover:text-cyan-400 active:scale-95 transition-all"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-5 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 group hover:border-cyan-400/30 transition-all backdrop-blur-md">
                <div className="p-3.5 bg-cyan-950/40 text-cyan-400 rounded-xl group-hover:scale-110 transition-all border border-cyan-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Location</h4>
                  <p className="text-sm font-semibold text-white">Noida, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>

            {/* Social Profile links */}
            <div className="flex gap-4">
              <a 
                href="https://github.com/iamsatwik-dev" 
                target="_blank" 
                rel="noreferrer" 
                className="flex-1 flex items-center justify-between px-5 py-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-sm text-gray-300 hover:text-white transition-all group hover:border-cyan-400/30"
              >
                <span className="font-semibold">GitHub Profile</span>
                <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a 
                href="https://linkedin.com/in/" 
                target="_blank" 
                rel="noreferrer" 
                className="flex-1 flex items-center justify-between px-5 py-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-sm text-gray-300 hover:text-white transition-all group hover:border-cyan-400/30"
              >
                <span className="font-semibold">LinkedIn</span>
                <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Glassmorphic Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden h-full flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-bold text-gray-300 uppercase tracking-wider">Your Name</label>
                        <input 
                          id="name"
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Satwik Gupta" 
                          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-bold text-gray-300 uppercase tracking-wider">Your Email</label>
                        <input 
                          id="email"
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="satwik@example.com" 
                          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-bold text-gray-300 uppercase tracking-wider">Message</label>
                      <textarea 
                        id="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Hi Satwik, let's collaborate on a full stack project!" 
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 transition-colors resize-none"
                      />
                    </div>

                    <motion.button 
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2.5 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black font-extrabold text-sm tracking-wider rounded-xl transition-all shadow-[0_0_25px_rgba(6,182,212,0.25)] hover:shadow-[0_0_35px_rgba(6,182,212,0.4)] disabled:opacity-50 disabled:cursor-not-allowed select-none"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          SENDING MESSAGE...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          SEND MESSAGE
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10 flex flex-col items-center justify-center gap-4"
                  >
                    <div className="w-16 h-16 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full flex items-center justify-center scale-110 mb-2">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Thank You!</h3>
                    <p className="text-gray-400 max-w-sm text-sm">
                      Your message has been sent successfully. I will get back to you as soon as possible.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
