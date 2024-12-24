// src/App.js
import Hero from 'organisms/Hero';
import ServicesContact from '../components/organisms/ServicesContact';
import ServicesSection from 'organisms/ServicesSection';
import WhySection from 'organisms/WhySection';

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhySection />
      <ServicesContact />
    </>
  );
};

export default Home;
