import React from 'react';
import styled from '@emotion/styled';

const AboutContainer = styled.div`
  height: 800px;
  background-color: ${(props) => props.theme.background};
`;

const About = () => (
  <AboutContainer>
    <div>About</div>
  </AboutContainer>
);

export default About;
