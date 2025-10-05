import dynamic from 'next/dynamic';

// Dynamically import components with proper typing
const Header = dynamic(() => import('@/components/header').then(mod => mod.Header));
const HeroSection = dynamic(() => import('@/components/hero-section').then(mod => mod.HeroSection));
const WhyChooseSection = dynamic(() => import('@/components/why-choose-section').then(mod => mod.WhyChooseSection));
const AboutSection = dynamic(() => import('@/components/about-section').then(mod => mod.AboutSection));
const ServicesSection = dynamic(() => import('@/components/services-section').then(mod => mod.ServicesSection));
const PortfolioSection = dynamic(() => import('@/components/portfolio-section').then(mod => mod.PortfolioSection));
const PricingSection = dynamic(() => import('@/components/pricing-section').then(mod => mod.PricingSection));
const FaqSection = dynamic(() => import('@/components/faq-section').then(mod => mod.FaqSection));
const Footer = dynamic(() => import('@/components/footer').then(mod => mod.Footer));

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <PortfolioSection />
      <PricingSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
