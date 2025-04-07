export default function AiFinancingCalculator() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
            <span className="mr-2 flex h-2 w-2 rounded-full bg-blue-400"></span>
            Smart Financing
          </div>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            AI-Powered <span className="text-gradient">Financing</span>{" "}
            Calculator
          </h2>
          <p className="mb-12 text-gray-400">
            Get personalized financing options based on your budget, credit
            profile, and vehicle preferences
          </p>
        </div>

        <div className="relative">
          {/* Background glow effects */}
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px]"></div>
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px]"></div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left side: Calculator interface */}
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-6 backdrop-blur-sm">
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/5 blur-[50px]"></div>
              <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-blue-500/5 blur-[50px]"></div>

              {/* Calculator header */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center space-x-3">
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
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Financing Calculator
                  </h3>
                </div>
                <div className="flex space-x-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
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
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Vehicle selection */}
              <div className="mb-6 rounded-lg border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="text-sm font-medium text-white">
                    Selected Vehicle
                  </div>
                  <div className="rounded-full bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-400">
                    Change
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-2">
                    <div className="flex h-full w-full items-center justify-center rounded bg-blue-900/40 text-xs text-blue-200">
                      TY
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">
                      Tesla Model Y
                    </div>
                    <div className="text-xs text-gray-400">
                      Long Range AWD • 2023
                    </div>
                    <div className="mt-1 text-sm font-semibold text-blue-400">
                      $42,000
                    </div>
                  </div>
                </div>
              </div>

              {/* Sliders */}
              <div className="mb-6 space-y-6">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="text-sm font-medium text-white">
                      Down Payment
                    </div>
                    <div className="text-sm font-medium text-blue-400">
                      $8,400
                    </div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gradient-to-r from-gray-800 to-gray-700">
                    <div className="relative h-full w-1/5 rounded-full bg-gradient-to-r from-blue-600 to-blue-400">
                      <div className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-white bg-blue-500"></div>
                    </div>
                  </div>
                  <div className="mt-1 flex justify-between text-xs text-gray-500">
                    <span>$0</span>
                    <span>$42,000</span>
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="text-sm font-medium text-white">
                      Loan Term
                    </div>
                    <div className="text-sm font-medium text-blue-400">
                      60 months
                    </div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gradient-to-r from-gray-800 to-gray-700">
                    <div className="relative h-full w-3/5 rounded-full bg-gradient-to-r from-blue-600 to-blue-400">
                      <div className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-white bg-blue-500"></div>
                    </div>
                  </div>
                  <div className="mt-1 flex justify-between text-xs text-gray-500">
                    <span>24 months</span>
                    <span>84 months</span>
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="text-sm font-medium text-white">
                      Interest Rate
                    </div>
                    <div className="text-sm font-medium text-blue-400">
                      3.9%
                    </div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gradient-to-r from-gray-800 to-gray-700">
                    <div className="relative h-full w-2/5 rounded-full bg-gradient-to-r from-blue-600 to-blue-400">
                      <div className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-white bg-blue-500"></div>
                    </div>
                  </div>
                  <div className="mt-1 flex justify-between text-xs text-gray-500">
                    <span>2.0%</span>
                    <span>8.0%</span>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="rounded-lg border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-4">
                <div className="mb-4 text-sm font-medium text-white">
                  Monthly Payment
                </div>
                <div className="mb-4 flex items-baseline">
                  <span className="text-3xl font-bold text-gradient">$618</span>
                  <span className="ml-2 text-sm text-gray-400">/month</span>
                </div>
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-gray-400">
                      Total Loan Amount
                    </div>
                    <div className="text-sm font-medium text-white">
                      $33,600
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Total Interest</div>
                    <div className="text-sm font-medium text-white">$3,480</div>
                  </div>
                </div>
                <button className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition hover:shadow-blue-500/30">
                  Apply for Financing
                </button>
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
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">
                    Personalized Rate Prediction
                  </h3>
                  <p className="text-gray-400">
                    Our AI analyzes thousands of financing options and your
                    credit profile to predict the best interest rate you can
                    qualify for, saving you time and money.
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">
                    Pre-Approved Financing
                  </h3>
                  <p className="text-gray-400">
                    Get pre-approved for financing before you even visit a
                    dealership. Our secure process connects you with trusted
                    lenders who compete for your business.
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
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">
                    Budget Optimization
                  </h3>
                  <p className="text-gray-400">
                    Our AI helps you find the perfect balance between down
                    payment, monthly payment, and loan term to fit your
                    financial goals and lifestyle.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <div className="rounded-lg border border-white/10 bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-4 backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
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
                      <div className="text-sm font-medium text-white">
                        Secure & Confidential
                      </div>
                      <div className="text-xs text-gray-400">
                        Your data is encrypted and never shared without
                        permission
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating UI elements */}
          <div className="absolute -left-16 bottom-1/3 z-20 hidden h-24 w-40 rounded-lg border border-white/10 bg-gradient-to-br from-blue-900/30 to-blue-800/30 p-3 backdrop-blur-md lg:block">
            <div className="mb-2 text-xs font-semibold text-white">
              AI Insight
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
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs text-white">Refinance Opportunity</div>
                <div className="text-[10px] text-blue-200/70">
                  Save $42/month
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-16 top-1/3 z-20 hidden h-24 w-40 rounded-lg border border-white/10 bg-gradient-to-br from-blue-900/30 to-blue-800/30 p-3 backdrop-blur-md lg:block">
            <div className="mb-2 text-xs font-semibold text-white">
              Credit Impact
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-white">Soft Credit Check</div>
                <div className="text-[10px] text-green-400">
                  No score impact
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
