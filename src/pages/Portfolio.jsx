import PageHero from '../components/organisms/PageHero';
import ProjectList from '../components/organisms/ProjectList';
import PageCTA from '../components/organisms/PageCTA';
import content from '../data/portfolio';

const Portfolio = () => {
  const {
    hero: { title: heroTitle, subtitle: heroSubtitle, caption: heroCaption },
    projectList: { title: sectionTitle, subtitle: sectionSubtitle, projects },
    cta: {
      title: ctaTitle,
      subtitle: ctaSubtitle,
      btnText: ctaText,
      btnUrl: ctaUrl,
    },
  } = content;
  return (
    <>
      <PageHero
        gradTopCol="fuchsia"
        gradBotCol="orange"
        title={heroTitle}
        subtitle={heroSubtitle}
        caption={heroCaption}
        stMaxWidth={70}
        capMaxWidth={20}
      />
      <ProjectList
        title={sectionTitle}
        subtitle={sectionSubtitle}
        projects={projects}
      />
      <PageCTA
        gradTopCol="lightBlue"
        gradBotCol="green"
        title={ctaTitle}
        subtitle={ctaSubtitle}
        btnText={ctaText}
        btnUrl={ctaUrl}
        stMaxWidth={90}
      />
    </>
  );
};
export default Portfolio;
