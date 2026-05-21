import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-blue-500/30">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/10 mt-20">
        <p>© {new Date().getFullYear()} Satwik Gupta. All rights reserved.</p>
      </footer>
    </main>
  );
}
