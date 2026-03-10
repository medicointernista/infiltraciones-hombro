import React from 'react';
import Image from 'next/image';
import { Sparkles, PhoneCall } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#F8F9FA]">
      {/* Hero Glow Effect */}
      <div className="hero-glow pointer-events-none absolute inset-0 opacity-40" 
           style={{ 
             background: 'radial-gradient(circle at 50% 50%, rgba(16, 128, 160, 0.05) 0%, transparent 80%)' 
           }}>
      </div>

      <div className="container relative mx-auto px-6 py-12 md:py-16 lg:py-20 max-w-[1280px]">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          
          {/* Left Content Column */}
          <div className="relative z-10 animate-in fade-in slide-in-from-bottom-5 duration-1000">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/70 px-4 py-2 text-sm font-medium text-[#1E293B] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] backdrop-blur-md">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#E1F1F6] text-[#1080A0]">
                <Sparkles className="h-4 w-4" />
              </span>
              Comprometido con tu salud y bienestar
            </div>

              {/* Headline */}
              <h1 className="mt-6 text-balance text-[2.25rem] font-semibold tracking-tight text-[#0F172A] leading-tight md:text-[3rem] lg:text-[3.75rem]">
                Infiltraciones de <span className="text-[#1080A0]">Ácido Hialurónico</span> en Medellín | Dr. Willmer Obregón - Médico Internista
              </h1>

            {/* Description */}
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-[#64748B] md:text-lg">
              Recupera tu movilidad y reduce el dolor con un tratamiento seguro, rápido y ambulatorio. Mejora tu calidad de vida con la experiencia del Dr. Willmer Obregón.
            </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://api.whatsapp.com/send?phone=573009895852&text=Hola%20vi%20el%20sitio%20en%20Google%2C%20quiero%20informaci%C3%B3n%20de%20la%20consulta."
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-gradient-to-r from-[#1080A0] to-[#0D6E8A] px-10 py-4 text-base font-medium text-white shadow-[0_4px_14px_0_rgba(16,128,160,0.39)] transition-all hover:scale-[1.02] hover:opacity-95 active:scale-95"
                >
                  Contáctame vía WhatsApp
                </a>
                <a
                  href="tel:+573009895852"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#E1F1F6] px-10 py-4 text-base font-medium text-[#1080A0] transition-all hover:bg-[#D4EAF1] hover:scale-[1.02] active:scale-95"
                >
                <PhoneCall className="h-4 w-4" />
                Llama para una cita
              </a>
            </div>

            {/* Feature Tags */}
            <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white bg-white/80 p-4 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] backdrop-blur-sm">
                <dt className="text-[10px] font-medium uppercase tracking-wider text-[#64748B]">Atención</dt>
                <dd className="mt-0.5 text-xs font-semibold text-[#1E293B]">Personalizada</dd>
              </div>
              <div className="rounded-2xl border border-white bg-white/80 p-4 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] backdrop-blur-sm">
                <dt className="text-[10px] font-medium uppercase tracking-wider text-[#64748B]">Enfoque</dt>
                <dd className="mt-0.5 text-xs font-semibold text-[#1E293B]">Integral</dd>
              </div>
              <div className="col-span-2 sm:col-span-1 rounded-2xl border border-white bg-white/80 p-4 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] backdrop-blur-sm">
                <dt className="text-[10px] font-medium uppercase tracking-wider text-[#64748B]">Ubicación</dt>
                <dd className="mt-0.5 text-xs font-semibold text-[#1E293B]">Medellín</dd>
              </div>
            </dl>
          </div>

          {/* Right Image Column */}
          <div className="relative z-0 group animate-in fade-in zoom-in duration-1000 delay-200">
            {/* Teal Glow Ambient Effect */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-[#1080A0] opacity-10 blur-[50px] animate-pulse"></div>
            
            <figure className="relative overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-transform duration-500 hover:scale-[1.01]">
                <div className="relative h-[450px] w-full md:h-[650px]">
                      <Image
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/50b6fa5e-f10d-49ed-8273-b0052f67706b/Tratamiento-de-Rodilla-hero-1769344113093.jpg?width=8000&height=8000&resize=contain"
                        alt="Infiltraciones de ácido hialurónico para tratamiento de rodilla en Medellín - Dr. Willmer Obregón, médico internista especializado en dolor articular y movilidad"
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        loading="eager"
                      />
                </div>
              
              {/* Floating Caption Overlay */}
              <figcaption className="absolute bottom-6 left-6 right-6">
                <div className="rounded-2xl bg-white/75 p-5 shadow-lg blur-none backdrop-blur-xl border border-white/20">
                  <p className="text-base font-semibold text-[#1E293B]">Tratamiento Avanzado</p>
                  <p className="mt-0.5 text-xs font-medium text-[#1080A0] uppercase tracking-wide">Ácido Hialurónico</p>
                </div>
              </figcaption>
            </figure>

            {/* Bottom-left corner glow */}
            <div className="pointer-events-none absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-[#E1F1F6] opacity-60 blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;