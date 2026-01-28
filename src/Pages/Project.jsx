import React, { useEffect, useState } from "react";
import fallbackImage from "../assets/no-image.png";
import PurpleShadow from "../components/ShadowEffect/PurpleShadow";
import GreenShadow from "../components/ShadowEffect/GreenShadow";
import Aos from "aos";
import "aos/dist/aos.css";

const projects = [
  // {
  //   title: "Fullstack Real-Time Chat Application",
  //   description:
  //     "A full-stack real-time chat app built with Laravel 12, ReactJS, and PusherJS, featuring instant messaging, Google Drive file storage, and a responsive modern UI.",
  //   tech: ["Laravel 12", "PusherJS", "MySQL", "Authorization", "REST Api", "ReactJS", "Tailwind"],
  //   live: "https://chat-app-frontend-six-red.vercel.app",
  //   github: "https://github.com/nayemislam33046/fullstack-realtime-chat-app/tree/master",
  //   image: "https://i.ibb.co.com/zW7pTPVS/screen03.jpg",
  // },
  {
    title: "Event Management System",
    description:
      "A comprehensive event management system built with Laravel and ReactJS, featuring user authentication, event creation",
    tech: ["Laravel", "ReactJS", "MySQL", "TailwindCSS", "Authorization"],
    live: "https://eventease-frontend-rho.vercel.app/",
    github: "https://github.com/nayemislam33046/eventease-project",
    image: "https://i.imgur.com/65T8ta9.jpeg",
  },
  {
    title: "Simple Small Food App",
    description:
      "A minimal and responsive food ordering app built with ReactJS and TailwindCSS.",
    tech: ["ReactJS", "Tailwind", "API"],
    live: "https://smallfoodapp.vercel.app/",
    github: "https://github.com/nayemislam33046/smallfoodapps",
    image: "https://i.imgur.com/kayDzjQ.jpeg",
  },
  {
    title: "LearnTrack Pro Project",
    description:
      "A fullstack Laravel-ReactJS blog app with dark mode, authentication, and admin panel.",
    tech: ["Laravel", "ReactJS", "MySQL", "Authorization", "TailwindCSS"],
    live: "https://learntrack-frontend.vercel.app",
    github: "https://github.com/nayemislam33046/LearnTrack-Pro.git",
    image: "https://i.imgur.com/QfKSLaX.jpeg",
  },
  {
    title: "E-commerce UI",
    description:
      "Responsive e-commerce frontend built using ReactJS and TailwindCSS.",
    tech: ["ReactJS", "TailwindCSS"],
    live: "https://responsive-site-gold-theta.vercel.app",
    github: "https://github.com/nayemislam33046/Responsive-site.git",
    image: "https://i.imgur.com/EQjvg8c.jpeg",
  },
  {
    title: "Laravel Task Manager",
    description:
      "Task manager built with Laravel & Blade including authentication and CRUD.",
    tech: ["Laravel", "Blade", "MySQL", "TailwindCSS"],
    live: "https://nayem.kesug.com/",
    github: "https://github.com/nayemislam33046/task-manager",
    image: "https://i.imgur.com/HjkUkg3.jpeg",
  },
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
      easing: "ease-in-sine",
      once: true,
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="project"
      className="relative p-6 md:p-10 mt-20 text-gray-900 dark:text-white rounded-xl shadow-xl"
    >
      <div className="absolute bottom-0 right-10 -z-30">
        <PurpleShadow />
      </div>
      <div className="absolute top-5 left-5 -z-30">
        <GreenShadow />
      </div>
      <h2 className="text-2xl font-bold mb-10 text-center">Projects</h2>

      <div
        className="grid gap-6
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-3"
        data-aos="fade-up"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-700 p-5 rounded-lg bg-white dark:bg-gray-900 hover:shadow-lg transition flex flex-col"
          >
            {/* <img
              src={project.image}
              alt={project.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = fallbackImage;
              }}
              className="rounded-md mb-4 w-full h-44 object-cover"
              loading="lazy"
            /> */}

            <img
              src={project.image}
              alt={project.title}
              onClick={() => setSelectedImage(project.image)}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = fallbackImage;
              }}
              className="rounded-md mb-4 w-full h-44 object-cover cursor-pointer hover:opacity-90 transition"
              loading="lazy"
            />

            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

            <p className="text-sm text-gray-800 dark:text-gray-300 mb-3 flex-grow">
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

            <div className="flex gap-3 mt-auto">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Live Demo
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Project Preview"
            className="max-w-full max-h-full rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Close button */}
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
}
