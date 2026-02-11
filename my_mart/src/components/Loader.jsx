function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative w-40 h-40">
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

        {/* Inner rotating arc (reverse direction) */}
        <div
          className="
          absolute inset-4
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
          <span className="text-sm font-medium text-[#1b1f3b] tracking-wide">
            Loading...
          </span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
