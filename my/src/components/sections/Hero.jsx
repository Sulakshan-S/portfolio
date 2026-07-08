import React from "react";
import { siteConfig } from "../../data/siteConfig";
import { getIcon } from "../../utils/iconLoader";
import Button from "../common/Button";
import { HiArrowNarrowRight } from "react-icons/hi";

function Hero() {

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center bg-slate-950 text-white overflow-hidden grid-bg"
    >
      {/* Background radial highlights */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-indigo/5 rounded-full blur-[150px] animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-violet/5 rounded-full blur-[150px] animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 w-full">
        {/* Left Column: Heading and intro */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-indigo/20 bg-brand-indigo/5 text-brand-indigo text-xs sm:text-sm font-bold tracking-wide animate-pulse mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-indigo animate-ping" />
            <span>Available for Internship & Opportunities</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
            Hi, I'm <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-brand-indigo via-purple-400 to-brand-violet bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </h1>

          <h2 className="mt-4 text-xl sm:text-2xl font-bold text-slate-300">
            {siteConfig.tagline}
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
            {siteConfig.description}
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-8 mt-8 border-y border-slate-900 py-6 w-full max-w-lg">
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-white">
                4+
              </p>
              <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider font-extrabold">
                Featured Projects
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-white">MERN & Spring</p>
              <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider font-extrabold">
                Full Stack Expertise
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap gap-4 w-full sm:w-auto">
            <Button
              href="#projects"
              variant="primary"
              className="flex-1 sm:flex-initial group font-bold tracking-wide"
            >
              Explore Projects
              <HiArrowNarrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Button>

            <Button
              href={siteConfig.resumePath}
              download="resume.pdf"
              variant="secondary"
              className="flex-1 sm:flex-initial"
            >
              {getIcon("FaDownload", { className: "text-xs text-slate-450 group-hover:text-white" })}
              Download CV
            </Button>
          </div>
        </div>

        {/* Right Column: Code Mockup and Floating Badges */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full mt-8 lg:mt-0 select-none">
          <div className="relative w-full max-w-md">
            
            {/* Visual Backlight Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-indigo/10 to-brand-violet/10 rounded-3xl blur-2xl" />

            {/* IDE Mockup */}
            <div className="relative bg-[#020617]/90 border border-slate-850 rounded-2xl overflow-hidden shadow-2xl w-full">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-900">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-[10px] text-slate-500 font-mono tracking-wider font-semibold">Developer.java</div>
                <div className="w-12" /> {/* Spacer */}
              </div>

              {/* Code Editor body */}
              <div className="p-5 font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto text-left">
                <p className="text-slate-500">// Personal Profile Data</p>
                <p className="text-indigo-400">public class <span className="text-emerald-400">Developer</span> &#123;</p>
                <div className="pl-4">
                  <p className="text-slate-300">String name = <span className="text-amber-300">"{siteConfig.name.split(" ")[0]}"</span>;</p>
                  <p className="text-slate-300">String role = <span className="text-amber-300">"Undergraduate"</span>;</p>
                  <p className="text-slate-300">String university = <span className="text-amber-300">"UoK, Sri Lanka"</span>;</p>
                  <p className="text-slate-300">int projectsCount = <span className="text-pink-400">4</span>;</p>
                  <br />
                  <p className="text-slate-500">// Fluent Tech Stack</p>
                  <p className="text-indigo-400">String[] stack = &#123;</p>
                  <div className="pl-4">
                    <p className="text-amber-300">"Spring Boot", "React.js", "Java",</p>
                    <p className="text-amber-300">"MySQL", "MongoDB", "TailwindCSS"</p>
                  </div>
                  <p className="text-indigo-400">&#125;;</p>
                </div>
                <p className="text-indigo-400">&#125;</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
