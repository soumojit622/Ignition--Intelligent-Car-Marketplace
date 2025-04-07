export default function Features() {
  const features = [
    {
      title: "AI-Powered Recommendations",
      description:
        "Our advanced AI analyzes thousands of vehicles to find your perfect match based on your preferences and needs.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
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
      ),
      mockup: (
        <div className="relative h-full w-full rounded-xl bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-4">
          <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-blue-500/10 blur-lg"></div>
          <div className="flex flex-col h-full">
            <div className="mb-3 flex items-center justify-between">
              <div className="h-2.5 w-20 rounded-full bg-blue-500/30"></div>
              <div className="h-2.5 w-8 rounded-full bg-blue-500/20"></div>
            </div>
            <div className="flex-1 space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-blue-500/40"></div>
                  </div>
                  <div className="flex-1">
                    <div className="h-2 w-full rounded-full bg-blue-500/30"></div>
                    <div className="mt-1 h-1.5 w-3/4 rounded-full bg-blue-500/20"></div>
                  </div>
                  <div className="h-6 w-6 rounded-full bg-blue-500/30 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-blue-500/50"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-3 flex justify-between items-center">
              <div className="h-2 w-16 rounded-full bg-blue-500/30"></div>
              <div className="h-6 w-20 rounded-full bg-blue-500/40"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Predictive Pricing",
      description:
        "Get real-time market value estimates and predictions on how a vehicle's price might change in the coming months.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      mockup: (
        <div className="relative h-full w-full rounded-xl bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-4">
          <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-blue-500/10 blur-lg"></div>
          <div className="flex flex-col h-full">
            <div className="mb-3 flex items-center justify-between">
              <div className="h-2.5 w-24 rounded-full bg-blue-500/30"></div>
              <div className="flex space-x-1">
                <div className="h-3 w-3 rounded-full bg-blue-500/40"></div>
                <div className="h-3 w-3 rounded-full bg-blue-500/20"></div>
                <div className="h-3 w-3 rounded-full bg-blue-500/20"></div>
              </div>
            </div>
            <div className="flex-1">
              <div className="h-32 w-full rounded-lg bg-blue-900/20 p-2">
                <div className="relative h-full w-full">
                  {/* Chart line */}
                  <svg viewBox="0 0 100 100" className="h-full w-full">
                    <path
                      d="M0,50 Q20,45 40,60 T80,40 T100,30"
                      fill="none"
                      stroke="rgba(59, 130, 246, 0.5)"
                      strokeWidth="2"
                    />
                    <path
                      d="M0,50 Q20,45 40,60 T80,40 T100,30"
                      fill="none"
                      stroke="rgba(59, 130, 246, 0.8)"
                      strokeWidth="1"
                      strokeDasharray="2,2"
                    />
                    {/* Data points */}
                    <circle
                      cx="0"
                      cy="50"
                      r="2"
                      fill="rgba(59, 130, 246, 0.8)"
                    />
                    <circle
                      cx="20"
                      cy="45"
                      r="2"
                      fill="rgba(59, 130, 246, 0.8)"
                    />
                    <circle
                      cx="40"
                      cy="60"
                      r="2"
                      fill="rgba(59, 130, 246, 0.8)"
                    />
                    <circle
                      cx="60"
                      cy="50"
                      r="2"
                      fill="rgba(59, 130, 246, 0.8)"
                    />
                    <circle
                      cx="80"
                      cy="40"
                      r="2"
                      fill="rgba(59, 130, 246, 0.8)"
                    />
                    <circle
                      cx="100"
                      cy="30"
                      r="2"
                      fill="rgba(59, 130, 246, 0.8)"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mt-3 flex justify-between">
              <div className="h-6 w-16 rounded-lg bg-green-500/30 flex items-center justify-center">
                <div className="h-2 w-10 rounded-full bg-green-500/50"></div>
              </div>
              <div className="h-6 w-16 rounded-lg bg-red-500/30 flex items-center justify-center">
                <div className="h-2 w-10 rounded-full bg-red-500/50"></div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Verified Sellers",
      description:
        "Every seller on our platform is thoroughly vetted and verified, ensuring a safe and trustworthy transaction.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      mockup: (
        <div className="relative h-full w-full rounded-xl bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-4">
          <div className="absolute -right-4 -bottom-4 h-16 w-16 rounded-full bg-blue-500/10 blur-lg"></div>
          <div className="flex flex-col h-full">
            <div className="mb-4 flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-blue-500/30 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <div className="h-2.5 w-20 rounded-full bg-blue-500/30"></div>
                <div className="mt-1 h-2 w-16 rounded-full bg-blue-500/20"></div>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-green-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center space-x-2">
                <div className="h-4 w-4 rounded-full bg-blue-500/30"></div>
                <div className="h-2 w-full rounded-full bg-blue-500/20"></div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-4 w-4 rounded-full bg-blue-500/30"></div>
                <div className="h-2 w-full rounded-full bg-blue-500/20"></div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-4 w-4 rounded-full bg-blue-500/30"></div>
                <div className="h-2 w-full rounded-full bg-blue-500/20"></div>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <div className="h-8 w-28 rounded-full bg-blue-500/40 flex items-center justify-center">
                <div className="h-2 w-16 rounded-full bg-blue-100/30"></div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Real-Time Insights",
      description:
        "Access comprehensive vehicle history, maintenance predictions, and performance analytics at your fingertips.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      mockup: (
        <div className="relative h-full w-full rounded-xl bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-4">
          <div className="absolute -left-4 -bottom-4 h-16 w-16 rounded-full bg-blue-500/10 blur-lg"></div>
          <div className="flex flex-col h-full">
            <div className="mb-3 flex items-center justify-between">
              <div className="h-2.5 w-20 rounded-full bg-blue-500/30"></div>
              <div className="flex space-x-1">
                <div className="h-4 w-4 rounded-full bg-blue-500/20"></div>
                <div className="h-4 w-4 rounded-full bg-blue-500/20"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="rounded-lg bg-blue-900/20 p-2">
                <div className="h-2 w-12 rounded-full bg-blue-500/30 mb-2"></div>
                <div className="h-8 w-full rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-green-500/50"></div>
                </div>
              </div>
              <div className="rounded-lg bg-blue-900/20 p-2">
                <div className="h-2 w-12 rounded-full bg-blue-500/30 mb-2"></div>
                <div className="h-8 w-full rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-yellow-500/50"></div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-lg bg-blue-900/20 p-2">
              <div className="h-2 w-16 rounded-full bg-blue-500/30 mb-2"></div>
              <div className="flex h-16 w-full items-end justify-between space-x-1 px-1">
                {[40, 60, 30, 80, 50, 70, 45].map((h, i) => (
                  <div key={i} className="w-full">
                    <div
                      className="w-full rounded-t bg-blue-500/40"
                      style={{ height: `${h}%` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-3 flex justify-between">
              <div className="h-6 w-20 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <div className="h-2 w-12 rounded-full bg-blue-500/40"></div>
              </div>
              <div className="h-6 w-20 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <div className="h-2 w-12 rounded-full bg-blue-500/40"></div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
            <span className="mr-2 flex h-2 w-2 rounded-full bg-blue-400"></span>
            Advanced Technology
          </div>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Powered by <span className="text-gradient">Advanced AI</span>
          </h2>
          <p className="mb-12 text-gray-400">
            Our cutting-edge technology revolutionizes how you find, evaluate,
            and purchase vehicles.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 backdrop-blur-sm transition duration-300 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10"
            >
              {/* Background glow effect */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/5 blur-[50px] transition-all duration-300 group-hover:bg-blue-500/10"></div>

              {/* Icon with enhanced styling */}
              <div className="relative mb-4">
                <div className="absolute inset-0 rounded-lg bg-blue-500/10 blur-sm"></div>
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600/20 to-blue-400/20 text-blue-500 backdrop-blur-sm">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
              <p className="mb-4 text-gray-400">{feature.description}</p>

              {/* Mockup with enhanced styling */}
              <div className="relative mt-6 h-32 w-full overflow-hidden rounded-lg border border-white/10 shadow-lg shadow-blue-900/5">
                {feature.mockup}
              </div>

              {/* Feature highlight dots */}
              <div className="mt-4 flex space-x-1">
                <div className="h-1 w-1 rounded-full bg-blue-500"></div>
                <div className="h-1 w-1 rounded-full bg-blue-400"></div>
                <div className="h-1 w-1 rounded-full bg-blue-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
