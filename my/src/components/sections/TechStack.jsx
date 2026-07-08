import React, { useState } from "react";
import { categories, technologies } from "../../data/techStack";
import { getIcon } from "../../utils/iconLoader";
import SectionHeading from "../common/SectionHeading";

function TechStack() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredTechnologies = activeTab === "all"
    ? technologies
    : technologies.filter(tech => tech.category === activeTab);

  return (
    <section
      id="skills"
      className="py-16 bg-slate-950 text-white relative overflow-hidden grid-bg"
    >
      {/* Background glow highlights */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-indigo/5 blur-[130px] rounded-full" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-brand-violet/5 blur-[130px] rounded-full" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Technology"
          title="My Tech"
          highlightText="Stack"
          subtitle="A catalog of development frameworks, libraries, and utilities I have built production programs with."
        />

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 bg-slate-900/40 p-2 rounded-2xl border border-white/5 max-w-3xl mx-auto backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === cat.id
                  ? "bg-gradient-to-r from-brand-indigo to-brand-violet text-white shadow-md shadow-brand-indigo/10"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredTechnologies.map((tech, index) => (
            <div
              key={index}
              className={`group flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900/30 border border-white/5 transition-all duration-300 shadow-md shadow-black/10 hover:-translate-y-1.5 ${tech.colorClass}`}
            >
              <div className="text-4xl text-slate-500 group-hover:scale-110 group-hover:rotate-3 transition duration-300 mb-3 shrink-0">
                {getIcon(tech.icon)}
              </div>
              <p className="text-xs font-bold text-slate-350 transition duration-300 group-hover:text-inherit">
                {tech.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TechStack;
