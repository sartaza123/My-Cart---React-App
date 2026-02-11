import { NavLink, useNavigate } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingCart,
  HiOutlineSearch,
} from "react-icons/hi";

import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../hooks/searchSlice";

import { useEffect, useRef, useState } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + (item.qty || 0), 0);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = () => {
    const value = inputRef.current.value.trim();
    if (!value) return;

    dispatch(setSearchQuery(value));
    navigate("/search");
    inputRef.current.value = "";
  };

  const iconStyle =
    "relative text-white/70 hover:text-[#f9b17a] transition-all duration-300 hover:scale-110";

  return (
    <>
      {/* ================= Sticky Header ================= */}
      <div
        className={`fixed top-0 left-0 w-full z-50 
        bg-gradient-to-r from-[#1b1f3b] via-[#23284f] to-[#1b1f3b]
        shadow-md transition-all duration-500 border-b border-white
        ${scrolled ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-10 lg:px-14 py-2 sm:py-3 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-sm sm:text-base md:text-lg font-semibold text-white whitespace-nowrap">
            My<span className="text-[#f9b17a]">_</span>mart
          </h1>

          {/* Nav */}
          <nav className="flex gap-3 sm:gap-6 text-[10px] sm:text-xs md:text-sm">
            <NavLink to="/" className="text-white/70 hover:text-white">
              Home
            </NavLink>
            <NavLink to="/category" className="text-white/70 hover:text-white">
              Category
            </NavLink>
            <NavLink to="/about" className="text-white/70 hover:text-white">
              About
            </NavLink>
            <NavLink to="/contact" className="text-white/70 hover:text-white">
              Contact
            </NavLink>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <NavLink to="/account" className={iconStyle}>
              <HiOutlineUser size={18} />
            </NavLink>

            <NavLink to="/cart" className={iconStyle}>
              <div className="relative">
                <HiOutlineShoppingCart size={18} />
                <span className="absolute -top-2 -right-2 bg-[#f9b17a] text-[#1b1f3b] text-[8px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>

      {/* ================= Main Header ================= */}
      <div
        className={`transition-all duration-500
        ${scrolled ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"}
        `}
      >
        <header>
          <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-10 lg:px-14 py-3 bg-gradient-to-r from-[#1b1f3b] via-[#23284f] to-[#1b1f3b] border-b border-white/50">
            {/* ================= MOBILE ================= */}
            <div className="sm:hidden flex flex-col gap-3">
              {/* Logo Row */}
              <h1 className="text-lg font-semibold tracking-wide text-white">
                My<span className="text-[#f9b17a]">_</span>mart
              </h1>

              {/* Search + Icons Row */}
              <div className="flex items-center gap-3">
                {/* Search takes remaining width */}
                <div className="flex flex-1 border border-[#f9b17a] h-8">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search..."
                    className="px-2 w-full text-[11px] text-white outline-none bg-transparent"
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  />
                  <button onClick={handleSearch} className="bg-[#f9b17a] px-2">
                    <HiOutlineSearch className="text-white" size={14} />
                  </button>
                </div>

                {/* Icons stay right */}
                <div className="flex items-center gap-4">
                  <NavLink to="/account" className={iconStyle}>
                    <HiOutlineUser size={18} />
                  </NavLink>

                  <NavLink to="/cart" className={iconStyle}>
                    <div className="relative">
                      <HiOutlineShoppingCart size={18} />
                      <span className="absolute -top-2 -right-2 bg-[#f9b17a] text-[#1b1f3b] text-[8px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                        {totalItems}
                      </span>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>

            {/* ================= DESKTOP & TABLET ================= */}
            <div className="hidden sm:flex items-center justify-between">
              {/* LEFT SIDE → Logo */}
              <h1 className="text-2xl md:text-3xl font-semibold tracking-wide text-white whitespace-nowrap">
                My<span className="text-[#f9b17a]">_</span>mart
              </h1>

              {/* RIGHT SIDE → Search + Icons */}
              <div className="flex items-center gap-6 md:gap-8">
                {/* Search */}
                <div className="flex w-[240px] md:w-[300px] lg:w-[360px] border border-[#f9b17a] h-9 md:h-10">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search products..."
                    className="px-3 w-full text-sm text-white outline-none bg-transparent"
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  />
                  <button onClick={handleSearch} className="bg-[#f9b17a] px-4">
                    <HiOutlineSearch className="text-white" size={18} />
                  </button>
                </div>

                {/* Account */}
                <NavLink to="/account" className={iconStyle}>
                  <div className="flex flex-col items-center text-sm">
                    <HiOutlineUser size={22} />
                    <p>Account</p>
                  </div>
                </NavLink>

                {/* Cart */}
                <NavLink to="/cart" className={iconStyle}>
                  <div className="flex flex-col items-center text-sm">
                    <div className="relative">
                      <HiOutlineShoppingCart size={22} />
                      <span className="absolute -top-2 -right-2 bg-[#f9b17a] text-[#1b1f3b] text-[9px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                        {totalItems}
                      </span>
                    </div>
                    <p>My Cart</p>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>

          {/* ================= Secondary Nav ================= */}
          <div className="w-full bg-[#f9b17a] text-[#1b1f3b]">
            <nav className="flex justify-center md:justify-start mx-3 sm:mx-6 lg:mx-20 py-2 sm:py-3 gap-4 sm:gap-6 lg:gap-10 text-[10px] sm:text-xs md:text-sm">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/category">Category</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
