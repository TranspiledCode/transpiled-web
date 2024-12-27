import ServicesHero from '../components/organisms/ServicesHero';
import ServicesInfo from '../components/organisms/ServicesInfo';
import PageCTA from '../components/organisms/PageCTA';
import config from '../data/services';

const Services = () => {
  const { title, subtitle, btnText } = config.cta;
  return (
    <>
      <ServicesHero />
      <ServicesInfo />
      <PageCTA
        gradTopCol="darkBlue"
        gradBotCol="fuchsia"
        textColor="white"
        title={title}
        subtitle={subtitle}
        btnText={btnText}
      />
    </>
  );
};

export default Services;
