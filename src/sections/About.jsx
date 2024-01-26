import React from 'react';
import styled from '@emotion/styled';

import aboutImage from '../assets/images/aboutImage.svg';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  padding: 2rem;

  @media (min-width: 768px) {
  }
`;

const Heading = styled.h1`
  display: flex;
  justify-content: flex-start;
  text-align: center;

  border: 1px solid #ccc;
`;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: 1px solid #ff0000;
`;

const Message = styled.div`
  font-size: 1.8rem;
  line-height: 1.5;

  border: 1px solid #ccc;
`;

const Image = styled.div`
  border: 1px solid #ccc;
`;

const AboutUs = () => (
  <AboutContainer>
    <Heading>About Us</Heading>
    <MessageWrapper>
      <Message>
        <p>
          Welcome to Transpiled, a fresh venture in the software development
          world, led by a seasoned expert with decades of industry experience.
          I'm Joshua, and I've embarked on this exciting journey to bring
          innovative digital solutions to life. Specializing in developing
          dynamic JavaScript applications with React and React Native,
          Transpiled stands for a passion for code, creativity, and a commitment
          to delivering personalized, top-tier software solutions. Here, every
          project is an opportunity to blend technical expertise with a deep
          understanding of our clients' unique needs. At Transpiled, we're not
          just about writing code; we're about crafting digital experiences that
          drive success and growth. Whether you're in the ideation stage or
          looking to scale, Transpiled is your partner in navigating the digital
          landscape. Let's collaborate to transform your ideas into reality!
        </p>
      </Message>
      <Image>
        <img src={aboutImage} alt='about us section' />
      </Image>
    </MessageWrapper>
  </AboutContainer>
);

export default AboutUs;
