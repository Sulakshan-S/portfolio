import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import TechStack from "../components/sections/TechStack";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";
import { useState } from "react";
import AdminLoginModal from "../components/admin/AdminLoginModal";


function Home() {

    const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <Navbar onAdminClick={() => setShowLogin(true)} />
      <Hero />
      <About />
      <Skills />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
      <AdminLoginModal isOpen={showLogin} onClose={() => setShowLogin(false)}/>
    </>
  );
}

export default Home;