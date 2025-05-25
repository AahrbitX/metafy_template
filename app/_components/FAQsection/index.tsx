"use client";

import React from "react";
import { faqData } from "./faqdata";

const FAQAccordion = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  const contentRef = React.useRef<HTMLDivElement>(null);

  return (
    <div
      className={`relative p-[2px] rounded-xl cursor-pointer group`}
      onClick={onClick}
    >
      <div
        className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        } bg-linear-to-r from-primary via-secondary to-tertiary`}
      />

      <div className="relative bg-white rounded-[10px] p-4">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-lg">{question}</h3>
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <div
          ref={contentRef}
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: isOpen
              ? contentRef.current?.scrollHeight || "1000px"
              : "0",
            opacity: isOpen ? 1 : 0,
          }}
        >
          <div className="mt-4 text-notblack/80 text-base">{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 bg-notwhite">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-dmsans font-bold mb-4 heading-gradient">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-notblack/80 max-w-xl">
              Find answers to common questions about our platform, features, and
              how we can help your team succeed.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <FAQAccordion
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
