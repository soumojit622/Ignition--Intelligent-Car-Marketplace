export default function HowItWorks() {
    const steps = [
      {
        title: "Sign Up",
        description: "Create your account and tell us about your preferences and requirements.",
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
              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            />
          </svg>
        ),
        mockup: (
          <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-blue-900/40 to-blue-800/40 p-4">
            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-blue-500/20 blur-xl"></div>
            <div className="flex items-center space-x-3 rounded-lg bg-white/5 p-3 backdrop-blur-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="h-2.5 w-24 rounded-full bg-white/20"></div>
                <div className="mt-2 h-2 w-32 rounded-full bg-white/10"></div>
              </div>
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex items-center space-x-2">
                <div className="h-4 w-4 rounded-full bg-blue-500/30"></div>
                <div className="h-2 w-32 rounded-full bg-white/20"></div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-4 w-4 rounded-full bg-blue-500/30"></div>
                <div className="h-2 w-40 rounded-full bg-white/20"></div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-4 w-4 rounded-full bg-blue-500/30"></div>
                <div className="h-2 w-28 rounded-full bg-white/20"></div>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <div className="h-8 w-20 rounded-full bg-blue-500/40"></div>
            </div>
          </div>
        ),
      },
      {
        title: "Tell Us Your Needs",
        description:
          "Our AI analyzes your driving habits, budget, and preferences to understand what you're looking for.",
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
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        ),
        mockup: (
          <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-blue-900/40 to-blue-800/40 p-4">
            <div className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-blue-500/20 blur-xl"></div>
            <div className="flex flex-col space-y-3">
              <div className="flex items-start space-x-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/30">
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
                <div className="rounded-lg bg-white/5 p-2">
                  <div className="h-2 w-40 rounded-full bg-white/20"></div>
                  <div className="mt-1 h-2 w-32 rounded-full bg-white/10"></div>
                </div>
              </div>
              <div className="ml-auto flex items-start space-x-3">
                <div className="rounded-lg bg-blue-500/20 p-2">
                  <div className="h-2 w-32 rounded-full bg-white/30"></div>
                  <div className="mt-1 h-2 w-24 rounded-full bg-white/20"></div>
                </div>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                  </svg>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  </svg>
                </div>
                <div className="rounded-lg bg-white/5 p-2">
                  <div className="h-2 w-48 rounded-full bg-white/20"></div>
                  <div className="mt-1 h-2 w-36 rounded-full bg-white/10"></div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center rounded-lg bg-white/5 p-2">
              <div className="h-2 w-full rounded-full bg-white/10"></div>
              <div className="ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Get Matches",
        description: "Receive personalized vehicle recommendations that perfectly match your criteria and budget.",
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
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
        ),
        mockup: (
          <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-blue-900/40 to-blue-800/40 p-4">
            <div className="absolute -right-6 -bottom-6 h-20 w-20 rounded-full bg-blue-500/20 blur-xl"></div>
            <div className="mb-3 flex items-center justify-between">
              <div className="h-2.5 w-24 rounded-full bg-white/20"></div>
              <div className="h-2.5 w-16 rounded-full bg-white/10"></div>
            </div>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center space-x-3 rounded-lg bg-white/5 p-2">
                  <div className="h-12 w-12 rounded bg-blue-500/20"></div>
                  <div className="flex-1">
                    <div className="h-2.5 w-24 rounded-full bg-white/20"></div>
                    <div className="mt-1.5 h-2 w-32 rounded-full bg-white/10"></div>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 flex justify-center">
              <div className="flex space-x-1">
                <div className="h-1.5 w-6 rounded-full bg-blue-500"></div>
                <div className="h-1.5 w-1.5 rounded-full bg-white/20"></div>
                <div className="h-1.5 w-1.5 rounded-full bg-white/20"></div>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Drive Away",
        description: "Schedule viewings, get financing options, and complete your purchase with our streamlined process.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
        mockup: (
          <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-blue-900/40 to-blue-800/40 p-4">
            <div className="absolute -left-6 -bottom-6 h-20 w-20 rounded-full bg-blue-500/20 blur-xl"></div>
            <div className="flex flex-col items-center">
              <div className="mb-3 h-16 w-16 rounded-full bg-blue-500/20 p-3">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-blue-500/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
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
              <div className="h-2.5 w-32 rounded-full bg-white/20"></div>
              <div className="mt-1.5 h-2 w-40 rounded-full bg-white/10"></div>
              <div className="mt-4 h-1 w-16 rounded-full bg-white/10"></div>
              <div className="mt-4 flex space-x-2">
                <div className="h-8 w-8 rounded-full bg-blue-500/20 p-2">
                  <div className="h-full w-full rounded-full bg-blue-500/30"></div>
                </div>
                <div className="h-8 w-8 rounded-full bg-blue-500/20 p-2">
                  <div className="h-full w-full rounded-full bg-blue-500/30"></div>
                </div>
                <div className="h-8 w-8 rounded-full bg-blue-500/20 p-2">
                  <div className="h-full w-full rounded-full bg-blue-500/30"></div>
                </div>
              </div>
              <div className="mt-4 h-10 w-32 rounded-full bg-blue-500/40"></div>
            </div>
          </div>
        ),
      },
    ]
  
    return (
      <section id="how-it-works" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
              <span className="mr-2 flex h-2 w-2 rounded-full bg-blue-400"></span>
              Simple Process
            </div>
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              How <span className="text-gradient">Ignition</span> Works
            </h2>
            <p className="mb-16 text-gray-400">Our streamlined process makes finding your perfect vehicle effortless.</p>
          </div>
  
          <div className="relative">
            {/* Connecting line for desktop - enhanced with gradient */}
            {/* <div className="absolute left-0 right-0 top-24 hidden h-1 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0 lg:block"></div> */}
  
            <div className="grid gap-12 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step content with enhanced styling */}
                  <div className="relative flex flex-col items-center text-center">
                    {/* Icon container with glow effect */}
                    <div className="relative z-10 mb-6">
                      <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md"></div>
                      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-blue-500/50 bg-gradient-to-br from-blue-900 to-blue-800 text-blue-400">
                        {step.icon}
                      </div>
  
                      {/* Animated pulse ring */}
                      <div
                        className="absolute inset-0 animate-ping rounded-full border border-blue-500/30 opacity-75"
                        style={{ animationDuration: "3s" }}
                      ></div>
                    </div>
  
                    {/* Step number with enhanced styling */}
                    <div className="absolute -top-2 left-1/2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-xs font-bold text-white shadow-lg shadow-blue-500/30">
                      {index + 1}
                    </div>
  
                    {/* Step title and description */}
                    <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                    <p className="mb-6 text-gray-400">{step.description}</p>
  
                    {/* Mockup container with enhanced styling */}
                    <div className="relative h-48 w-full max-w-xs overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-1 shadow-xl shadow-blue-900/10 backdrop-blur-sm">
                      {step.mockup}
                    </div>
                  </div>
  
                  {/* Mobile only step indicator with enhanced styling */}
                  {index < steps.length - 1 && (
                    <div className="my-6 mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/50 bg-gradient-to-br from-blue-900 to-blue-800 text-blue-400 lg:hidden">
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
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  