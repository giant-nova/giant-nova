import React from 'react';
import { motion } from 'framer-motion';
const skills = [{
  name: 'Java',
  level: 90,
  category: 'Languages'
}, {
  name: 'Kotlin',
  level: 75,
  category: 'Languages'
}, {
  name: 'Android SDK',
  level: 85,
  category: 'Frameworks'
}, {
  name: 'Jetpack Compose',
  level: 70,
  category: 'Frameworks'
}, {
  name: 'XML Layouts',
  level: 85,
  category: 'Frameworks'
}, {
  name: 'REST APIs',
  level: 80,
  category: 'Backend'
}, {
  name: 'Firebase',
  level: 75,
  category: 'Backend'
}, {
  name: 'SQLite',
  level: 80,
  category: 'Database'
}, {
  name: 'Room Database',
  level: 75,
  category: 'Database'
}, {
  name: 'Git',
  level: 85,
  category: 'Tools'
}, {
  name: 'Android Studio',
  level: 90,
  category: 'Tools'
}, {
  name: 'Gradle',
  level: 70,
  category: 'Tools'
}];
export function Skills() {
  const categories = Array.from(new Set(skills.map(s => s.category)));
  return <section id="skills" className="py-24 bg-slate-800/80 backdrop-blur-sm px-6 relative">
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
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, categoryIndex) => <motion.div key={category} initial={{
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
          delay: categoryIndex * 0.15,
          ease: 'easeOut'
        }}>
              <h3 className="text-xl font-semibold text-white mb-4">
                {category}
              </h3>
              <div className="space-y-4">
                {skills.filter(skill => skill.category === category).map((skill, index) => <motion.div key={skill.name} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true,
              amount: 0.5
            }} transition={{
              duration: 0.6,
              delay: categoryIndex * 0.15 + index * 0.1,
              ease: 'easeOut'
            }}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-slate-500 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                        <motion.div initial={{
                  width: 0
                }} whileInView={{
                  width: `${skill.level}%`
                }} viewport={{
                  once: true,
                  amount: 0.5
                }} transition={{
                  duration: 1.2,
                  delay: categoryIndex * 0.15 + index * 0.1 + 0.3,
                  ease: 'easeOut'
                }} className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
                      </div>
                    </motion.div>)}
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}