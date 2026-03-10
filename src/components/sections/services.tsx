import React from 'react';
import Image from 'next/image';

const services = [
    {
      title: "Tratamiento de Hombro",
      description: "Infiltraciones precisas para bursitis y tendinitis, recuperando el rango de movimiento sin dolor.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/50b6fa5e-f10d-49ed-8273-b0052f67706b/Tratamiento-de-Hombro-1769344249530.png?width=8000&height=8000&resize=contain",
      link: "#contacto",
      alt: "Infiltración de ácido hialurónico en hombro para tratamiento de bursitis y tendinitis en Medellín - Dr. Willmer Obregón"
    },
    {
      title: "Tratamiento de Rodilla",
      description: "Viscosuplementación avanzada para artrosis y lesiones de tejidos blandos, mejorando la lubricación articular.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/50b6fa5e-f10d-49ed-8273-b0052f67706b/Tratamiento-de-Rodilla-hero-1769344113093.jpg?width=8000&height=8000&resize=contain",
      link: "#contacto",
      alt: "Viscosuplementación con ácido hialurónico para tratamiento de rodilla, artrosis y dolor articular en Medellín"
    },
    {
      title: "Ácido Hialurónico",
      description: "Actúa como lubricante y amortiguador natural, reduciendo la fricción y el dolor de forma segura.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/50b6fa5e-f10d-49ed-8273-b0052f67706b/Acido-Hialuronico-1769344216156.jpg?width=8000&height=8000&resize=contain",
      link: "#contacto",
      alt: "Infiltraciones de ácido hialurónico como lubricante y amortiguador articular natural para alivio del dolor"
    }
];

export default function Services() {
  return (
    <section id="tratamiento" className="relative bg-[#F8F9FA] py-12 md:py-20">
      <div className="container mx-auto px-6 max-w-[1280px]">
        {/* Header Content */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-[1.875rem] font-semibold tracking-tight text-[#0F172A] leading-[1.2] md:text-[2.25rem]">
            Tratamientos con Infiltraciones de Ácido Hialurónico en Medellín
          </h2>
          <p className="mt-4 text-[1rem] leading-[1.6] text-[#64748B] md:text-[1.125rem]">
            Las infiltraciones de ácido hialurónico reducen la fricción y el dolor en articulaciones como rodilla y hombro. Procedimiento rápido, seguro y ambulatorio, realizado en consultorio médico especializado para maximizar tu recuperación y movilidad.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-[#E2E8F0] bg-white/60 backdrop-blur-[12px] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Card Image Wrapper */}
              <figure className="relative h-44 w-full md:h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#F8F9FA]/70 via-transparent to-transparent" />
              </figure>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-[1.125rem] font-semibold tracking-tight text-[#0F172A] leading-[1.4] transition-colors group-hover:text-[#1080A0]">
                  {service.title} en Medellín
                </h3>
                <p className="mt-3 text-[0.875rem] leading-[1.6] text-[#64748B]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Indications Section */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#E2E8F0] shadow-sm">
          <h3 className="text-[1.5rem] font-semibold text-[#0F172A] mb-6">Indicaciones del Tratamiento con Ácido Hialurónico</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-[#64748B] leading-relaxed">
                Este tratamiento está especialmente indicado para pacientes que buscan una alternativa no quirúrgica y efectiva para:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Bursitis y tendinitis",
                  "Artritis o desgaste articular",
                  "Lesiones en tejidos blandos",
                  "Molestias o dolor persistente sin razón aparente"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#1E293B] font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1080A0]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center bg-[#F1F5F9] rounded-2xl p-6">
              <p className="text-center italic text-[#64748B]">
                "Nuestro objetivo es devolverte la movilidad que necesitas para disfrutar tu día a día sin limitaciones."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#E1F1F6] opacity-30 blur-3xl" />
    </section>
  );
}
