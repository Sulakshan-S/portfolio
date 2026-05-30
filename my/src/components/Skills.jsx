function Skills() {
  const skills = [
    "Backend Development",
    "REST API Development",
    "Database Design",
    "Problem Solving",
    "Full Stack Development",
    "Responsive Web Design",
    "Object-Oriented Programming",
    "Authentication & Authorization",
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-slate-950 text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Skills
            </span>
          </h2>

          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-500/50 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <h3 className="font-semibold text-slate-200 group-hover:text-cyan-400 transition">
                {skill}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;