import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../hooks/cartSlice";

function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const SHIPPING = 49;
  const PLATFORM_FEE = 20;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0,
  );

  const total = subtotal + SHIPPING + PLATFORM_FEE;

  const handlePlaceOrder = () => {
    setOrderPlaced(true);

    setTimeout(() => {
      dispatch(clearCart());
      navigate("/");
    }, 2000);
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* ================= SUCCESS TOAST ================= */}
      {orderPlaced && (
        <div
          className="
            fixed top-4 right-4 sm:top-6 sm:right-6 z-50
            bg-green-500 text-white
            px-4 sm:px-6 py-3 sm:py-4
            rounded-lg shadow-xl
            flex items-center gap-2 sm:gap-3
            text-xs sm:text-sm
          "
        >
          <span>✅</span>
          <span className="font-medium">Order placed successfully!</span>
        </div>
      )}

      {/* ================= HEADER ================= */}
      <div className="mb-8 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1b1f3b]">
          Checkout
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Review and confirm your order
        </p>
      </div>

      {/* ================= EMPTY CART ================= */}
      {cartItems.length === 0 && !orderPlaced && (
        <p className="text-gray-500 text-sm">Your cart is empty.</p>
      )}

      {/* ================= MAIN CONTENT ================= */}
      {!orderPlaced && cartItems.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10">
          {/* ================= LEFT ================= */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-10">
            {/* ADDRESS */}
            <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
              <h2 className="text-base sm:text-lg font-semibold text-[#1b1f3b] mb-4">
                Delivery Address
              </h2>

              <form className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {["Full Name", "Phone Number", "City", "State", "Pincode"].map(
                  (field) => (
                    <input
                      key={field}
                      placeholder={field}
                      className="border px-3 py-2 text-xs sm:text-sm rounded outline-none focus:border-[#cf722b]"
                    />
                  ),
                )}

                <textarea
                  rows="3"
                  placeholder="Full Address"
                  className="sm:col-span-2 border px-3 py-2 text-xs sm:text-sm rounded outline-none resize-none focus:border-[#cf722b]"
                />
              </form>
            </section>

            {/* PAYMENT */}
            <section className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
              <h2 className="text-base sm:text-lg font-semibold text-[#1b1f3b] mb-4">
                Payment Method
              </h2>

              <div className="space-y-3 text-xs sm:text-sm">
                {["COD", "UPI", "Credit / Debit Card"].map((method) => (
                  <label
                    key={method}
                    className={`flex items-center gap-3 p-3 rounded border cursor-pointer transition
                      ${
                        paymentMethod === method
                          ? "border-[#cf722b] bg-[#cf722b]/5"
                          : "border-gray-200"
                      }`}
                  >
                    <input
                      type="radio"
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
          <div className="bg-[#f9f9f9] rounded-xl p-4 sm:p-6 h-fit sticky lg:top-24">
            <h2 className="text-base sm:text-lg font-semibold text-[#1b1f3b] mb-4">
              Order Summary
            </h2>

            <div className="space-y-3 text-xs sm:text-sm text-gray-700">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span className="truncate max-w-[60%]">
                    {item.title} × {item.qty}
                  </span>
                  <span>₹{(item.price * item.qty).toFixed(2)}</span>
                </div>
              ))}

              <div className="border-t pt-4 mt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
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

              <div className="border-t pt-4 flex justify-between font-semibold text-[#1b1f3b] text-base sm:text-lg">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="mt-6 w-full py-2.5 sm:py-3 text-sm sm:text-base bg-[#cf722b] text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
