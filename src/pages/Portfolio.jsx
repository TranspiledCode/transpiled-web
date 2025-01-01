import PageHero from '../components/organisms/PageHero';
import PortfolioSection from '../components/organisms/PortfolioSection';
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
        capMaxWidth={20}
      />
      <PortfolioSection
        title="Featured Work"
        subtitle="Our portfolio is a showcase of how we transform ideas into impactful websites."
        projects={[
          {
            url: 'https://transpiled.s3.us-west-2.amazonaws.com/assets/img/nvmFish/m.webp',
            label: 'test image',
            title: 'FitLife',
            category: 'Healthcare',
            caption: 'Web and Mobile App Design',
            catColor: 'orange',
          },
          {
            url: 'https://transpiled.s3.us-west-2.amazonaws.com/assets/img/nvmFish/m.webp',
            label: 'test image',
            title: 'TechFlow Solutions',
            category: 'Technology Services',
            caption: 'AI Systems Design & Engineering',
            catColor: 'green',
          },
          {
            url: 'https://transpiled.s3.us-west-2.amazonaws.com/assets/img/nvmFish/m.webp',
            label: 'test image',
            title: 'InnovateCo',
            category: 'E-Commerce',
            caption:
              'Digital Point of Sale System Design, Production & Deployment',
            catColor: 'lightBlue',
          },
        ]}
      />
      <PageCTA
        gradTopCol="lightBlue"
        gradBotCol="green"
        title="Want Something Else?"
        subtitle="Whether you need a dynamic website, a mobile app, or a custom-built system, Transpiled delivers exceptional results."
        btnText="Explore Services"
        btnUrl="/services"
        stMaxWidth={90}
      />
    </>
  );
};
export default Portfolio;
