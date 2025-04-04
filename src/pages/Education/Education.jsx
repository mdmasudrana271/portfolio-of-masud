import React, { useEffect, useState, useRef } from "react";

const Education = () => {
  const [lineHeight, setLineHeight] = useState("0%");
  const sectionRef = useRef(null); // Reference to the Education section

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollPositionInSection = Math.min(
        scrollTop + window.innerHeight - sectionTop,
        sectionHeight
      );
      const scrollPercentage = (scrollPositionInSection / sectionHeight) * 100;
      setLineHeight(`${scrollPercentage}%`);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="py-16 bg-[#0a192f] text-white px-6"
      id="education"
      ref={sectionRef}
    >
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-[#64ffda] mb-4">
          Education
        </h2>
        <p className="text-lg text-[#8892b0]">
          An overview of my educational journey and academic accomplishments.
        </p>
      </div>

      <div className="relative">
        {/* This bar now will only move within the height of the section */}
        <div
          className="absolute hidden md:block top-0 left-[50%] w-[4px]  bg-transparent -translate-x-[50%] transition-all duration-500 rounded-full"
          style={{
            height: lineHeight,
            borderLeft: "2px dotted #64ffda",
          }}
        >
          {/* Bar will stop at the last card */}
        </div>

        {/* Bachelor's Degree */}
        <div
          className="relative mb-8 flex items-center justify-start md:justify-end"
          data-aos="fade-up"
        >
          <div className="bg-[#112240] p-8 rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl w-full max-w-[610px]">
            <h3 className="text-xl font-semibold text-[#64ffda] mb-4">
              Bachelor's Degree Honours
            </h3>
            <div className="text-[#ccd6f6] space-y-2">
              <p>
                <strong>Institute:</strong> Islamia Govt. College Sirajganj
              </p>
              <p>
                <strong>Major:</strong> Accounting
              </p>
              <p>
                <strong>Session & Type:</strong> 2021-22
              </p>
            </div>
          </div>
        </div>

        {/* Higher Secondary School Certificate */}
        <div
          className="relative mb-8 flex items-center justify-start md:justify-start"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="bg-[#112240] p-8 rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl w-full max-w-[610px]">
            <h3 className="text-xl font-semibold text-[#64ffda] mb-4">
              Higher Secondary School Certificate (H.S.C)
            </h3>
            <div className="text-[#ccd6f6] space-y-2">
              <p>
                <strong>Institute:</strong> Begum Nurunnahar Tarkabagish Honours
                College
              </p>
              <p>
                <strong>Group:</strong> Science
              </p>
              <p>
                <strong>Passing Year:</strong> 2021
              </p>
              <p>
                <strong>Board:</strong> Rajshahi
              </p>
            </div>
          </div>
        </div>

        {/* Secondary School Certificate */}
        <div
          className="relative flex items-center justify-start md:justify-end"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="bg-[#112240] p-8 rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl w-full max-w-[610px]">
            <h3 className="text-xl font-semibold text-[#64ffda] mb-4">
              Secondary School Certificate (S.S.C)
            </h3>
            <div className="text-[#ccd6f6] space-y-2">
              <p>
                <strong>Institute:</strong> Bagdumur Islamia Alim Madrasha
              </p>
              <p>
                <strong>Group:</strong> Science
              </p>
              <p>
                <strong>Passing Year:</strong> 2019
              </p>
              <p>
                <strong>Board:</strong> Rajshahi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
