import React from 'react';
import { Phone } from 'lucide-react';

const CtaBanner = () => {
  return (
    <section className="bg-white py-12 md:py-20 px-6">
      <div className="container mx-auto max-w-[1280px]">
        <div className="relative overflow-hidden rounded-[2rem] bg-white border border-[#E2E8F0] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05),0_8px_10px_-6px_rgba(0,0,0,0.05)]">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#E1F1F6] rounded-full blur-3xl opacity-30 pointer-events-none"></div>
          
            <div className="relative px-8 py-10 md:px-12 md:py-16 lg:px-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-10">
              {/* Content Area */}
              <div className="max-w-2xl text-left">
                <h2 className="text-[1.875rem] md:text-[2.25rem] font-semibold tracking-tight text-[#0F172A] leading-[1.2]">
                  ¿Buscas Alivio para tu Dolor Articular en Rodilla o Hombro?
                </h2>
                <p className="mt-4 text-[1rem] md:text-[1.125rem] leading-[1.6] text-[#64748B]">
                  No permitas que el dolor limite tu vida. Agenda hoy mismo tu consulta de infiltración de ácido hialurónico con el Dr. Willmer Obregón en Medellín.
                </p>
              </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <a
                href="https://api.whatsapp.com/send?phone=573053979628&text=Hola%20vi%20el%20sitio%20en%20Google%2C%20quiero%20informaci%C3%B3n%20de%20la%20consulta."
                className="flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-gradient-to-r from-[#1080A0] to-[#0D6E8A] px-10 py-5 text-[1rem] font-bold text-white shadow-[0_4px_14px_0_rgba(16,128,160,0.39)] transition-all hover:scale-[1.02] hover:opacity-95 active:scale-95 w-full sm:w-auto"
              >
                Enviar WhatsApp
              </a>
              <a
                href="tel:+573053979628"
                className="flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#E1F1F6] px-10 py-5 text-[1rem] font-bold text-[#1080A0] transition-all hover:bg-[#D4EAF1] hover:scale-[1.02] active:scale-95 w-full sm:w-auto"
              >
                <Phone className="h-5 w-5" strokeWidth={2.5} />
                Llamar por teléfono
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;