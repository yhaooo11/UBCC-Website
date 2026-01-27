"use client";

import { useState } from "react";
import faqs from "@/data/faqs.json";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="mx-auto max-w-4xl mt-30">
      <h2 className="mb-6 font-serif text-6xl">before your send...</h2>

      <div>
        {faqs.map((faq, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-1">
              <button
                onClick={() => toggleFAQ(index)}
                className="bg-[#1E1E1E] w-full p-4 border-white border text-left flex flex-col gap-4 group"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-pp-neue-montreal text-xl font-semibold">
                    {faq.question}
                  </h3>
                  <span className={`text-2xl transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </div>
                {faq.answer && openIndex === index && (
                  <div className="overflow-hidden animate-fadeIn">
                    <p className="text-gray-200 font-pp-neue-montreal text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
