import { HiOutlineTrash } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeItem,
  clearCart,
} from "../hooks/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const SHIPPING_CHARGE = 1;
  const PLATFORM_FEE = 0.1;
  const COUPON_DISCOUNT = 5;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0,
  );

  const total = subtotal + SHIPPING_CHARGE + PLATFORM_FEE - COUPON_DISCOUNT;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      {/* ================= HEADER ================= */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold text-[#1b1f3b]">
          Shopping Cart
        </h1>
        <p className="text-xs sm:text-sm text-gray-500">
          Manage your selected items
        </p>
      </div>

      {/* ================= EMPTY CART ================= */}
      {cartItems.length === 0 && (
        <div className="text-center py-16 sm:py-20">
          <p className="text-gray-500 mb-4 text-sm">Your cart is empty</p>
          <Link
            to="/"
            className="text-[#cf722b] font-medium hover:underline text-sm"
          >
            Continue Shopping →
          </Link>
        </div>
      )}

      {/* ================= CART ITEMS ================= */}
      <div className="space-y-6 sm:space-y-8">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row gap-4 sm:gap-6 border-b pb-6"
          >
            {/* IMAGE */}
            <div className="w-full md:w-[200px] lg:w-[220px] h-[200px] sm:h-[220px] shrink-0">
              <img
                src={item.thumbnail || item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* DETAILS */}
            <div className="flex-1 flex flex-col gap-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[#1b1f3b]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  ${item.price} per item
                </p>
              </div>

              {/* QUANTITY */}
              <div className="flex items-center flex-wrap gap-3">
                <span className="text-xs sm:text-sm font-medium">Quantity</span>

                <div className="flex border rounded overflow-hidden">
                  <button
                    onClick={() => dispatch(decreaseQty(item.id))}
                    className="px-3 py-1 text-sm hover:bg-gray-100"
                    disabled={item.qty === 1}
                  >
                    −
                  </button>

                  <span className="px-4 py-1 text-sm">{item.qty}</span>

                  <button
                    onClick={() => dispatch(increaseQty(item.id))}
                    className="px-3 py-1 text-sm hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* ITEM TOTAL */}
              <p className="text-xs sm:text-sm font-medium text-[#1b1f3b]">
                Item Total: ${(item.price * item.qty).toFixed(2)}
              </p>

              {/* REMOVE BUTTON */}
              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="flex items-center gap-1 text-xs sm:text-sm text-gray-500 hover:text-red-500 w-fit border rounded-md px-4 py-2 transition"
              >
                <HiOutlineTrash />
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ================= CLEAR CART ================= */}
      {cartItems.length > 0 && (
        <button
          onClick={() => dispatch(clearCart())}
          className="mt-6 w-full py-2.5 sm:py-3 text-sm sm:text-base bg-[#cf722b] text-white font-semibold rounded hover:opacity-90 transition"
        >
          Clear Cart
        </button>
      )}

      {/* ================= ORDER SUMMARY ================= */}
      {cartItems.length > 0 && (
        <div className="mt-10 sm:mt-14 bg-[#f3f3f3] rounded-xl p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-[#1b1f3b] mb-4">
            Order Summary
          </h3>

          <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping Charges</span>
              <span>${SHIPPING_CHARGE}</span>
            </div>

            <div className="flex justify-between">
              <span>Platform Fee</span>
              <span>${PLATFORM_FEE}</span>
            </div>

            <div className="flex justify-between text-green-600">
              <span>Coupon Discount</span>
              <span>-${COUPON_DISCOUNT}</span>
            </div>
          </div>

          <div className="border-t mt-4 pt-4 flex justify-between font-semibold text-base sm:text-lg text-[#1b1f3b]">
            <span>Total Payable</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <Link to="/checkout">
            <button className="mt-5 sm:mt-6 w-full py-2.5 sm:py-3 text-sm sm:text-base bg-[#cf722b] text-white font-semibold rounded hover:opacity-90 transition">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
