function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
        {/* Outer rotating arc */}
        <div
          className="
          absolute inset-0
          rounded-full
          border-4 border-transparent
          border-t-[#f9b17a]
          border-r-[#1b1f3b]
          animate-spin
        "
        ></div>

        {/* Inner rotating arc (reverse) */}
        <div
          className="
          absolute inset-3 sm:inset-4
          rounded-full
          border-4 border-transparent
          border-b-[#23284f]
          border-l-[#f9b17a]
          animate-spin
          [animation-direction:reverse]
        "
        ></div>

        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs sm:text-sm md:text-base font-medium text-[#1b1f3b] tracking-wide">
            Loading...
          </span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
