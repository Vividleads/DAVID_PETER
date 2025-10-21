import React from 'react';
import img from '../assets/HomeImg.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faTwitter, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { easeInOut, motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      {/* HOME SECTION  */}
 <div className='bg-gray-900 min-h-screen px-6 py-8'>
  {/* HOME SECTION */}
  <div className="container mx-auto space-y-6 pt-9 mt-9">
      <div className="items-center grid grid-cols-1 lg:grid-cols-2 gap-2 justify-between">

      {/* LEFT CONTENT - BIO & SOCIAL LINKS */}
      <div className="lg:order-1 order-1 lg:w-1/2 w-full
       text-center lg:pt-7  lg:text-left lg:mb-0">
        {/* NAME */}

        <h2 className='text-blue-300 text-2xl lg:text-4xl md:text-4xl top-20 relative font-bold'
        >Hello, I'm</h2>
        <h3 className='text-gray-300 font-bold lg:text-7xl md:text-5xl text-4xl mb-4 mt-12 pt-9'>
          David 
          Peter
        </h3>
        <p className='text-blue-300 text-pretty '>
          a React.js front-end dev who loves crafting
           crisp interfaces and making pixels behave. 
           If it’s interactive, responsive, and looks good,
            i probably built it.</p>
             {/* ICONS  */}
             <div className="sm:pt-3 sm:pb-3 ">
               <ul className='flex justify-center lg:justify-start pt-2 pb-2'>
            <a href="https://wwww.github.com/Vividleads"> <li className='text-blue-300 font-bold text-2xl lg:text-4xl hover:scale-125'><FontAwesomeIcon icon={faGithub} /></li> </a>
             <a href="https://www.linkedin/in/vividleads">  <li className='text-blue-300 font-bold text-2xl lg:text-4xl hover:scale-125'><FontAwesomeIcon icon={faLinkedin}/></li> </a>
              <a href="#">  <li className='text-blue-300 font-bold text-2xl lg:text-4xl hover:scale-125'><FontAwesomeIcon icon={faTwitter}/></li></a>
              <a href="#">  <li className='text-blue-300 font-bold text-2xl lg:text-4xl hover:scale-125'><FontAwesomeIcon icon={faWhatsapp}/></li> </a>

               </ul>
             </div>

             <div className='justify-center'>
              <button className="text-gray-900 font-bold rounded-3xl bg-gray-300 px-6 py-2 hover:bg-blue-300 transition duration-300"
               >Download CV
               </button>
             </div>
      </div>
         
         {/* HOME IMAGE  */}
    <motion.div className='relative w-full h-full'
     aniamte ={{
      y: [0, -20, 0],
      rotateY : [0, 5, 0]
     }}
     transition={{
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut'
     }}
    
    >
      <div className="flex justify-center lg:justify-end items-center lg:w-1/2 w-full">

    <img
    src={img}
    alt="home image"
    className="w-72 p-3 md:w-80 lg:w-96 h-auto object-contain"
  />
      </div>
</motion.div>

    </div>

  </div>
</div>

</>
  )
}

export default Home;