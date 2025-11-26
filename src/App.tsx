import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
export function App() {
  const {
    scrollYProgress
  } = useScroll();
  // Parallax effect for background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.3, 0.2]);
  return <div className="w-full min-h-screen relative bg-slate-950">
      {/* Parallax background */}
      <motion.div style={{
      y: backgroundY,
      opacity: backgroundOpacity
    }} className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop)'
      }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950/90" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>;
}