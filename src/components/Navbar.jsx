import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl bg-white/10 backdrop-blur-xl rounded-2xl text-gray-300 z-50 shadow-xl border border-white/20">
        <div className="flex justify-between items-center px-5 py-4 md:px-10">
          
          {/* LOGO */}
          <div className="text-3xl md:text-4xl font-bold cursor-pointer">
            <a href="#home">
              David <span className="text-blue-300">Peter</span>
            </a>
          </div>

          {/* HAMBURGER ICON */}
          <div
            className="md:hidden text-gray-300 text-3xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </div>

          {/* NAV LINKS (DESKTOP) */}
          <ul className="hidden md:flex space-x-8 text-md lg:text-xl">
            <li className="hover:scale-110 hover:text-blue-300 transition duration-200">
              <a href="#home">Home</a>
            </li>
            <li className="hover:scale-110 hover:text-blue-300 transition duration-200">
              <a href="#about">About</a>
            </li>
            <li className="hover:scale-110 hover:text-blue-300 transition duration-200">
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:scale-110 hover:text-blue-300 transition duration-200">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:scale-110 hover:text-blue-300 transition duration-200">
              <a href="#testimonials">Testimonials</a>
            </li>
            <li className="hover:scale-110 hover:text-blue-300 transition duration-200">
              <a href="#contact">Contact</a>
            </li>
          </ul>

          {/* BUTTON (DESKTOP) */}
          <div className="hidden md:block">
            <button className="text-gray-900 font-bold rounded-3xl bg-gray-300 px-5 py-2 hover:bg-blue-300 hover:text-gray-900 transition duration-300">
              <a href="#contact">Hire Me</a>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div
            className="inset-0 top-52 bg-gray-900/90 backdrop-blur-md text-center flex flex-col justify-center space-y-6 font-semibold text-xl md:hidden animate-fade-in"
            onClick={() => setIsOpen(false)}
          >
            <a href="#home" className="block hover:text-blue-300 transition" onClick={(e) => e.stopPropagation()}>
              Home
            </a>
            <a href="#about" className="block hover:text-blue-300 transition" onClick={(e) => e.stopPropagation()}>
              About
            </a>
            <a href="#skills" className="block hover:text-blue-300 transition" onClick={(e) => e.stopPropagation()}>
              Skills
            </a>
            <a href="#projects" className="block hover:text-blue-300 transition" onClick={(e) => e.stopPropagation()}>
              Projects
            </a>
            <a href="#testimonials" className="block hover:text-blue-300 transition" onClick={(e) => e.stopPropagation()}>
              Testimonials
            </a>
            <a href="#contact" className="block hover:text-blue-300 transition" onClick={(e) => e.stopPropagation()}>
              Contact
            </a>

            <div className="flex justify-center pb-4">
              <button
                className="text-gray-900 font-bold rounded-3xl bg-gray-300 px-6 py-2 hover:bg-blue-300 transition duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <a href="#contact">Hire Me</a>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
