import React from 'react';
import { HeartPulse, Activity, Zap, Layers, Scissors } from 'lucide-react';

const benefitsData = [
  {
    icon: <Zap className="w-6 h-6" />,
    text: "Alivio casi inmediato del dolor articular."
  },
  {
    icon: <Activity className="w-6 h-6" />,
    text: "Reducción de la inflamación con medicamentos localizados."
  },
  {
    icon: <HeartPulse className="w-6 h-6" />,
    text: "Maximiza la eficacia y minimiza efectos secundarios."
  },
  {
    icon: <Layers className="w-6 h-6" />,
    text: "Mejora la función articular y el rango de movimiento."
  },
  {
    icon: <Scissors className="w-6 h-6" />,
    text: "Alternativa no quirúrgica sin largos tiempos de recuperación."
  }
];

const Benefits = () => {
  return (
    <section 
      id="beneficios" 
      className="relative bg-white py-12 md:py-20 overflow-hidden"
    >
      {/* Decorative background element */}
      <div 
        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#E1F1F6] rounded-full blur-3xl opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-[1.875rem] font-semibold tracking-tight text-[#0F172A] leading-[1.2] md:text-[2.25rem]">
            Beneficios de las Infiltraciones de Ácido Hialurónico en Rodilla y Hombro
          </h2>
          <p className="mt-4 text-[1rem] leading-[1.6] text-[#64748B] md:text-[1.125rem]">
            Descubre cómo las infiltraciones de ácido hialurónico pueden transformar tu movilidad, reducir el dolor articular y mejorar tu bienestar diario en Medellín.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsData.map((benefit, index) => (
            <div 
              key={index}
              className={`group flex items-start gap-4 p-6 rounded-[1.5rem] border border-[#E2E8F0] bg-[#F8F9FA]/50 transition-all duration-300 hover:border-[#1080A0] hover:bg-white hover:shadow-lg ${
                index === 3 || index === 4 ? '' : ''
              }`}
            >
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-white text-[#1080A0] shadow-sm border border-[#E2E8F0] group-hover:bg-[#1080A0] group-hover:text-white transition-colors duration-300">
                {benefit.icon}
              </div>
              <p className="text-[1rem] font-medium leading-[1.5] text-[#1E293B] mt-1">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;