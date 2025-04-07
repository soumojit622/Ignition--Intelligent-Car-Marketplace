"use client";

import { useState } from "react";

export default function Faq() {
  const faqs = [
    {
      question: "How does the AI matching system work?",
      answer:
        "Our AI analyzes thousands of data points including your preferences, driving habits, budget, and lifestyle needs. It then matches these against our extensive vehicle database to find the perfect car for you. The system continuously learns from user feedback to improve recommendations.",
    },
    {
      question: "Is there a fee to use Ignition?",
      answer:
        "Basic matching services are completely free. We offer premium features for a small subscription fee, including advanced analytics, priority access to new listings, and enhanced verification services.",
    },
    {
      question: "How are sellers verified on the platform?",
      answer:
        "All sellers undergo a comprehensive verification process that includes identity verification, vehicle ownership confirmation, and history checks. We also review seller ratings and maintain strict quality standards.",
    },
    {
      question: "Can I sell my vehicle on Ignition?",
      answer:
        "Yes! Individual sellers can list their vehicles after completing our verification process. Our AI will help match your vehicle with the right buyers, potentially reducing the time to sell.",
    },
    {
      question: "What happens if I'm not satisfied with my vehicle?",
      answer:
        "We offer a 7-day satisfaction guarantee on eligible purchases. If you're not completely satisfied, we'll work with you to find a better match or process a return according to our terms of service.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
            <span className="mr-2 flex h-2 w-2 rounded-full bg-blue-400"></span>
            Common Questions
          </div>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="mb-16 text-gray-400">
            Everything you need to know about Ignition and our AI-powered car
            marketplace
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <button
                className="flex w-full items-center justify-between p-6 text-left"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full border border-blue-500 text-blue-500 transition-transform duration-200 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
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
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="border-t border-white/10 p-6 text-gray-400">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
