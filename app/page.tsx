"use-javascript";
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaExternalLinkAlt, FaPlayCircle, FaAndroid, FaJava, FaServer, FaDatabase } from "react-icons/fa";
import { SiKotlin, SiSpringboot, SiMysql, SiFirebase } from "react-icons/si";

// Define the shape of a single Project
interface Project {
  title: string;
  desc: string;
  tags: string[];
  links: {
    live: string;
    github: string;
    demo: string;
  };
}

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// --- Data ---
const SKILLS = [
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "Kotlin", icon: <SiKotlin className="text-purple-500" /> },
  { name: "Android SDK", icon: <FaAndroid className="text-green-500" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-400" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
];

const PROJECTS: Record<"android" | "java", Project[]> = {
  android: [
    {
      title: "E-Commerce App",
      desc: "Native Android app with MVVM architecture, Retrofit, and Room DB.",
      tags: ["Kotlin", "Jetpack Compose", "Retrofit"],
      links: { live: "#", github: "#", demo: "#" },
    },
    {
      title: "Fitness Tracker",
      desc: "Real-time step tracking using sensor API and Google Maps integration.",
      tags: ["Java", "Google Maps API", "Firebase"],
      links: { live: "#", github: "#", demo: "#" },
    },
  ],
  java: [
    {
      title: "Inventory System",
      desc: "Core Java desktop application with Swing and JDBC connectivity.",
      tags: ["Java SE", "Swing", "MySQL"],
      links: { live: "#", github: "#", demo: "#" },
    },
    {
      title: "Bank Management CLI",
      desc: "Complex algorithm practice handling transactions and threads.",
      tags: ["Java", "Multi-threading", "File I/O"],
      links: { live: "#", github: "#", demo: "#" },
    },
  ],
};

// --- Components ---

const ProjectCard = ({ project }: { project: Project }) => (
    <div className="bg-gray-900/80 border border-gray-700 p-6 rounded-xl hover:border-cyan-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] group">
    <h3 className="text-2xl font-bold mb-2 text-gray-100 group-hover:text-cyan-400">{project.title}</h3>
    <p className="text-gray-400 mb-4">{project.desc}</p>
    <div className="flex flex-wrap gap-2 mb-6">
      {project.tags.map((tag, i) => (
        <span key={i} className="text-xs bg-gray-800 text-cyan-300 px-2 py-1 rounded-md border border-gray-700">
          {tag}
        </span>
      ))}
    </div>
    <div className="flex gap-4">
      <a href={project.links.github} className="flex items-center gap-2 text-sm hover:text-cyan-400 transition-colors"><FaGithub /> Code</a>
      <a href={project.links.live} className="flex items-center gap-2 text-sm hover:text-cyan-400 transition-colors"><FaExternalLinkAlt /> Live</a>
      <a href={project.links.demo} className="flex items-center gap-2 text-sm hover:text-cyan-400 transition-colors"><FaPlayCircle /> Demo</a>
    </div>
  </div>
);

