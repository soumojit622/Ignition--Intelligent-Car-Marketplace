export default function DashboardPreview() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
            <span className="mr-2 flex h-2 w-2 rounded-full bg-blue-400"></span>
            User Experience
          </div>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Powerful <span className="text-gradient">Dashboard</span> Interface
          </h2>
          <p className="mb-12 text-gray-400">
            Manage your vehicle search, track favorites, and monitor market
            trends with our intuitive dashboard
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl">
          {/* Background glow effects */}
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px]"></div>
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px]"></div>

          {/* Dashboard mockup */}
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-2 backdrop-blur-sm">
            <div className="relative rounded-lg border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/50">
              {/* Dashboard header */}
              <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-gray-900/90 to-gray-800/90 px-6 py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-400 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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
                  <h3 className="text-xl font-bold text-white">
                    Ignition Dashboard
                  </h3>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
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
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="grid grid-cols-12 gap-6 p-6">
                {/* Sidebar */}
                <div className="col-span-12 rounded-lg border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-4 sm:col-span-3">
                  <div className="mb-4 flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-blue-500/20"></div>
                    <div className="h-2.5 w-full rounded-full bg-white/20"></div>
                  </div>
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className={`flex items-center space-x-2 rounded-lg p-2 ${
                          i === 2 ? "bg-blue-500/20" : ""
                        }`}
                      >
                        <div
                          className={`h-4 w-4 rounded ${
                            i === 2 ? "bg-blue-500" : "bg-white/20"
                          }`}
                        ></div>
                        <div className="h-2.5 w-full rounded-full bg-white/20"></div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-lg border border-white/10 bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-3">
                    <div className="mb-2 h-2.5 w-16 rounded-full bg-white/20"></div>
                    <div className="h-16 w-full rounded bg-blue-500/10"></div>
                  </div>
                </div>

                {/* Main content */}
                <div className="col-span-12 space-y-6 sm:col-span-9">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      {
                        label: "Matches",
                        value: "24",
                        color: "from-blue-600/20 to-blue-400/20",
                      },
                      {
                        label: "Saved",
                        value: "12",
                        color: "from-green-600/20 to-green-400/20",
                      },
                      {
                        label: "Viewed",
                        value: "48",
                        color: "from-purple-600/20 to-purple-400/20",
                      },
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className="rounded-lg border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-4"
                      >
                        <div className="mb-2 h-2 w-16 rounded-full bg-white/20"></div>
                        <div
                          className={`flex h-10 w-20 items-center justify-center rounded-lg bg-gradient-to-r ${stat.color}`}
                        >
                          <div className="text-lg font-bold text-white">
                            {stat.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chart area */}
                  <div className="rounded-lg border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="h-2.5 w-32 rounded-full bg-white/20"></div>
                      <div className="flex space-x-2">
                        <div className="h-6 w-16 rounded-full bg-white/10"></div>
                        <div className="h-6 w-16 rounded-full bg-white/10"></div>
                      </div>
                    </div>
                    <div className="h-40 w-full rounded-lg bg-gradient-to-br from-gray-900/30 to-gray-800/30 p-4">
                      <div className="flex h-full items-end justify-between">
                        {[30, 60, 40, 70, 50, 80, 45].map((h, i) => (
                          <div key={i} className="w-8">
                            <div
                              className="w-full rounded-t bg-gradient-to-t from-blue-500/60 to-blue-400/60"
                              style={{ height: `${h}%` }}
                            ></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Vehicle cards */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        name: "Tesla Model Y",
                        type: "Electric SUV",
                        price: "$42,000",
                      },
                      {
                        name: "BMW i4",
                        type: "Electric Sedan",
                        price: "$56,000",
                      },
                    ].map((car, i) => (
                      <div
                        key={i}
                        className="rounded-lg border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-4"
                      >
                        <div className="mb-3 h-24 w-full rounded-lg bg-gradient-to-br from-blue-900/20 to-blue-800/20"></div>
                        <div className="mb-2 h-2.5 w-3/4 rounded-full bg-white/20"></div>
                        <div className="mb-4 h-2 w-1/2 rounded-full bg-white/20"></div>
                        <div className="flex justify-between">
                          <div className="h-6 w-16 rounded-full bg-blue-500/30 flex items-center justify-center">
                            <div className="h-2 w-10 rounded-full bg-blue-100/50"></div>
                          </div>
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3 text-white"
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
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating UI elements */}
          <div className="absolute -left-16 bottom-1/3 z-20 hidden h-24 w-40 rounded-lg border border-white/10 bg-gradient-to-br from-blue-900/30 to-blue-800/30 p-3 backdrop-blur-md lg:block">
            <div className="mb-2 flex items-center space-x-2">
              <div className="h-6 w-6 rounded-full bg-blue-500/30"></div>
              <div className="h-2 w-20 rounded-full bg-white/20"></div>
            </div>
            <div className="h-2 w-full rounded-full bg-white/10"></div>
            <div className="mt-1 h-2 w-3/4 rounded-full bg-white/10"></div>
            <div className="mt-1 h-2 w-1/2 rounded-full bg-white/10"></div>
          </div>

          <div className="absolute -right-16 top-1/3 z-20 hidden h-24 w-40 rounded-lg border border-white/10 bg-gradient-to-br from-blue-900/30 to-blue-800/30 p-3 backdrop-blur-md lg:block">
            <div className="mb-2 flex items-center space-x-2">
              <div className="h-6 w-6 rounded-full bg-blue-500/30"></div>
              <div className="h-2 w-20 rounded-full bg-white/20"></div>
            </div>
            <div className="h-2 w-full rounded-full bg-white/10"></div>
            <div className="mt-1 h-2 w-3/4 rounded-full bg-white/10"></div>
            <div className="mt-1 h-2 w-1/2 rounded-full bg-white/10"></div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"></div>
          <div className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"></div>
        </div>
      </div>
    </section>
  );
}
