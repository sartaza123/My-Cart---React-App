import { NavLink } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi";

import { useSelector } from "react-redux";
const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navLinkStyle = ({ isActive }) =>
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

  const iconStyle =
    "relative text-white/70 hover:text-[#f9b17a] transition-all duration-300 hover:scale-110";

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#1b1f3b] via-[#23284f] to-[#1b1f3b] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LEFT — BRAND */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold tracking-wide text-white">
            My<span className="text-[#f9b17a]">_</span>mart
          </h1>
        </div>

        {/* CENTER — NAV LINKS */}
        <nav className="flex-1 flex justify-center gap-10">
          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>
          <NavLink to="/category" className={navLinkStyle}>
            Category
          </NavLink>
          <NavLink to="/about" className={navLinkStyle}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={navLinkStyle}>
            Contact
          </NavLink>
        </nav>

        {/* RIGHT — ICONS */}
        <div className="flex-1 flex justify-end items-center gap-6">
          <NavLink to="/account" className={iconStyle}>
            <HiOutlineUser size={22} />
          </NavLink>

          <NavLink to="/wishlist" className={iconStyle}>
            <HiOutlineHeart size={22} />
          </NavLink>

          <NavLink to="/cart" className={iconStyle}>
            <div className="relative">
              <HiOutlineShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-[#f9b17a] text-[#1b1f3b] text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
