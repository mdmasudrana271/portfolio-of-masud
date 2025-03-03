import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";
import codeAnimation from "../../assets/animation/navanimation.json";

const Header = () => {
  return (
    <div className="navbar lg:fixed lg:top-0 lg:z-10  w-full bg-transparent backdrop-blur-lg shadow-md border-b border-white/10 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-900/80 rounded-box w-52 text-white"
          >
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            {/* <li>
              <Link to="/blog">Blog</Link>
            </li> */}
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-5xl">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-900 flex items-center justify-center">
            <Lottie
              animationData={codeAnimation}
              loop={true}
              className="w-10 h-10"
            />
          </div>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal text-white p-0">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          {/* <li>
            <Link to="/blog">Blog</Link>
          </li> */}
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
