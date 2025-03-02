import { Typewriter } from "react-simple-typewriter";
import banner from "../../../assets/masud.png";

const Banner = () => {
  const downloadResume = () => {
    fetch("Resume Of Md Abdullah Al Masud.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume Of Md Abdullah Al Masud.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-6 md:px-12 lg:px-20 py-12 bg-gradient-to-r from-[#1e293b] to-[#0f172a] text-white md:h-[100vh]">
      {/* Left Side Content */}
      <div
        data-aos="fade-right"
        className="w-full md:w-1/2 text-center md:text-left space-y-4"
      >
        <h1 className="text-2xl md:text-4xl font-bold text-[#22d3ee]">
          Hi, I'm
        </h1>
        <h2 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#22d3ee] to-[#a855f7]">
          Md Abdullah Al Masud
        </h2>

        {/* Typewriter Effect */}
        <h3 className="text-lg md:text-2xl font-semibold text-[#e2e8f0]">
          <Typewriter
            words={[
              "A Software Developer",
              "MERN Stack Developer",
              "Python Django Developer",
              "Competitive Programmer",
              "Passionate about Web Development",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        </h3>

        {/* About Skills */}
        <p className="text-sm md:text-lg text-[#94a3b8] leading-relaxed">
          I specialize in building scalable and high-performance web
          applications. With expertise in{" "}
          <span className="text-[#22d3ee] font-semibold">
            React.js, Node.js, Express, MongoDB, Django, and Python
          </span>
          , I love turning ideas into reality.
        </p>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start gap-4 mt-4">
          <button
            className="px-6 py-2 rounded-lg bg-[#22d3ee] text-gray-900 font-semibold hover:bg-[#a855f7] transition"
            onClick={downloadResume}
          >
            Download Resume
          </button>
          <a
            href="#contact"
            className="px-6 py-2 rounded-lg border border-[#22d3ee] text-[#22d3ee] hover:bg-[#22d3ee] hover:text-gray-900 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Side Image */}
      <div data-aos="fade-left" className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-[#22d3ee] shadow-lg">
          <img
            src={banner}
            alt="Md Abdullah Al Masud"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
