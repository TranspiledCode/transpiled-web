import React from 'react';
// import AboutMain from '../components/organisms/AboutMain';
import WhoWeAre from '../components/organisms/WhoWeAre';
import OurApproach from '../components/organisms/OurApproach';
import TranspiledVision from '../components/organisms/TranspiledVision';
import PageHero from '../components/organisms/PageHero';
import PageCTA from '../components/organisms/PageCTA';
// import ReadyToBuild from '../components/organisms/ReadyToBuild';
import content from 'data/about';
import style from 'style/pages';

const AboutUs = () => {
  const { hero: heroStyle, cta: ctaStyle } = style.about;
  const { hero: heroContent, cta: ctaContent } = content;
  return (
    <>
      {/* <AboutMain /> */}
      <PageHero style={heroStyle} content={heroContent} />
      <WhoWeAre />
      <OurApproach />
      <TranspiledVision />
      {/* <ReadyToBuild /> */}
      <PageCTA style={ctaStyle} content={ctaContent} />
    </>
  );
};

export default AboutUs;
