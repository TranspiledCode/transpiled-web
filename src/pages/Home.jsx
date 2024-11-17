// src/App.js
import Hero from 'organisms/Hero';
import ContactSection from 'organisms/ContactSection';
import ServicesSection from 'organisms/ServicesSection';
import TestimonialsSection from 'organisms/TestimonialsSection';

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};

export default Home;
