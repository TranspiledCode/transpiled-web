// src/App.js
import Hero from 'components/Hero';
import Footer from 'components/Footer';
import SampleHeader from 'components/SampleHeader';
import ContactSection from '../components/ContactSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';

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
