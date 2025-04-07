export default function VehicleHistoryTimeline() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
            <span className="mr-2 flex h-2 w-2 rounded-full bg-blue-400"></span>
            Complete Transparency
          </div>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Interactive <span className="text-gradient">Vehicle History</span>{" "}
            Timeline
          </h2>
          <p className="mb-12 text-gray-400">
            Visualize the complete history of any vehicle with our AI-powered
            interactive timeline
          </p>
        </div>

        <div className="relative">
          {/* Background glow effects */}
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px]"></div>
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px]"></div>

          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-6 backdrop-blur-sm">
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/5 blur-[50px]"></div>
            <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-blue-500/5 blur-[50px]"></div>

            {/* Vehicle header */}
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-2">
                  <div className="flex h-full w-full items-center justify-center rounded bg-blue-900/40 text-sm text-blue-200">
                    BMW
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    BMW X5 xDrive40i
                  </h3>
                  <p className="text-gray-400">VIN: 5UXCR6C0XL9B57943 • 2020</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1 rounded-full bg-green-500/20 px-3 py-1">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-xs font-medium text-green-400">
                    Clean History
                  </span>
                </div>
                <div className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 px-3 py-1 text-sm font-medium text-white shadow-lg shadow-blue-500/20">
                  View Full Report
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative mb-8">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-blue-600/0 via-blue-600/50 to-blue-600/0 md:left-1/2 md:-ml-px"></div>

              {/* Timeline events */}
              <div className="space-y-12">
                {/* Event 1 */}
                <div className="relative md:flex md:items-center md:justify-between">
                  <div className="mb-4 flex md:mb-0 md:w-1/2 md:justify-end md:pr-8">
                    <div className="relative rounded-lg border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-4 backdrop-blur-sm md:max-w-md">
                      <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-blue-500/5 blur-lg"></div>
                      <div className="mb-2 flex items-center justify-between">
                        <div className="text-sm font-medium text-white">
                          Manufactured
                        </div>
                        <div className="rounded-full bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-400">
                          Original
                        </div>
                      </div>
                      <p className="text-sm text-gray-400">
                        Vehicle manufactured at BMW Spartanburg Plant in South
                        Carolina, USA.
                      </p>
                      <div className="mt-2 text-xs text-gray-500">
                        March 15, 2020
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-0 top-6 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-2 border-blue-500 bg-gray-900 md:left-1/2">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  </div>

                  <div className="md:w-1/2 md:pl-8">
                    <div className="h-24 w-full rounded-lg bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-2 md:h-32">
                      <div className="flex h-full w-full items-center justify-center rounded bg-blue-900/20 text-xs text-blue-200">
                        Factory Image
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event 2 */}
                <div className="relative md:flex md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0 md:w-1/2 md:pr-8">
                    <div className="h-24 w-full rounded-lg bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-2 md:h-32">
                      <div className="flex h-full w-full items-center justify-center rounded bg-blue-900/20 text-xs text-blue-200">
                        Dealership Photo
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-0 top-6 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-2 border-blue-500 bg-gray-900 md:left-1/2">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  </div>

                  <div className="md:w-1/2 md:justify-start md:pl-8">
                    <div className="relative rounded-lg border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-4 backdrop-blur-sm md:max-w-md">
                      <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-blue-500/5 blur-lg"></div>
                      <div className="mb-2 flex items-center justify-between">
                        <div className="text-sm font-medium text-white">
                          First Sale
                        </div>
                        <div className="rounded-full bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-400">
                          Verified
                        </div>
                      </div>
                      <p className="text-sm text-gray-400">
                        Sold by BMW of San Francisco to first owner. Full
                        service history available.
                      </p>
                      <div className="mt-2 text-xs text-gray-500">
                        April 10, 2020
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event 3 */}
                <div className="relative md:flex md:items-center md:justify-between">
                  <div className="mb-4 flex md:mb-0 md:w-1/2 md:justify-end md:pr-8">
                    <div className="relative rounded-lg border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-4 backdrop-blur-sm md:max-w-md">
                      <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-blue-500/5 blur-lg"></div>
                      <div className="mb-2 flex items-center justify-between">
                        <div className="text-sm font-medium text-white">
                          Service Record
                        </div>
                        <div className="rounded-full bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-400">
                          Verified
                        </div>
                      </div>
                      <p className="text-sm text-gray-400">
                        Regular maintenance performed at authorized BMW service
                        center. Oil change, filter replacement, and software
                        update.
                      </p>
                      <div className="mt-2 text-xs text-gray-500">
                        October 5, 2021
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-0 top-6 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-2 border-blue-500 bg-gray-900 md:left-1/2">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  </div>

                  <div className="md:w-1/2 md:pl-8">
                    <div className="h-24 w-full rounded-lg bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-2 md:h-32">
                      <div className="flex h-full w-full items-center justify-center rounded bg-blue-900/20 text-xs text-blue-200">
                        Service Record
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event 4 */}
                <div className="relative md:flex md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0 md:w-1/2 md:pr-8">
                    <div className="h-24 w-full rounded-lg bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-2 md:h-32">
                      <div className="flex h-full w-full items-center justify-center rounded bg-blue-900/20 text-xs text-blue-200">
                        Current Photo
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-0 top-6 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-2 border-blue-500 bg-gray-900 md:left-1/2">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  </div>

                  <div className="md:w-1/2 md:justify-start md:pl-8">
                    <div className="relative rounded-lg border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-4 backdrop-blur-sm md:max-w-md">
                      <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-blue-500/5 blur-lg"></div>
                      <div className="mb-2 flex items-center justify-between">
                        <div className="text-sm font-medium text-white">
                          Current Listing
                        </div>
                        <div className="rounded-full bg-green-500/20 px-2 py-0.5 text-xs font-medium text-green-400">
                          Available
                        </div>
                      </div>
                      <p className="text-sm text-gray-400">
                        Vehicle listed for sale by certified pre-owned BMW
                        dealer. Single owner, all service records available.
                      </p>
                      <div className="mt-2 text-xs text-gray-500">Current</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Analysis */}
            <div className="rounded-lg border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-4 backdrop-blur-sm">
              <div className="mb-4 flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600/20 to-blue-400/20 text-blue-400">
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">AI Analysis</h3>
                  <p className="text-sm text-gray-400">
                    Our AI has analyzed this vehicle's history and found the
                    following insights
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-3">
                  <div className="mb-2 flex items-center space-x-2">
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
                    <div className="text-sm font-medium text-white">
                      Maintenance Score
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gradient">
                      95/100
                    </div>
                    <div className="text-xs text-gray-400">Excellent</div>
                  </div>
                </div>

                <div className="rounded-lg bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-3">
                  <div className="mb-2 flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-green-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="text-sm font-medium text-white">
                      Value Assessment
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gradient">
                      $42,500
                    </div>
                    <div className="text-xs text-green-400">Fair Price</div>
                  </div>
                </div>

                <div className="rounded-lg bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-3">
                  <div className="mb-2 flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-green-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    <div className="text-sm font-medium text-white">
                      Ownership History
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gradient">
                      1 Owner
                    </div>
                    <div className="text-xs text-green-400">Verified</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating UI elements */}
            <div className="absolute -left-16 bottom-1/3 z-20 hidden h-24 w-40 rounded-lg border border-white/10 bg-gradient-to-br from-blue-900/30 to-blue-800/30 p-3 backdrop-blur-md lg:block">
              <div className="mb-2 text-xs font-semibold text-white">
                Mileage Verification
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
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-white">32,450 miles</div>
                  <div className="text-[10px] text-green-400">
                    Verified accurate
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-16 top-1/3 z-20 hidden h-24 w-40 rounded-lg border border-white/10 bg-gradient-to-br from-blue-900/30 to-blue-800/30 p-3 backdrop-blur-md lg:block">
              <div className="mb-2 text-xs font-semibold text-white">
                Title Status
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
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-white">Clean Title</div>
                  <div className="text-[10px] text-green-400">No accidents</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
