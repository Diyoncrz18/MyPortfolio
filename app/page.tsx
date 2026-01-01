'use client';

import dynamic from 'next/dynamic';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import PortfolioSection from './components/sections/PortfolioSection';
import CertificatesSection from './components/sections/CertificatesSection';
import ContactSection from './components/sections/ContactSection';

// Dynamic import for VantaBackground to avoid SSR issues
const VantaBackground = dynamic(() => import('./components/ui/VantaBackground'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <VantaBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <CertificatesSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

