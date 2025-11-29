import React from 'react'
import img from '../assets/BOOKSHOW.png'

const Card1 = () => {
  return (
    <div className='max-w-sm bg-white/10 border
    border-white/20 backdrop-blur-xl rounded-xl
    overflow-hidden shadow-lg p-4 flex flex-col
    gap-4 hover:scale-[1.02] hover:shadow-blue-500/30 transition-all duration-300'>

      {/* IMAGE */}
      <div className='w-full h-48 overflow-hidden rounded-lg'>
        <img loading="lazy" src={img} alt="Project Preview" className='w-full h-full object-cover hover:scale-105 transition duration-500' />
      </div>

      {/* DESCRIPTION */}
            <h1 className='text-blue-400 font-bold'>BOOKSHOW</h1>

      <div className='text-gray-200 text-sm leading-relaxed'>
          Bookshow is an online open-library platform that provides
           users access to a wide collection of books across various genres. 
           It features a clean interface, easy navigation, and a simple
            browsing experience for readers.      </div>

      {/* SKILLS + ICONS */}
      <div className='flex flex-wrap gap-2'>
        <span className='px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full'>React</span>
        <span className='px-3 py-1 text-xs bg-green-500/20 text-green-300 rounded-full'>Tailwind</span>
        <span className='px-3 py-1 text-xs bg-yellow-500/20 text-yellow-300 rounded-full'>Google Books API</span>
        <span className='px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full'>Vite</span>

      </div>


      {/* BUTTONS */}
      <div className='flex gap-3'>
        <a target='blank' href="https://vividleads.github.io/BOOKSHOW/" className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition'>Live Demo</a>
        <a href="#" className='px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white text-sm rounded-lg transition'>GitHub</a>
      </div>
    </div>
    
  )
}

export default Card1;
