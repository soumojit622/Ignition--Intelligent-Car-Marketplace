import BackgroundSpots from "@/components/landing/background-spots";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#0e0e10] px-4 text-center text-white">
      <BackgroundSpots />

      {/* Enhanced 404 content */}
      <div className="relative z-10 max-w-lg">
        {/* Decorative elements */}
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-500/5 blur-[80px]"></div>
        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-500/5 blur-[80px]"></div>

        {/* 404 number with enhanced styling */}
        <div className="relative mb-8">
          <div className="text-[150px] font-bold leading-none tracking-tighter text-gray-800/20">
            404
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl font-bold text-gradient">
            404
          </div>
          <div className="absolute -bottom-4 left-1/2 h-1 w-40 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-8 backdrop-blur-sm">
          <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/5 blur-[50px]"></div>
          <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-blue-500/5 blur-[50px]"></div>

          <h2 className="mb-6 text-2xl font-bold">Page Not Found</h2>
          <p className="mb-8 text-gray-400">
            Oops! This road doesn't exist. Looks like you've ventured off the AI
            highway.
          </p>

          <div className="mb-8 flex justify-center">
            <div className="relative h-32 w-32">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-400/10 blur-md"></div>
              <div className="relative h-full w-full rounded-full bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-6 backdrop-blur-sm">
                <div className="relative flex h-full items-center justify-center rounded-full border-2 border-dashed border-blue-500/50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </div>
              </div>

              {/* Orbiting elements */}
              <div
                className="absolute left-0 top-0 h-full w-full animate-spin"
                style={{ animationDuration: "10s" }}
              >
                <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-blue-500/30"></div>
              </div>
              <div
                className="absolute left-0 top-0 h-full w-full animate-spin"
                style={{
                  animationDuration: "15s",
                  animationDirection: "reverse",
                }}
              >
                <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-blue-400/30"></div>
              </div>
            </div>
          </div>

          <p className="mb-6 text-gray-400">
            Our AI navigation system can't find this destination. Let's get you
            back on track.
          </p>

          <Link
            href="/"
            className="inline-block rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/20 transition hover:shadow-blue-500/30"
          >
            Back to Home
          </Link>
        </div>

        {/* Decorative grid lines */}
        <div className="absolute -bottom-10 -left-10 h-40 w-40 grid-pattern opacity-5"></div>
        <div className="absolute -right-10 -top-10 h-40 w-40 grid-pattern opacity-5"></div>
      </div>

      <div className="mt-8 text-sm text-gray-500">
        <p>Ignition AI - Drive the Future</p>
      </div>
    </div>
  );
}
