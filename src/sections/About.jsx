import React from 'react';
import styled from '@emotion/styled';

const AboutContainer = styled.div`
  height: 800px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

const About = () => (
  <AboutContainer id='about'>
    <div>About</div>
  </AboutContainer>
);

export default About;
