// src/pages/About.jsx
import bannerImg from "../assets/img/banner/breadcrumb-bg.png";

import team1 from "../assets/img/other/team1.png";
import team2 from "../assets/img/other/team2.png";
import team3 from "../assets/img/other/team1.png";
import team4 from "../assets/img/other/team3.png";

function About() {
  return (
    <div className="w-full">
      {/* ================= HERO ================= */}
      <section
        className="w-full h-[180px] sm:h-[220px] md:h-[280px] flex items-center"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            About Us
          </h1>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        <div>
          <h3 className="text-[#f9b17a] text-sm sm:text-base font-semibold mb-2">
            Why Choose Us
          </h3>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1b1f3b] mb-4">
            We do not buy from the open market & traders.
          </h2>

          <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We ensure premium quality products, trusted sellers, and the best
            customer experience across all categories.
          </p>

          <div className="mt-6">
            <p className="font-semibold text-[#1b1f3b] text-sm sm:text-base">
              Spider Man
            </p>
            <span className="text-xs sm:text-sm text-gray-500">
              Spa Manager
            </span>
          </div>
        </div>

        {/* Image block */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <img src={team1} className="w-full h-full object-cover rounded-lg" />
          <img src={team2} className="w-full h-full object-cover rounded-lg" />
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-[#1b1f3b] text-white py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          {[
            { label: "Years of Foundation", value: "10+" },
            { label: "Skilled Team Members", value: "80+" },
            { label: "Happy Customers", value: "5K+" },
            { label: "Monthly Orders", value: "12K+" },
          ].map((item) => (
            <div key={item.label}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#f9b17a]">
                {item.value}
              </h3>
              <p className="text-xs sm:text-sm mt-1 text-white/80">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OUR TEAM ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-[#1b1f3b] mb-8 sm:mb-12">
          Our Team
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          {[
            { img: team1, name: "Iron Man", role: "CEO - Founder" },
            { img: team2, name: "Captain America", role: "Spa Manager" },
            { img: team3, name: "Steve Harrington", role: "Products Manager" },
            { img: team4, name: "Thor Thunder", role: "Marketing Head" },
          ].map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={member.img}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h4 className="font-semibold text-[#1b1f3b] text-sm sm:text-base">
                {member.name}
              </h4>
              <p className="text-xs sm:text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="bg-gray-50 py-10 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1b1f3b] mb-6">
            Our Clients Say
          </h2>

          <div className="bg-white shadow-md rounded-lg p-6 sm:p-8">
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit.”
            </p>
            <h4 className="font-semibold text-[#1b1f3b] text-sm sm:text-base">
              Nike Mardson
            </h4>
            <span className="text-xs sm:text-sm text-gray-500">
              Fashion Designer
            </span>
          </div>
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

export default About;
