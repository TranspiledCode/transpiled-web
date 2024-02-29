import React from 'react';
import styled from '@emotion/styled';

import Divider from '../components/Divider';

const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  position: relative;
  padding: 40px;
`;

const MessageWrapper = styled.div`
  flex: 1;
  padding: 20px; /* Adjust the spacing as needed */
`;

const Title = styled.h2`
  font-size: 6rem;
  margin-bottom: 20px;
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  line-height: 1.5;
`;

const About = () => (
  <Container>
    <MessageWrapper>
      <Title>About Us</Title>
      <Divider />
      <Message
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p>
          Hi there, Im Joshua, the founder of Transpiled. With decades of
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
    </MessageWrapper>
  </Container>
);

export default About;
