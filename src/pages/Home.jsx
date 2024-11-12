// src/App.js
import Hero from 'components/Hero';
import Footer from 'components/Footer';
import Header from 'components/Header';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
