export default function AiTechnology() {
  return (
    <section id="ai-technology" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
            <span className="mr-2 flex h-2 w-2 rounded-full bg-blue-400"></span>
            Cutting-Edge Technology
          </div>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Our <span className="text-gradient">AI Technology</span> Explained
          </h2>
          <p className="mb-12 text-gray-400">
            Discover how our advanced AI algorithms revolutionize the car buying experience
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left side: AI visualization */}
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto aspect-square max-w-md">
              {/* Central circle */}
              <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/50 bg-blue-500/10 backdrop-blur-sm"></div>
              <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full border border-blue-500/30 opacity-70"></div>
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full border border-blue-500/20 opacity-50"></div>

              {/* Central icon */}
              <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-500/20 text-blue-500">
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
              </div>

              {/* Orbiting elements */}
              {/* {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2"
                  style={{ transform: `translate(-50%, -50%) rotate(${angle}deg)` }}
                >
                  <div className="absolute left-1/2 top-0 h-6 w-6 -translate-x-1/2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm"></div>
                </div>
              ))} */}

              {/* Connection lines */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2 h-1/2 w-px -translate-x-1/2 bg-gradient-to-t from-blue-500/50 to-transparent"
                  style={{ transform: `translate(-50%, 0) rotate(${angle}deg)`, transformOrigin: "bottom center" }}
                ></div>
              ))}

              {/* Floating data points */}
              <div className="absolute left-1/4 top-1/4 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/10 text-xs text-blue-400 backdrop-blur-sm">
                Data
              </div>
              <div className="absolute bottom-1/4 right-1/4 flex h-12 w-12 translate-x-1/2 translate-y-1/2 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/10 text-xs text-blue-400 backdrop-blur-sm">
                ML
              </div>
              <div className="absolute right-1/4 top-1/4 flex h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/10 text-xs text-blue-400 backdrop-blur-sm">
                API
              </div>
              <div className="absolute bottom-1/4 left-1/4 flex h-12 w-12 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/10 text-xs text-blue-400 backdrop-blur-sm">
                NLP
              </div>
            </div>
          </div>

          {/* Right side: Text content */}
          <div className="order-1 flex flex-col justify-center lg:order-2">
            <div className="space-y-8">
              <div className="glass rounded-xl p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20 text-blue-500">
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Data Collection & Analysis</h3>
                <p className="text-gray-400">
                  Our AI processes millions of data points from vehicle specifications, market trends, and user
                  preferences to create accurate recommendations.
                </p>
              </div>

              <div className="glass rounded-xl p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20 text-blue-500">
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
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Machine Learning Algorithms</h3>
                <p className="text-gray-400">
                  Our proprietary algorithms continuously learn from user interactions and feedback to improve matching
                  accuracy over time.
                </p>
              </div>

              <div className="glass rounded-xl p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20 text-blue-500">
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
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Natural Language Processing</h3>
                <p className="text-gray-400">
                  Tell us what you want in plain language, and our NLP technology translates your needs into specific
                  vehicle requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

