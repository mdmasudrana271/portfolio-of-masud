import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <footer
      ref={ref}
      className="bg-[#0a192f] text-white py-16 relative overflow-hidden"
    >
      {/* Animated Wave Background */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 0.3, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-[#64ffda] to-[#112240] wave-animation"
      ></motion.div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Me */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center md:text-left border-l-4 border-[#64ffda] pl-6"
          >
            <h3 className="text-3xl font-bold text-[#64ffda] mb-4">About Me</h3>
            <p className="text-[#e1e6f0] text-lg shimmer">
              Passionate software developer focused on building scalable
              applications with modern technologies.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center md:text-left border-l-4 border-[#64ffda] pl-6"
          >
            <h3 className="text-3xl font-bold text-[#64ffda] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {["Projects", "education", "skills", "about"].map(
                (item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0, delay: index * 0.2 }}
                    className="text-lg text-[#e1e6f0] transition-all duration-200"
                  >
                    <a href={`#${item.toLowerCase()}`}>{item}</a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center md:text-left border-l-4 border-[#64ffda] pl-6"
          >
            <h3 className="text-3xl font-bold text-[#64ffda] mb-4">Contact</h3>
            <p className="text-[#e1e6f0] text-lg shimmer">
              Let's connect and build something amazing together!
            </p>
            <div className="flex justify-center md:justify-start gap-6 text-3xl">
              {[
                {
                  icon: <FaFacebook />,
                  link: "https://www.facebook.com/mdabdullamasud.rana",
                },
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/md-abdullahalmasud/",
                },
                {
                  icon: <FaGithub />,
                  link: "https://github.com/mdmasudrana271",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.5 }
                  }
                  transition={{ duration: 0, delay: index * 0.3 }}
                  className="text-[#64ffda] hover:text-white transition-all duration-200"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="mt-12 text-center text-[#e1e6f0] text-sm opacity-80"
        >
          <p>
            &copy; {new Date().getFullYear()} Md Abdullah Al Masud. All Rights
            Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
