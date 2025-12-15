"use client";

import { useState } from "react";

interface Question {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  questions: Question[];
}

export function FAQAccordion({ questions }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {questions.map((item, index) => (
        <div key={index} className="border-b border-[var(--divider)] last:border-b-0">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full py-4 flex items-center justify-between text-left group"
          >
            <span className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors pr-4">
              {item.question}
            </span>
            <span
              className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index
                  ? "bg-[var(--primary)] text-white rotate-180"
                  : "bg-[var(--bg-light)] text-[var(--text-secondary)]"
                }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 pb-4" : "max-h-0"
              }`}
          >
            <p className="text-[var(--text-secondary)] leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
