import React from 'react';
import styled from '@emotion/styled';
import SampleHeader from '../components/organisms/SampleHeader';
import AboutMain from '../components/organisms/AboutMain';
import WhoWeAre from '../components/organisms/WhoWeAre';
import OurApproach from '../components/organisms/OurApproach';
import TranspiledVision from '../components/organisms/TranspiledVision';
import ReadyToBuild from '../components/organisms/ReadyToBuild';
import Footer from '../components/organisms/Footer';

const PageWrapper = styled.div``;

const AboutUs = () => {
  return (
    <PageWrapper>
      <SampleHeader />
      <AboutMain />
      <WhoWeAre />
      <OurApproach />
      <TranspiledVision />
      <ReadyToBuild />
      <Footer />
    </PageWrapper>
  );
};

export default AboutUs;
