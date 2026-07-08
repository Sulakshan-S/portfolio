import React from "react";
import { skills } from "../../data/skills";
import { getIcon } from "../../utils/iconLoader";
import Card from "../common/Card";
import SectionHeading from "../common/SectionHeading";

function Skills() {
  return (
    <section
      id="skills-competencies"
      className="py-16 bg-slate-900 text-white relative overflow-hidden"
    >
      <div className="absolute top-10 left-10 w-72 h-72 bg-brand-indigo/5 blur-[120px] rounded-full" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Services"
          title="Core"
          highlightText="Competencies"
          subtitle="A summary of architectural design patterns and full stack execution styles I regularly apply."
        />

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((comp, index) => (
            <Card
              key={index}
              hoverable
              className="p-8 text-left"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-center text-xl mb-6 shadow-inner">
                {getIcon(comp.icon, { size: 18 })}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                {comp.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                {comp.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
