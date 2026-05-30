import {
    FaReact,
    FaJava,
    FaGithub,
    FaNodeJs,
    FaGitAlt,
} from "react-icons/fa";

import {
    SiSpringboot,
    SiMongodb,
    SiMysql,
    SiExpress,
    SiTailwindcss,
} from "react-icons/si";

function Hero() {
    const techs = [
       {
    icon: <FaReact />,
    className: "-top-6 left-[42%] -translate-x-1/2",
  },

  // TOP RIGHT
  {
    icon: <FaGithub />,
    className: "-top-6 left-[58%] -translate-x-1/2",
  },

  // UPPER LEFT
  {
    icon: <FaJava />,
    className: "top-12 left-0",
  },

  // UPPER RIGHT
  {
    icon: <SiSpringboot />,
    className: "top-12 right-0",
  },

  // MIDDLE LEFT
  {
    icon: <SiMongodb />,
    className: "top-1/2 -left-10 -translate-y-1/2",
  },

  // MIDDLE RIGHT
  {
    icon: <SiMysql />,
    className: "top-1/2 -right-10 -translate-y-1/2",
  },

  // LOWER LEFT
  {
    icon: <FaNodeJs />,
    className: "bottom-16 left-0",
  },

  // LOWER RIGHT
  {
    icon: <SiExpress />,
    className: "bottom-16 right-0",
  },

  // BOTTOM LEFT CENTER
  {
    icon: <SiTailwindcss />,
    className: "bottom-0 left-[42%] -translate-x-1/2",
  },

  // BOTTOM RIGHT CENTER
  {
    icon: <FaGitAlt />,
    className: "bottom-0 left-[58%] -translate-x-1/2",
  },


    ];







    return (
        <section
            id="home"
            className="relative min-h-screen pt-24 flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white overflow-hidden">

            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px]" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

                <div>
                    <span className="inline-block px-6 py-4 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-md font-medium">
                        👋 Hello, I'm Sulakshan
                    </span>

                    <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight">
                        Aspiring
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            Full Stack Developer
                        </span>
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
                        Software Engineering undergraduate passionate about
                        building modern web applications using React,
                        Spring Boot, Java, MongoDB and MySQL.
                    </p>

                    <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
                       BSc(Hons) in Software Engineering <br/>
                       University of Kelaniya, Sri Lanka <br />
                       (Underaduate)
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="px-7 py-3 rounded-xl border border-cyan-500 hover:bg-cyan-500/10 transition font-semibold"
                        >
                            View Projects
                        </a>

                        <a
                            href="/resume.pdf"
                            download
                            className="px-7 py-3 rounded-xl border border-cyan-500 hover:bg-cyan-500/10 transition font-semibold"
                        >
                            Resume
                        </a>
                    </div>


                </div>

                <div className="flex justify-center">
                    <div className="relative">

                        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-7xl md:text-9xl font-bold shadow-[0_0_80px_rgba(34,211,238,0.35)]">
                            {"</>"}
                        </div>

                        {techs.map((tech, index) => (
                            <div
                                key={index}
                                className={`absolute ${tech.className} animate-float`}
                                style={{
                                    animationDelay: `${index * 0.3}s`,
                                }}
                            >
                                <div className="w-14 h-14 rounded-full bg-slate-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-2xl shadow-lg shadow-cyan-500/20 hover:scale-110 transition-all duration-300">
                                    {tech.icon}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;