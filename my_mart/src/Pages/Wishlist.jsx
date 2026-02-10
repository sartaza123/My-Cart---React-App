import { HiHeart, HiOutlineShoppingCart } from "react-icons/hi";

function Wishlist() {
  // dummy wishlist data (replace later with real state / API)
  const wishlistItems = [
    {
      id: 1,
      title: "Premium Jacket",
      price: 2999,
      image: "https://dummyjson.com/image/400x400/eeeeee/000000?text=Jacket",
    },
    {
      id: 2,
      title: "Stylish Shoes",
      price: 1899,
      image: "https://dummyjson.com/image/400x400/eeeeee/000000?text=Shoes",
    },
    {
      id: 3,
      title: "Luxury Watch",
      price: 4599,
      image: "https://dummyjson.com/image/400x400/eeeeee/000000?text=Watch",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-14">
      {/* ================= HEADER ================= */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-[#1b1f3b] mb-1">My Wishlist</h1>
        <p className="text-sm text-gray-600">
          Your favourite items, saved for later
        </p>
      </div>

      {/* ================= EMPTY STATE ================= */}
      {wishlistItems.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <HiHeart size={64} className="text-gray-300 mb-4" />
          <h3 className="text-lg font-semibold text-[#1b1f3b]">
            Your wishlist is empty
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            Start adding products you love ❤️
          </p>
        </div>
      )}

      {/* ================= WISHLIST GRID ================= */}
      {wishlistItems.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl overflow-hidden
                         hover:shadow-xl hover:-translate-y-1
                         transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover
                             transition-transform duration-500
                             group-hover:scale-105"
                />

                {/* HEART ICON */}
                <button
                  title="Remove from wishlist"
                  className="absolute top-3 right-3 w-10 h-10
                             rounded-full bg-white/90 backdrop-blur
                             flex items-center justify-center
                             text-[#cf722b]
                             hover:scale-110 transition-all duration-300"
                >
                  {/* Filled heart = wishlisted */}
                  <HiHeart size={22} />
                </button>
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h4 className="font-semibold text-[#1b1f3b] mb-1">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-500 mb-4">${item.price}</p>

                {/* ACTION */}
                <button
                  className="w-full flex items-center justify-center gap-2
                             px-4 py-2 text-sm font-medium
                             bg-gradient-to-r from-[#1b1f3b] via-[#23284f] to-[#1b1f3b]
                             text-white rounded-md
                             hover:opacity-90 transition"
                >
                  <HiOutlineShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
