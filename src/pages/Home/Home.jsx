import React from "react";
import Banner from "./Banner/Banner";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Cpp from "../Cpp/Cpp";
import Courses from "../Courses/Courses";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Cpp></Cpp>
      <Education></Education>
      <Courses></Courses>
      <Contact></Contact>
    </div>
  );
};

export default Home;
