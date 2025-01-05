import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    {
      url: "../src/assets/iit1.jpeg",
      alt: "Academic image 3",
    },
    {
      url: "../src/assets/iit6.png",
      alt: "Academic image 3",
    },
    {
      url: "../src/assets/a1.jpg",
      alt: "Academic image 3",
    },
    {
      url: "../src/assets/a2.jpg",
      alt: "Academic image 3",
    },
  ];
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      }, 5000); // Change slide every 5 seconds
  
      return () => clearInterval(timer);
    }, []);
  
    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  
    return (
      <div className="relative w-full h-[34rem] overflow-hidden">
          
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.alt}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
          <ChevronRight size={24} />
        </button>
      </div>
    );
  };

  
export default ImageCarousel;
  