export default function VirtualTestDrive() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
            <span className="mr-2 flex h-2 w-2 rounded-full bg-blue-400"></span>
            Immersive Experience
          </div>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Virtual <span className="text-gradient">Test Drive</span> Experience
            (Coming Soon)
          </h2>
          <p className="mb-12 text-gray-400">
            Experience your potential vehicle from the comfort of your home with
            our cutting-edge virtual test drive technology
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left side: Virtual drive interface */}
          <div className="relative">
            {/* Background glow effects */}
            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px]"></div>
            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px]"></div>

            {/* Virtual drive interface */}
            <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-2 backdrop-blur-sm">
              {/* Main view */}
              <div className="relative h-full w-full overflow-hidden rounded-lg border border-white/10">
                {/* Road view */}
                <div className="relative h-full w-full bg-gradient-to-b from-gray-900 to-gray-800">
                  {/* Sky */}
                  <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-blue-900/30 to-purple-900/20"></div>

                  {/* Road */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-900 to-gray-800">
                    {/* Road markings */}
                    <div className="absolute bottom-1/4 left-1/2 h-1 w-10 -translate-x-1/2 bg-white"></div>
                    <div className="absolute bottom-1/4 left-1/2 h-1 w-10 -translate-x-1/2 translate-x-20 bg-white"></div>
                    <div className="absolute bottom-1/4 left-1/2 h-1 w-10 -translate-x-1/2 -translate-x-20 bg-white"></div>
                    <div className="absolute bottom-1/4 left-1/2 h-1 w-10 -translate-x-1/2 translate-x-40 bg-white"></div>
                    <div className="absolute bottom-1/4 left-1/2 h-1 w-10 -translate-x-1/2 -translate-x-40 bg-white"></div>
                  </div>

                  {/* Car dashboard */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-gray-900 to-transparent">
                    <div className="absolute bottom-4 left-1/2 h-16 w-40 -translate-x-1/2 rounded-t-full bg-gradient-to-t from-gray-800 to-gray-700"></div>
                    <div className="absolute bottom-8 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full border-2 border-gray-600 bg-gray-700"></div>
                  </div>

                  {/* Speedometer */}
                  <div className="absolute bottom-6 right-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gray-800 to-gray-700 p-1">
                    <div className="h-full w-full rounded-full border border-gray-600 bg-gradient-to-br from-gray-900 to-gray-800 p-1">
                      <div className="flex h-full w-full flex-col items-center justify-center rounded-full">
                        <div className="text-xs font-bold text-white">65</div>
                        <div className="text-[8px] text-gray-400">MPH</div>
                      </div>
                    </div>
                  </div>

                  {/* Battery indicator */}
                  <div className="absolute bottom-6 left-6 h-16 w-8 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 p-1">
                    <div className="h-full w-full rounded-full border border-gray-600 bg-gradient-to-br from-gray-900 to-gray-800 p-1">
                      <div className="relative h-full w-full rounded-full">
                        <div className="absolute bottom-1 left-1 right-1 h-3/4 rounded-full bg-gradient-to-t from-green-500 to-green-400"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overlay UI elements */}
                <div className="absolute left-4 top-4 rounded-lg bg-black/40 px-3 py-1.5 backdrop-blur-sm">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-xs font-medium text-white">
                      Tesla Model Y
                    </span>
                  </div>
                </div>

                <div className="absolute right-4 top-4 rounded-lg bg-black/40 px-3 py-1.5 backdrop-blur-sm">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-blue-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-xs font-medium text-white">
                      Highway 101
                    </span>
                  </div>
                </div>

                {/* Control buttons */}
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-4">
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                    </svg>
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Floating UI elements */}
            <div className="absolute -left-16 bottom-1/3 z-20 hidden h-24 w-40 rounded-lg border border-white/10 bg-gradient-to-br from-blue-900/30 to-blue-800/30 p-3 backdrop-blur-md lg:block">
              <div className="mb-2 text-xs font-semibold text-white">
                Vehicle Performance
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-blue-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-white">Acceleration</div>
                  <div className="text-[10px] text-blue-200/70">
                    0-60 in 3.5s
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-16 top-1/3 z-20 hidden h-24 w-40 rounded-lg border border-white/10 bg-gradient-to-br from-blue-900/30 to-blue-800/30 p-3 backdrop-blur-md lg:block">
              <div className="mb-2 text-xs font-semibold text-white">
                Drive Modes
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-blue-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-white">Sport Mode</div>
                  <div className="text-[10px] text-blue-200/70">
                    Enhanced performance
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side: Text content */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 backdrop-blur-sm">
                <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-blue-500/5 blur-lg"></div>

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600/20 to-blue-400/20 text-blue-500 backdrop-blur-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  Immersive 3D Experience
                </h3>
                <p className="text-gray-400">
                  Experience the feel of driving your potential vehicle with our
                  immersive 3D virtual test drive. Navigate different
                  environments and road conditions to get a real sense of the
                  vehicle's performance.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 backdrop-blur-sm">
                <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-blue-500/5 blur-lg"></div>

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600/20 to-blue-400/20 text-blue-500 backdrop-blur-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  Realistic Vehicle Dynamics
                </h3>
                <p className="text-gray-400">
                  Our AI simulates the actual handling, acceleration, and
                  braking characteristics of each vehicle based on real-world
                  data, giving you an authentic driving experience from your
                  home.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 backdrop-blur-sm">
                <div className="absolute -right-4 -bottom-4 h-16 w-16 rounded-full bg-blue-500/5 blur-lg"></div>

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600/20 to-blue-400/20 text-blue-500 backdrop-blur-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  Multiple Environments
                </h3>
                <p className="text-gray-400">
                  Test drive vehicles in various environments including city
                  streets, highways, mountain roads, and challenging weather
                  conditions to fully understand how the vehicle performs.
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition hover:shadow-blue-500/30">
                Start Virtual Test Drive
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
