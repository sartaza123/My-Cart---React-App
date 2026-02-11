import { useState } from "react";

import slide1 from "../assets/img/slider/home-slider1.jpg";
import slide2 from "../assets/img/slider/home-slider2.png";
import slide3 from "../assets/img/slider/home-slider3.png";

const slides = [slide1, slide2, slide3];

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateContent, setAnimateContent] = useState(false);

  // Slide left
  function handleLeftSlider() {
    setAnimateContent(true);

    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }, 150);

    setTimeout(() => {
      setAnimateContent(false);
    }, 450);
  }

  // Slide right
  function handleRightSlider() {
    setAnimateContent(true);

    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 150);

    setTimeout(() => {
      setAnimateContent(false);
    }, 450);
  }

  return (
    <div
      className="relative w-full 
      h-[260px] 
      sm:h-[320px] 
      md:h-[400px] 
      lg:h-[480px] 
      overflow-hidden"
    >
      {/* Slider Track */}
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 md:px-20 gap-4 max-w-7xl">
        {/* Upper Content */}
        <div
          className={`transition-all duration-500 ease-in-out
            ${
              animateContent
                ? "-translate-y-10 opacity-0"
                : "translate-y-0 opacity-100"
            }
          `}
        >
          <span className="text-[#1b1f3b] text-xs sm:text-sm md:text-base font-semibold">
            Match your Style
          </span>

          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1b1f3b] leading-tight mt-2">
            Amazing Collection <br /> and Variety
          </h2>
        </div>

        {/* Lower Content */}
        <div
          className={`transition-all duration-500 ease-in-out
            ${
              animateContent
                ? "translate-y-10 opacity-0"
                : "translate-y-0 opacity-100"
            }
          `}
        >
          <p
            className="
              hidden sm:block
              text-xs sm:text-sm text-gray-600 
              max-w-[60%] 
              sm:max-w-[50%] 
              md:max-w-[45%] 
              lg:max-w-[40%]
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>

          <button className="mt-4 px-6 sm:px-8 py-2 text-sm sm:text-base bg-gradient-to-r from-[#1b1f3b] via-[#23284f] to-[#1b1f3b] text-white">
            Explore More →
          </button>
        </div>
      </div>

      {/* Slider Buttons */}
      <div className="absolute inset-0 z-20 flex items-center justify-between px-3 sm:px-6">
        <button
          onClick={handleLeftSlider}
          className="w-7 h-7 sm:w-9 sm:h-9 bg-[#1b1f3b] text-[#f9b17a] rounded-full flex items-center justify-center hover:scale-110 transition"
        >
          ←
        </button>

        <button
          onClick={handleRightSlider}
          className="w-7 h-7 sm:w-9 sm:h-9 bg-[#1b1f3b] text-[#f9b17a] rounded-full flex items-center justify-center hover:scale-110 transition"
        >
          →
        </button>
      </div>
    </div>
  );
}

export default Carousel;
