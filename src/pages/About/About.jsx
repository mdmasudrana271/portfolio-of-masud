import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="about"
      className="bg-[#0a192f] text-white py-16 relative overflow-hidden"
    >
      {/* Animated Wave Background */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 0.3, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-[#64ffda] to-[#112240] wave-animation"
      ></motion.div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <h3 className="text-4xl font-bold text-[#64ffda] mb-8">About Me</h3>
          <p className="text-[#e1e6f0] text-lg mb-6">
            Hi! I'm Md Abdullah Al Masud, a passionate full-stack web developer
            with expertise in the MERN stack and Python Django. I love solving
            problems and creating scalable, efficient web applications that
            deliver exceptional user experiences. With a focus on modern
            technologies and best practices, I’m constantly learning and
            evolving to stay ahead of the curve.
          </p>
          <p className="text-[#e1e6f0] text-lg mb-6">
            I started my journey as a self-taught developer, diving into
            JavaScript, React, and backend technologies like Node.js and Django.
            Over the years, I’ve worked on a range of projects, from small
            websites to complex applications, which have sharpened my skills and
            deepened my understanding of the development lifecycle.
          </p>
          <p className="text-[#e1e6f0] text-lg mb-6">
            I believe in the power of code to transform ideas into real-world
            solutions, and my goal is to continue building applications that
            make a difference. Whether it's developing an interactive front-end,
            optimizing the back-end, or integrating systems, I approach every
            project with dedication and enthusiasm.
          </p>

          <h4 className="text-3xl font-semibold text-[#64ffda] mb-4">
            My Skills
          </h4>
          <ul className="list-disc list-inside space-y-2 text-[#e1e6f0] text-lg">
            <li>JavaScript (ES6), React.js, Node.js, Express.js</li>
            <li>MongoDB, Firebase, JWT Authentication</li>
            <li>Python, Django (DRF), REST APIs, SQL Databases</li>
            <li>HTML5, CSS3, TailwindCSS, Bootstrap</li>
            <li>Version Control (Git/GitHub), Deployment (Netlify, Vercel)</li>
            <li></li>
          </ul>

          <h4 className="text-3xl font-semibold text-[#64ffda] mt-8 mb-4">
            My Philosophy
          </h4>
          <p className="text-[#e1e6f0] text-lg">
            I believe in writing clean, modular, and maintainable code that is
            scalable and adaptable. My approach to web development is driven by
            user-centered design, meaning that I prioritize the user experience
            in every project I work on. By staying up-to-date with the latest
            trends and best practices, I ensure that my applications are not
            only functional but also modern and future-proof.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="mt-12 text-center text-[#e1e6f0] text-lg opacity-80"
          >
            <p>
              I’m always excited to collaborate on new projects, so if you have
              an idea or just want to connect, feel free to reach out!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
