import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
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