import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownIcon, GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
export function Hero() {
  const {
    scrollY
  } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  return <motion.section style={{
    opacity,
    scale
  }} className="min-h-screen flex items-center justify-center text-white px-6 relative">
      <div className="max-w-4xl w-full">
        {/* Name - appears first */}
        <motion.h1 initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: false,
        amount: 0.8
      }} transition={{
        duration: 0.8,
        ease: 'easeOut'
      }} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Alex Chen
        </motion.h1>

        {/* Role title - appears second */}
        <motion.p initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: false,
        amount: 0.8
      }} transition={{
        duration: 0.8,
        delay: 0.2,
        ease: 'easeOut'
      }} className="text-2xl md:text-3xl text-slate-300 mb-4">
          Android Developer & Java Engineer
        </motion.p>

        {/* Availability badge - appears third */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: false,
        amount: 0.8
      }} transition={{
        duration: 0.8,
        delay: 0.4,
        ease: 'easeOut'
      }} className="inline-block mb-6">
          <span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium">
            Available for opportunities
          </span>
        </motion.div>

        {/* Description text - appears fourth */}
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: false,
        amount: 0.8
      }} transition={{
        duration: 0.8,
        delay: 0.6,
        ease: 'easeOut'
      }} className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl">
          Building intuitive mobile experiences with clean code. Specialized in
          native Android development and scalable Java applications.
        </motion.p>

        {/* CTA buttons - appear fifth */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: false,
        amount: 0.8
      }} transition={{
        duration: 0.8,
        delay: 0.8,
        ease: 'easeOut'
      }} className="flex flex-wrap gap-4 mb-12">
          <a href="#contact" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors flex items-center gap-2">
            Get in touch
            <MailIcon size={18} />
          </a>
          <a href="#projects" className="px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 text-white rounded-lg font-medium transition-colors border border-slate-700/50 backdrop-blur-sm">
            View projects
          </a>
        </motion.div>

        {/* Social links - appear last */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: false,
        amount: 0.8
      }} transition={{
        duration: 0.8,
        delay: 1,
        ease: 'easeOut'
      }} className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-colors border border-slate-700/50 backdrop-blur-sm" aria-label="GitHub">
            <GithubIcon size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-colors border border-slate-700/50 backdrop-blur-sm" aria-label="LinkedIn">
            <LinkedinIcon size={20} />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1.5,
        duration: 0.6
      }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{
          y: [0, 8, 0]
        }} transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}>
            <ArrowDownIcon size={24} className="text-slate-500" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>;
}