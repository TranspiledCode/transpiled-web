// src/App.js
import HomeHero from 'organisms/HomeHero';
import ServicesSection from 'organisms/ServicesSection';
import WhySection from 'organisms/WhySection';
import PageCTA from '../components/organisms/PageCTA';
import config from '../data/home';

const Home = () => {
  const { title, subtitle, btnText, btnUrl } = config.cta;
  return (
    <>
      <HomeHero />
      <ServicesSection />
      <WhySection />
      <PageCTA
        gradTopCol="darkBlue"
        gradBotCol="fuchsia"
        textColor="white"
        title={title}
        subtitle={subtitle}
        btnText={btnText}
        btnUrl={btnUrl}
      />
    </>
  );
};

export default Home;
