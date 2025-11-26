import React from 'react';
import { motion } from 'framer-motion';
import { MailIcon, GithubIcon, LinkedinIcon, FileTextIcon } from 'lucide-react';
export function Contact() {
  return <section id="contact" className="py-24 bg-slate-800/80 backdrop-blur-sm text-white px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section title */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        amount: 0.3
      }} transition={{
        duration: 0.8,
        ease: 'easeOut'
      }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mb-8 mx-auto"></div>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. Whether
            you have a project in mind or just want to connect, feel free to
            reach out.
          </p>
        </motion.div>

        {/* Contact cards - staggered appearance */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.a href="mailto:alex.chen@email.com" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          amount: 0.3
        }} transition={{
          duration: 0.8,
          delay: 0.1,
          ease: 'easeOut'
        }} className="flex flex-col items-center gap-3 p-6 bg-slate-700/30 hover:bg-slate-700/50 rounded-xl transition-colors border border-slate-600/50">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center border border-emerald-500/20">
              <MailIcon size={24} className="text-emerald-400" />
            </div>
            <span className="text-slate-400 text-sm">Email</span>
            <span className="text-white font-medium">alex.chen@email.com</span>
          </motion.a>

          <motion.a href="https://github.com" target="_blank" rel="noopener noreferrer" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          amount: 0.3
        }} transition={{
          duration: 0.8,
          delay: 0.2,
          ease: 'easeOut'
        }} className="flex flex-col items-center gap-3 p-6 bg-slate-700/30 hover:bg-slate-700/50 rounded-xl transition-colors border border-slate-600/50">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center border border-emerald-500/20">
              <GithubIcon size={24} className="text-emerald-400" />
            </div>
            <span className="text-slate-400 text-sm">GitHub</span>
            <span className="text-white font-medium">@alexchen</span>
          </motion.a>

          <motion.a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          amount: 0.3
        }} transition={{
          duration: 0.8,
          delay: 0.3,
          ease: 'easeOut'
        }} className="flex flex-col items-center gap-3 p-6 bg-slate-700/30 hover:bg-slate-700/50 rounded-xl transition-colors border border-slate-600/50">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center border border-emerald-500/20">
              <LinkedinIcon size={24} className="text-emerald-400" />
            </div>
            <span className="text-slate-400 text-sm">LinkedIn</span>
            <span className="text-white font-medium">/in/alexchen</span>
          </motion.a>

          <motion.a href="/resume.pdf" target="_blank" rel="noopener noreferrer" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          amount: 0.3
        }} transition={{
          duration: 0.8,
          delay: 0.4,
          ease: 'easeOut'
        }} className="flex flex-col items-center gap-3 p-6 bg-slate-700/30 hover:bg-slate-700/50 rounded-xl transition-colors border border-slate-600/50">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center border border-emerald-500/20">
              <FileTextIcon size={24} className="text-emerald-400" />
            </div>
            <span className="text-slate-400 text-sm">Resume</span>
            <span className="text-white font-medium">Download PDF</span>
          </motion.a>
        </div>

        {/* Footer */}
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true,
        amount: 0.3
      }} transition={{
        duration: 0.8,
        delay: 0.6,
        ease: 'easeOut'
      }} className="pt-8 border-t border-slate-700/50">
          <p className="text-slate-400 text-sm">
            © 2024 Alex Chen. Built with React & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>;
}