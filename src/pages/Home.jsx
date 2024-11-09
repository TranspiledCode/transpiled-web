// src/App.js
import Hero from 'components/Hero';
// import Footer from 'components/Footer';
import SampleHeader from 'components/SampleHeader';
import ContactSection from '../components/home/ContactSection';

const Home = () => {
  return (
    <>
      <SampleHeader />
      <Hero />
      <ContactSection />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
