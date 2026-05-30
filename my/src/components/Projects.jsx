import { FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "TechSpark E-Commerce Platform",

      tech: [
        "React",
        "Spring Boot",
        "MySQL",
        "JWT",
        "Tailwind CSS",
      ],

      description:
        "Full-stack e-commerce platform supporting authentication, product management, order processing, and role-based access control.",

      features: [
        "JWT Authentication",
        "Role-Based Access",
        "Inventory Management",
        "REST API Architecture",
      ],

      github: "https://github.com/Sulakshan-S/TechSpark",
    },

    {
      title: "BookFair Event Booking Platform",

      tech: [
        "React",
        "Spring Boot",
        "MySQL",
      ],

      description:
        "Full-stack booking management system designed to streamline event registrations, attendee management, and booking workflows.",

      features: [
        "RESTful APIs",
        "MySQL Database Design",
        "Responsive Frontend",
        "Business Logic Layer",
      ],

      github: "https://github.com/Sulakshan-S/Bookfair",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-slate-950 text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Projects
            </span>
          </h2>

          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  Featured
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-300 mt-5 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-2 rounded-lg bg-slate-800 border border-white/10 text-sm text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-8">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition duration-300"
                >
                  <FaGithub />
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;