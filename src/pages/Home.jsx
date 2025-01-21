// src/App.js
import SEO from 'components/templates/SEO';
import HomeHero from 'organisms/HomeHero';
import ServicesSection from 'organisms/ServicesSection';
import WhySection from 'organisms/WhySection';
import PageCTA from 'components/organisms/PageCTA';
// import TestimonialsSection from 'organisms/TestimonialsSection';
import content from 'data/home';
import style from 'style/pages';

const Home = () => {
  const { cta: ctaContent } = content;
  const { cta: ctaStyle } = style.home;
  const { title, canonical } = content.seo;

  return (
    <>
      <SEO title={title} canonical={canonical} />
      <HomeHero />
      <ServicesSection />
      <WhySection />
      {/* <TestimonialsSection /> */}
      <PageCTA style={ctaStyle} content={ctaContent} />
    </>
  );
};

export default Home;
