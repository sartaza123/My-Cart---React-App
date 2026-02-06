// src/components/Header.jsx
import { NavLink } from "react-router-dom";

const Header = () => {
  const linkStyle = ({ isActive }) =>
    `
    relative pb-1 text-sm font-medium tracking-wide
    transition-colors duration-300
    ${
      isActive
        ? "text-[#f9b17a] after:w-full"
        : "text-white/80 hover:text-white after:w-0"
    }
    after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:bg-[#f9b17a]
    after:transition-all after:duration-300
  `;

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#1b1f3b] via-[#23284f] to-[#1b1f3b]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <h1 className="text-2xl font-semibold tracking-wide text-white">
          My<span className="text-[#f9b17a]">-</span>Mart
        </h1>

        {/* Navigation */}
        <nav className="flex gap-10">
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/menu" className={linkStyle}>
            Menu
          </NavLink>

          <NavLink to="/account" className={linkStyle}>
            Account
          </NavLink>

          <NavLink to="/cart" className={linkStyle}>
            Cart
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
