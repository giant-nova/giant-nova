import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
const projects = [{
  title: 'FitTrack Pro',
  description: 'A comprehensive fitness tracking app with workout logging, progress charts, and personalized recommendations. Built with Jetpack Compose and Room database for offline-first functionality.',
  tech: ['Kotlin', 'Jetpack Compose', 'Room', 'MVVM'],
  image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
  github: 'https://github.com',
  demo: null
}, {
  title: 'TaskFlow',
  description: 'A productivity app for managing tasks and projects with team collaboration features. Integrated Firebase for real-time sync and authentication.',
  tech: ['Java', 'Firebase', 'Material Design', 'MVP'],
  image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
  github: 'https://github.com',
  demo: null
}, {
  title: 'WeatherNow',
  description: 'A clean weather app with location-based forecasts, hourly predictions, and weather alerts. Consumes REST API with Retrofit and displays data with custom animations.',
  tech: ['Kotlin', 'Retrofit', 'Coroutines', 'OpenWeather API'],
  image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
  github: 'https://github.com',
  demo: null
}];
export function Projects() {
  return <section id="projects" className="py-24 bg-slate-900/80 backdrop-blur-sm px-6 relative">
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
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <motion.div key={project.title} initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          amount: 0.2
        }} transition={{
          duration: 0.8,
          delay: index * 0.2,
          ease: 'easeOut'
        }} className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50">
              <div className="relative h-48 overflow-hidden bg-slate-700/30">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => <span key={tech} className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full border border-slate-600/50">
                      {tech}
                    </span>)}
                </div>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors">
                    <GithubIcon size={18} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors">
                      <ExternalLinkIcon size={18} />
                      <span className="text-sm font-medium">Demo</span>
                    </a>}
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}