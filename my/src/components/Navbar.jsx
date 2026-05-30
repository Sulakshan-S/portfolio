function Navbar() {
  return (
    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      backdrop-blur-md
      bg-slate-900/70
      border-b
      border-slate-700/50"
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        h-20
        flex
        items-center
        justify-between"
      >
        {/* Logo / Name */}
        <a
          href="#home"
          className="
          text-white
          font-bold
          text-xl
          md:text-2xl
          hover:text-cyan-400
          transition"
        >
          Shanmuharasa Sulakshan
        </a>

        {/* Navigation */}
        <ul
          className="
          hidden
          md:flex
          items-center
          gap-8
          text-gray-300
          font-medium"
        >
          <li>
            <a
              href="#home"
              className="hover:text-cyan-400 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-cyan-400 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-cyan-400 transition"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition"
            >
              Contact
            </a>
          </li>
        </ul>

       
      </div>
    </nav>
  );
}

export default Navbar;