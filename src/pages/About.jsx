import React from 'react';
import WhoWeAre from '../components/organisms/WhoWeAre';
import OurApproach from '../components/organisms/OurApproach';
import TranspiledVision from '../components/organisms/TranspiledVision';
import PageHero from '../components/organisms/PageHero';
import PageCTA from '../components/organisms/PageCTA';
import content from 'data/about';
import style from 'style/pages';

const AboutUs = () => {
  const { hero: heroStyle, cta: ctaStyle } = style.about;
  const { hero: heroContent, cta: ctaContent } = content;
  return (
    <>
      <PageHero style={heroStyle} content={heroContent} />
      <WhoWeAre />
      <OurApproach />
      <TranspiledVision />
      <PageCTA style={ctaStyle} content={ctaContent} />
    </>
  );
};

export default AboutUs;
