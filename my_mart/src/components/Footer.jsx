import paymentImg from "../assets/img/other/payment-visa-card.png";
import instaImg1 from "../assets/img/other/instagram1.webp";
import instaImg2 from "../assets/img/other/instagram2.webp";
import instaImg3 from "../assets/img/other/instagram3.webp";
import instaImg4 from "../assets/img/other/instagram4.webp";
import instaImg5 from "../assets/img/other/instagram5.webp";
import instaImg6 from "../assets/img/other/instagram6.webp";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#10111f] via-[#0e1023] to-[#101225] text-white/80">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {/* About Us */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-b border-white/10 pb-2">
            About Us
          </h3>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
            minim veniam.
          </p>
        </div>

        {/* My Account */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-b border-white/10 pb-2">
            My Account
          </h3>
          <ul className="space-y-2 text-sm">
            <li>My Account</li>
            <li>Shopping Cart</li>
            <li>Login</li>
            <li>Register</li>
            <li>Checkout</li>
            <li>Wishlist</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-b border-white/10 pb-2">
            Categories
          </h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Portfolio</li>
            <li>Privacy Policy</li>
            <li>Compare</li>
            <li>Frequently</li>
          </ul>
        </div>

        {/* Instagram (hardcoded like reference) */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-b border-white/10 pb-2">
            Instagram
          </h3>

          <div className="grid grid-cols-3 gap-2">
            <div className="relative group overflow-hidden">
              <img
                src={instaImg1}
                className="w-full h-20 object-cover group-hover:scale-110 transition"
              />
              <div className="absolute inset-0 bg-[#f9b17a]/0 group-hover:bg-[#f9b17a]/40 transition" />
            </div>

            <div className="relative group overflow-hidden">
              <img
                src={instaImg2}
                className="w-full h-20 object-cover group-hover:scale-110 transition"
              />
              <div className="absolute inset-0 bg-[#f9b17a]/0 group-hover:bg-[#f9b17a]/40 transition" />
            </div>

            <div className="relative group overflow-hidden">
              <img
                src={instaImg3}
                className="w-full h-20 object-cover group-hover:scale-110 transition"
              />
              <div className="absolute inset-0 bg-[#f9b17a]/0 group-hover:bg-[#f9b17a]/40 transition" />
            </div>

            <div className="relative group overflow-hidden">
              <img
                src={instaImg4}
                className="w-full h-20 object-cover group-hover:scale-110 transition"
              />
              <div className="absolute inset-0 bg-[#f9b17a]/0 group-hover:bg-[#f9b17a]/40 transition" />
            </div>

            <div className="relative group overflow-hidden">
              <img
                src={instaImg5}
                className="w-full h-20 object-cover group-hover:scale-110 transition"
              />
              <div className="absolute inset-0 bg-[#f9b17a]/0 group-hover:bg-[#f9b17a]/40 transition" />
            </div>

            <div className="relative group overflow-hidden">
              <img
                src={instaImg6}
                className="w-full h-20 object-cover group-hover:scale-110 transition"
              />
              <div className="absolute inset-0 bg-[#f9b17a]/0 group-hover:bg-[#f9b17a]/40 transition" />
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-b border-white/10 pb-2">
            Newsletter
          </h3>

          <p className="text-sm mb-4">
            Fill their seed open meat. Sea you great saw image.
          </p>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-3 py-2 mb-3 bg-transparent border border-white/20 text-sm outline-none placeholder:text-white/40"
          />

          <button className="w-full py-2 bg-[#f9b17a] text-[#1b1f3b] font-semibold text-sm hover:opacity-90">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© 2026 my_mart. All Rights Reserved.</p>

          {/* Payment image */}
          <img
            src={paymentImg}
            alt="Payment methods"
            className="h-8 object-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
