// App.js
import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
  width: 100vw;
  text-align: center;

  color: #f8f8f8;

  background-image: linear-gradient(to top, transparent, #214eea),
    linear-gradient(to right, #15b5fa, #dd53ff, #15b5fa);
  background-size:
    100% 100%,
    1000% 100%;
  animation: move 10s linear infinite;

  @keyframes move {
    from {
      background-position:
        center center,
        left center;
    }
    to {
      background-position:
        center center,
        right center;
    }
  }
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 8rem;
  letter-spacing: -2px;
`;

const Subtitle = styled.h3`
  font-family: 'DM Mono', monospace;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  font-size: 1.8rem;
  letter-spacing: 1px;
`;

const Highlight = styled.span`
  color: #7fff43;
`;

const App = () => {
  return (
    <Container>
      <Title>Transpiled</Title>
      <Subtitle>
        Transpiling <Highlight>Complexity</Highlight> into{' '}
        <Highlight>Clarity</Highlight>
      </Subtitle>
    </Container>
  );
};

export default App;
