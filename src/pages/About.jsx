import React from 'react';
import SEO from 'components/templates/SEO';
import AboutMain from 'components/organisms/AboutMain';
import WhoWeAre from 'components/organisms/WhoWeAre';
import OurApproach from 'components/organisms/OurApproach';
import TranspiledVision from 'components/organisms/TranspiledVision';
import PageCTA from 'organisms/PageCTA';
import style from 'style/pages';
import content from 'data/about';

const AboutUs = () => {
  const { cta: ctaContent } = content;
  const { cta: ctaStyle } = style.about;
  const { title, description, canonical } = content.seo;
  
  return (
    <>
      <SEO title={title} canonical={canonical} description={description} />
      <AboutMain />
      <WhoWeAre />
      <OurApproach />
      <TranspiledVision />
      <PageCTA style={ctaStyle} content={ctaContent} />
    </>
  );
};

export default AboutUs;
