import React, { useState } from 'react'
import Stats from './Stats';
import img from '../assets/AboutImg.png'

const About = () => {
  const [seeMore, setSeeMore] = useState(false);

  const shortText = `
    I’m David Peter, a Front-End React.js Developer who wrote my first line of code in 2021 and haven’t stopped building since.
  `;

  const fullText = `
My journey into development began with simple curiosity and evolved into a strong passion for building
 intuitive and meaningful digital experiences. Over the years, I’ve worked on a wide range of projects—both
  independently and within teams—which has sharpened my problem-solving abilities, attention to detail, and commitment
   to writing clean, scalable, and reusable code.

I specialize in creating responsive, interactive user interfaces using React.js, Next.js, and TypeScript, 
along with modern tools such as JavaScript (ES6+), Tailwind CSS, Git, and REST APIs. I also have hands-on
 experience with backend integration, enabling me to build full and seamless end-to-end web solutions.

Currently, I work as a freelance developer, helping brands and startups turn their ideas into polished,

user-centered applications. I’m also open to remote opportunities where I can collaborate with innovative
 teams and contribute to impactful, scalable products.  `;

  return (
    <>
      {/* ABOUT SECTION  */}
      <div id="about" className='bg-gray-900 min-h-screen px-6 py-6'>
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
