import { useNavigate, Link, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  const status = error?.status || 404;
  const statusText = error?.statusText || "Page Not Found";
  const message =
    error?.data?.message ||
    error?.message ||
    "The page you are trying to access does not exist or is unavailable.";

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        {/* STATUS CODE */}
        <div className="text-[96px] font-extrabold leading-none text-[#cf722b]">
          {status}
        </div>

        {/* STATUS TEXT */}
        <h1 className="text-2xl font-semibold text-[#1b1f3b] mt-2">
          {statusText}
        </h1>

        {/* MESSAGE */}
        <p className="text-gray-600 mt-4 mb-10">{message}</p>

        {/* ACTIONS */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 text-sm font-medium
                       border border-[#1b1f3b]
                       text-[#1b1f3b]
                       hover:bg-[#1b1f3b] hover:text-white
                       transition"
          >
            Go Back
          </button>

          <Link
            to="/"
            className="px-6 py-3 text-sm font-medium
                       bg-gradient-to-r from-[#1b1f3b] via-[#23284f] to-[#1b1f3b]
                       text-white hover:opacity-90 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
