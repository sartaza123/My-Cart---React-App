import { useState } from "react";

import slide1 from "../assets/img/slider/home-slider1.jpg";
import slide2 from "../assets/img/slider/home-slider2.png";
import slide3 from "../assets/img/slider/home-slider3.png";

const slides = [slide1, slide2, slide3];

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleLeftSlider() {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }

  function handleRightSlider() {
    setCurrentSlide((next) => (next === slides.length - 1 ? 0 : next + 1));
  }
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Background image */}
      <img
        src={slides[currentSlide]}
        alt="Carousel"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 max-w-xl h-full flex flex-col justify-center px-20 gap-4">
        <span className="text-[#1b1f3b] font-semibold">Match your Style</span>

        <h2 className="text-4xl font-bold text-[#1b1f3b] leading-tight">
          Amazing Collection <br /> and Variety
        </h2>

        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>

        <button className="mt-2 px-10 py-2 w-fit text-lg bg-gradient-to-r from-[#1b1f3b] via-[#23284f] to-[#1b1f3b] text-white">
          Explore More →
        </button>
      </div>

      {/* Slider buttons */}
      <div className="absolute inset-0 z-20 flex items-center justify-between px-6">
        <button
          onClick={handleLeftSlider}
          className="w-10 h-10 bg-[#1b1f3b] text-[#f9b17a] rounded-full border border-white/20 flex items-center justify-center"
        >
          ←
        </button>

        <button
          onClick={handleRightSlider}
          className="w-10 h-10 bg-[#1b1f3b] text-[#f9b17a] rounded-full border border-white/20 flex items-center justify-center"
        >
          →
        </button>
      </div>
    </div>
  );
}

export default Carousel;
