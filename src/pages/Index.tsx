import { MapboxProvider } from '@/contexts/MapboxContext';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustBadges from '@/components/TrustBadges';
import AboutSection from '@/components/AboutSection';
import ProcessSection from '@/components/ProcessSection';
import JourneySection from '@/components/JourneySection';
import WhyChooseUs from '@/components/WhyChooseUs';
import PortfolioSection from '@/components/PortfolioSection';
import ClientsSection from '@/components/ClientsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import ParticleBackground from '@/components/ParticleBackground';

const Index = () => {
  return (
    <MapboxProvider>
      <div className="min-h-screen bg-background overflow-x-hidden relative">
        <ParticleBackground />
        <ScrollProgress />
        <Navbar />
        <HeroSection />
        <TrustBadges />
        <AboutSection />
        <ProcessSection />
        <JourneySection />
        <WhyChooseUs />
        <PortfolioSection />
        <ClientsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <ContactSection />
        <Footer />
        <WhatsAppButton />
      </div>
    </MapboxProvider>
  );
};

export default Index;
