// src/App.js
import HomeHero from 'organisms/HomeHero';
import ServicesSection from 'organisms/ServicesSection';
import WhySection from 'organisms/WhySection';
import PageCTA from 'components/organisms/PageCTA';
import TestimonialsSection from 'organisms/TestimonialsSection';
import content from 'data/home';

const Home = () => {
  const {
    cta: { title, subtitle, btnText, btnUrl },
  } = content;

  return (
    <>
      <HomeHero />
      <ServicesSection />
      <WhySection />
      <TestimonialsSection />
      <PageCTA
        gradTopCol="darkBlue"
        gradBotCol="fuchsia"
        title={title}
        subtitle={subtitle}
        btnText={btnText}
        btnUrl={btnUrl}
      />
    </>
  );
};

export default Home;
