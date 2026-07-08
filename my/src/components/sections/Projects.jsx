import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { projects } from "../../data/projects";
import { getIcon } from "../../utils/iconLoader";
import Card from "../common/Card";
import Button from "../common/Button";
import SectionHeading from "../common/SectionHeading";

function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const projectCategories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web" },
    { id: "mobile", name: "Mobile" },
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setCurrentPage(1);
  };

  const filteredProjects = activeTab === "all"
    ? projects
    : projects.filter((project) => project.type === activeTab);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section
      id="projects"
      className="py-16 bg-slate-950 text-white relative overflow-hidden grid-bg"
    >
      {/* Background ambient glow highlights */}
      <div className="absolute top-1/4 left-[-10%] w-[40%] h-[40%] bg-brand-indigo/5 rounded-full blur-[130px]" />
      <div className="absolute bottom-1/4 right-[-10%] w-[40%] h-[40%] bg-brand-violet/5 rounded-full blur-[130px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured"
          highlightText="Projects"
          subtitle="A selection of full stack applications and mobile projects illustrating architecture, database queries, and clean components."
        />

        {/* Tab Controls */}
        <div className="flex items-center justify-center gap-2 mb-12 bg-slate-900/40 p-2 rounded-2xl border border-white/5 max-w-sm mx-auto backdrop-blur-md">
          {projectCategories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex-1 text-center ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-brand-indigo to-brand-violet text-white shadow-md shadow-brand-indigo/10"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedProjects.map((project, index) => (
            <Card
              key={index}
              hoverable
              className="flex flex-col justify-between"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-center text-lg shrink-0">
                      {getIcon(project.icon, { className: "text-brand-indigo" })}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400">
                      {project.category}
                    </span>
                  </div>
                  
                  <span className="text-[9px] uppercase tracking-wider font-extrabold text-brand-indigo/80 animate-pulse bg-brand-indigo/5 border border-brand-indigo/20 px-2.5 py-0.5 rounded-full">
                    Active Repo
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-extrabold text-white group-hover:text-brand-indigo transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-xs sm:text-sm mt-4 leading-relaxed font-medium">
                  {project.description}
                </p>

                {/* Divider */}
                <div className="h-[1px] bg-slate-850 my-6" />

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase tracking-wide font-extrabold px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Features Checklists */}
                <div className="space-y-2.5 mb-8">
                  {project.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-350 font-medium">
                      <FaCheckCircle className="text-brand-indigo/60 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 mt-auto">
                <Button
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                  className="w-full text-xs uppercase tracking-wider py-3"
                >
                  {getIcon("FaGithub", { className: "text-xs" })}
                  View Code
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-12 select-none">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4.5 py-2.5 rounded-xl border border-white/5 bg-slate-900/40 text-slate-350 text-xs font-bold hover:bg-slate-900 hover:text-white transition duration-200 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            >
              Previous
            </button>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4.5 py-2.5 rounded-xl border border-white/5 bg-slate-900/40 text-slate-350 text-xs font-bold hover:bg-slate-900 hover:text-white transition duration-200 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            >
              Next
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

export default Projects;
