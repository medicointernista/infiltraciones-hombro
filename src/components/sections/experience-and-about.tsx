import React from 'react';
import { 
  CheckCircle2, 
  Stethoscope, 
  ClipboardCheck, 
  ShieldCheck, 
  HeartHandshake, 
  Medal,
  Award
} from 'lucide-react';

export default function ExperienceAndAbout() {
  const expertiseTags = [
    "Obesidad y control de peso", "Diabetes e Hipertensión", "Enfermedades Renales",
    "Enfermedades de Tiroides", "Gastritis", "Hipotiroidismo",
    "Colon Irritable", "Fibromialgia", "Enfermedades Crónicas"
  ];

  const expectationList = [
    "Historia clínica y evaluación completa.",
    "Revisión de exámenes y medicamentos.",
    "Diagnóstico diferencial y prioridades.",
    "Plan de tratamiento + prevención.",
    "Seguimiento continuo vía WhatsApp."
  ];

  return (
    <section id="sobre-mi" className="bg-white py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Trajectory & Experience */}
          <div className="relative">
            <div className="rounded-[2rem] border border-[#E2E8F0] bg-white p-8 md:p-10 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05),0_8px_10px_-6px_rgba(0,0,0,0.05)]">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#1080A0] mb-3 block">
                Conoce al especialista
              </span>
              <h2 className="text-[1.875rem] font-semibold tracking-tight text-[#0F172A] leading-[1.2] mb-6">
                Dr. Willmer Obregón: trayectoria y experiencia
              </h2>
              <p className="text-[1rem] leading-[1.6] text-[#64748B] mb-8">
                Médico con más de 15 años de experiencia, formado en Venezuela y consolidado en Medellín. Experto en tratamientos no quirúrgicos y cuidado integral de la salud con un enfoque empático y personalizado.
              </p>

              <div className="mb-8">
                <p className="text-[14px] font-bold text-[#1E293B] mb-4">Áreas de experiencia:</p>
                <div className="flex flex-wrap gap-2">
                  {expertiseTags.map((tag, index) => (
                    <div 
                      key={index} 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E2E8F0] bg-[#F8F9FA] text-[13px] font-medium text-[#64748B] transition-colors hover:border-[#1080A0] hover:text-[#1080A0]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1080A0]" />
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#E1F1F6]/50 border border-[#E2E8F0] shadow-sm">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-white text-[#1080A0] border border-[#E2E8F0]">
                    <Medal className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[20px] font-bold text-[#1E293B] leading-none">15 años</p>
                    <p className="text-[12px] font-medium text-[#64748B] uppercase tracking-wide mt-1">De experiencia</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8F9FA] border border-[#E2E8F0]">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-white text-[#1080A0] border border-[#E2E8F0]">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider mb-1">Tecnología:</p>
                    <p className="text-[11px] leading-tight text-[#1E293B] font-medium">Diagnóstico avanzado</p>
                    <p className="text-[11px] leading-tight text-[#1E293B] font-medium">Seguimiento digital</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sobre mí & Clinical Approach */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-[2.25rem] font-semibold tracking-tight text-[#0F172A] leading-[1.2] mb-4">
                Enfoque Integral
              </h2>
              <p className="text-[1.0625rem] leading-[1.6] text-[#64748B]">
                Nuestra atención considera aspectos físicos y emocionales para un cuidado completo. Construimos un plan de salud basado en el compromiso ético y profesional.
              </p>
            </div>

            {/* Focus areas grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="p-5 rounded-2xl border border-[#E2E8F0] bg-[#F8F9FA]/30 hover:bg-white hover:shadow-medical transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#E1F1F6] flex items-center justify-center text-[#1080A0] mb-4">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <h4 className="text-[1rem] font-bold text-[#0F172A] mb-1">Atención empática</h4>
                <p className="text-[13px] leading-relaxed text-[#64748B]">Escucha activa y trato humano en cada consulta.</p>
              </div>

              {/* Card 2 */}
              <div className="p-5 rounded-2xl border border-[#E2E8F0] bg-[#F8F9FA]/30 hover:bg-white hover:shadow-medical transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#E1F1F6] flex items-center justify-center text-[#1080A0] mb-4">
                  <ClipboardCheck className="w-5 h-5" />
                </div>
                <h4 className="text-[1rem] font-bold text-[#0F172A] mb-1">Seguimiento</h4>
                <p className="text-[13px] leading-relaxed text-[#64748B]">Acompañamiento continuo vía WhatsApp.</p>
              </div>

              {/* Card 3 */}
              <div className="p-5 rounded-2xl border border-[#E2E8F0] bg-[#F8F9FA]/30 hover:bg-white hover:shadow-medical transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#E1F1F6] flex items-center justify-center text-[#1080A0] mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-[1rem] font-bold text-[#0F172A] mb-1">Ética Profesional</h4>
                <p className="text-[13px] leading-relaxed text-[#64748B]">Compromiso ético y formación constante.</p>
              </div>

              {/* Card 4 */}
              <div className="p-5 rounded-2xl border border-[#E2E8F0] bg-[#F8F9FA]/30 hover:bg-white hover:shadow-medical transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#E1F1F6] flex items-center justify-center text-[#1080A0] mb-4">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="text-[1rem] font-bold text-[#0F172A] mb-1">Personalización</h4>
                <p className="text-[13px] leading-relaxed text-[#64748B]">Tratamientos adaptados a tu estilo de vida.</p>
              </div>
            </div>

            {/* Numbered Expectation List */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-7 shadow-sm">
              <h4 className="text-[1rem] font-bold text-[#0F172A] mb-5">
                ¿Qué puedes esperar en tu consulta?
              </h4>
              <ul className="space-y-3">
                {expectationList.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#1080A0] text-white text-[12px] font-bold">
                      {index + 1}
                    </span>
                    <span className="text-[14px] font-medium text-[#64748B] pt-0.5">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}