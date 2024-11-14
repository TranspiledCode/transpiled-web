// src/App.js
import Hero from 'organisms/Hero';
import Footer from 'organisms/Footer';
import SampleHeader from 'organisms/SampleHeader';
import ContactSection from 'organisms/ContactSection';
import ServicesSection from 'organisms/ServicesSection';
import TestimonialsSection from 'organisms/TestimonialsSection';

const Home = () => {
  return (
    <>
      <SampleHeader />
      <Hero />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
