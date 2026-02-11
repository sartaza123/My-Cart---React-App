import { NavLink } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingCart,
  HiOutlineSearch,
} from "react-icons/hi";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + (item.qty || 0), 0);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkStylePrimary = ({ isActive }) =>
    `
    relative px-1 pb-1 text-sm font-medium tracking-wide
    transition-colors duration-300
    ${isActive ? "text-[#f9b17a]" : "text-white/70 hover:text-white"}

    after:content-['']
    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-full after:bg-[#f9b17a]
    after:scale-x-0 after:origin-right
    after:transition-transform after:duration-300 after:ease-in-out
    hover:after:scale-x-100 hover:after:origin-left

    ${isActive ? "after:scale-x-100 after:origin-left" : ""}
  `;
  const navLinkStyleSecondary = ({ isActive }) =>
    `
    relative px-1 pb-1 text-sm font-medium tracking-wide
    transition-colors duration-300
    ${isActive ? "text-[#1b1f3b]" : "text-white/90 hover:text-white"}

    after:content-['']
    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-full after:bg-[#1b1f3b]
    after:scale-x-0 after:origin-right
    after:transition-transform after:duration-300 after:ease-in-out
    hover:after:scale-x-100 hover:after:origin-left

    ${isActive ? "after:scale-x-100 after:origin-left" : ""}
  `;

  const iconStyle =
    "relative text-white/70 hover:text-[#f9b17a] transition-all duration-300 hover:scale-110";

  return (
    <>
      {/* ==================== Header 1 ======================== */}

      <div
        className={` fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#1b1f3b] via-[#23284f] to-[#1b1f3b] shadow-md transition-all border-b border-white duration-500
           ${scrolled ? "-translate-y-0 opacity-100" : "translate-y-full opacity-0"}
          `}
      >
        <div className="max-w-7xl py-3 mx-auto px-14 py-3 flex items-center justify-between">
          {/* LEFT */}
          <h1 className="text-xl font-semibold text-white">
            My<span className="text-[#f9b17a]">_</span>mart
          </h1>

          {/* CENTER */}
          <nav className="flex gap-8">
            <NavLink to="/" className={navLinkStylePrimary}>
              Home
            </NavLink>
            <NavLink to="/category" className={navLinkStylePrimary}>
              Category
            </NavLink>
            <NavLink to="/about" className={navLinkStylePrimary}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkStylePrimary}>
              Contact
            </NavLink>
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-5">
            <NavLink to="/account" className={iconStyle}>
              <HiOutlineUser size={25} />
            </NavLink>

            <NavLink to="/cart" className={iconStyle}>
              <div className="relative">
                <HiOutlineShoppingCart size={25} />
                <span className="absolute -top-2 -right-2 bg-[#f9b17a] text-[#1b1f3b] text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>

      {/* =====================  header 2 ============================== */}

      <div
        className={`w-full transition-all duration-500
        ${scrolled ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"} `}
      >
        <header>
          <div className="max-w-7xl mx-auto px-14 py-4 flex items-center bg-gradient-to-r from-[#1b1f3b] via-[#23284f] to-[#1b1f3b] border-b border-white/50 justify-between">
            {/* LEFT — BRAND */}
            <div className="flex-1">
              <h1 className="text-3xl font-semibold tracking-wide text-white">
                My<span className="text-[#f9b17a]">_</span>mart
              </h1>
            </div>

            {/* RIGHT — ICONS AND SEARCH */}
            <div className="flex items-center gap-10  ">
              <div className="flex w-sm border border-[#f9b17a]">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="
                  p-3 w-full
                  text-sm
                  text-white
                  outline-none
                "
                />
                <div className="bg-[#f9b17a] hover:bg-[#da8646] p-3 cursor-pointer">
                  <HiOutlineSearch
                    className=" text-white hover:scale-110 "
                    size={20}
                  />
                </div>
              </div>

              <NavLink to="/account" className={iconStyle}>
                <div className="flex flex-col items-center justify-center">
                  <HiOutlineUser size={25} />
                  <p>Account</p>
                </div>
              </NavLink>

              <NavLink to="/cart" className={iconStyle}>
                <div className="flex flex-col items-center justify-center">
                  <div className="relative">
                    <HiOutlineShoppingCart size={25} />
                    <span className="absolute -top-2 -right-2 bg-[#f9b17a] text-[#1b1f3b] text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                      {totalItems}
                    </span>
                  </div>
                  <p>My Cart</p>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="w-full bg-[#f9b17a] text-[#1b1f3b]">
            <nav className="flex-1 flex mx-20 py-3 gap-10">
              <NavLink to="/" className={navLinkStyleSecondary}>
                <div className="pt-2">Home</div>
              </NavLink>
              <NavLink to="/category" className={navLinkStyleSecondary}>
                <div className="pt-2">Category</div>
              </NavLink>
              <NavLink to="/about" className={navLinkStyleSecondary}>
                <div className="pt-2">About Us</div>
              </NavLink>
              <NavLink to="/contact" className={navLinkStyleSecondary}>
                <div className="pt-2">Contact Us</div>
              </NavLink>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
