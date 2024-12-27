import PageHero from '../components/organisms/PageHero';
import ContactCTA from '../components/organisms/ContactCTA';
import ServicesInfo from '../components/organisms/ServicesInfo';
import config from '../data/services';
const Services = () => {
  const { title, subtitle, caption } = config.hero;
  return (
    <>
      <PageHero
        gradTopCol="lightBlue"
        gradBotCol="green"
        textColor="white"
        title={title}
        subtitle={subtitle}
        caption={caption}
      />
      <ServicesInfo />
      <ContactCTA />
    </>
  );
};

export default Services;
