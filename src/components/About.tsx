import React from 'react';
import { motion } from 'framer-motion';
import { CodeIcon, SmartphoneIcon, RocketIcon } from 'lucide-react';
export function About() {
  return <section id="about" className="py-24 bg-slate-900/80 backdrop-blur-sm px-6 relative">
      <div className="max-w-6xl mx-auto">
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Text content - each paragraph appears sequentially */}
          <div>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            amount: 0.5
          }} transition={{
            duration: 0.8,
            delay: 0.1,
            ease: 'easeOut'
          }} className="text-lg text-slate-300 mb-6 leading-relaxed">
              I'm a software engineer with 1 year of professional experience,
              passionate about creating mobile applications that users love. My
              journey in tech started with Java, and I've since specialized in
              Android development, building apps that are both functional and
              delightful to use.
            </motion.p>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            amount: 0.5
          }} transition={{
            duration: 0.8,
            delay: 0.3,
            ease: 'easeOut'
          }} className="text-lg text-slate-300 mb-6 leading-relaxed">
              I believe in writing clean, maintainable code and following best
              practices. Whether it's implementing complex features or
              optimizing app performance, I approach every challenge with
              curiosity and attention to detail.
            </motion.p>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            amount: 0.5
          }} transition={{
            duration: 0.8,
            delay: 0.5,
            ease: 'easeOut'
          }} className="text-lg text-slate-300 leading-relaxed">
              Currently seeking opportunities to grow as a developer and
              contribute to meaningful projects that make a difference.
            </motion.p>
          </div>

          {/* Feature cards - staggered appearance */}
          <div className="space-y-6">
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true,
            amount: 0.5
          }} transition={{
            duration: 0.8,
            delay: 0.2,
            ease: 'easeOut'
          }} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center border border-emerald-500/20">
                <SmartphoneIcon size={24} className="text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Mobile-First
                </h3>
                <p className="text-slate-400">
                  Specialized in native Android development with focus on user
                  experience and performance.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true,
            amount: 0.5
          }} transition={{
            duration: 0.8,
            delay: 0.4,
            ease: 'easeOut'
          }} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center border border-blue-500/20">
                <CodeIcon size={24} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Clean Code
                </h3>
                <p className="text-slate-400">
                  Strong foundation in Java with emphasis on readable,
                  maintainable, and scalable code.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true,
            amount: 0.5
          }} transition={{
            duration: 0.8,
            delay: 0.6,
            ease: 'easeOut'
          }} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center border border-purple-500/20">
                <RocketIcon size={24} className="text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Fast Learner
                </h3>
                <p className="text-slate-400">
                  Quick to adapt to new technologies and frameworks, always
                  eager to expand my skill set.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
}