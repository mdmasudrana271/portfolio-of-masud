import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://resume-of-abdullah-al-masud-server.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Data:", data); // Debugging API Response
        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          console.error("Unexpected data format:", data);
        }
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <div
      className="py-20 bg-gradient-to-r from-[#0a192f] to-[#112240] text-white "
      id="projects"
    >
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-[#64ffda] mb-4">
          My Projects
        </h2>
        <p className="text-lg text-[#8892b0]">
          A collection of my work demonstrating my skills and creativity.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
        {projects.map((project) => (
          <div key={project._id} className="flex justify-center">
            <div className="relative group w-96 rounded-2xl border border-white/20 backdrop-blur-lg bg-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
              {/* Hover Border Glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#64ffda] transition-all duration-500"></div>

              {/* Project Image */}
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={project.img || "https://via.placeholder.com/400x250"}
                  alt={project.name}
                  className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Project Details */}
              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.name}
                </h3>
                {/* <p className="text-[#ccd6f6] text-sm mb-4">
                  {project.description.length > 30
                    ? project.description.substring(0, 30) + "..."
                    : project.description}
                </p> */}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {Array.isArray(project.technologies) &&
                    project.tech.map((tec, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-[#64ffda]/20 text-[#64ffda] text-xs rounded-full"
                      >
                        {tec}
                      </span>
                    ))}
                </div>

                {/* Smaller Buttons */}
                <div className="flex gap-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-[#0a192f] bg-[#64ffda] rounded-md text-xs font-semibold hover:scale-105 transition-all duration-300"
                  >
                    Live Link
                  </a>
                  <a
                    href={project.client}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-[#64ffda] border border-[#64ffda] rounded-md text-xs font-semibold hover:bg-[#64ffda]/20 hover:scale-105 transition-all duration-300"
                  >
                    Github Client
                  </a>
                  <a
                    href={project.server}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-[#64ffda] border border-[#64ffda] rounded-md text-xs font-semibold hover:bg-[#64ffda]/20 hover:scale-105 transition-all duration-300"
                  >
                    Github Server
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
