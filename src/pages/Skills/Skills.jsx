import { BiLogoDjango, BiLogoNetlify, BiLogoPostgresql } from "react-icons/bi";
import {
  FaPython,
  FaJsSquare,
  FaCogs,
  FaCode,
  FaBootstrap,
  FaChrome,
  FaGithub,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa"; // Add any icons you prefer
import { FcLinux } from "react-icons/fc";
import { IoLogoFigma, IoLogoVercel } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDjango, SiMongodb, SiMysql, SiSqlite } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  return (
    <div className="py-16 bg-[#0a192f] text-white px-6 " id="skills">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#64ffda]">
          My Skills
        </h2>
        <p className="text-lg text-[#8892b0]">
          These are the skills that I excel in and continue to improve every
          day.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Programming Languages */}
        <div
          className="bg-[#112240] p-6 rounded-lg shadow-lg text-center"
          data-aos="fade-up"
        >
          <h3 className="text-xl font-semibold text-[#64ffda] mb-4">
            Programming Languages
          </h3>
          <ul className="text-[#ccd6f6]">
            <li className="flex items-center gap-2 mb-2">
              <FaPython className="text-[#64ffda]" /> Python
            </li>
            <li className="flex items-center gap-2 mb-2">
              <FaJsSquare className="text-[#64ffda]" /> JavaScript
            </li>
            <li className="flex items-center gap-2 mb-2">
              <FaCogs className="text-[#64ffda]" /> C
            </li>
            <li className="flex items-center gap-2 mb-2">
              <FaCogs className="text-[#64ffda]" /> C++
            </li>
          </ul>
        </div>

        {/* Frameworks & Libraries */}
        <div
          className="bg-[#112240] p-6 rounded-lg shadow-lg text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-xl font-semibold text-[#64ffda] mb-4">
            Frameworks & Libraries
          </h3>
          <ul className="text-[#ccd6f6]">
            <li className="flex items-center gap-2 mb-2">
              <RiTailwindCssFill className="text-[#64ffda]" /> TailwindCSS
            </li>
            <li className="flex items-center gap-2 mb-2">
              <FaBootstrap className="text-[#64ffda]" /> Bootstrap
            </li>
            <li className="flex items-center gap-2 mb-2">
              <SiDjango className="text-[#64ffda]" /> Django
            </li>
            <li className="flex items-center gap-2 mb-2">
              <BiLogoDjango className="text-[#64ffda]" /> REST Framework (DRF)
            </li>
          </ul>
        </div>

        {/* Tools & Technologies */}
        <div
          className="bg-[#112240] p-6 rounded-lg shadow-lg text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h3 className="text-xl font-semibold text-[#64ffda] mb-4">
            Tools & Technologies
          </h3>
          <ul className="text-[#ccd6f6]">
            <li className="flex items-center gap-2 mb-2">
              <VscVscode className="text-[#64ffda]" /> Visual Studio Code
            </li>
            <li className="flex items-center gap-2 mb-2">
              <FaChrome className="text-[#64ffda]" /> Chrome Dev Tools
            </li>
            <li className="flex items-center gap-2 mb-2">
              <FaGithub className="text-[#64ffda]" /> Github
            </li>
            <li className="flex items-center gap-2 mb-2">
              <FaGitAlt className="text-[#64ffda]" /> Git
            </li>
            <li className="flex items-center gap-2 mb-2">
              <IoLogoFigma className="text-[#64ffda]" /> Figma
            </li>
            <li className="flex items-center gap-2 mb-2">
              <BiLogoNetlify className="text-[#64ffda]" /> Netlify
            </li>
            <li className="flex items-center gap-2 mb-2">
              <IoLogoVercel className="text-[#64ffda]" /> Vercel
            </li>
            <li className="flex items-center gap-2 mb-2">
              <FaLinux className="text-[#64ffda]" /> Linux
            </li>
          </ul>
        </div>

        {/* Databases */}
        <div
          className="bg-[#112240] p-6 rounded-lg shadow-lg text-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <h3 className="text-xl font-semibold text-[#64ffda] mb-4">
            Databases
          </h3>
          <ul className="text-[#ccd6f6]">
            <li className="flex items-center gap-2 mb-2">
              <SiMysql className="text-[#64ffda]" /> MySQL
            </li>
            <li className="flex items-center gap-2 mb-2">
              <BiLogoPostgresql className="text-[#64ffda]" /> PostgreSQL
            </li>
            <li className="flex items-center gap-2 mb-2">
              <SiMongodb className="text-[#64ffda]" /> MongoDB
            </li>
            <li className="flex items-center gap-2 mb-2">
              <SiSqlite className="text-[#64ffda]" /> SQLite
            </li>
          </ul>
        </div>

        {/* Competitive Programming Skills */}
        <div
          className="bg-[#112240] p-6 rounded-lg shadow-lg text-center"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <h3 className="text-xl font-semibold text-[#64ffda] mb-4">
            Competitive Programming Skills
          </h3>
          <ul className="text-[#ccd6f6]">
            <li className="flex items-center gap-2 mb-2">
              <FaCode className="text-[#64ffda]" /> Data Structures
            </li>
            <li className="flex items-center gap-2 mb-2">
              <FaCode className="text-[#64ffda]" /> Algorithms
            </li>
            <li className="flex items-center gap-2 mb-2">
              <FaCode className="text-[#64ffda]" /> Complexity Analysis
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
