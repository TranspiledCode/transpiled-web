import ServicesInfo from '../components/organisms/ServicesInfo';
import PageCTA from '../components/organisms/PageCTA';
import PageHero from '../components/organisms/PageHero';
import config from '../data/services';

const Services = () => {
  const {
    hero: { title: heroTitle, subtitle: heroSubtitle, caption: heroCaption },
    cta: { title: ctaTitle, subtitle: ctaSubtitle, btnText, btnUrl },
  } = config;

  return (
    <>
      <PageHero
        gradTopCol="lightBlue"
        gradBotCol="green"
        title={heroTitle}
        subtitle={heroSubtitle}
        caption={heroCaption}
      />
      <ServicesInfo />
      <PageCTA
        gradTopCol="darkBlue"
        gradBotCol="fuchsia"
        title={ctaTitle}
        subtitle={ctaSubtitle}
        btnText={btnText}
        btnUrl={btnUrl}
      />
    </>
  );
};

export default Services;
