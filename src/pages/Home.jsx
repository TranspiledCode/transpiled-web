// src/App.js
import Hero from 'organisms/Hero';
import ContactCTA from '../components/organisms/ContactCTA';
import ServicesSection from 'organisms/ServicesSection';
import WhySection from 'organisms/WhySection';

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhySection />
      <ContactCTA />
    </>
  );
};

export default Home;
