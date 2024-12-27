import InnerPageHero from '../components/organisms/InnerPageHero';
import ContactCTA from '../components/organisms/ContactCTA';
import ServicesInfo from '../components/organisms/ServicesInfo';

const Services = () => {
  return (
    <>
      <InnerPageHero
        gradTopCol="lightBlue"
        gradBotCol="green"
        title="title"
        subtitle="subtitle"
        caption="caption"
      />
      <ServicesInfo />
      <ContactCTA />
    </>
  );
};

export default Services;
