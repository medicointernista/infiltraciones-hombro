import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import Benefits from "@/components/sections/benefits";
import Services from "@/components/sections/services";
import ExperienceAndAbout from "@/components/sections/experience-and-about";
import FAQ from "@/components/sections/faq";
import CtaBanner from "@/components/sections/cta-banner";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8F9FA]">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <Benefits />
        <Services />
        <ExperienceAndAbout />
        <FAQ />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
