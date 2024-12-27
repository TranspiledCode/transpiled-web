// src/App.js
import HomeHero from 'organisms/HomeHero';
import ContactCTA from '../components/organisms/PageCTA';
import ServicesSection from 'organisms/ServicesSection';
import WhySection from 'organisms/WhySection';

const Home = () => {
  return (
    <>
      <HomeHero />
      <ServicesSection />
      <WhySection />
      <ContactCTA />
    </>
  );
};

export default Home;
