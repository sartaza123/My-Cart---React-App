import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

function Details() {
  const { id } = useParams();
  const { data, loading, error } = useFetch("https://dummyjson.com/products");
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);

  if (loading) return <p className="text-center py-10">Loading product...</p>;
  if (error) return <p className="text-center py-10">Error: {error}</p>;

  const product = data.find((item) => String(item.id) === id);
  if (!product) return <p className="text-center py-10">Product not found </p>;

  const discountedPrice = Math.round(
    product.price - (product.price * product.discountPercentage) / 100,
  );

  const savings = product.price - discountedPrice;
  const saved = Number(savings.toFixed(2));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* ================= TOP SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* IMAGE SECTION */}
        <div>
          {/* Main Image Container */}
          <div className="relative">
            <img
              src={product.images?.[activeImg] || product.thumbnail}
              className="w-full h-[300px] sm:h-[420px] object-cover rounded-md bg-[#f6f6f6]"
            />

            {/* Slider buttons INSIDE image */}
            {product.images?.length > 1 && (
              <div className="absolute inset-0 flex items-center justify-between px-3">
                <button
                  onClick={() =>
                    setActiveImg(
                      activeImg === 0
                        ? product.images.length - 1
                        : activeImg - 1,
                    )
                  }
                  className="w-9 h-9 rounded-full bg-[#1b1f3b] text-[#f9b17a] flex items-center justify-center"
                >
                  ←
                </button>

                <button
                  onClick={() =>
                    setActiveImg(
                      activeImg === product.images.length - 1
                        ? 0
                        : activeImg + 1,
                    )
                  }
                  className="w-9 h-9 rounded-full bg-[#1b1f3b] text-[#f9b17a] flex items-center justify-center"
                >
                  →
                </button>
              </div>
            )}
          </div>

          {/* Thumbnails BELOW main image */}
          {product.images?.length > 1 && (
            <div className="flex gap-2 mt-3 overflow-x-auto">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => setActiveImg(index)}
                  className={`w-16 h-16 object-cover cursor-pointer border transition ${
                    index === activeImg
                      ? "border-[#f9b17a]"
                      : "border-transparent"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* INFO SECTION */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1b1f3b]">
            {product.title}
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Brand: {product.brand} | Category: {product.category}
          </p>

          <div className="flex items-center gap-3 mt-4">
            <span className="text-2xl font-semibold text-[#1b1f3b]">
              ₹{discountedPrice}
            </span>
            <span className="line-through text-gray-400">₹{product.price}</span>
            <span className="text-green-600 text-sm font-semibold">
              {product.discountPercentage}% OFF
            </span>
          </div>

          <p className="text-sm text-green-700 mt-1">You save ₹{saved}</p>

          {/* HIGHLIGHTS */}
          <ul className="mt-4 text-sm text-gray-600 space-y-1">
            <li>✔ Rating: ⭐ {product.rating}</li>
            <li>✔ In stock: {product.stock} units</li>
            <li>✔ Free delivery available</li>
            <li>✔ Secure payment options</li>
          </ul>

          {/* Quantity */}
          <div className="flex items-center gap-3 mt-4">
            <span className="text-sm font-medium">Qty</span>
            <div className="flex border rounded overflow-hidden">
              <button
                onClick={() => qty > 1 && setQty(qty - 1)}
                className="px-3"
              >
                −
              </button>
              <span className="px-4">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="px-3">
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="px-8 py-3 bg-gradient-to-r from-[#1b1f3b] via-[#23284f] to-[#1b1f3b] text-white">
              Buy Now
            </button>
            <button className="px-8 py-3 border border-[#1b1f3b] text-[#1b1f3b] hover:bg-[#1b1f3b] hover:text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* ================= DESCRIPTION ================= */}
      <section className="mt-14">
        <h2 className="text-xl font-semibold text-[#1b1f3b] mb-3">
          Product Description
        </h2>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>
      </section>

      {/* ================= DELIVERY & RETURN ================= */}
      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
        <div>
          <h3 className="font-semibold text-[#1b1f3b] mb-2">Delivery</h3>
          <p>Free delivery within 3–5 business days.</p>
          <p>Express delivery available.</p>
        </div>
        <div>
          <h3 className="font-semibold text-[#1b1f3b] mb-2">Returns</h3>
          <p>7-day replacement policy.</p>
          <p>No questions asked returns.</p>
        </div>
      </section>

      {/* ================= SPECIFICATIONS ================= */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4 text-[#1b1f3b]">
          Technical Specifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <p>
            <strong>Brand:</strong> {product.brand}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Stock:</strong> {product.stock}
          </p>
          <p>
            <strong>Warranty:</strong> 1 Year Manufacturer Warranty
          </p>
          <p>
            <strong>Return Policy:</strong> 7 Days Replacement
          </p>
          <p>
            <strong>Country of Origin:</strong> India
          </p>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="mt-14">
        <h2 className="text-xl font-semibold mb-4 text-[#1b1f3b]">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3 text-sm text-gray-600">
          <p>
            <strong>Q:</strong> Is this product genuine?
            <br />
            A: Yes, 100% authentic.
          </p>
          <p>
            <strong>Q:</strong> Does it come with warranty?
            <br />
            A: Yes, 1 year warranty.
          </p>
          <p>
            <strong>Q:</strong> Is COD available?
            <br />
            A: Yes.
          </p>
        </div>
      </section>

      {/* ================= REVIEWS ================= */}
      <section className="mt-14">
        <h2 className="text-xl font-semibold mb-4 text-[#1b1f3b]">
          Customer Reviews
        </h2>

        {[1, 2, 3].map((_, i) => (
          <div key={i} className="border-b py-4 text-sm">
            <p className="font-semibold">Verified User</p>
            <p className="text-[#f9b17a]">⭐⭐⭐⭐☆</p>
            <p className="text-gray-600">
              Excellent product. Totally worth the price.
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Details;
