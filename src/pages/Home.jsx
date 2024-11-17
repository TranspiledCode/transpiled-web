// src/App.js
import Hero from 'components/Hero';
import Footer from 'components/Footer';
import Header from 'components/Header';
import SampleHeader from 'components/SampleHeader';
import ContactSection from '../components/ContactSection';
import ServicesSection from '../components/ServicesSection';
import WhySection from '../components/WhySection';

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
