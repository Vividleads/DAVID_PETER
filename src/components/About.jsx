import React, { useState } from 'react'
import Stats from './Stats';
import img from '../assets/AboutImg.png'

const About = () => {
  const [seeMore, setSeeMore] = useState(false);

  const shortText = `
    I’m David Peter, a Front-End React.js Developer who wrote my first line of code in 2021 and haven’t stopped building since.
  `;

  const fullText = `
    My journey into development started with curiosity and grew into a passion for crafting intuitive digital experiences that solve real problems.
    Over the years, I’ve collaborated on diverse projects with teams and also built independent applications, which strengthened my problem-solving mindset, attention to detail, and ability to write clean, reusable code.
    I specialize in building responsive, interactive user interfaces using React.js, along with modern tools and technologies like JavaScript (ES6+), Tailwind CSS, Git, and REST APIs.
    I currently work as a freelance developer, helping brands and startups transform ideas into scalable and user-focused web solutions.
    I’m also open to remote roles where I can collaborate with forward-thinking teams and contribute to impactful projects.
  `;

  return (
    <>
      {/* ABOUT SECTION  */}
      <div className='bg-gray-900 min-h-screen px-6 py-6'>
        {/* HEADING  */}
        <div className='items-center text-center'>
          <h2 className='text-3xl lg:text-4xl font-bold text-white justify-center'>
            About <span className="text-blue-300">Me</span>
          </h2>
        </div>

        {/* MAIN CONTENT  */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">

          <div className=' lg:w-1/2'>
            <Stats />
          </div>

          {/* IMAGE  */}
          <div className="w-full lg:w-1/2 flex justify-center lg:pt-8">
            <img
              src={img}
              alt="about"
              className="w-72 p-3 md:w-80 lg:w-96 h-auto object-contain"
            />
          </div>

          {/* BIO */}
          <div className='text-gray-100 font-poppins w-full lg:w-1/2 leading-relaxed'>
            {shortText}
            {seeMore && fullText}
            
            <button
              onClick={() => setSeeMore(!seeMore)}
              className="text-blue-400 mt-2 block hover:underline"
            >
              {seeMore ? "See Less" : "See More"}
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default About;
