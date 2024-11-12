// src/App.js
import Hero from 'components/Hero';
import Footer from 'components/Footer';
import SampleHeader from 'components/SampleHeader';
import ContactSection from '../components/ContactSection';
import Card from '../components/Card';

const Home = () => {
  return (
    <>
      <SampleHeader />
      <Hero />

      <>
        <Card />
      </>

      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
