import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Bradley",
      image: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't..."
    },
    {
      name: "Stephanie",
      image: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't..."
    },
    {
      name: "Russell",
      image: "https://i.pravatar.cc/150?img=8",
      rating: 5,
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't..."
    },
    {
      name: "Sarah",
      image: "https://i.pravatar.cc/150?img=9",
      rating: 5,
      text: "Working with David was an absolute pleasure. His attention to detail and commitment to excellence exceeded all expectations. Highly recommended!"
    },
    {
      name: "Michael",
      image: "https://i.pravatar.cc/150?img=13",
      rating: 5,
      text: "Professional, creative, and efficient. David delivered our project ahead of schedule and the results were phenomenal. Will definitely work together again!"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Get visible testimonials based on screen size
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <div id="testimonials" className="min-h-screen bg-gray-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
          {/* Left: Heading */}
          <div className="text-center lg:text-left mb-8 lg:mb-0 w-full lg:w-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
              What my
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              client <span className="text-blue-400">say</span>
            </h2>
          </div>

          {/* Center: Decorative Arrow (hidden on mobile) */}
          <div className="hidden lg:block mx-8">
            <svg width="100" height="100" viewBox="0 0 100 100" className="text-blue-400">
              <path
                d="M20 80 Q50 20, 80 50 L75 45 M80 50 L70 55"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Right: Description */}
          <div className="text-center lg:text-left max-w-md">
            <p className="text-gray-400 text-base md:text-lg">
              Don't just take my word for it — here's what clients have experienced working with me.
            </p>
          </div>
        </div>

        {/* Testimonials Cards */}
        <div className="relative">
          {/* Desktop View - 3 cards */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile View - 1 card */}
          <div className="md:hidden mb-8">
            <div className="bg-gray-800 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {testimonials[currentIndex].text}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-400 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-gray-300 text-gray-900 hover:bg-white flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;