import React from 'react'
import img from '../assets/Autofix.png'

const Card2 = () => {
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
       <h1 className="font-bold text-blue-400">AUTOFIX</h1>
      <div className='text-gray-200 text-sm leading-relaxed'>
           Autofix is a modern auto-repair service website designed to
            help customers book vehicle diagnostics, repairs,
             and maintenance with ease. It showcases available
              services, pricing, and contact options while providing a clean, trustworthy interface for a smooth customer experience.
      </div>

      {/* SKILLS + ICONS */}
      <div className='flex flex-wrap gap-2'>
        <span className='px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full'>React</span>
        <span className='px-3 py-1 text-xs bg-green-500/20 text-green-300 rounded-full'>Tailwind</span>
        <span className='px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full'>Vite</span>

      </div>


      {/* BUTTONS */}
      <div className='flex gap-3'>
        <a target='blank' href="https://vividleads.github.io/AutoFix/" className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition'>Live Demo</a>
      </div>
    </div>
    
  )
}

export default Card2;
