import React from 'react'
import Card1 from './Card1';
import Card2 from './Card2';

const Projects = () => {
  return (
  <>
    <div className='bg-gray-900 min-h-screen px-6 py-7'>
        {/* HEADING  */}
        <div className='flex justify-center items-center'>
            <h2 className='text-gray-200 font-bold text-3xl'> My<span className='text-blue-300 pl-2'>Projects</span></h2>
        </div> 

        {/* PROJECT CARDS  */}
        <div className='flex flex-col lg:flex-row justify-center items-center gap-12 py-14'>
            <Card1/>
            <Card2/>
        </div>
    </div>
  </>
)
}

export default Projects;