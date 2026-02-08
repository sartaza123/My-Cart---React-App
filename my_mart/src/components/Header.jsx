import { NavLink } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineMenuAlt2,
  HiOutlineShoppingCart,
} from "react-icons/hi";

const Header = () => {
  const linkStyle = ({ isActive }) =>
    `
    relative flex items-center gap-2 pb-1 text-sm font-medium tracking-wide
    transition-colors duration-300
    ${
      isActive
        ? "text-[#f9b17a] after:w-full"
        : "text-white/70 hover:text-white after:w-0"
    }
    after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:bg-[#f9b17a]
    after:transition-all after:duration-300
  `;

  return (
    <header className="sticky top-0 z-50 bg-linear-to-r from-[#1b1f3b] via-[#23284f] to-[#1b1f3b] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <h1 className="text-2xl font-semibold tracking-wide text-white">
          My<span className="text-[#f9b17a]">_</span>mart
        </h1>

        {/* Navigation */}
        <nav className="flex gap-10">
          <NavLink to="/" className={linkStyle}>
            <HiOutlineHome size={18} />
            Home
          </NavLink>

          <NavLink to="/menu" className={linkStyle}>
            <HiOutlineMenuAlt2 size={18} />
            Menu
          </NavLink>

          <NavLink to="/account" className={linkStyle}>
            <HiOutlineUser size={18} />
            Account
          </NavLink>

          <NavLink to="/cart" className={linkStyle}>
            <div className="relative">
              <HiOutlineShoppingCart size={18} />
              <span className="absolute -top-2 -right-2 bg-[#f9b17a] text-[#1b1f3b] text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </div>
            Cart
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
