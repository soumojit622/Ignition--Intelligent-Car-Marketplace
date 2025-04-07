export default function PricingPlans() {
    const plans = [
      {
        name: "Basic",
        price: "Free",
        description: "Perfect for casual car shoppers",
        features: [
          "AI-powered vehicle matching",
          "Basic search filters",
          "View vehicle history reports",
          "Save up to 5 favorites",
          "Email support",
        ],
        cta: "Get Started",
        popular: false,
      },
      {
        name: "Premium",
        price: "$9.99",
        period: "/month",
        description: "Ideal for serious car buyers",
        features: [
          "Everything in Basic",
          "Advanced search filters",
          "Price drop alerts",
          "Unlimited favorites",
          "Market value predictions",
          "Priority support",
        ],
        cta: "Start Free Trial",
        popular: true,
      },
      {
        name: "Enterprise",
        price: "$29.99",
        period: "/month",
        description: "For dealerships and businesses",
        features: [
          "Everything in Premium",
          "Bulk vehicle analysis",
          "API access",
          "Custom reporting",
          "Dedicated account manager",
          "White-label options",
        ],
        cta: "Contact Sales",
        popular: false,
      },
    ]
  
    return (
      <section id="pricing" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
              <span className="mr-2 flex h-2 w-2 rounded-full bg-blue-400"></span>
              Flexible Options
            </div>
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Choose Your <span className="text-gradient">Plan</span>
            </h2>
            <p className="mb-16 text-gray-400">Select the perfect plan that fits your car buying needs</p>
          </div>
  
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`card-hover glass relative rounded-xl border ${
                  plan.popular ? "border-blue-500/50" : "border-white/10"
                } p-6 backdrop-blur-sm`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 right-6 rounded-full bg-blue-500 px-3 py-1 text-xs font-medium text-white">
                    Most Popular
                  </div>
                )}
  
                <h3 className="mb-2 text-xl font-bold">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-400">{plan.period}</span>}
                </div>
                <p className="mb-6 text-gray-400">{plan.description}</p>
  
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-5 w-5 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
  
                <button
                  className={`w-full rounded-lg px-4 py-3 text-center font-medium ${
                    plan.popular
                      ? "blue-gradient glow text-white"
                      : "border border-blue-500 bg-transparent text-blue-400 hover:bg-blue-500/10"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  