"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your API
      console.log("Subscribing email:", email);
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass relative overflow-hidden rounded-2xl border border-white/10">
          {/* Background elements */}
          <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-[50px]"></div>
          <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-blue-500/10 blur-[50px]"></div>

          <div className="relative z-10 px-6 py-12 sm:px-12">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                Stay in the <span className="text-gradient">Loop</span>
              </h2>
              <p className="mb-8 text-gray-300">
                Subscribe to our newsletter for the latest updates on new
                vehicles, AI features, and exclusive offers.
              </p>

              {submitted ? (
                <div className="mx-auto max-w-md rounded-lg border border-blue-500/30 bg-blue-500/10 p-4 text-blue-400">
                  <p>Thank you for subscribing! We'll be in touch soon.</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-grow rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm focus:border-blue-500 focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="blue-gradient glow rounded-lg px-6 py-3 font-medium text-white transition hover:opacity-90"
                  >
                    Subscribe
                  </button>
                </form>
              )}

              <p className="mt-4 text-sm text-gray-400">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
