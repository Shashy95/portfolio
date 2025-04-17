import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import DownloadResume from '../components/DownloadResume';
import Contact from '../components/Contact';
import Projects from '@/components/HomeProjects';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Content sections */}
      <div className="relative z-10">
        <section id="hero" className="relative">
          <Hero />
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>
        
        <section id="skills" className="relative">
          <div className="absolute left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent -top-16 z-10"></div>
          <Skills />
        </section>
        
        <section id="projects" className="relative">
          <div className="absolute left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent -top-16 z-10"></div>
          <Projects />
        </section>
        
        <section id="experience" className="relative">
          <div className="absolute left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent -top-16 z-10"></div>
          <Experience />
        </section>
        
        <DownloadResume />
        
        <section id="contact" className="relative">
          <div className="absolute left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent -top-16 z-10"></div>
          <Contact />
        </section>
      </div>
    </>
  );
  
};