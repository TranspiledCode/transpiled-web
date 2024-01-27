import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Image from '../components/Image';

import Divider from '../components/Divider';
import aboutImage from '../assets/images/aboutImage.svg';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  background: ${({ theme }) => theme.background};
  padding: 4rem;
  color: ${({ theme }) => theme.text};

  @media (min-width: 768px) {
  }
`;

const Heading = styled.h1`
  font-size: 5rem;
  width: 100%;
  margin-bottom: 2rem;
`;

const MessageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Message = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  line-height: 1.5;
`;

const StyledImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const AboutUs = () => (
  <AboutContainer>
    <Heading>About Us</Heading>
    <Divider />
    <MessageWrapper>
      <Message
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p>
          Hi there, I'm Joshua, the founder of Transpiled. With decades of
          experience in the software industry, I've embarked on a journey to
          bring your digital aspirations to life. At Transpiled, it's all about
          turning innovative ideas into real-world solutions. My approach is
          grounded in a deep passion for technology and a commitment to
          excellence. Here, each project is a unique canvas, where creativity
          meets functionality to create something truly special. Let's work
          together to create software that stands out, functions seamlessly, and
          helps your business thrive.
        </p>
      </Message>
      <StyledImage>
        <Image src={aboutImage} alt='about us section' />
      </StyledImage>
    </MessageWrapper>
  </AboutContainer>
);

export default AboutUs;
