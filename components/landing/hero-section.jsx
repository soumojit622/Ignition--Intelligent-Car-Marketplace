import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Decorative grid pattern - more subtle */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>

      {/* Radial gradient - more subtle */}
      <div className="absolute inset-0 radial-gradient opacity-15"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
              <span className="mr-2 flex h-2 w-2 rounded-full bg-blue-400"></span>
              Next Generation AI Technology
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Drive the Future <span className="text-gradient">with AI</span>
            </h1>
            <p className="mb-8 text-lg text-gray-300 sm:text-xl">
              Ignition uses advanced AI to match you with your perfect vehicle.
              No more endless browsing—just tell us what you need, and we'll
              find your ideal ride.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#features"
                className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/20 transition hover:shadow-blue-500/30"
              >
                Explore Marketplace
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-lg border border-blue-500 bg-transparent px-6 py-3 font-medium text-blue-400 transition hover:bg-blue-500/10"
              >
                How It Works
              </Link>
            </div>

            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {["/user1.jpg", "/user2.jpg", "/user3.jpg", "/user4.jpg","/user5.jpg"].map(
                  (src, i) => (
                    <div
                      key={i}
                      className="inline-block h-8 w-8 overflow-hidden rounded-full border-2 border-[#0e0e10] ring-2 ring-blue-500/20"
                    >
                      <Image
                        src={src}
                        alt={`User ${i + 1}`}
                        width={32}
                        height={32}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )
                )}
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-white">
                  500+ Happy Drivers
                </p>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-xs text-gray-400">4.9/5</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
            {/* Main mockup */}
            <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-2 backdrop-blur-sm">
              <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-gray-900/30 to-gray-800/30">
                {/* Mockup header */}
                <div className="flex items-center border-b border-white/10 bg-gradient-to-r from-gray-900/90 to-gray-800/90 px-4 py-2">
                  <div className="flex space-x-1">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto text-xs font-medium text-gray-400">
                    Ignition AI Interface
                  </div>
                </div>

                {/* Mockup content */}
                <div className="flex flex-1 flex-col p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="h-4 w-24 rounded bg-gradient-to-r from-blue-500/30 to-blue-400/30"></div>
                    <div className="h-4 w-12 rounded bg-gradient-to-r from-blue-500/30 to-blue-400/30"></div>
                  </div>

                  <div className="mb-4 grid grid-cols-3 gap-2">
                    <div className="col-span-2 h-24 rounded bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-2">
                      <div className="h-4 w-3/4 rounded bg-white/10"></div>
                      <div className="mt-2 h-12 w-full rounded bg-white/5"></div>
                    </div>
                    <div className="h-24 rounded bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-2">
                      <div className="h-4 w-full rounded bg-white/10"></div>
                      <div className="mt-2 flex h-12 w-full items-center justify-center rounded bg-white/5">
                        <div className="h-8 w-8 rounded-full bg-blue-500/30"></div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 h-4 w-3/4 rounded bg-gradient-to-r from-blue-500/30 to-blue-400/30"></div>

                  <div className="mb-4 grid grid-cols-2 gap-2">
                    <div className="h-16 rounded bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-2">
                      <div className="h-3 w-1/2 rounded bg-white/10"></div>
                      <div className="mt-2 h-6 w-full rounded bg-white/5"></div>
                    </div>
                    <div className="h-16 rounded bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-2">
                      <div className="h-3 w-1/2 rounded bg-white/10"></div>
                      <div className="mt-2 h-6 w-full rounded bg-white/5"></div>
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="h-8 w-24 rounded-full bg-gradient-to-r from-blue-600 to-blue-400"></div>
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-900/20 to-blue-800/20"></div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"></div>
              <div className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -right-6 bottom-1/3 z-20 h-16 w-16 overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-gray-900/70 to-gray-800/70 p-3 backdrop-blur-sm">
              <div className="flex h-full flex-col items-center justify-center rounded-md bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-2">
                <div className="h-2 w-8 rounded-full bg-blue-500/50"></div>
                <div className="my-1 h-2 w-6 rounded-full bg-blue-500/30"></div>
                <div className="h-2 w-4 rounded-full bg-blue-500/50"></div>
              </div>
            </div>

            <div className="absolute -left-10 top-1/3 z-20 h-20 w-20 overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-gray-900/70 to-gray-800/70 p-3 backdrop-blur-sm">
              <div className="flex h-full flex-col items-center justify-center rounded-md bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-2">
                <div className="mb-1 h-6 w-6 rounded-full bg-blue-500/20"></div>
                <div className="h-2 w-10 rounded-full bg-blue-500/50"></div>
                <div className="mt-1 h-2 w-8 rounded-full bg-blue-500/30"></div>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-500/5 blur-[80px]"></div>
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-500/5 blur-[80px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
