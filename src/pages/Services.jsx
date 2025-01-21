import SEO from 'components/templates/SEO';
import ServicesInfo from 'organisms/ServicesInfo';
import PageCTA from 'organisms/PageCTA';
import PageHero from 'organisms/PageHero';
import content from 'data/services';
import style from 'style/pages';

const Services = () => {
  const { hero: heroStyle, cta: ctaStyle } = style.services;
  const {
    hero: heroContent,
    infoTabs: infoTabsContent,
    cta: ctaContent,
  } = content;
  const { title, canonical, description } = content.seo;

  return (
    <>
      <SEO title={title} description={description} canonical={canonical} />
      <PageHero style={heroStyle} content={heroContent} />
      <ServicesInfo infoTabs={infoTabsContent} />
      <PageCTA style={ctaStyle} content={ctaContent} />
    </>
  );
};

export default Services;
