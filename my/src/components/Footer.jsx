import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div>
            <h3 className="text-xl font-bold">
              <span className="text-cyan-400">
                Shanmuharasa Sulakshan
              </span>
            </h3>

            <p className="text-slate-400 mt-2">
              Aspiring Full Stack Developer
            </p>
          </div>

          {/* Center */}
          <div className="flex gap-6 text-2xl">
            <a
              href="https://github.com/Sulakshan-S"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:shanmuharasasulakshan@gmail.com"
              className="text-slate-400 hover:text-cyan-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Right */}
          <div className="text-slate-400 text-sm">
            © 2026 All Rights Reserved
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-slate-500 text-sm">
          Built with React, Tailwind CSS and lots of ☕
        </div>
      </div>
    </footer>
  );
}

export default Footer;