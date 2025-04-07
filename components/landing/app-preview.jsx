export default function AppPreview() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text content */}
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
              <span className="mr-2 flex h-2 w-2 rounded-full bg-blue-400"></span>
              Mobile Experience
            </div>
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Take Ignition <span className="text-gradient">On The Go</span>
            </h2>
            <p className="mb-6 text-lg text-gray-300">
              Our mobile app puts the power of AI car matching in your pocket.
              Browse, compare, and connect with sellers from anywhere.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold">
                    Seamless Mobile Experience
                  </h3>
                  <p className="text-gray-400">
                    Enjoy the same powerful features on your smartphone with our
                    intuitive mobile interface.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold">
                    Real-time Notifications
                  </h3>
                  <p className="text-gray-400">
                    Get instant alerts when new matches appear or when prices
                    change on your favorite vehicles.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold">
                    Location-based Search
                  </h3>
                  <p className="text-gray-400">
                    Find vehicles near you and get directions to dealerships or
                    private sellers with integrated maps.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center space-x-4">
              <div className="flex h-12 items-center rounded-lg border border-white/10 bg-white/5 px-4 backdrop-blur-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.05 20.28c-.98.95-2.1 1.46-3.24 1.46-1.43 0-2.5-.73-3.3-1.36-.8.64-1.87 1.36-3.3 1.36-1.15 0-2.27-.5-3.25-1.46-1.34-1.31-2.14-3.33-2.14-5.42 0-2.7 2.2-4.9 4.9-4.9 1.76 0 3.32.93 4.2 2.33.88-1.4 2.44-2.33 4.2-2.33 2.7 0 4.9 2.2 4.9 4.9 0 2.1-.8 4.1-2.15 5.42zM12 4.1c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm9 0c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zM3 4.1c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3z" />
                </svg>
                <span className="text-sm font-medium">App Store</span>
              </div>

              <div className="flex h-12 items-center rounded-lg border border-white/10 bg-white/5 px-4 backdrop-blur-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.609 1.814L13.792 12 3.609 22.186c-.181.181-.29.423-.29.679V1.135c0 .256.109.498.29.679zm10.831 10.501l2.388-2.388 7.865 4.496c.332.199.332.679 0 .878l-7.865 4.496-2.388-2.388 4.496-2.547-4.496-2.547zm-1.944 1.944L3.609 23.145c-.181.181-.29.423-.29.679h22.262c0-.256-.109-.498-.29-.679L15.404 14.259l-2.908 2.908zm0-7.518l2.908 2.908 8.877-8.877c.181-.181.29-.423.29-.679H3.32c0 .256.109.498.29.679l8.886 8.877z" />
                </svg>
                <span className="text-sm font-medium">Google Play</span>
              </div>
            </div>
          </div>

          {/* Enhanced Mobile app mockup */}
          <div className="relative mx-auto flex justify-center">
            {/* Background glow effects */}
            <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-blue-500/10 blur-[80px]"></div>
            <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-blue-500/10 blur-[80px]"></div>

            {/* Phone frame with enhanced design */}
            <div className="relative z-10 h-[600px] w-[300px] overflow-hidden rounded-[40px] border-[12px] border-gray-800 bg-gray-800 shadow-2xl">
              {/* Inner phone bezel */}
              <div className="absolute inset-0 rounded-[30px] border-[1px] border-gray-700"></div>

              {/* Power button */}
              <div className="absolute -right-[12px] top-28 h-16 w-[3px] rounded-r-lg bg-gray-700"></div>

              {/* Volume buttons */}
              <div className="absolute -left-[12px] top-32 h-10 w-[3px] rounded-l-lg bg-gray-700"></div>
              <div className="absolute -left-[12px] top-48 h-10 w-[3px] rounded-l-lg bg-gray-700"></div>

              {/* Status bar */}
              <div className="absolute left-0 right-0 top-0 z-10 flex h-6 items-center justify-between bg-black px-6">
                <div className="text-xs font-medium text-white">9:41</div>
                <div className="flex items-center space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2v5a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1V5a1 1 0 00-1-1H3z" />
                  </svg>
                </div>
              </div>

              {/* Notch */}
              <div className="absolute left-1/2 top-0 z-20 h-6 w-40 -translate-x-1/2 rounded-b-2xl bg-black">
                <div className="absolute left-1/2 top-1 h-1 w-16 -translate-x-1/2 rounded-full bg-gray-800"></div>
              </div>

              {/* App content with enhanced UI */}
              <div className="h-full w-full overflow-hidden bg-gradient-to-b from-gray-900 to-black">
                {/* App header */}
                <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-4">
                  <div className="flex items-center">
                    <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
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
                    <h3 className="text-lg font-bold text-white">Ignition</h3>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                      </svg>
                      <div className="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[8px] font-bold text-white">
                        2
                      </div>
                    </div>
                  </div>
                </div>

                {/* Welcome banner */}
                <div className="mx-4 mt-4 rounded-xl bg-gradient-to-r from-blue-600/20 to-blue-400/20 p-3">
                  <div className="flex items-center">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/30">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-100"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Welcome back, Alex!
                      </h4>
                      <p className="text-xs text-blue-100/80">
                        3 new matches today
                      </p>
                    </div>
                  </div>
                </div>

                {/* Search bar */}
                <div className="mx-4 mt-4">
                  <div className="flex items-center rounded-full bg-white/10 px-4 py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-4 w-4 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="text-sm text-gray-400">
                      Find your perfect car...
                    </div>
                  </div>
                </div>

                {/* Featured section */}
                <div className="mx-4 mt-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="text-sm font-medium text-white">
                      Featured Matches
                    </h4>
                    <div className="flex items-center text-xs text-blue-400">
                      <span>See All</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1 h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="relative mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-blue-900/40 to-blue-800/40 p-1">
                    <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-blue-500/20 blur-xl"></div>
                    <div className="relative h-32 rounded-lg bg-gradient-to-r from-blue-900/60 to-blue-800/60 p-3">
                      <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/30 text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                        </svg>
                      </div>
                      <div className="flex h-full flex-col justify-between">
                        <div>
                          <div className="inline-block rounded-full bg-blue-500/30 px-2 py-0.5 text-[10px] font-medium text-blue-100">
                            Perfect Match
                          </div>
                          <h3 className="mt-1 text-sm font-bold text-white">
                            Tesla Model Y
                          </h3>
                          <p className="text-xs text-blue-100/70">
                            Electric SUV • 330mi range
                          </p>
                        </div>
                        <div className="flex items-center">
                          <div className="rounded-lg bg-blue-500/30 px-2 py-1 text-xs font-semibold text-white">
                            $42,000
                          </div>
                          <div className="ml-2 text-[10px] text-blue-100/70">
                            Estimated market value
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Categories */}
                <div className="mx-4">
                  <h4 className="mb-2 text-sm font-medium text-white">
                    Categories
                  </h4>
                  <div className="flex space-x-3 overflow-x-auto pb-2">
                    {[
                      { name: "Electric", icon: "⚡" },
                      { name: "SUVs", icon: "🚙" },
                      { name: "Luxury", icon: "✨" },
                      { name: "Sports", icon: "🏎️" },
                    ].map((category, i) => (
                      <div
                        key={i}
                        className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-lg bg-gradient-to-br from-blue-900/40 to-blue-800/40"
                      >
                        <div className="mb-1 text-xl">{category.icon}</div>
                        <div className="text-xs text-gray-300">
                          {category.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended */}
                <div className="mx-4 mt-4">
                  <h4 className="mb-2 text-sm font-medium text-white">
                    Recommended For You
                  </h4>
                  <div className="space-y-3">
                    {[
                      {
                        name: "BMW i4",
                        type: "Electric Sedan",
                        price: "$56,000",
                      },
                      {
                        name: "Audi e-tron",
                        type: "Electric SUV",
                        price: "$65,900",
                      },
                      {
                        name: "Ford Mustang",
                        type: "Sports Car",
                        price: "$27,205",
                      },
                    ].map((car, i) => (
                      <div
                        key={i}
                        className="flex rounded-lg bg-gradient-to-r from-gray-800/80 to-gray-800/50 p-2"
                      >
                        <div className="mr-3 h-16 w-16 rounded bg-gradient-to-br from-blue-900/40 to-blue-800/40 p-1">
                          <div className="flex h-full items-center justify-center rounded bg-blue-900/40 text-xs text-blue-200">
                            {car.name.substring(0, 2)}
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col justify-center">
                          <div className="mb-1 text-xs font-semibold text-white">
                            {car.name}
                          </div>
                          <div className="mb-1 text-xs text-gray-400">
                            {car.type}
                          </div>
                          <div className="text-xs font-medium text-blue-400">
                            {car.price}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
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

                {/* Bottom navigation */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-around border-t border-white/10 bg-gradient-to-t from-gray-900 to-gray-900/80 px-2 py-3">
                  {[
                    {
                      name: "Home",
                      icon: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z",
                      active: true,
                    },
                    {
                      name: "Search",
                      icon: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                    },
                    {
                      name: "Favorites",
                      icon: "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",
                    },
                    {
                      name: "Profile",
                      icon: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div
                        className={`mb-1 flex h-6 w-6 items-center justify-center rounded-full ${
                          item.active
                            ? "bg-blue-500 text-white"
                            : "text-gray-500"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d={item.icon} />
                        </svg>
                      </div>
                      <div
                        className={`text-[10px] ${
                          item.active ? "text-blue-400" : "text-gray-500"
                        }`}
                      >
                        {item.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating UI elements */}
            <div className="absolute -left-16 bottom-1/3 z-20 hidden h-20 w-40 rounded-lg border border-blue-500/30 bg-blue-900/40 p-3 backdrop-blur-md lg:block">
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-blue-500/30 p-2">
                  <div className="h-full w-full rounded-full bg-blue-500/50"></div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">
                    Vehicle Match
                  </div>
                  <div className="text-[10px] text-blue-200/70">
                    98% compatibility
                  </div>
                </div>
              </div>
              <div className="mt-2 h-1.5 w-full rounded-full bg-blue-900/50">
                <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
              </div>
            </div>

            <div className="absolute -right-16 top-1/3 z-20 hidden h-20 w-40 rounded-lg border border-blue-500/30 bg-blue-900/40 p-3 backdrop-blur-md lg:block">
              <div className="mb-1 text-xs font-semibold text-white">
                Price Alert
              </div>
              <div className="text-[10px] text-blue-200/70">
                Tesla Model Y dropped by
              </div>
              <div className="mt-1 inline-block rounded-md bg-green-500/20 px-2 py-1 text-xs font-bold text-green-400">
                -$2,500
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 left-1/4 h-2 w-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"></div>
            <div className="absolute -top-4 right-1/4 h-2 w-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"></div>
            <div className="absolute bottom-1/4 -right-4 h-2 w-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"></div>
            <div className="absolute top-1/4 -left-4 h-2 w-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
