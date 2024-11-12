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
        <Card
          CardImage="https://images.unsplash.com/photo-1726137570078-1faa70beb6ad?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          CardHeading="test"
          CardDescription="test description"
        />
      </>

      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
