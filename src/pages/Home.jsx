// src/App.js
import Hero from 'organisms/Hero';
import ContactSection from 'organisms/ContactSection';
import ServicesSection from 'organisms/ServicesSection';
import WhySection from 'organisms/WhySection';

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhySection />
      <ContactSection />
    </>
  );
};

export default Home;
