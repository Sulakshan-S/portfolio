import {
  FaReact,
  FaJava,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

function TechStack() {
  const technologies = [
    { name: "React", icon: <FaReact /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "Java", icon: <FaJava /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
  ];

  return (
    <section
      id="tech"
      className="py-24 bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Tech{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Stack
            </span>
          </h2>

          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 ">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-cyan-500/50 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="text-5xl text-cyan-400 mb-4 group-hover:scale-110 transition">
                {tech.icon}
              </div>

              <p className="font-semibold text-slate-200">
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