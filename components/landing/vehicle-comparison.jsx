export default function VehicleComparison() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
            <span className="mr-2 flex h-2 w-2 rounded-full bg-blue-400"></span>
            Advanced Comparison
          </div>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Compare <span className="text-gradient">Side by Side (Coming Soon)</span>
          </h2>
          <p className="mb-12 text-gray-400">
            Our intelligent comparison tool helps you evaluate vehicles across
            multiple dimensions to find your perfect match
          </p>
        </div>

        <div className="relative">
          {/* Background glow effects */}
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px]"></div>
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px]"></div>

          {/* Comparison interface */}
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-6 backdrop-blur-sm">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Left vehicle */}
              <div className="relative rounded-xl border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-4">
                <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-blue-500/5 blur-lg"></div>

                {/* Vehicle header */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2v5a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1V5a1 1 0 00-1-1H3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        Tesla Model Y
                      </h3>
                      <p className="text-sm text-gray-400">Electric SUV</p>
                    </div>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {/* Vehicle image */}
                <div className="mb-4 h-40 w-full rounded-lg bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-4">
                  <div className="flex h-full items-center justify-center">
                    <div className="h-6 w-24 rounded-full bg-blue-500/30"></div>
                  </div>
                </div>

                {/* Vehicle specs */}
                <div className="space-y-3">
                  {[
                    { label: "Range", value: "330 miles", rating: 90 },
                    { label: "Acceleration", value: "3.5s (0-60)", rating: 95 },
                    { label: "Price", value: "$42,000", rating: 75 },
                    { label: "Cargo Space", value: "76 cu ft", rating: 85 },
                  ].map((spec, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="w-1/3">
                        <div className="text-sm text-gray-400">
                          {spec.label}
                        </div>
                      </div>
                      <div className="w-1/3 text-center">
                        <div className="text-sm font-medium text-white">
                          {spec.value}
                        </div>
                      </div>
                      <div className="w-1/3">
                        <div className="h-2 w-full rounded-full bg-gray-700">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400"
                            style={{ width: `${spec.rating}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* AI match score */}
                <div className="mt-6 flex items-center justify-between rounded-lg bg-gradient-to-r from-blue-900/30 to-blue-800/30 p-3">
                  <div className="text-sm font-medium text-white">
                    AI Match Score
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-xs font-bold text-white">
                    92%
                  </div>
                </div>
              </div>

              {/* Right vehicle */}
              <div className="relative rounded-xl border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-4">
                <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-blue-500/5 blur-lg"></div>

                {/* Vehicle header */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2v5a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1V5a1 1 0 00-1-1H3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        Ford Mustang Mach-E
                      </h3>
                      <p className="text-sm text-gray-400">Electric SUV</p>
                    </div>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {/* Vehicle image */}
                <div className="mb-4 h-40 w-full rounded-lg bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-4">
                  <div className="flex h-full items-center justify-center">
                    <div className="h-6 w-24 rounded-full bg-blue-500/30"></div>
                  </div>
                </div>

                {/* Vehicle specs */}
                <div className="space-y-3">
                  {[
                    { label: "Range", value: "305 miles", rating: 85 },
                    { label: "Acceleration", value: "3.7s (0-60)", rating: 90 },
                    { label: "Price", value: "$43,895", rating: 70 },
                    { label: "Cargo Space", value: "64 cu ft", rating: 75 },
                  ].map((spec, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="w-1/3">
                        <div className="text-sm text-gray-400">
                          {spec.label}
                        </div>
                      </div>
                      <div className="w-1/3 text-center">
                        <div className="text-sm font-medium text-white">
                          {spec.value}
                        </div>
                      </div>
                      <div className="w-1/3">
                        <div className="h-2 w-full rounded-full bg-gray-700">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400"
                            style={{ width: `${spec.rating}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* AI match score */}
                <div className="mt-6 flex items-center justify-between rounded-lg bg-gradient-to-r from-blue-900/30 to-blue-800/30 p-3">
                  <div className="text-sm font-medium text-white">
                    AI Match Score
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-xs font-bold text-white">
                    87%
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison tools */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-gray-400">Better value</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-400">Eco-friendly</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 rounded-full bg-purple-500"></div>
                  <span className="text-sm text-gray-400">Performance</span>
                </div>
              </div>

              <button className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition hover:shadow-blue-500/30">
                Compare More Vehicles
              </button>
            </div>

            {/* Floating elements */}
            <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full border border-blue-500/10 bg-blue-500/5"></div>
            <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full border border-blue-500/10 bg-blue-500/5"></div>
          </div>

          {/* Floating comparison cards */}
          <div className="absolute -left-16 bottom-1/3 z-20 hidden h-24 w-40 rounded-lg border border-white/10 bg-gradient-to-br from-blue-900/30 to-blue-800/30 p-3 backdrop-blur-md lg:block">
            <div className="mb-2 text-xs font-semibold text-white">
              Feature Highlight
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-green-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs text-white">Zero Emissions</div>
                <div className="text-[10px] text-blue-200/70">
                  Better for environment
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-16 top-1/3 z-20 hidden h-24 w-40 rounded-lg border border-white/10 bg-gradient-to-br from-blue-900/30 to-blue-800/30 p-3 backdrop-blur-md lg:block">
            <div className="mb-2 text-xs font-semibold text-white">
              Cost Analysis
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs text-white">5-Year Savings</div>
                <div className="text-[10px] text-green-400">$4,500+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
