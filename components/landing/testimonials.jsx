export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex Morgan",
      role: "Tech Entrepreneur",
      quote:
        "Ignition's AI matched me with a car I wouldn't have considered on my own, but it's perfect for my needs. The predictive pricing saved me thousands.",
      avatar: "AM",
    },
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      quote:
        "The verification process gave me peace of mind when buying from a private seller. Ignition's AI insights about the vehicle's condition were spot on.",
      avatar: "SC",
    },
    {
      name: "Marcus Johnson",
      role: "Marketing Director",
      quote:
        "I was skeptical about an AI choosing my car, but the recommendation was exactly what I needed. The entire process was seamless and stress-free.",
      avatar: "MJ",
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
            <span className="mr-2 flex h-2 w-2 rounded-full bg-blue-400"></span>
            Success Stories
          </div>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            What Our <span className="text-gradient">Users</span> Say
          </h2>
          <p className="mb-16 text-gray-400">
            Join thousands of satisfied drivers who found their perfect vehicle
            through Ignition.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-hover glass relative flex flex-col rounded-xl p-6"
            >
              {/* Decorative quote mark */}
              <div className="absolute -left-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-blue-500">
                  <span className="text-lg font-bold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="flex-grow text-gray-300">"{testimonial.quote}"</p>
              <div className="mt-4 flex text-blue-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
