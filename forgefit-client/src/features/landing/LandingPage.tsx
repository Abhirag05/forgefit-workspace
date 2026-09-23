import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';

export function LandingPage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CtaSection />
      <ContactSection />
    </>
  );
}
