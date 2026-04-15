"use client";

import React from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Youtube, ChevronUp } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F8F9FA] pt-16 md:pt-20">
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
            {/* Dr. Willmer Obregón Professional Bio Column */}
            <div id="contacto" className="bg-white rounded-[1.5rem] p-8 border border-[#E2E8F0] shadow-sm flex flex-col items-start">
              <h3 className="text-[1.125rem] font-semibold text-[#0F172A] mb-4">Dr. Willmer Obregón</h3>
              <p className="text-[0.875rem] leading-[1.6] text-[#64748B] mb-6">
                Médico con más de 15 años de experiencia, experto en tratamientos no quirúrgicos y cuidado integral. Especializado en infiltraciones de ácido hialurónico para mejorar tu movilidad y calidad de vida.
              </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/tu.internista.favorito/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-[#E2E8F0] text-[#1080A0] transition-colors hover:bg-[#E1F1F6]"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/tu_internista_favorito/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-[#E2E8F0] text-[#1080A0] transition-colors hover:bg-[#E1F1F6]"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.youtube.com/@tuinternistafavorito"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-[#E2E8F0] text-[#1080A0] transition-colors hover:bg-[#E1F1F6]"
                aria-label="Youtube"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@tuinternistafavorito"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-[#E2E8F0] text-[#1080A0] transition-colors hover:bg-[#E1F1F6]"
                aria-label="TikTok"
              >
                <FaTiktok size={18} />
              </a>
            </div>
          </div>

            {/* Contact Information Column */}
            <div className="bg-white rounded-[1.5rem] p-8 border border-[#E2E8F0] shadow-sm">
              <h3 className="text-[1.125rem] font-semibold text-[#0F172A] mb-6">Información de contacto</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="text-[#1080A0] mt-1 shrink-0" size={20} />
                  <span className="text-[0.875rem] leading-[1.5] text-[#64748B]">
                    Biencrecer Cra 81 #27-17 Consultorio 1, Belén La Palma, Medellín, Antioquia
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-[#1080A0] shrink-0" size={20} />
                  <a href="tel:+573155930076" className="text-[0.875rem] text-[#64748B] hover:text-[#1080A0] transition-colors">
                    +57 315 593 0076
                  </a>
                </li>
              </ul>
            </div>

          {/* Correo y horarios Column */}
          <div className="bg-white rounded-[1.5rem] p-8 border border-[#E2E8F0] shadow-sm">
            <h3 className="text-[1.125rem] font-semibold text-[#0F172A] mb-6">Correo y horarios</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center gap-3">
                <Mail className="text-[#1080A0] shrink-0" size={20} />
                <a href="mailto:consulta@internistamedellin.com" className="text-[0.875rem] text-[#64748B] hover:text-[#1080A0] transition-colors">
                  consulta@internistamedellin.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#1080A0] shrink-0" size={20} />
                <a href="mailto:asistente@internistamedellin.com" className="text-[0.875rem] text-[#64748B] hover:text-[#1080A0] transition-colors">
                  asistente@internistamedellin.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#1080A0] shrink-0" size={20} />
                <a href="mailto:estudios@internistamedellin.com" className="text-[0.875rem] text-[#64748B] hover:text-[#1080A0] transition-colors">
                  estudios@internistamedellin.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#1080A0] shrink-0" size={20} />
                <a href="mailto:procedimientos@internistamedellin.com" className="text-[0.875rem] text-[#64748B] hover:text-[#1080A0] transition-colors">
                  procedimientos@internistamedellin.com
                </a>
              </li>
            </ul>
            <div className="pt-2">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="text-[#1080A0]" size={18} />
                <span className="text-[0.75rem] font-bold text-[#64748B] uppercase tracking-wider">Horario de atención</span>
              </div>
              <p className="text-[0.875rem] text-[#64748B] ml-6 opacity-90">Lunes a viernes: 8am a 5pm</p>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="border-t border-[#E2E8F0] py-8 mt-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-[0.875rem] text-[#64748B]">
                <a href="https://localrank.com.co/soluciona" target="_blank" rel="noopener noreferrer" className="hover:text-[#1080A0] transition-colors">
                  2026 LocalRank. Todos los derechos reservados.
                </a>
              </div>

            <div className="flex items-center">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/50b6fa5e-f10d-49ed-8273-b0052f67706b-purple-weasel-609287-hostingersite-com/assets/images/wilmer-obregon-logo-DT1tnFmb-1-1.png"
                alt="Dr. Willmer Obregón - Médico Internista en Medellín"
                className="h-10 md:h-12 w-auto grayscale opacity-50"
                width="100"
                height="48"
                loading="lazy"
              />
            </div>

            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-[0.875rem] font-medium text-[#64748B] hover:text-[#1080A0] transition-colors focus:outline-none"
            >
              Volver arriba
              <ChevronUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;