export default function Portfolio() {
// "HTMLSectionElement" matches the <section> tag
const heroRef = useRef<HTMLElement>(null);

// "HTMLMainElement" matches the <main> tag
const mainRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<"android" | "java">("android");

  useEffect(() => {
    if (!mainRef.current) return;

    let ctx = gsap.context(() => {
      
      // 1. HERO SEQUENCE ANIMATION (Pinned)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=2000", // Drag out the animation over 2000px of scrolling
          scrub: 1,      // Smooth scrubbing based on scroll
          pin: true,     // Pin the hero section
        },
      });

      // Sequence: Name -> Role -> Hero Text
      tl.to(".hero-name", { opacity: 1, y: 0, duration: 2 })
        .to(".hero-name", { scale: 0.8, y: -50, duration: 2 }, "+=1") // Move name up slightly
        .to(".hero-role", { opacity: 1, y: 0, duration: 2 }, "<")     // Reveal role
        .to(".hero-content", { opacity: 1, y: 0, duration: 2 }, "+=1"); // Reveal rest

      
      // 2. SECTION REVEALS (About, Skills, etc.)
      const sections = gsap.utils.toArray(".reveal-section") as HTMLElement[];
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section, // Now TypeScript knows this is an HTMLElement
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // 3. PARALLAX BACKGROUND
      gsap.to(".parallax-bg", {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

    }, mainRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="relative min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      
      {/* --- Parallax Background --- */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-40">
        {/* Replace src with your preferred Abstract Tech image */}
        <div className="parallax-bg w-full h-[120%] relative">
             <Image 
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/background.jpg`}
                alt="Tech Background"
                fill
                className="object-cover"
                priority
             />
             <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>
      </div>

      {/* --- 1. HERO SECTION (Pinned Sequence) --- */}
      <section ref={heroRef} className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        
        {/* Step 1: Name */}
        <h1 className="hero-name text-6xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 opacity-0 translate-y-20">
          Kunal
        </h1>

        {/* Step 2: Role */}
        <h2 className="hero-role text-2xl md:text-4xl font-light tracking-widest mt-4 text-gray-300 opacity-0 translate-y-20">
          SOFTWARE ENGINEER
        </h2>

        {/* Step 3: Hero Content */}
        <div className="hero-content opacity-0 translate-y-20 mt-8 flex flex-col items-center gap-6">
          <p className="max-w-xl text-gray-400 text-lg">
            Specializing in building robust <strong>Android Applications</strong> and scalable <strong>Java Systems</strong>. 
            Merging clean code with intuitive user experiences.
          </p>
          <button className="px-8 py-3 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition-all shadow-[0_0_15px_rgba(8,145,178,0.5)] hover:shadow-[0_0_25px_rgba(8,145,178,0.8)]">
            Get In Touch
          </button>
          
          <div className="mt-12 animate-bounce text-gray-500">
            <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          </div>
        </div>
      </section>

      <div className="relative z-10 px-4 md:px-20 max-w-7xl mx-auto pb-20 space-y-32">
        
        {/* --- 2. ABOUT ME --- */}
        <section className="reveal-section flex flex-col md:flex-row gap-12 items-center pt-20">
          <div className="w-full md:w-1/2">
             {/*  - Placeholder for profile */}
             <div className="relative w-full h-96 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
                <Image 
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/profile.jpg`}
                    alt="Profile"
                    fill
                    className="object-cover"
                />
             </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold border-l-4 border-cyan-500 pl-4">About Me</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a passionate software engineer with 1 year of professional experience in the tech industry. 
              My journey began with Core Java, mastering the fundamentals of OOPs and Data Structures, before 
              transitioning into the dynamic world of Android Development.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I believe in writing code that is not only functional but also maintainable and efficient. 
              Currently, I am exploring modern Android architectures like MVVM and Clean Architecture.
            </p>
          </div>
        </section>

        {/* --- 3. SKILLS --- */}
        <section className="reveal-section">
          <h2 className="text-4xl font-bold mb-12 text-center"><span className="text-cyan-500">Tech</span> Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {SKILLS.map((skill, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300">
                <div className="text-5xl mb-4">{skill.icon}</div>
                <span className="font-semibold text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- 4. EXPERIENCE --- */}
        <section className="reveal-section">
          <h2 className="text-4xl font-bold mb-12 border-l-4 border-cyan-500 pl-4">Experience</h2>
          <div className="border-l-2 border-gray-800 ml-4 space-y-12">
            
            <div className="relative pl-8">
              <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]"></span>
              <h3 className="text-2xl font-bold text-white">Junior Software Engineer</h3>
              <p className="text-cyan-400 font-mono mb-2">Tech Solutions Inc. | 2024 - Present</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Developed and maintained 3 Android applications used by over 10k users.</li>
                <li>Migrated legacy Java codebases to Kotlin, improving crash-free rate by 15%.</li>
                <li>Collaborated with backend teams to integrate RESTful APIs using Retrofit.</li>
              </ul>
            </div>

            <div className="relative pl-8">
              <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-gray-600"></span>
              <h3 className="text-2xl font-bold text-white">Android Intern</h3>
              <p className="text-cyan-400 font-mono mb-2">Startup Hub | 2023 - 2024</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Assisted in designing UI components using XML and Material Design.</li>
                <li>Implemented local data storage using SQLite and Room Database.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* --- 5. PROJECTS --- */}
        <section className="reveal-section min-h-[60vh]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <h2 className="text-4xl font-bold border-l-4 border-cyan-500 pl-4">Featured Projects</h2>
            
            {/* Tab Switcher */}
            <div className="flex gap-4 mt-6 md:mt-0 bg-gray-900 p-1 rounded-lg">
              <button 
                onClick={() => setActiveTab("android")}
                className={`px-6 py-2 rounded-md transition-all ${activeTab === "android" ? "bg-cyan-600 text-white" : "text-gray-400 hover:text-white"}`}
              >
                Android
              </button>
              <button 
                onClick={() => setActiveTab("java")}
                className={`px-6 py-2 rounded-md transition-all ${activeTab === "java" ? "bg-cyan-600 text-white" : "text-gray-400 hover:text-white"}`}
              >
                Core Java
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS[activeTab].map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </section>

      </div>

      {/* --- 6. FOOTER --- */}
      <footer className="relative z-10 bg-gray-900 border-t border-gray-800 py-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Let's Build Something Amazing</h2>
        <p className="text-gray-400 mb-8">Open for opportunities in Android & Java Development</p>
        <div className="flex justify-center gap-6 mb-8 text-2xl">
           <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"><FaGithub /></a>
           <a href="mailto:email@example.com" className="text-gray-400 hover:text-cyan-400 transition-colors"><FaExternalLinkAlt /></a>
        </div>
        <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Alex Dev. Built with Next.js & GSAP.</p>
      </footer>

    </main>
  );
}