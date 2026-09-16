import React from 'react';
import Navbar from './components/common/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import DreamHomeBanner from './components/sections/DreamHomeBanner';
import PropertiesSection from './components/sections/PropertiesSection';
import WhyBuildSection from './components/sections/WhyBuildSection';
import ProjectsPortfolio from './components/sections/ProjectsPortfolio';
import InsightsSection from './components/sections/InsightsSection';
import ReadyToBuildCTA from './components/sections/ReadyToBuildCTA';
import ContactFormSection from './components/sections/ContactFormSection';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter selection:bg-brand-orange selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DreamHomeBanner />
        <PropertiesSection />
        <WhyBuildSection />
        <ProjectsPortfolio />
        <InsightsSection />
        <ReadyToBuildCTA />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
