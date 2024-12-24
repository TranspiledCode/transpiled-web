import React from 'react';
import styled from '@emotion/styled';
import AboutCard from 'molecules/AboutCard';

const AboutWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  background-image: url('https://images.pexels.com/photos/2514035/pexels-photo-2514035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

const AboutUs = () => {
  return (
    <AboutWrapper>
      <AboutCard />
    </AboutWrapper>
  );
};

export default AboutUs;
