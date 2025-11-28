import React from 'react';
import img from '../assets/Javascript.png';
import img1 from '../assets/Typescript.png'
import img2 from '../assets/React.png'
import img3 from '../assets/Next-js.png'
import img4 from '../assets/Tailwind.png'
import img5 from '../assets/Sass.png'
import img6 from '../assets/Figma.png'
import img7 from '../assets/Git.png'

// import img1 from '..assets/'


const Skills = () => {
  return (
    <>
      <div id="skills" className='bg-gray-900 min-h-1/2 px-6 py-6'>
        {/* HEADING  */}
         <div className='flex items-center justify-center text-3xl font-bold'>
            <h2 className='text-gray-200'>My <span className='text-blue-300'>Skills</span></h2>
         </div>
           {/* ICONS  */}
         <div className='flex items-center justify-center pt-16 pl-5'>
            <ul className='flex align-center gap-12 pb-4'>
              <li className='w-16 lg:w-[150px] text-gray-200 font-poppins'>
                <img src={img} alt="" /> <span className='flex justify-center'> Javascript </span> </li>

              <li className='w-16 pt-2 lg:w-[180px] text-gray-200 font-poppins'>
                <img src={img1} alt="" /> <span className='flex justify-center'> Typescript</span> </li>

              <li className='w-16 lg:w-[150px] text-gray-200 font-poppins'>
                <img src={img2} alt="" /> <span className='flex justify-center'>React </span></li>

              <li className='w-16 lg:w-[150px] text-gray-200 font-poppins'>
                <img src={img3} alt="" /> <span className='flex justify-center'>Next js</span></li>
            </ul>
         </div>
         <div className='flex items-center justify-center'>
            <ul className='flex align-center gap-12 pt-4'>
              <li className='w-16 pt-4 lg:w-[150px] text-gray-200 font-poppins'>
                <img src={img4} alt="" /><span className='flex justify-center'>Tailwind</span></li>

              <li className='w-16 lg:w-[150px] text-gray-200 font-poppins' >
                <img src={img5} alt="" /> <span className='flex justify-center'>Sass/Scss</span></li>

              <li className='w-16 lg:w-[150px] text-gray-200 font-poppins'>
                <img src={img6} alt="" /><span className='flex justify-center'>Figma</span></li>

              <li className='w-16 lg:w-[150px] text-gray-200 font-poppins'>
                <img src={img7} alt="" /> <span className='flex justify-center'> Git/Version control</span></li>
            </ul>
         </div>
      </div>
    </>
  )
}

export default Skills