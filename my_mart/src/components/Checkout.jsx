import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  // Dummy cart data (later replace with global cart state)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Premium Jacket",
      price: 2999,
      qty: 1,
    },
    {
      id: 2,
      title: "Stylish Shoes",
      price: 1899,
      qty: 2,
    },
  ]);

  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0,
  );

  const SHIPPING = 49;
  const PLATFORM_FEE = 20;
  const TOTAL = subtotal + SHIPPING + PLATFORM_FEE;

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setCartItems([]); // empty cart

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1b1f3b]">Checkout</h1>
        <p className="text-sm text-gray-600">Complete your order details</p>
      </div>

      {/* ORDER PLACED MESSAGE */}
      {orderPlaced && (
        <div className="mb-8 p-4 rounded-md bg-green-100 text-green-700">
          ✅ Order placed successfully! Redirecting to home...
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* ================= LEFT SECTION ================= */}
        <div className="lg:col-span-2 space-y-10">
          {/* ADDRESS FORM */}
          <section>
            <h2 className="text-lg font-semibold text-[#1b1f3b] mb-4">
              Delivery Address
            </h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border px-3 py-2 text-sm outline-none"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border px-3 py-2 text-sm outline-none"
              />
              <input
                type="text"
                placeholder="City"
                className="border px-3 py-2 text-sm outline-none"
              />
              <input
                type="text"
                placeholder="State"
                className="border px-3 py-2 text-sm outline-none"
              />
              <input
                type="text"
                placeholder="Pincode"
                className="border px-3 py-2 text-sm outline-none"
              />
              <textarea
                rows="3"
                placeholder="Full Address"
                className="md:col-span-2 border px-3 py-2 text-sm outline-none resize-none"
              />
            </form>
          </section>

          {/* PAYMENT METHOD */}
          <section>
            <h2 className="text-lg font-semibold text-[#1b1f3b] mb-4">
              Payment Method
            </h2>

            <div className="space-y-3 text-sm">
              {["COD", "UPI", "Credit / Debit Card"].map((method) => (
                <label
                  key={method}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="payment"
                    value={method}
                    checked={paymentMethod === method}
                    onChange={() => setPaymentMethod(method)}
                  />
                  <span>{method}</span>
                </label>
              ))}
            </div>
          </section>
        </div>

        {/* ================= RIGHT SUMMARY ================= */}
        <div className="bg-[#f9f9f9] rounded-xl p-6 h-fit">
          <h2 className="text-lg font-semibold text-[#1b1f3b] mb-4">
            Order Summary
          </h2>

          <div className="space-y-3 text-sm text-gray-700">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>
                  {item.title} × {item.qty}
                </span>
                <span>₹{item.price * item.qty}</span>
              </div>
            ))}

            <div className="border-t pt-3 mt-3 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹{SHIPPING}</span>
              </div>
              <div className="flex justify-between">
                <span>Platform Fee</span>
                <span>₹{PLATFORM_FEE}</span>
              </div>
            </div>

            <div className="border-t pt-3 flex justify-between font-semibold text-[#1b1f3b]">
              <span>Total</span>
              <span>₹{TOTAL}</span>
            </div>
          </div>

          <button
            onClick={handlePlaceOrder}
            disabled={cartItems.length === 0}
            className="mt-6 w-full py-3
                       bg-[#cf722b] text-white
                       font-semibold hover:opacity-90 transition
                       disabled:opacity-50"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
