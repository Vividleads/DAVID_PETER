import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>     
    {/* <div className='max-w-sm bg-white/10 border border-white/20 backdrop-blur-xl rounded-xl overflow-hidden shadow-lg p-4 flex flex-col gap-4 hover:scale-[1.02] hover:shadow-blue-500/30 transition-all duration-300'> */}

      {/* Navbar Container */}
      <div className="fixed w-full bg-gray-900/90 backdrop-blur-md text-gray-300 z-50 shadow-md">
        <div className="flex justify-between items-center px-5 py-4 md:px-10">
          {/* LOGO */}
          <div className="text-3xl md:text-4xl font-bold">
            David <span className="text-blue-300">Peter</span>
          </div>

          {/* HAMBURGER ICON (mobile only) */}
          <div
            className="md:hidden text-gray-300 text-3xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </div>

          {/* NAV LINKS (desktop only) */}
          <ul className="hidden md:flex space-x-8 text-md lg:text-xl">
            <li className="hover:scale-110 hover:text-blue-300 transition duration-200">
              <a href="#">Home</a>
            </li>
            <li className="hover:scale-110 hover:text-blue-300 transition duration-200">
              <a href="#">About</a>
            </li>
            <li className="hover:scale-110 hover:text-blue-300 transition duration-200">
              <a href="#">Skills</a>
            </li>

            <li className="hover:scale-110 hover:text-blue-300 transition duration-200">
              <a href="#">Projects</a>
            </li>
            <li className="hover:scale-110 hover:text-blue-300 transition duration-200">
              <a href="#">Testimonials</a>
            </li>
            <li className="hover:scale-110 hover:text-blue-300 transition duration-200">
              <a href="#">Contact</a>
            </li>
          </ul>

          {/* BUTTON (desktop only) */}
          <div className="hidden md:block">
            <button className="text-gray-900 font-bold rounded-3xl bg-gray-300 px-5 py-2 hover:bg-blue-300 hover:text-gray-900 transition duration-300">
              Hire Me
            </button>
          </div>
        </div>

        {/* MOBILE OVERLAY MENU */}
        {isOpen && (
          <div
            className=" inset-0 top-52 bg-gray-900/90 backdrop-blur-md text-center flex flex-col justify-center space-y-6 font-semibold text-xl md:hidden animate-fade-in border-b-blue-300"
            onClick={() => setIsOpen(false)} // closes when clicking outside
          >
            <a
              href="#"
              className="block hover:text-blue-300 transition"
              onClick={(e) => e.stopPropagation()} // prevent overlay click
            >
              Home
            </a>
            <a
              href="#"
              className="block hover:text-blue-300 transition"
              onClick={(e) => e.stopPropagation()}
            >
              About
            </a>
            <a
              href="#"
              className="block hover:text-blue-300 transition"
              onClick={(e) => e.stopPropagation()}
            >
              Skills
            </a>

            <a
              href="#"
              className="block hover:text-blue-300 transition"
              onClick={(e) => e.stopPropagation()}
            >
              Projects
            </a>
            <a
              href="#"
              className="block hover:text-blue-300 transition"
              onClick={(e) => e.stopPropagation()}
            >
              Testimonials
            </a>
            <a
              href="#"
              className="block hover:text-blue-300 transition"
              onClick={(e) => e.stopPropagation()}
            >
              Contact
            </a>

         
         <div className="flex justify-center pb-4">
         <button
          className="text-gray-900 font-bold rounded-3xl bg-gray-300 px-6 py-2 hover:bg-blue-300 transition duration-300"
         onClick={(e) => e.stopPropagation()}
         >
         Hire Me
        </button>
        </div>
      </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
