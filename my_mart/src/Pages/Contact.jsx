import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

import bannerImg from "../assets/img/banner/breadcrumb-bg.png";

function Contact() {
  return (
    <div className="w-full">
      {/* ================= BREADCRUMB / HERO ================= */}
      <section
        className="w-full h-[260px] flex items-center"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-6xl font-bold mb-2">Contact Us</h1>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-[#1b1f3b] mb-12">
          Get In Touch
        </h2>

        {/* CONTACT CARD */}
        <div className="relative bg-white rounded-lg overflow-hidden flex items-center flex-col lg:flex-row">
          {/* LEFT INFO PANEL */}
          <div className="lg:w-[35%] h-[550px] absolute rounded-md -mr-10 bg-[#cf722b] text-white p-8 space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <div className="flex items-start gap-3 text-sm">
                <HiPhone className="text-xl mt-1" />
                <p>
                  +91 XXXXX XXXXX
                  <br />
                  +91 XXXXX XXXXX
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Email Address</h4>
              <div className="flex items-start gap-3 text-sm">
                <HiMail className="text-xl mt-1" />
                <p>
                  info@example.com
                  <br />
                  support@example.com
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Office Location</h4>
              <div className="flex items-start gap-3 text-sm">
                <HiLocationMarker className="text-xl mt-1" />
                <p>
                  XXX Dhanbad Jharkhand <br />
                  India <br />
                  IN 828104
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-4 text-lg">
                <FaFacebookF className="hover:scale-110 transition cursor-pointer" />
                <FaTwitter className="hover:scale-110 transition cursor-pointer" />
                <FaInstagram className="hover:scale-110 transition cursor-pointer" />
                <FaYoutube className="hover:scale-110 transition cursor-pointer" />
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:w-[65%] ml-[350px] border p-8 pl-16 h-[630px] rounded-2xl flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-[#cf722b] mb-6">
              Contact Me
            </h3>

            <form className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="text-sm">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your First Name"
                    className="w-full border px-3 py-2 mt-1 text-sm outline-none"
                  />
                </div>

                <div className="flex-1">
                  <label className="text-sm">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Last Name"
                    className="w-full border px-3 py-2 mt-1 text-sm outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="text-sm">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="w-full border px-3 py-2 mt-1 text-sm outline-none"
                  />
                </div>

                <div className="flex-1">
                  <label className="text-sm">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border px-3 py-2 mt-1 text-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm">
                  Write Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="4"
                  placeholder="Write Your Message"
                  className="w-full border px-3 py-2 mt-1 text-sm outline-none resize-none"
                />
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#cf722b] text-white text-sm font-semibold hover:opacity-90"
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* ================= MAP SECTION ================= */}
        <div className="mt-14 w-full h-[400px] rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Dhanbad Location"
            src="https://www.google.com/maps?q=Dhanbad%20828104&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* ================= SERVICES (SAME AS ABOUT) ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {["Free Shipping", "Secure Payment", "Easy Return", "24/7 Support"].map(
          (service) => (
            <div
              key={service}
              className="border rounded-lg py-6 hover:shadow-md transition"
            >
              <h4 className="font-semibold text-[#1b1f3b]">{service}</h4>
              <p className="text-sm text-gray-500 mt-2">From trusted sellers</p>
            </div>
          ),
        )}
      </section>
    </div>
  );
}

export default Contact;
