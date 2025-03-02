import { FaCode } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { SiCodechef, SiCodeforces, SiHackerrank } from "react-icons/si";

const Cpp = () => {
  return (
    <section
      id="problem-solving"
      className="py-16 bg-[#0a192f] text-white px-6"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#64ffda]">
          Problem Solving Skills
        </h2>
        <p className="text-lg text-[#8892b0]">
          Here are the platforms where I solve algorithmic problems and improve
          my coding skills:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Codeforces */}
        <div
          className="bg-[#112240] p-6 rounded-lg shadow-lg text-center"
          data-aos="fade-up"
        >
          <h3 className="text-xl font-semibold text-[#64ffda] mb-4">
            Codeforces
          </h3>
          <p className="text-[#ccd6f6] mb-4">
            I regularly solve problems on Codeforces to sharpen my competitive
            programming skills and tackle complex problems.
          </p>
          <a
            href="https://codeforces.com/profile/abdullahal304"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64ffda] hover:text-white text-lg"
          >
            <SiCodeforces className="text-4xl inline-block mb-2 mr-2" />{" "}
            {/* Added margin-right */}
            View My Codeforces Profile
          </a>
        </div>

        {/* CodeChef */}
        <div
          className="bg-[#112240] p-6 rounded-lg shadow-lg text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-xl font-semibold text-[#64ffda] mb-4">
            CodeChef
          </h3>
          <p className="text-[#ccd6f6] mb-4">
            CodeChef is another platform where I participate in contests and
            solve algorithmic challenges to improve my problem-solving ability.
          </p>
          <a
            href="https://www.codechef.com/users/mdabdullahal30"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64ffda] hover:text-white text-lg"
          >
            <SiCodechef className="text-4xl inline-block mb-2 mr-2" />{" "}
            {/* Added margin-right */}
            View My CodeChef Profile
          </a>
        </div>

        {/* HackerRank */}
        <div
          className="bg-[#112240] p-6 rounded-lg shadow-lg text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h3 className="text-xl font-semibold text-[#64ffda] mb-4">
            HackerRank
          </h3>
          <p className="text-[#ccd6f6] mb-4">
            I solve algorithmic problems and participate in coding challenges on
            HackerRank to enhance my problem-solving skills.
          </p>
          <a
            href="https://www.hackerrank.com/profile/mdabdullahal304"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64ffda] hover:text-white text-lg"
          >
            <SiHackerrank className="text-4xl inline-block mb-2 mr-2" />{" "}
            {/* Added margin-right */}
            View My HackerRank Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cpp;
