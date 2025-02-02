import React from 'react';
import SEO from 'components/templates/SEO';
import AboutMain from 'components/organisms/AboutMain';
import WhoWeAre from 'components/organisms/WhoWeAre';
import OurApproach from 'components/organisms/OurApproach';
import TranspiledVision from 'components/organisms/TranspiledVision';
import ReadyToBuild from 'components/organisms/ReadyToBuild';
import content from 'data/about';

const AboutUs = () => {
  const { title, description, canonical } = content.seo;
  return (
    <>
      <SEO title={title} canonical={canonical} description={description} />
      <AboutMain />
      <WhoWeAre />
      <OurApproach />
      <TranspiledVision />
      <ReadyToBuild />
    </>
  );
};

export default AboutUs;
