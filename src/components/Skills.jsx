import React from 'react';
import img from '../assets/Javascript.png';
import img1 from '../assets/Typescript.png'
import img2 from '../assets/React.png'
import img3 from '../assets/Next-js.png'
import img4 from '../assets/Tailwind.png'
import img5 from '../assets/Sass.png'
import img6 from '../assets/Figma.png'
import img7 from '../assets/Git.png'

const Skills = () => {
  return (
    <>
      <div id="skills" className="bg-gray-900 px-6 py-10">
        
        {/* HEADING */}
        <div className="flex items-center justify-center text-3xl font-bold">
          <h2 className="text-gray-200">
            My <span className="text-blue-300">Skills</span>
          </h2>
        </div>

        {/* ICONS ROW 1 */}
        <div className="flex items-center justify-center pt-10">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-12">
            <li className="w-14 md:w-20 lg:w-[150px] text-gray-200 font-poppins flex flex-col items-center">
              <img src={img} alt="" />
              <span className="mt-1">Javascript</span>
            </li>

            <li className="w-14 md:w-20 lg:w-[180px] text-gray-200 font-poppins flex flex-col items-center">
              <img src={img1} alt="" />
              <span className="mt-1">Typescript</span>
            </li>

            <li className="w-14 md:w-20 lg:w-[150px] text-gray-200 font-poppins flex flex-col items-center">
              <img src={img2} alt="" />
              <span className="mt-1">React</span>
            </li>

            <li className="w-14 md:w-20 lg:w-[150px] text-gray-200 font-poppins flex flex-col items-center">
              <img src={img3} alt="" />
              <span className="mt-1">Next JS</span>
            </li>
          </ul>
        </div>

        {/* ICONS ROW 2 */}
        <div className="flex items-center justify-center pt-6">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-12">
            <li className="w-14 md:w-20 lg:w-[150px] text-gray-200 font-poppins flex flex-col items-center">
              <img src={img4} alt="" />
              <span className="mt-1">Tailwind</span>
            </li>

            <li className="w-14 md:w-20 lg:w-[150px] text-gray-200 font-poppins flex flex-col items-center">
              <img src={img5} alt="" />
              <span className="mt-1">Sass/Scss</span>
            </li>

            <li className="w-14 md:w-20 lg:w-[150px] text-gray-200 font-poppins flex flex-col items-center">
              <img src={img6} alt="" />
              <span className="mt-1">Figma</span>
            </li>

            <li className="w-14 md:w-20 lg:w-[150px] text-gray-200 font-poppins flex flex-col items-center">
              <img src={img7} alt="" />
              <span className="mt-1">Git / Version Control</span>
            </li>
          </ul>
        </div>

      </div>
    </>
  );
};

export default Skills;
