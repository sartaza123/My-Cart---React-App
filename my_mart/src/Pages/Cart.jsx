import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { Link } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Premium Jacket",
      price: 2999,
      image: "https://dummyjson.com/image/400x400/eeeeee/000000?text=Jacket",
      qty: 1,
    },
    {
      id: 2,
      title: "Stylish Shoes",
      price: 1899,
      image: "https://dummyjson.com/image/400x400/eeeeee/000000?text=Shoes",
      qty: 2,
    },
  ]);

  const SHIPPING_CHARGE = 49;
  const PLATFORM_FEE = 20;
  const COUPON_DISCOUNT = 150;

  const increaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };

  const decreaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0,
  );

  const total = subtotal + SHIPPING_CHARGE + PLATFORM_FEE - COUPON_DISCOUNT;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1b1f3b]">Shopping Cart</h1>
        <p className="text-sm text-gray-600">
          Review your items before checkout
        </p>
      </div>

      {/* CART ITEMS */}
      <div className="space-y-10">
        {cartItems.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row gap-6">
            {/* IMAGE */}
            <div className="w-full md:w-[220px] h-[220px] flex-shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* DETAILS */}
            <div className="flex-1 flex flex-col gap-4">
              <div>
                <h3 className="text-lg font-semibold text-[#1b1f3b]">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  ₹{item.price} per item
                </p>
              </div>

              {/* QTY */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">Qty</span>
                <div className="flex border rounded overflow-hidden">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    −
                  </button>
                  <span className="px-3 py-1 text-sm">{item.qty}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* ITEM TOTAL */}
              <p className="text-sm font-medium text-[#1b1f3b]">
                Item Total: ₹{item.price * item.qty}
              </p>

              {/* ACTION BUTTONS (GROUPED) */}
              <div className="flex gap-4 mt-2">
                <button
                  onClick={() => removeItem(item.id)}
                  className="flex items-center gap-1 text-sm
                             text-[#1b1f3b] hover:text-red-500 border px-5 rounded-md"
                >
                  <HiOutlineTrash />
                  Remove
                </button>

                <button
                  className="px-6 py-2 text-sm font-medium
                             bg-gradient-to-r from-[#1b1f3b] via-[#23284f] to-[#1b1f3b]
                             text-white rounded hover:opacity-90"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ORDER SUMMARY */}
      {cartItems.length > 0 && (
        <div className="mt-14 bg-[#f9f9f9] rounded-xl p-6">
          <h3 className="text-lg font-semibold text-[#1b1f3b] mb-4">
            Order Summary
          </h3>

          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping Charges</span>
              <span>₹{SHIPPING_CHARGE}</span>
            </div>
            <div className="flex justify-between">
              <span>Platform Fee</span>
              <span>₹{PLATFORM_FEE}</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Coupon Discount</span>
              <span>-₹{COUPON_DISCOUNT}</span>
            </div>
          </div>

          <div className="border-t mt-4 pt-4 flex justify-between font-semibold text-lg text-[#1b1f3b]">
            <span>Total Payable</span>
            <span>₹{total}</span>
          </div>

          <Link to="/checkout">
            <button
              className="mt-6 w-full py-3
                       bg-[#cf722b] text-white
                       font-semibold hover:opacity-90 transition"
            >
              Proceed to Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
