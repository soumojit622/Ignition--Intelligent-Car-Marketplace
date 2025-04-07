export default function SmartNotifications() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
            <span className="mr-2 flex h-2 w-2 rounded-full bg-blue-400"></span>
            Stay Informed
          </div>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Smart <span className="text-gradient">Notifications</span> Center
          </h2>
          <p className="mb-12 text-gray-400">
            Our AI keeps you informed about important updates, price drops, and
            new matches tailored to your preferences
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left side: Notifications interface */}
          <div className="relative">
            {/* Background glow effects */}
            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px]"></div>
            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px]"></div>

            {/* Notifications interface */}
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-2 backdrop-blur-sm">
              <div className="relative rounded-lg border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/50">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-gray-900/90 to-gray-800/90 px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-600/20 to-blue-400/20 text-blue-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
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
                    <h3 className="text-lg font-bold text-white">
                      Notifications
                    </h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 text-xs font-medium text-blue-400">
                      8
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
                          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-white/10">
                  <div className="border-b-2 border-blue-500 px-4 py-2 text-sm font-medium text-blue-400">
                    All
                  </div>
                  <div className="px-4 py-2 text-sm font-medium text-gray-400">
                    Matches
                  </div>
                  <div className="px-4 py-2 text-sm font-medium text-gray-400">
                    Price Alerts
                  </div>
                  <div className="px-4 py-2 text-sm font-medium text-gray-400">
                    System
                  </div>
                </div>

                {/* Notifications list */}
                <div className="max-h-[400px] overflow-y-auto p-4">
                  <div className="space-y-4">
                    {/* Notification 1 - New Match */}
                    <div className="relative rounded-lg border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-4 backdrop-blur-sm">
                      <div className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-blue-500"></div>
                      <div className="mb-3 flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
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
                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                              />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">
                              New Match Found
                            </div>
                            <div className="text-xs text-gray-400">
                              Based on your preferences
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500">2m ago</div>
                      </div>
                      <div className="flex items-center space-x-3 rounded-lg bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-3">
                        <div className="h-12 w-12 rounded bg-blue-900/40 flex items-center justify-center text-xs text-blue-200">
                          TY
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-white">
                            Tesla Model Y
                          </div>
                          <div className="text-xs text-gray-400">
                            Electric SUV • 2023 • $42,000
                          </div>
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="mt-3 flex space-x-2">
                        <button className="flex-1 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 py-1.5 text-xs font-medium text-white">
                          View Details
                        </button>
                        <button className="flex-1 rounded-lg border border-white/10 bg-white/5 py-1.5 text-xs font-medium text-gray-300">
                          Dismiss
                        </button>
                      </div>
                    </div>

                    {/* Notification 2 - Price Drop */}
                    <div className="relative rounded-lg border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-4 backdrop-blur-sm">
                      <div className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-blue-500"></div>
                      <div className="mb-3 flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-green-400">
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
                                d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                              />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">
                              Price Drop Alert
                            </div>
                            <div className="text-xs text-gray-400">
                              On your saved vehicle
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500">1h ago</div>
                      </div>
                      <div className="flex items-center space-x-3 rounded-lg bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-3">
                        <div className="h-12 w-12 rounded bg-blue-900/40 flex items-center justify-center text-xs text-blue-200">
                          BM
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-white">
                            BMW X5 xDrive40i
                          </div>
                          <div className="flex items-center text-xs">
                            <span className="text-gray-400">$52,000</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="mx-1 h-3 w-3 text-green-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                              />
                            </svg>
                            <span className="font-medium text-green-400">
                              $48,500
                            </span>
                          </div>
                        </div>
                        <div className="rounded-lg bg-green-500/20 px-2 py-1 text-xs font-medium text-green-400">
                          -$3,500
                        </div>
                      </div>
                      <div className="mt-3 flex space-x-2">
                        <button className="flex-1 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 py-1.5 text-xs font-medium text-white">
                          View Deal
                        </button>
                        <button className="flex-1 rounded-lg border border-white/10 bg-white/5 py-1.5 text-xs font-medium text-gray-300">
                          Dismiss
                        </button>
                      </div>
                    </div>

                    {/* Notification 3 - Financing Approval */}
                    <div className="relative rounded-lg border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-4 backdrop-blur-sm">
                      <div className="mb-3 flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20 text-purple-400">
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
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">
                              Financing Pre-Approved
                            </div>
                            <div className="text-xs text-gray-400">
                              Your application was successful
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500">Yesterday</div>
                      </div>
                      <div className="rounded-lg bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-3">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium text-white">
                            Loan Terms
                          </div>
                          <div className="rounded-full bg-purple-500/20 px-2 py-0.5 text-xs font-medium text-purple-400">
                            Approved
                          </div>
                        </div>
                        <div className="mt-2 grid grid-cols-3 gap-2">
                          <div>
                            <div className="text-xs text-gray-400">Amount</div>
                            <div className="text-sm font-medium text-white">
                              $35,000
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-400">Rate</div>
                            <div className="text-sm font-medium text-white">
                              3.9%
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-400">Term</div>
                            <div className="text-sm font-medium text-white">
                              60 months
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 flex space-x-2">
                        <button className="flex-1 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 py-1.5 text-xs font-medium text-white">
                          View Details
                        </button>
                        <button className="flex-1 rounded-lg border border-white/10 bg-white/5 py-1.5 text-xs font-medium text-gray-300">
                          Dismiss
                        </button>
                      </div>
                    </div>

                    {/* Notification 4 - Service Reminder */}
                    <div className="relative rounded-lg border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-4 backdrop-blur-sm">
                      <div className="mb-3 flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/20 text-yellow-400">
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
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">
                              Service Reminder
                            </div>
                            <div className="text-xs text-gray-400">
                              Upcoming maintenance
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500">2d ago</div>
                      </div>
                      <div className="rounded-lg bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-3">
                        <p className="text-sm text-gray-300">
                          Your Tesla Model 3 is due for scheduled maintenance in
                          2 weeks. Would you like to schedule an appointment
                          now?
                        </p>
                      </div>
                      <div className="mt-3 flex space-x-2">
                        <button className="flex-1 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 py-1.5 text-xs font-medium text-white">
                          Schedule Now
                        </button>
                        <button className="flex-1 rounded-lg border border-white/10 bg-white/5 py-1.5 text-xs font-medium text-gray-300">
                          Remind Later
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating UI elements */}
            <div className="absolute -left-16 bottom-1/3 z-20 hidden h-24 w-40 rounded-lg border border-white/10 bg-gradient-to-br from-blue-900/30 to-blue-800/30 p-3 backdrop-blur-md lg:block">
              <div className="mb-2 text-xs font-semibold text-white">
                Notification Settings
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
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-white">Customize</div>
                  <div className="text-[10px] text-blue-200/70">
                    Your preferences
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-16 top-1/3 z-20 hidden h-24 w-40 rounded-lg border border-white/10 bg-gradient-to-br from-blue-900/30 to-blue-800/30 p-3 backdrop-blur-md lg:block">
              <div className="mb-2 text-xs font-semibold text-white">
                AI Insights
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-blue-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-white">Smart Filters</div>
                  <div className="text-[10px] text-blue-200/70">
                    Prioritized for you
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">AI-Powered Alerts</h3>
                <p className="text-gray-400">
                  Our intelligent notification system learns from your
                  preferences and behavior to deliver timely, relevant updates
                  about vehicles you're interested in, price changes, and market
                  trends.
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Real-Time Updates</h3>
                <p className="text-gray-400">
                  Get instant notifications about price drops, new inventory
                  matching your criteria, financing approvals, and important
                  service reminders—all delivered in real-time to help you make
                  timely decisions.
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
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  Personalized Experience
                </h3>
                <p className="text-gray-400">
                  Customize your notification preferences to receive only the
                  updates that matter most to you. Our AI continuously refines
                  your experience based on your interactions and feedback.
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition hover:shadow-blue-500/30">
                Set Up Notifications
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
