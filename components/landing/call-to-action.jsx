import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass relative z-10 overflow-hidden rounded-2xl border border-white/10">
          {/* Decorative elements */}
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-[80px]"></div>
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-500/20 blur-[80px]"></div>

          <div className="grid items-center gap-8 px-6 py-12 lg:grid-cols-2 lg:p-12">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                <span className="mr-2 flex h-2 w-2 rounded-full bg-blue-400"></span>
                Limited Time Offer
              </div>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                Ready to revolutionize <span className="text-gradient">your ride?</span>
              </h2>
              <p className="mb-8 text-lg text-gray-300">
                Join thousands of drivers who've found their perfect vehicle through our AI-powered marketplace.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#"
                  className="blue-gradient glow inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium text-white transition hover:opacity-90"
                >
                  Join Ignition Today
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
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg border border-blue-500 bg-transparent px-6 py-3 font-medium text-blue-400 transition hover:bg-blue-500/10"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="relative mx-auto aspect-video w-full max-w-lg rounded-xl border border-white/10 bg-gray-900/50 p-2">
              <div className="neon-border">
                <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-dashed border-blue-500/50 bg-gray-800/50">
                  {/* Video player mockup */}
                  <div className="flex items-center justify-between border-b border-white/10 bg-black/30 px-4 py-2">
                    <div className="flex space-x-1">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs font-medium text-gray-400">Ignition AI Demo</div>
                    <div className="h-2.5 w-2.5"></div>
                  </div>

                  {/* Video content */}
                  <div className="relative flex flex-1 items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
                    {/* Play button */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 text-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    {/* Video timeline */}
                    <div className="absolute bottom-0 left-0 right-0 flex items-center space-x-2 bg-black/50 p-2">
                      <div className="text-xs text-white">0:00</div>
                      <div className="flex-1 rounded-full bg-gray-700 p-0.5">
                        <div className="h-1 w-1/3 rounded-full bg-blue-500"></div>
                      </div>
                      <div className="text-xs text-white">2:30</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -bottom-4 -right-4 h-10 w-10 rounded-full bg-blue-500/30 blur-lg"></div>
              <div className="absolute -left-4 -top-4 h-10 w-10 rounded-full bg-blue-500/30 blur-lg"></div>

              {/* Video info cards */}
              <div className="absolute -right-16 bottom-1/3 hidden h-24 w-40 rounded-lg border border-white/10 bg-gray-900/80 p-3 backdrop-blur-sm lg:block">
                <div className="mb-2 flex items-center">
                  <div className="mr-2 h-6 w-6 rounded bg-blue-500/30"></div>
                  <div>
                    <div className="h-3 w-20 rounded-full bg-gray-700"></div>
                    <div className="mt-1 h-2 w-12 rounded-full bg-gray-700"></div>
                  </div>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-700"></div>
                <div className="mt-1 h-2 w-3/4 rounded-full bg-gray-700"></div>
                <div className="mt-1 h-2 w-1/2 rounded-full bg-gray-700"></div>
              </div>

              <div className="absolute -left-16 top-1/3 hidden h-24 w-40 rounded-lg border border-white/10 bg-gray-900/80 p-3 backdrop-blur-sm lg:block">
                <div className="mb-2 flex items-center">
                  <div className="mr-2 h-6 w-6 rounded bg-blue-500/30"></div>
                  <div>
                    <div className="h-3 w-20 rounded-full bg-gray-700"></div>
                    <div className="mt-1 h-2 w-12 rounded-full bg-gray-700"></div>
                  </div>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-700"></div>
                <div className="mt-1 h-2 w-3/4 rounded-full bg-gray-700"></div>
                <div className="mt-1 h-2 w-1/2 rounded-full bg-gray-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

