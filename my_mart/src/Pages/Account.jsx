import { HiOutlineLogout } from "react-icons/hi";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiOutlineLocationMarker,
  HiOutlineHeart,
  HiOutlineCreditCard,
} from "react-icons/hi";

function Account() {
  // dummy user (later you can replace with real auth data)
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
    // later: clear auth token, user state, etc.
    alert("Logged out successfully!");
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      {/* ================= HEADER ================= */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-[#1b1f3b] mb-1">My Account</h1>
        <p className="text-gray-600 text-sm">
          Manage your account and preferences
        </p>
      </div>

      {/* ================= USER INFO ================= */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <p className="text-sm text-gray-500">Logged in as</p>
          <h3 className="text-lg font-semibold text-[#1b1f3b]">{user.name}</h3>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-6 py-3 bg-[#cf722b] text-white text-sm font-semibold hover:opacity-90 w-fit"
        >
          <HiOutlineLogout size={20} />
          Logout
        </button>
      </div>

      {/* ================= OPTIONS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {accountOptions.map((opt) => (
          <div
            key={opt.title}
            className="group bg-white border rounded-lg p-6 cursor-pointer hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 mb-3 text-[#cf722b]">
              {opt.icon}
              <h4 className="font-semibold text-[#1b1f3b]">{opt.title}</h4>
            </div>
            <p className="text-sm text-gray-600">{opt.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Account;
