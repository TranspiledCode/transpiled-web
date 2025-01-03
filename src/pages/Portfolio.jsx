import PageHero from 'components/organisms/PageHero';
import ProjectList from 'components/organisms/ProjectList';
import PageCTA from 'components/organisms/PageCTA';
import content from 'data/portfolio';
import style from 'style/pages';

const Portfolio = () => {
  const { hero: heroStyle, cta: ctaStyle } = style.portfolio;
  const { hero: heroContent, cta: ctaContent, projectList } = content;

  return (
    <>
      <PageHero style={heroStyle} content={heroContent} />
      <ProjectList content={projectList} />
      <PageCTA style={ctaStyle} content={ctaContent} />
    </>
  );
};

export default Portfolio;
