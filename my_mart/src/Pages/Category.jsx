import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";

// 🔹 LOCAL CATEGORY IMAGES (your assets)
import big1 from "../assets/img/product/big-product1.jpg";
import big2 from "../assets/img/product/big-product2.jpg";
import p1 from "../assets/img/product/product1.png";
import p2 from "../assets/img/product/product2.png";
import p3 from "../assets/img/product/product3.png";
import p4 from "../assets/img/product/product4.png";
import p5 from "../assets/img/product/product5.png";
import bannerBg from "../assets/img/banner/banner-bg3.png";

// 🔹 CATEGORY UI DATA (dummy + premium)
const categoryShowcase = [
  {
    title: "Fashion",
    key: "womens-dresses",
    image: big1,
    big: true,
  },
  {
    title: "Electronics",
    key: "smartphones",
    image: big2,
    big: true,
  },
  {
    title: "Shoes",
    key: "mens-shoes",
    image: p1,
  },
  {
    title: "Watches",
    key: "mens-watches",
    image: p2,
  },
  {
    title: "Beauty",
    key: "skincare",
    image: p3,
  },
  {
    title: "Accessories",
    key: "sunglasses",
    image: p4,
  },
  {
    title: "Home",
    key: "furniture",
    image: p5,
  },
];

function Category() {
  const [activeCategory, setActiveCategory] = useState("smartphones");

  const { data, loading, error } = useFetch(
    `https://dummyjson.com/products/category/${activeCategory}`,
  );

  return (
    <>
      <section
        className="relative w-full h-[260px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${bannerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold tracking-wide">Categories</h1>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* ================= CATEGORY SHOWCASE ================= */}
        <section className="mb-16">
          <h1 className="text-3xl font-bold text-[#1b1f3b] mb-2">
            Shop by Category
          </h1>
          <p className="text-gray-600 mb-8">
            Hand-picked collections crafted for your lifestyle
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categoryShowcase.map((cat) => (
              <div
                key={cat.title}
                onClick={() => setActiveCategory(cat.key)}
                className={`group relative overflow-hidden rounded-xl cursor-pointer
                ${cat.big ? "md:col-span-2 md:row-span-2 h-[360px]" : "h-[170px]"}
              `}
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Text */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-semibold tracking-wide">
                    {cat.title}
                  </h3>
                  <span className="text-sm text-white/80">
                    Explore Collection →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Category;
