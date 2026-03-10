"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div 
      className="border border-[#E2E8F0] bg-white rounded-[1.5rem] mb-4 overflow-hidden transition-all duration-300 shadow-sm"
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-[#F8F9FA]"
        aria-expanded={isOpen}
      >
        <span className="text-[1.125rem] font-semibold text-[#0F172A] leading-[1.4]">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-[#1080A0] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 text-[1rem] leading-[1.6] text-[#64748B]">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
      {
        question: "¿Es doloroso?",
        answer: "Puede haber una ligera molestia durante la inyección, pero el procedimiento es rápido y no causa un dolor significativo.",
      },
      {
        question: "¿Para quién está indicado?",
        answer: "Para quienes sufren inflamación o dolor persistente en hombro o rodillas por bursitis, tendinitis, artritis o desgaste articular.",
      },
      {
        question: "¿Cuánto duran los efectos?",
        answer: "Los efectos suelen durar varios meses, dependiendo de cada persona; el tratamiento se puede repetir según la indicación médica.",
      },
      {
        question: "¿Es seguro el ácido hialurónico?",
        answer: "Sí, el ácido hialurónico es una sustancia natural en el cuerpo, por lo que el riesgo de rechazo o efectos secundarios es mínimo.",
      },
    ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="relative bg-[#F8F9FA] py-12 md:py-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Side: Heading */}
          <div className="lg:w-1/3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1080A0]/10 bg-[#E1F1F6] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#1080A0] mb-4">
              <HelpCircle className="h-3.5 w-3.5" />
              Resolviendo Tus Dudas
            </div>
            <h2 className="text-[1.875rem] md:text-[2.25rem] font-semibold tracking-tight text-[#0F172A] leading-[1.2] mb-4">
              Preguntas Frecuentes sobre Infiltraciones de Ácido Hialurónico
            </h2>
            <p className="text-[1rem] leading-[1.6] text-[#64748B]">
              Encuentra respuestas a las preguntas más comunes sobre el tratamiento con infiltraciones de ácido hialurónico y los servicios médicos del Dr. Willmer Obregón en Medellín.
            </p>
          </div>

          {/* Right Side: Accordion */}
          <div className="lg:w-2/3">
            <div className="flex flex-col">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Aesthetic decorative element */}
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#E1F1F6] opacity-30 blur-3xl"></div>
    </section>
  );
};

export default FAQ;