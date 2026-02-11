import { useNavigate, Link, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  const status = error?.status || 404;

  // Only 400, 404, 500 handled
  const statusConfig = {
    400: {
      title: "Bad Request",
      message:
        "Your request could not be processed. Please check and try again.",
      color: "text-yellow-600",
    },
    404: {
      title: "Page Not Found",
      message:
        "The page you are looking for might have been removed or is temporarily unavailable.",
      color: "text-[#cf722b]",
    },
    500: {
      title: "Server Error",
      message: "Something went wrong on our end. Please try again later.",
      color: "text-red-600",
    },
  };

  const currentError = statusConfig[status] || statusConfig[404];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#f9f9f9] to-[#f2f2f2]">
      <div className="max-w-lg w-full bg-white shadow-xl rounded-xl p-8 sm:p-10 text-center relative overflow-hidden">
        {/* Soft decorative background */}
        <div className="absolute -top-12 -right-12 w-44 h-44 bg-[#f9b17a]/20 rounded-full blur-3xl"></div>

        {/* STATUS CODE */}
        <div
          className={`text-[70px] sm:text-[90px] md:text-[110px] font-extrabold leading-none ${currentError.color}`}
        >
          {status}
        </div>

        {/* TITLE */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#1b1f3b] mt-3">
          {currentError.title}
        </h1>

        {/* MESSAGE */}
        <p className="text-sm sm:text-base text-gray-600 mt-4 mb-8">
          {currentError.message}
        </p>

        {/* ACTIONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <button
            onClick={() => navigate(-1)}
            className="
            px-6 py-2.5 sm:py-3 text-sm font-medium
            border border-[#1b1f3b]
            text-[#1b1f3b]
            hover:bg-[#1b1f3b] hover:text-white
            transition-all duration-300"
          >
            Go Back
          </button>

          <Link
            to="/"
            className="
            px-6 py-2.5 sm:py-3 text-sm font-medium
            bg-gradient-to-r from-[#1b1f3b] via-[#23284f] to-[#1b1f3b]
            text-white hover:opacity-90 transition-all duration-300"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
