import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import bannerImg from "../assets/img/banner/breadcrumb-bg.png";

function Contact() {
  return (
    <div className="w-full">
      {/* ================= HERO ================= */}
      <section
        className="w-full h-[180px] sm:h-[220px] md:h-[260px] flex items-center"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Contact Us
          </h1>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-[#1b1f3b] mb-8 sm:mb-12">
          Get In Touch
        </h2>

        {/* CONTACT CARD */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col lg:flex-row">
          {/* LEFT PANEL */}
          <div className="lg:w-[35%] bg-[#cf722b] text-white p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Contact Us
              </h3>
              <div className="flex items-start gap-3 text-xs sm:text-sm">
                <HiPhone className="text-lg sm:text-xl mt-1" />
                <p>
                  +91 XXXXX XXXXX <br />
                  +91 XXXXX XXXXX
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-sm sm:text-base">
                Email Address
              </h4>
              <div className="flex items-start gap-3 text-xs sm:text-sm">
                <HiMail className="text-lg sm:text-xl mt-1" />
                <p>
                  info@example.com <br />
                  support@example.com
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-sm sm:text-base">
                Office Location
              </h4>
              <div className="flex items-start gap-3 text-xs sm:text-sm">
                <HiLocationMarker className="text-lg sm:text-xl mt-1" />
                <p>
                  XXX Dhanbad Jharkhand <br />
                  India <br />
                  IN 828104
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm sm:text-base">
                Follow Us
              </h4>
              <div className="flex gap-4 text-lg">
                <FaFacebookF className="hover:scale-110 transition cursor-pointer" />
                <FaTwitter className="hover:scale-110 transition cursor-pointer" />
                <FaInstagram className="hover:scale-110 transition cursor-pointer" />
                <FaYoutube className="hover:scale-110 transition cursor-pointer" />
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:w-[65%] p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold text-[#cf722b] mb-6">
              Contact Me
            </h3>

            <form className="flex flex-col gap-4">
              {/* Name Fields */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="text-xs sm:text-sm">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your First Name"
                    className="w-full border px-3 py-2 mt-1 text-xs sm:text-sm outline-none"
                  />
                </div>

                <div className="flex-1">
                  <label className="text-xs sm:text-sm">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Last Name"
                    className="w-full border px-3 py-2 mt-1 text-xs sm:text-sm outline-none"
                  />
                </div>
              </div>

              {/* Phone + Email */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="text-xs sm:text-sm">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="w-full border px-3 py-2 mt-1 text-xs sm:text-sm outline-none"
                  />
                </div>

                <div className="flex-1">
                  <label className="text-xs sm:text-sm">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border px-3 py-2 mt-1 text-xs sm:text-sm outline-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-xs sm:text-sm">
                  Write Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="4"
                  placeholder="Write Your Message"
                  className="w-full border px-3 py-2 mt-1 text-xs sm:text-sm outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-4 px-6 sm:px-8 py-2.5 sm:py-3 bg-[#cf722b] text-white text-xs sm:text-sm font-semibold hover:opacity-90 transition w-full sm:w-fit"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>

        {/* ================= MAP ================= */}
        <div className="mt-10 sm:mt-14 w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Dhanbad Location"
            src="https://www.google.com/maps?q=Dhanbad%20828104&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
        {["Free Shipping", "Secure Payment", "Easy Return", "24/7 Support"].map(
          (service) => (
            <div
              key={service}
              className="border rounded-lg py-5 sm:py-6 hover:shadow-md transition"
            >
              <h4 className="font-semibold text-[#1b1f3b] text-sm sm:text-base">
                {service}
              </h4>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                From trusted sellers
              </p>
            </div>
          ),
        )}
      </section>
    </div>
  );
}

export default Contact;
