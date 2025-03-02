import React from "react";
import { FaCertificate } from "react-icons/fa";

const Courses = () => {
  return (
    <section id="courses" className="py-16 bg-[#0a192f] text-white px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#64ffda]">
          Courses Completed
        </h2>
        <p className="text-lg text-[#8892b0]">
          Here are the courses I have completed to enhance my technical skills:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Course Card */}
        <div
          className="relative p-6 rounded-2xl bg-gradient-to-br from-[#1a1f37] to-[#0f172a] border border-[#64ffda]/40 shadow-lg shadow-[#64ffda]/20 transform transition-all duration-300 hover:scale-105 hover:shadow-[#64ffda]/50"
          data-aos="fade-up"
        >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#64ffda] text-[#0a192f] p-3 rounded-full shadow-md">
            <FaCertificate className="text-3xl" />
          </div>
          <h3 className="text-2xl font-bold text-[#64ffda] text-center mt-6">
            CSE Fundamentals with Phitron
          </h3>
          <p className="text-[#8892b0] text-center text-sm">
            Offered by: phitron
          </p>
          <div className="mt-4 border-t border-[#64ffda]/20 pt-4">
            <p className="text-[#ccd6f6] text-md">
              <strong>Completion:</strong> Sep 2023 – Apr 2024
            </p>
            <p className="text-[#ccd6f6] text-sm mt-3">
              <strong>Specialization:</strong> C, C++, JS, DSA, Algorithms, CP,
              MySQL, React, Python, OOP, Django
            </p>
          </div>
        </div>

        {/* Another Course */}
        <div
          className="relative p-6 rounded-2xl bg-gradient-to-br from-[#1a1f37] to-[#0f172a] border border-[#64ffda]/40 shadow-lg shadow-[#64ffda]/20 transform transition-all duration-300 hover:scale-105 hover:shadow-[#64ffda]/50"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#64ffda] text-[#0a192f] p-3 rounded-full shadow-md">
            <FaCertificate className="text-3xl" />
          </div>
          <h3 className="text-2xl font-bold text-[#64ffda] text-center mt-6">
            Complete Web Development
          </h3>
          <p className="text-[#8892b0] text-center text-sm">
            Offered by: Programming Hero
          </p>
          <div className="mt-4 border-t border-[#64ffda]/20 pt-4">
            <p className="text-[#ccd6f6] text-md">
              <strong>Completion:</strong> Jun 2022 – Dec 2022
            </p>
            <p className="text-[#ccd6f6] text-sm mt-3">
              <strong>Specialization:</strong> HTML, CSS, JavaScript, React,
              Node.js, Express, MongoDB
            </p>
          </div>
        </div>

        {/* Another Course */}
        <div
          className="relative p-6 rounded-2xl bg-gradient-to-br from-[#1a1f37] to-[#0f172a] border border-[#64ffda]/40 shadow-lg shadow-[#64ffda]/20 transform transition-all duration-300 hover:scale-105 hover:shadow-[#64ffda]/50"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#64ffda] text-[#0a192f] p-3 rounded-full shadow-md">
            <FaCertificate className="text-3xl" />
          </div>
          <h3 className="text-2xl font-bold text-[#64ffda] text-center mt-6">
            Math for programming
          </h3>
          <p className="text-[#8892b0] text-center text-sm">
            Offered by: phitron
          </p>
          <div className="mt-4 border-t border-[#64ffda]/20 pt-4">
            <p className="text-[#ccd6f6] text-md">
              <strong>Completion:</strong> Sep 2023 – Sep 2023
            </p>
            <p className="text-[#ccd6f6] text-sm mt-3">
              <strong>Specialization:</strong> Fundamentals of mathematics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
