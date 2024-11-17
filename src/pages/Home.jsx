// src/App.js
import Hero from 'components/Hero';
import ContactSection from '../components/ContactSection';
import ServicesSection from '../components/ServicesSection';
import WhySection from '../components/WhySection';

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
