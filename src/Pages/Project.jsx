import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import fallbackImage from "../assets/no-image.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import PurpleShadow from "../components/ShadowEffect/PurpleShadow";
import GreenShadow from "../components/ShadowEffect/GreenShadow";
import Aos from "aos";

const projects = [
  {
    title: "Simple Small Food App",
    description: "A minimal and responsive food ordering app built with ReactJS and TailwindCSS. It fetches dynamic food data from an API and displays them in a clean UI.",
    tech: ["ReactJS", "Tailwind", "API"],
    live: "https://smallfoodapp.vercel.app/",
    github: "https://github.com/nayemislam33046/smallfoodapps",
    image: "https://i.imgur.com/kayDzjQ.jpeg",
  },
  {
    title: "LearnTrack Pro Project (Fullstack Laravel/Reactjs) ",
    description: "A fullstack Laravel-ReactJS blog app with dark mode, full authentication, article/category/tag CRUD, and a responsive admin panel.",
    tech: ["Laravel", "ReactJS", "MySQL", "Authorization", "REST Api", "TailwindCSS"],
    live: "#",
    github: "https://github.com/nayemislam33046/LearnTrack",
    image: "https://i.imgur.com/QfKSLaX.jpeg",
  },
  {
    title: "E-commerce UI (Practice Project)",
    description:
      "Responsive e-commerce frontend built for practice using a Bootstrap theme as a base. Recreated using ReactJS and TailwindCSS for a modern UI experience.",
    tech: ["ReactJS", "TailwindCSS"],
    live: "https://responsive-site-gold-theta.vercel.app",
    github: "https://github.com/nayemislam33046/Responsive-site.git",
    image: "https://i.imgur.com/EQjvg8c.jpeg",
  },
  {
    title: "Fullstack Laravel Task Manager Project",
    description: "A fullstack task manager application built with Laravel and Blade for server-side rendering. Includes user authentication, task CRUD operations, and a responsive UI styled with TailwindCSS.",
    tech: ["Laravel and Blade", "MySQL", "Authorization", "TailwindCSS"],
    live: "#",
    github: "https://github.com/nayemislam33046/task-manager",
    image: "https://i.imgur.com/HjkUkg3.jpeg",
  },
];

export default function Projects() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <div className="p-6 md:p-10 mt-20 text-gray-900 dark:text-white rounded-xl shadow-xl relative" id="project">
      <div className="absolute bottom-0 right-10 -z-30">
        <PurpleShadow />
      </div>
      <div className="absolute top-5 left-5 -z-30">
        <GreenShadow />
      </div>
      <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={15}
        breakpoints={{
          740: { slidesPerView: 1 },
          868: { slidesPerView: 2 },
        }}
        className="relative"
        data-aos="flip-right" data-aos-once={true}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="border border-gray-300 dark:border-gray-700 p-5 rounded-lg hover:shadow-md transition h-full">
              <img
                src={project.image}
                alt={project.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = fallbackImage;
                }}
                className="rounded-md mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-violet-600 text-white px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-sm text-blue-500 hover:underline"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  className="text-sm text-blue-500 hover:underline"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Arrows */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 z-10 pointer-events-none">
        <button className="custom-prev pointer-events-auto bg-violet-600 text-white p-2 rounded-full hover:bg-violet-700 transition">
          <FaArrowLeft />
        </button>
        <button className="custom-next pointer-events-auto bg-violet-600 text-white p-2 rounded-full hover:bg-violet-700 transition">
          <FaArrowRight />
        </button>
      </div>
      {/* Custom Pagination */}
      <div className="custom-pagination mt-10 flex justify-center space-x-2"></div>
    </div>
  );
}
