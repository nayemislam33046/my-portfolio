import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import aboutbg from '../assets/aboutbg.svg';
import PurpleShadow from '../components/ShadowEffect/PurpleShadow';
import GreenShadow from '../components/ShadowEffect/GreenShadow';
import Aos from 'aos';
export default function About() {
  const [expanded, setExpanded] = useState(false);
  const fullText = `Hello! I’m Nayem, a skilled Full Stack Web Developer specializing in Laravel (PHP) and ReactJS. I build modern, responsive, and secure web applications with clean, maintainable, and scalable code. I focus on developing robust backend systems using Laravel and crafting interactive, user-friendly frontend interfaces with ReactJS. My expertise includes RESTful API development, database management with MySQL, and integrating third-party services. I’m committed to delivering high-quality solutions, timely communication, and ensuring client satisfaction. Whether you need a full web application, API development, bug fixes, or responsive UI design, I’m here to help bring your project to life.`;
  const halfText = fullText.slice(0, Math.floor(fullText.length / 2));
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <motion.section
      className="relative px-4 py-16 sm:px-12 lg:px-24 mt-[80px] md:mt-0 text-center h-[90vh] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute bottom-0 right-10 -z-30">
        <PurpleShadow />
      </div>
      <div className="absolute top-5 left-5 -z-30">
        <GreenShadow />
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8" id="about">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 text-start" data-aos="fade-right" data-aos-once={true}>
          <p className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 text-gray-800 dark:text-white  text-center md:text-start md:border-b-2 md:border-green-500 md:inline-block md:pb-1">About</p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-shadow-amber-400 text-sm lg:text-base">
            {expanded ? fullText : `${halfText}...`}
          </p>
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 text-blue-600 dark:text-blue-400 hover:underline transition"
          >
            {expanded ? 'See Less' : 'See More...'}
          </button>
        </div>
        {/* Right Image Section */}
        <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-left" data-aos-once={true}>
          <img src={aboutbg} alt="About Nayem" className="w-72 h-72 md:w-80 md:h-80 object-contain" />
        </div>
      </div>
    </motion.section>
  );
}