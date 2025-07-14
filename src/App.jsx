import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Pages/Header";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import ParticlesBg from "./components/particles/ParticlesBg";
import HomePage from "./Pages/HomePage";
import Service from "./Pages/Service";
import MySkills from "./Pages/MySkills";
import Projects from "./Pages/Project";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import About from "./Pages/About";
export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className={`relative min-h-screen ${darkMode ? "dark" : ""}`}>

      {/* Main Content */}
      <div className="relative z-10 bg-white dark:bg-black transition-colors duration-500">
        {init && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          >
            <ParticlesBg />
          </div>
        )}
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <HomePage />
        <div className="px-4 md:px-14">
          <Service />
          <About />
          <MySkills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}
