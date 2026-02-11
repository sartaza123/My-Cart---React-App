import { FiHeart, FiEye, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../hooks/cartSlice";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [adding, setAdding] = useState(false);
  const dispatch = useDispatch();

  // Handle add to cart
  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (adding) return;

    setAdding(true);
    dispatch(addItem(product));
    setTimeout(() => setAdding(false), 400);
  };

  return (
    <div className="group relative bg-[#f6f6f6] rounded-md overflow-hidden shadow-sm w-full">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover transition-transform duration-500 lg:group-hover:scale-105"
        />

        <span className="absolute top-3 left-3 bg-[#f9b17a] text-white text-xs px-3 py-1 rounded">
          Sale
        </span>

        {/* Action Icons 
            Visible always on mobile/tablet
            Hover only on desktop (lg+) */}
        <div
          className="
          absolute top-3 right-3 flex flex-col gap-2
          opacity-100 translate-x-0
          lg:opacity-0 lg:translate-x-3
          lg:group-hover:opacity-100 lg:group-hover:translate-x-0
          transition-all duration-300
        "
        >
          <button className="w-9 h-9 sm:w-10 sm:h-10 bg-white text-gray-700 rounded-md flex items-center justify-center hover:bg-[#f9b17a] hover:text-white transition">
            <FiHeart />
          </button>

          <Link to={`/details/${product.id}`}>
            <button className="w-9 h-9 sm:w-10 sm:h-10 bg-white text-gray-700 rounded-md flex items-center justify-center hover:bg-[#f9b17a] hover:text-white transition">
              <FiEye />
            </button>
          </Link>
        </div>

        {/* Add to Cart 
            Always visible on mobile/tablet
            Hover slide on desktop */}
        <div
          className="
          absolute bottom-0 left-0 right-0
          translate-y-0
          lg:translate-y-full
          lg:group-hover:translate-y-0
          transition-all duration-300
        "
        >
          <button
            onClick={handleAdd}
            className="w-full py-2 sm:py-3 bg-gradient-to-r from-[#1b1f3b] via-[#23284f] to-[#1b1f3b] text-white flex items-center justify-center gap-2 active:scale-95 transition-transform text-sm sm:text-base"
          >
            <FiShoppingCart />
            Add to cart
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-3 sm:p-4 text-center bg-white">
        <p className="text-xs text-gray-500 mb-1 capitalize">
          {product.category}
        </p>

        <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2 truncate">
          {product.title}
        </h3>

        <div className="flex items-center justify-center gap-2 flex-wrap">
          <span className="text-[#1b1f3b] font-semibold text-sm sm:text-base">
            ${product.price}
          </span>
          <span className="text-gray-400 line-through text-xs sm:text-sm">
            ${Math.round(product.price * 1.3)}
          </span>
        </div>

        <div className="flex justify-center gap-1 mt-2 text-[#f9b17a] text-xs sm:text-sm">
          {"★".repeat(Math.round(product.rating))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
