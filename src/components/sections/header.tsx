"use client";

import React from "react";

const Header = () => {
  const logoAsset = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/50b6fa5e-f10d-49ed-8273-b0052f67706b-purple-weasel-609287-hostingersite-com/assets/images/wilmer-obregon-logo-DT1tnFmb-1-1.png";

  return (
    <header className="relative w-full z-50">
      {/* Top Banner Bar */}
      <div className="bg-[#1080A0] text-[#F8FAFC]">
        <div className="container mx-auto px-6 py-2 max-w-[1400px]">
            <div className="text-center">
              <span className="text-[14px] font-semibold tracking-wide uppercase">
                Infiltraciones de Ácido Hialurónico en Medellín
              </span>
            </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 border-b border-[#E2E8F0]">
        <div className="container mx-auto px-6 py-4 max-w-[1400px]">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <a 
              className="inline-flex items-center gap-2 rounded-lg py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0]" 
              aria-label="Ir al inicio" 
              href="/"
            >
              <img 
                src={logoAsset} 
                alt="Logo del Dr. Willmer Obregón" 
                className="h-14 md:h-16 w-auto"
              />
            </a>

            {/* CTAs */}
            <div className="flex items-center gap-3">
                <a
                  href="https://api.whatsapp.com/send?phone=573011505174&text=Hola%20vi%20el%20sitio%20en%20Google%2C%20quiero%20informaci%C3%B3n%20de%20la%20consulta."
                  className="items-center justify-center gap-2 whitespace-nowrap rounded-lg text-[15px] font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 inline-flex bg-gradient-to-r from-[#1080A0] to-[#0D6E8A] text-white shadow-lg hover:shadow-[#1080A0]/30 hover:scale-[1.02] h-[48px] px-6 py-2"
                >
                Agendar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
