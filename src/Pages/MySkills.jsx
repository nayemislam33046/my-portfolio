import Aos from "aos";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";

const skillSets = {
  Frontend: [
    { name: "HTML5", percent: 95 },
    { name: "CSS3 (Tailwind,Bootstrap)", percent: 90 },
    { name: "JavaScript (ES6+)", percent: 88 },
    { name: "ReactJS", percent: 85 },
  ],
  Backend: [
    { name: "PHP", percent: 90 },
    { name: "Laravel", percent: 88 },
    { name: "MySQL", percent: 85 },
    { name: "REST API", percent: 91 },
  ],
  Tools: [
    { name: "Git & GitHub", percent: 88 },
    { name: "VS Code", percent: 95 },
    { name: "Postman", percent: 90 },
    { name: "Composer & NPM", percent: 86 },
  ],
  "Soft Skills": [
    { name: "Communication", percent: 90 },
    { name: "Team Collaboration", percent: 88 },
    { name: "Problem Solving", percent: 85 },
    { name: "Time Management", percent: 87 },
  ],
};

export default function MySkills() {
  const [activeTab, setActiveTab] = useState("Frontend");

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <section
      className="p-6 md:p-10 mt-28 md:mt-0 bg-gradient-to-br from-white via-gray-100 to-white dark:from-[#0f0f0f] dark:via-[#121212] dark:to-[#0f0f0f] rounded-xl shadow-xl text-white"
      id="skills"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
        My Skills
      </h2>

      <div
        className="flex items-center md:flex-row flex-col gap-6"
        data-aos="fade-right"
        data-aos-once={true}
      >
        {/* Tabs */}
        <div
          className="grid md:grid-cols-2 grid-cols-2 sm:grid-cols-4 items-center gap-4 mb-6 md:w-1/2 w-full"
          role="tablist"
          aria-label="Skill categories"
        >
          {Object.keys(skillSets).map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              aria-controls={`panel-${tab}`}
              id={`tab-${tab}`}
              onClick={() => setActiveTab(tab)}
              className={`px-2 py-1 md:px-4 md:py-1 rounded-lg border text-xs sm:text-sm md:text-base transition-all duration-200 ${
                activeTab === tab
                  ? "bg-violet-600 border-violet-400 text-white"
                  : "bg-transparent border-gray-500 text-slate-900 dark:text-white hover:bg-violet-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Content */}
        <div
          id={`panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          className="space-y-4 md:w-1/2 w-full"
          data-aos="fade-left"
          data-aos-once={true}
        >
          {skillSets[activeTab].map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm mb-1 text-gray-900 dark:text-white">
                <span>{skill.name}</span>
                <span>{skill.percent}%</span>
              </div>
              <div className="w-full bg-gray-300 dark:bg-gray-800 rounded-full h-2.5">
                <div
                  className="bg-green-500 dark:bg-green-600 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
