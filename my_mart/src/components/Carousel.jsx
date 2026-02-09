import { useState } from "react";

import slide1 from "../assets/img/slider/home-slider1.jpg";
import slide2 from "../assets/img/slider/home-slider2.png";
import slide3 from "../assets/img/slider/home-slider3.png";

const slides = [slide1, slide2, slide3];

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateContent, setAnimateContent] = useState(false);

  function handleLeftSlider() {
    setAnimateContent(true);

    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }, 150);

    setTimeout(() => {
      setAnimateContent(false);
    }, 450);
  }

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
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* ================= SLIDER TRACK ================= */}
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

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-xl h-full flex flex-col justify-center px-20 gap-4">
        {/* UPPER PART (moves UP) */}
        <div
          className={`transition-all duration-500 ease-in-out
            ${
              animateContent
                ? "-translate-y-10 opacity-0"
                : "translate-y-0 opacity-100"
            }
          `}
        >
          <span className="text-[#1b1f3b] font-semibold">Match your Style</span>

          <h2 className="text-4xl font-bold text-[#1b1f3b] leading-tight mt-2">
            Amazing Collection <br /> and Variety
          </h2>
        </div>

        {/* LOWER PART (moves DOWN) */}
        <div
          className={`transition-all duration-500 ease-in-out
            ${
              animateContent
                ? "translate-y-10 opacity-0"
                : "translate-y-0 opacity-100"
            }
          `}
        >
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>

          <button className="mt-4 px-10 py-2 w-fit text-lg bg-gradient-to-r from-[#1b1f3b] via-[#23284f] to-[#1b1f3b] text-white">
            Explore More →
          </button>
        </div>
      </div>

      {/* ================= SLIDER BUTTONS ================= */}
      <div className="absolute inset-0 z-20 flex items-center justify-between px-6">
        <button
          onClick={handleLeftSlider}
          className="w-10 h-10 bg-[#1b1f3b] text-[#f9b17a] rounded-full border border-white/20 flex items-center justify-center hover:scale-110 transition"
        >
          ←
        </button>

        <button
          onClick={handleRightSlider}
          className="w-10 h-10 bg-[#1b1f3b] text-[#f9b17a] rounded-full border border-white/20 flex items-center justify-center hover:scale-110 transition"
        >
          →
        </button>
      </div>
    </div>
  );
}

export default Carousel;
