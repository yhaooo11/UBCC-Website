"use client";

import { useState } from "react";
import faqs from "@/data/faqs.json";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full bg-[#77A5B5] py-16 px-8 md:px-16">
      {/* FLASHED! Star Badge */}
      <div className="hidden md:block absolute bottom-45 left-20 z-10 transform -rotate-12">
        <div className="relative w-56 h-56 md:w-60 md:h-60">
          <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-lg">
            <polygon
              points="50,5 61,35 95,35 67,55 78,85 50,65 22,85 33,55 5,35 39,35"
              fill="#FFCE3C"
              stroke="black"
              strokeWidth="1"
              strokeLinejoin="round"
            />
          </svg>
          <p
            className="absolute inset-0 flex items-center justify-center text-[#E1DFC6] font-bold text-sm md:text-lg uppercase font-sans"
            style={{
              textShadow:
                '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
            }}
          >
            FLASHED!
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#FFCE3C] font-sans mb-12 text-center underline decoration-4 underline-offset-4">
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
                  <h3 className="text-[#FFCE3C] font-sans text-xl font-semibold">
                    {faq.question}
                  </h3>
                  <span className={`text-[#FFCE3C] text-2xl transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
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
