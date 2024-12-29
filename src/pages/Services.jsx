import ServicesInfo from 'organisms/ServicesInfo';
import PageCTA from 'organisms/PageCTA';
import PageHero from 'organisms/PageHero';
import content from 'data/services';

const Services = () => {
  const {
    hero: { title: heroTitle, subtitle: heroSubtitle, caption: heroCaption },
    cta: { title: ctaTitle, subtitle: ctaSubtitle, btnText, btnUrl },
  } = content;

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
