// src/App.js
import Hero from 'components/Hero';
import Footer from 'components/Footer';
import SampleHeader from 'components/SampleHeader';
import ContactSection from '../components/ContactSection';
import ServicesSection from '../components/ServicesSection';

const Home = () => {
  return (
    <>
      <SampleHeader />
      <Hero />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
