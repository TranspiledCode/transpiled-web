// src/App.js
import Hero from 'organisms/Hero';
import Footer from 'organisms/Footer';
import SampleHeader from 'organisms/SampleHeader';
import ContactSection from 'organisms/ContactSection';
import ServicesSection from 'organisms/ServicesSection';
import WhySection from 'organisms/WhySection';

const Home = () => {
  return (
    <>
      <SampleHeader />
      <Hero />
      <ServicesSection />
      <WhySection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
