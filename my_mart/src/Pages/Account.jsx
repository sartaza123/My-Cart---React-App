import { HiOutlineLogout } from "react-icons/hi";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiOutlineLocationMarker,
  HiOutlineHeart,
  HiOutlineCreditCard,
} from "react-icons/hi";

function Account() {
  const user = {
    name: "Md Sartaz",
    email: "sartaz@example.com",
  };

  const accountOptions = [
    {
      icon: <HiOutlineUser size={22} />,
      title: "My Profile",
      desc: "View and edit your profile information",
    },
    {
      icon: <HiOutlineShoppingBag size={22} />,
      title: "My Orders",
      desc: "Track, return or buy things again",
    },
    {
      icon: <HiOutlineLocationMarker size={22} />,
      title: "Saved Addresses",
      desc: "Manage delivery addresses",
    },
    {
      icon: <HiOutlineHeart size={22} />,
      title: "Wishlist",
      desc: "Your favourite saved items",
    },
    {
      icon: <HiOutlineCreditCard size={22} />,
      title: "Payment Methods",
      desc: "Saved cards and UPI details",
    },
  ];

  function handleLogout() {
    alert("Logged out successfully!");
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14">
      {/* ================= HEADER ================= */}
      <div className="mb-8 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1b1f3b] mb-1">
          My Account
        </h1>
        <p className="text-gray-600 text-xs sm:text-sm">
          Manage your account and preferences
        </p>
      </div>

      {/* ================= USER INFO ================= */}
      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
        <div>
          <p className="text-xs sm:text-sm text-gray-500">Logged in as</p>
          <h3 className="text-base sm:text-lg font-semibold text-[#1b1f3b]">
            {user.name}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600">{user.email}</p>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#cf722b] text-white text-xs sm:text-sm font-semibold hover:opacity-90 transition w-full sm:w-fit"
        >
          <HiOutlineLogout size={18} />
          Logout
        </button>
      </div>

      {/* ================= OPTIONS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {accountOptions.map((opt) => (
          <div
            key={opt.title}
            className="group bg-white border rounded-lg p-4 sm:p-6 cursor-pointer hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3 text-[#cf722b]">
              {opt.icon}
              <h4 className="font-semibold text-[#1b1f3b] text-sm sm:text-base">
                {opt.title}
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">{opt.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Account;
