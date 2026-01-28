import Aos from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import htmlIcon from "../assets/html_icon.svg";
import cssIcon from "../assets/css_icon.svg";
import jsIcon from "../assets/javascript.svg";
import reactIcon from "../assets/reactjs_icon.svg";
import nextIcon from "../assets/Next-icon.svg";
import phpIcon from "../assets/php_icon.svg";
import BootstrapIcon from "../assets/bootstrap_icon.svg";
import TailwindIcon from "../assets/tailwind-icon.svg"
import LaravelIcon from "../assets/laravel-brands.svg"
import MysqlIcon from "../assets/mysql-icon.svg"
import PostgresIcon from "../assets/PostgreSQL.svg"
import GithubIcon from "../assets/github-icon.svg"
import VscodeIcon from "../assets/vs-code-icon.svg"
import PostManIcon from "../assets/postman-icon.svg"
import NpmIcon from "../assets/npm-icon.svg"
import ApiIcon from "../assets/api-icon.svg"
import TypescriptIcon from "../assets/typescript_icon.svg"
import CommunicationIcon from "../assets/communication-icon.svg"
import CollaborationIcon from "../assets/collaboration-icon.svg"
import TimeManagementIcon from "../assets/time-management-icon.svg"
import ProblemSolvingIcon from "../assets/bulb-icon.svg"

interface Skill {
  name: string;
  icon: string;
};

type SkillCategory = "Frontend" | "Backend" | "Tools" | "Soft Skills";

type SkillSetsType = Record<SkillCategory, Skill[]>;


const skillSets = {
  Frontend: [
    { name: "HTML5", icon: htmlIcon },
    { name: "CSS3", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "Typescript", icon: TypescriptIcon },
    { name: "Bootstrap", icon: BootstrapIcon },
    { name: "Tailwind CSS", icon: TailwindIcon },
    { name: "ReactJS", icon: reactIcon },
    { name: "NextJS", icon: nextIcon },
  ],
  Backend: [
    { name: "PHP", icon: phpIcon },
    { name: "Laravel", icon: LaravelIcon },
    { name: "MySQL", icon: MysqlIcon },
    { name: "PostgreSQL", icon: PostgresIcon },
    { name: "REST API", icon: ApiIcon },
  ],
  Tools: [
    { name: "Git & GitHub", icon: GithubIcon },
    { name: "VS Code", icon: VscodeIcon },
    { name: "Postman", icon: PostManIcon },
    { name: "Composer & NPM", icon: NpmIcon },
  ],
  "Soft Skills": [
    { name: "Communication", icon: CommunicationIcon },
    { name: "Team Collaboration", icon: CollaborationIcon },
    { name: "Problem Solving", icon: ProblemSolvingIcon },
    { name: "Time Management", icon: TimeManagementIcon },
  ],
};

export default function MySkills() {
  const [activeTab, setActiveTab] = useState<SkillCategory>("Frontend");

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <section
      className="p-6 md:p-10 mt-28 md:mt-0 bg-gradient-to-br from-white via-gray-100 to-white dark:from-[#010B13] dark:via-[#121212] dark:to-[#301934] rounded-xl shadow-xl text-white"
      id="skills"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
        My Skills
      </h2>

      <div
        className="flex items-start md:flex-row flex-col gap-8 pt-5"
        data-aos="fade-right"
        data-aos-once={true}
      >
        {/* Tabs */}
        <div
          className="grid md:grid-cols-2 grid-cols-2 sm:grid-cols-4 items-center gap-4 mb-6 md:w-1/2 w-full"
          role="tablist"
          aria-label="Skill categories"
        >
          {(Object.keys(skillSets) as SkillCategory[]).map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              aria-controls={`panel-${tab}`}
              id={`tab-${tab}`}
              onClick={() => setActiveTab(tab as SkillCategory)}
              className={`px-2 py-1 md:px-4 md:py-1 rounded-lg border text-xs sm:text-sm md:text-base transition-all duration-200 ${
                activeTab === tab
                  ? "bg-violet-600 border-violet-400 text-white"
                  : "bg-transparent border-gray-500 text-slate-900 dark:text-white hover:bg-violet-300 "
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

          <div className="flex justify-center md:justify-start items-center flex-wrap gap-4">
            {skillSets[activeTab].map((skill) => (
            <div
              key={skill.name}
              className="flex items-center flex-col border border-gray-300 dark:border-gray-700 gap-2 min-w-28 sm:min-w-36 bg-white dark:bg-[#100C08] p-3 rounded-lg shadow hover:shadow-lg transition"
            >
              {typeof skill.icon === "string" ? (
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="w-8 h-8"
                  loading="lazy"
                />
              ) : (
                <div className="w-8 h-8 flex items-center justify-center bg-violet-600 text-white rounded-full text-sm font-semibold">
                  {skill.icon}%
                </div>
              )}
              <span className="text-gray-900 dark:text-white font-medium text-sm">
                {skill.name}
              </span>
            </div>  
          ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
