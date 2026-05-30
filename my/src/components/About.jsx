function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Me
            </span>
          </h2>

          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Card */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12">
          <p className="text-lg text-slate-300 leading-relaxed">
            I am a Software Engineering undergraduate passionate about
            developing modern, scalable, and user-focused web
            applications. With hands-on experience in React,
            Spring Boot, Node.js, MongoDB, and MySQL, I enjoy
            building full-stack solutions that combine intuitive user
            interfaces with efficient backend systems.
          </p>

          <p className="text-lg text-slate-300 leading-relaxed mt-6">
            I am committed to continuous learning, exploring new
            technologies, and applying industry best practices to
            create impactful software solutions. My goal is to grow
            as a full-stack developer while contributing to meaningful
            projects that solve real-world problems.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition cursor-pointer">
              <h3 className="text-3xl font-bold text-cyan-400">10+</h3>
              <p className="text-slate-400 mt-2">Technologies</p>
            </div>

            <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition cursor-pointer">
              <h3 className="text-3xl font-bold text-cyan-400">Full Stack</h3>
              <p className="text-slate-400 mt-2">Development</p>
            </div>

            <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition cursor-pointer">
              <h3 className="text-3xl font-bold text-cyan-400">∞</h3>
              <p className="text-slate-400 mt-2">Continuous Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;