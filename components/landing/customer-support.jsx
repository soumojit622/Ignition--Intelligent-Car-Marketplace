export default function CustomerSupport() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Left side: Support agent mockup */}
            <div className="relative p-8">
              <div className="relative mx-auto max-w-md">
                {/* Agent avatar */}
                <div className="relative mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-blue-500/30">
                  <div className="h-full w-full rounded-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Support chat interface */}
                <div className="rounded-xl border border-white/10 bg-gray-900/70 p-4">
                  <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-2">
                    <div className="flex items-center">
                      <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
                      <h3 className="font-medium text-white">
                        AI Support Agent
                      </h3>
                    </div>
                    <div className="text-xs text-gray-400">Online</div>
                  </div>

                  <div className="mb-4 space-y-3">
                    <div className="flex justify-start">
                      <div className="max-w-xs rounded-lg rounded-tl-none bg-gray-800 p-3 text-sm text-gray-300">
                        Hello! How can I help you with your vehicle search
                        today?
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="max-w-xs rounded-lg rounded-tr-none bg-blue-500 p-3 text-sm text-white">
                        I'm looking for an electric SUV with at least 300 miles
                        of range.
                      </div>
                    </div>

                    <div className="flex justify-start">
                      <div className="max-w-xs rounded-lg rounded-tl-none bg-gray-800 p-3 text-sm text-gray-300">
                        Great choice! I've found 5 models that match your
                        criteria. Would you like me to show you the top options
                        based on price or performance?
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center rounded-lg border border-white/10 bg-gray-800 px-3 py-2">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="flex-grow bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none"
                    />
                    <button className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-blue-500/20 blur-lg"></div>
                <div className="absolute -left-4 -top-4 h-20 w-20 rounded-full bg-blue-500/20 blur-lg"></div>
              </div>
            </div>

            {/* Right side: Text content */}
            <div className="bg-blue-500/5 p-8">
              <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                <span className="mr-2 flex h-2 w-2 rounded-full bg-blue-400"></span>
                24/7 Assistance
              </div>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                Expert <span className="text-gradient">Support</span> At Your
                Fingertips
              </h2>
              <p className="mb-6 text-lg text-gray-300">
                Our AI-powered support team is available around the clock to
                answer your questions and guide you through the car buying
                process.
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
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold">
                      Live Chat Support
                    </h3>
                    <p className="text-gray-400">
                      Connect instantly with our AI assistants or human experts
                      for real-time help with your search.
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
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold">
                      Comprehensive Knowledge Base
                    </h3>
                    <p className="text-gray-400">
                      Access our extensive library of articles, guides, and
                      videos to learn more about vehicles and the buying
                      process.
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
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold">
                      Personalized Guidance
                    </h3>
                    <p className="text-gray-400">
                      Get customized advice and recommendations based on your
                      specific needs and preferences.
                    </p>
                  </div>
                </div>
              </div>

              <button className="mt-8 inline-flex items-center rounded-lg border border-blue-500 bg-transparent px-6 py-3 font-medium text-blue-400 transition hover:bg-blue-500/10">
                Contact Support
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
