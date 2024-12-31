import PageHero from '../components/organisms/PageHero';
import PortfolioList from '../components/organisms/PortfolioList';
import PageCTA from '../components/organisms/PageCTA';

const Portfolio = () => {
  return (
    <>
      <PageHero
        gradTopCol="fuchsia"
        gradBotCol="orange"
        title="Work that speaks for itself"
        subtitle="From responsive designs to user-friendly interfaces, our work reflects our commitment to quality and innovation."
        caption="Take a look at our past projects below"
        stMaxWidth={70}
      />
      <PortfolioList
        title="Featured Work"
        subtitle="Our portfolio is a showcase of how we transform ideas into impactful websites."
      />
      <PageCTA
        gradTopCol="lightBlue"
        gradBotCol="green"
        title="Want Something Else?"
        subtitle="Whether you need a dynamic website, a mobile app, or a custom-built system, Transpiled delivers exceptional results."
        btnText="Explore Services"
        stMaxWidth={90}
      />
    </>
  );
};
export default Portfolio;
