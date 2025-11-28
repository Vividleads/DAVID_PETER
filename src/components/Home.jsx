import React from "react";
import img from '../assets/HomeImg.png'
import { Github, Linkedin, Twitter, MessageCircle, Download, ArrowDown } from "lucide-react";

const HeroSection = () => {
  // Function to handle CV download
  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a');
    // Set the href to your CV file path (place your CV in the public folder)
    link.href = '/path-to-your-cv.pdf'; // Update this path to your actual CV file
    // Set the download attribute with desired filename
    link.download = 'David_Peter_CV.pdf';
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Main hero container - Full viewport height with consistent dark background
    <div id="home" className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4 py-20 pt-32 md:pt-20">
      {/* Content wrapper - Max width container */}
      <div className="max-w-6xl mx-auto w-full">
        {/* Grid layout - Image on left, content on right */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Left side - Placeholder for your profile image */}
          <div className="flex justify-center md:justify-end order-1 md:order-1">
            {/* Image container with decorative border */}
            <div className="relative">
              {/* Subtle glow effect behind image */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl"></div>
              
              {/* Profile image placeholder - Replace with your own image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-blue-500 overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 bg-gray-800 flex items-center justify-center">
                {/* Placeholder text - Remove this and add your image */}
                <img 
                  src={img} 
                  alt="profile" 
                    className="w-full h-full object-cover object-center"
/>
              </div>
              
              {/* Floating badge - Years of experience */}
              <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-6 py-3 rounded-full font-bold shadow-xl border-4 border-gray-900">
                5+ Years
              </div>
            </div>
          </div>

          {/* Right side - Text content and CTAs */}
          <div className="text-center mt-3 lg:mt-6 md:text-left order-2 md:order-2 space-y-6">
            {/* Greeting text */}
            <div className="space-y-2 lg:space-y-6">
              <p className="text-blue-400 text-base font-semibold tracking-wide">
                Hello, I'm
              </p>
              
              {/* Main name heading */}
              <h1 className="text-4xl md:text-5xl font-bold">
                David
                <br />
                <span className="text-blue-400">Peter</span>
              </h1>
            </div>

            {/* Job title with typing effect styling */}
            <div className="text-lg md:text-xl text-gray-300 font-light">
              <span className="border-r-2 border-blue-400 pr-2 animate-pulse">
                React.js Front-End Developer
              </span>
            </div>

            {/* Description paragraph */}
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
              a React.js front-end dev who loves crafting crisp interfaces and making pixels behave. 
              If it's interactive, responsive, and looks good, I probably built it.
            </p>

            {/* Social media icons with enhanced hover effects */}
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              {/* GitHub icon */}
              <a
                href="https://github.com/Vividleads"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1 group"
              >
                <Github size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
              
              {/* LinkedIn icon */}
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1 group"
              >
                <Linkedin size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
              
              {/* Twitter icon */}
              <a
                href="https://.com/vividlead1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1 group"
              >
                <Twitter size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
              
              {/* WhatsApp icon */}
              <a
                href="https://wa.me/+2349135994983"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1 group"
              >
                <MessageCircle size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>

            {/* Call to action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              {/* Primary CTA - Download CV */}
              <button 
                onClick={handleDownloadCV}
                className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2 group"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Download CV
              </button>
              
              {/* Secondary CTA - Hire Me (scrolls to contact form) */}
              <button 
                onClick={scrollToContact}
                className="bg-transparent border-2 border-blue-500 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator - Bouncing arrow at bottom */}
        <div className="flex justify-center mt-16 animate-bounce">
          <ArrowDown size={32} className="text-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;