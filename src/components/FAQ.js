"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I join?",
      answer: "To join do this that and whatever! To join do this that and whatever! To join do this that and whatever!"
    },
    {
      question: "How do I join?",
      answer: "To join do this that and whatever! To join do this that and whatever! To join do this that and whatever!"
    },
    {
      question: "How do I join?",
      answer: "To join do this that and whatever! To join do this that and whatever! To join do this that and whatever!"
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#77A5B5] py-16 px-8 md:px-16">
      {/* FLASHED! Star Badge */}
      <div className="absolute bottom-8 left-8 z-10 transform -rotate-12">
        <div className="bg-[#E4B834] rounded-full px-6 py-4 shadow-lg">
          <p className="text-white font-bold text-lg uppercase font-sans">FLASHED!</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#E4B834] font-sans mb-12 text-center underline decoration-4 underline-offset-4">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-1">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex items-center justify-between gap-4 group"
                >
                  <h3 className="text-[#E4B834] font-sans text-xl font-semibold">
                    {faq.question}
                  </h3>
                  <span className={`text-[#E4B834] text-2xl transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {faq.answer && openIndex === index && (
                  <div className="mt-2 overflow-hidden animate-fadeIn">
                    <p className="text-gray-200 font-sans text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

