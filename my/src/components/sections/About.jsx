import React from "react";
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaAward } from "react-icons/fa";
import { aboutData } from "../../data/about";
import { siteConfig } from "../../data/siteConfig";
import Card from "../common/Card";
import SectionHeading from "../common/SectionHeading";

function About() {
  return (
    <section
      id="about"
      className="py-16 bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Subtle background ambient glows */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-brand-indigo/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-brand-violet/5 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow=" Profile"
          title="About"
          highlightText="Me"
          subtitle="Software Engineer undergraduate committed to academic excellence and robust full stack development."
        />

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Profile Card & Quick Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Card hoverable={false} className="border border-white/5 shadow-2xl relative group">
              
              {/* Stylized Avatar Initials */}
              <div className="relative w-40 h-40 mx-auto rounded-full bg-gradient-to-tr from-brand-indigo to-brand-violet flex items-center justify-center border-2 border-brand-indigo/25 group-hover:border-brand-indigo/45 transition-all duration-300 shadow-xl shadow-brand-indigo/10 select-none">
                <span className="text-5xl font-extrabold text-white tracking-wide">
                  {siteConfig.shortName.slice(0, 2).toUpperCase()}
                </span>
              </div>

              {/* Identity info */}
              <div className="text-center mt-6">
                <h3 className="text-xl font-bold text-white">{siteConfig.name}</h3>
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mt-1">{siteConfig.tagline}</p>
              </div>

              {/* Separator */}
              <div className="h-[1px] bg-slate-850 my-6" />

              {/* Quick Info Attributes */}
              <div className="space-y-4">
                <div className="flex items-center gap-3.5 text-sm text-slate-350">
                  <div className="w-8 h-8 rounded-lg bg-slate-950/85 border border-slate-850 flex items-center justify-center text-brand-indigo shrink-0">
                    <FaMapMarkerAlt size={12} />
                  </div>
                  <span>{siteConfig.location}</span>
                </div>

                <div className="flex items-center gap-3.5 text-sm text-slate-355">
                  <div className="w-8 h-8 rounded-lg bg-slate-950/85 border border-slate-855 flex items-center justify-center text-brand-indigo shrink-0">
                    <FaGraduationCap size={12} />
                  </div>
                  <span>{siteConfig.university}</span>
                </div>

                <div className="flex items-center gap-3.5 text-sm text-slate-355">
                  <div className="w-8 h-8 rounded-lg bg-slate-950/85 border border-slate-855 flex items-center justify-center text-brand-indigo shrink-0">
                    <FaCalendarAlt size={12} />
                  </div>
                  <span>{siteConfig.academicStatus}</span>
                </div>
              </div>
            </Card>

            {/* Micro Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {aboutData.stats.map((stat, idx) => (
                <Card hoverable key={idx} className="p-4 text-center">
                  <p className="text-xl font-extrabold text-brand-indigo">{stat.value}</p>
                  <p className="text-[9px] text-slate-500 mt-1 uppercase tracking-wider font-extrabold">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Side: Professional Bio & Timeline */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <Card hoverable={false} className="p-8 md:p-10 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Professional Profile</h3>
              <div className="space-y-4">
                {aboutData.bioParagraphs.map((para, idx) => (
                  <p key={idx} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </Card>

            {/* Education Timeline */}
            <Card hoverable={false} className="p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Education Timeline</h3>
              
              <div className="relative border-l border-slate-800 pl-6 ml-2 space-y-8">
                {aboutData.education.map((edu, idx) => (
                  <div key={idx} className="relative">
                    {/* Timeline dot */}
                    <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-slate-950 border border-brand-indigo">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-indigo animate-pulse" />
                    </span>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h4 className="text-base sm:text-lg font-bold text-white">{edu.institution}</h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-indigo/10 text-brand-indigo border border-brand-indigo/20 w-fit">
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-slate-400 text-xs sm:text-sm mt-1">{edu.degree}</p>
                  </div>
                ))}
              </div>

            </Card>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}

export default About;
