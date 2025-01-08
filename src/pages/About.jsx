import React from 'react';
import styled from '@emotion/styled';
import AboutMain from '../components/organisms/AboutMain';
import WhoWeAre from '../components/organisms/WhoWeAre';
import OurApproach from '../components/organisms/OurApproach';
import TranspiledVision from '../components/organisms/TranspiledVision';
import ReadyToBuild from '../components/organisms/ReadyToBuild';

const PageWrapper = styled.div``;

const AboutUs = () => {
  return (
    <PageWrapper>
      <AboutMain />
      <WhoWeAre />
      <OurApproach />
      <TranspiledVision />
      <ReadyToBuild />
    </PageWrapper>
  );
};

export default AboutUs;
