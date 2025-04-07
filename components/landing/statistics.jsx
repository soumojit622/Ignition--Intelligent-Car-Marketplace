export default function Statistics() {
  const stats = [
    {
      value: "98%",
      label: "Customer Satisfaction",
      description: "Our AI matches drivers with their perfect vehicles",
      icon: (
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
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
          />
        </svg>
      ),
    },
    {
      value: "30+",
      label: "Vehicle Brands",
      description: "Access to all major manufacturers and models",
      icon: (
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
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      value: "15min",
      label: "Average Match Time",
      description: "From preferences to perfect vehicle recommendations",
      icon: (
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
      ),
    },
    {
      value: "$3.2K",
      label: "Average Savings",
      description: "Compared to traditional car buying methods",
      icon: (
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
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-8 backdrop-blur-md">
          {/* Decorative elements */}
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-500/5 blur-[80px]"></div>
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-500/5 blur-[80px]"></div>

          <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="relative text-center">
                {/* Decorative dot */}
                <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-blue-500"></div>

                {/* Animated circle */}
                <div className="absolute left-1/2 top-6 -z-10 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/20 opacity-70"></div>
                <div className="absolute left-1/2 top-6 -z-10 h-24 w-24 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full border border-blue-500/10 opacity-50"></div>

                {/* Icon */}
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600/20 to-blue-400/20 text-blue-400">
                  {stat.icon}
                </div>

                <h3 className="mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-4xl font-bold text-transparent">
                  {stat.value}
                </h3>
                <p className="mb-1 font-semibold text-white">{stat.label}</p>
                <p className="text-sm text-gray-400">{stat.description}</p>

                {/* Only add divider if not the last item */}
                {index < stats.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent lg:block"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
