// src/App.js
import Hero from 'components/Hero';
import Footer from 'components/Footer';
import Header from 'components/Header';
import ContactSection from '../components/ContactSection';
import ServicesSection from '../components/ServicesSection';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
