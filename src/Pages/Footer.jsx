import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiGlobeLight } from "react-icons/pi";
import PurpleShadow from "../components/ShadowEffect/PurpleShadow";
import GreenShadow from "../components/ShadowEffect/GreenShadow";

export default function Footer() {
  return (
    <footer className="dark:bg-gray-900 text-slate-950 dark:text-gray-200 py-12 px-6 md:px-20 mt-20 relative w-full rounded-lg">
      {/* Shadows */}
      <div className="absolute bottom-0 right-10 -z-30">
        <PurpleShadow />
      </div>
      <div className="absolute top-5 left-5 -z-30">
        <GreenShadow />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-400 max-w-xl mb-6">
          Easiest way to reach me is via email or social links. Open for freelance or full-time roles.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl mb-8">
          <a
            href="https://www.facebook.com/nayemtruthnes"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
            aria-label="Visit my Facebook profile"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/in/nayem33046/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
            aria-label="Visit my Linkedin profile"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/nayemislam33046"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 dark:hover:text-gray-300"
            aria-label="Visit my GitHub profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/nayemtruthness"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500"
            aria-label="Visit my Instagram profile"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Contact Boxes */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="bg-violet-600 dark:bg-violet-800 text-white sm:p-6 p-3 rounded-lg flex items-center gap-2 sm:gap-4">
            <PiGlobeLight size={28} />
            <span className="break-all text-[12px] sm:text-sm lg:text-base">
              Let’s build something great together
            </span>
          </div>
          <div className="bg-violet-600 dark:bg-violet-800 text-white sm:p-6 p-3 rounded-lg flex items-center sm:gap-4 gap-2">
            <MdEmail size={28} />
            <span className="break-all text-[12px] sm:text-sm lg:text-base">
              {"nayemtruthness" + "@gmail.com"}
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} NayemDev — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
