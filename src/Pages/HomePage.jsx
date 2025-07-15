import React, { useEffect, useState } from 'react'
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import PurpleShadow from '../components/ShadowEffect/PurpleShadow';
import GreenShadow from '../components/ShadowEffect/GreenShadow';
import ParallaxLayer from '../components/Parallex/UseParallex';
import codeIcon from '../assets/code-solid.svg'
import laravelIcon from '../assets/laravel-brands.svg'
import reactIcon from '../assets/react-brands.svg'
import AOS from 'aos';
import "aos/dist/aos.css";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMd, setIsMd] = useState(false);
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: "ease-in-sine",
    });
  }, []);
  useEffect(() => {
    const checkScreen = () => setIsMd(window.innerWidth >= 768);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);
  return (
    <div
      className="relative flex items-center justify-center md:h-[100vh] h-[150vh]"
      style={{
        backgroundImage: isMd
          ? `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,1.9)), url('/coading_1.webp')`
          : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-10 md:px-18">
        <div className="absolute bottom-0 right-10 z-30">
          <PurpleShadow />
        </div>
        <div className="absolute top-5 left-5 z-30">
          <GreenShadow />
        </div>
        <div className='relative' data-aos="fade-right" data-aos-once={true}>
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 md:text-white dark:text-white">
            Hello, I'm <span className="text-green-500">Nayem Islam</span>
          </h1>
          <p className="text-green-400 my-4">
            👉{" "}
            <Typewriter
              words={[
                "ReactJS Developer",
                "Laravel Developer",
                "Full-Stack Developer",
              ]}
              loop={Infinity}
            />
          </p>
          <p className="dark:text-gray-400 text-gray-700 max-w-md mb-6">
            I excel at crafting elegant digital experiences and I am
            proficient in various programming languages and technologies.
          </p>
          <div className="flex items-center gap-4">
            <a href="#contact" className="bg-green-500 text-black cursor-pointer font-semibold px-4 py-2 rounded hover:bg-green-400 transition duration-300">
              Contact Me
            </a>
            <div className="flex gap-3 text-xl">
              <a href="https://www.facebook.com/nayemahmed330466" className="text-blue-500" aria-label="Visit my Facebook profile"><FaFacebook /></a>
              <a href="https://www.instagram.com/nayemahmed3304" className="text-orange-500" aria-label="Visit my Instagram profile"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/nayem33046" className="text-blue-500" aria-label="Visit my Linkedin profile"><FaLinkedin /></a>
              <a href="https://github.com/nayemislam33046" className="text-white" aria-label="Visit my GitHub profile"><FaGithub /></a>
            </div>
          </div>
        </div>
        <div className="flex justify-center relative mt-14 lg:mt-0" data-aos="fade-left" data-aos-once={true}>
          <ParallaxLayer
            id={1}
            src={reactIcon}
            iconName="reactIcon"
            offset={0.1}
            color={
              "absolute -top-3 -left-2 md:left-10 flex justify-center items-center w-10 h-10 backdrop-blur-md"
            }
          />
          <ParallaxLayer
            id={1}
            src={codeIcon}
            iconName="codeIcon"
            offset={0.2}
            color={
              "absolute top-10 right-0 md:right-0 flex justify-center items-center w-10 h-10 backdrop-blur-md"
            }
          />
          <ParallaxLayer
            id={1}
            src={laravelIcon}
            iconName="laravelIcon"
            offset={0.3}
            color={
              "absolute -bottom-5 md:bottom-10 left-0 md:-left-8 lg:left-5 flex justify-center items-center w-10 h-10 backdrop-blur-md"
            }
          />
          <motion.div
            className="absolute lg:w-80 lg:h-80 w-60 h-60 rounded-full border-2 border-green-400"
            style={{
              borderStyle: "dashed",
              boxShadow: "0 0 15px rgba(34,197,94,0.5)",
            }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          />
          <img
            src="/nayem.png"
            alt="Nayem Islam"
            onLoad={() => setIsLoaded(true)}
            className={`
                  relative lg:w-72 lg:h-80 w-56 h-60 object-cover rounded-full transition-all duration-700
                  ${isLoaded ? "blur-0" : "blur-lg scale-105 grayscale bg-blue-800"}
                `}
                loading='lazy'
          />
        </div>
      </div>
    </div>
  )
}
export default HomePage