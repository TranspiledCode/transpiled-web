// App.js
import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  box-sizing: border-box;
  display: grid;
  place-content: center;
  height: 100vh;
  height: 100dvh;
  text-align: center;

  color: #f8f8f8;

  background-image: linear-gradient(to top, transparent, #214eea),
    linear-gradient(to bottom, #15b5fa, #dd53ff, #15b5fa);
  background-size:
    100% 100%,
    100% 400%;
  animation: move 10s linear infinite alternate;

  @keyframes move {
    from {
      background-position:
        center center,
        top center;
    }
    to {
      background-position:
        center center,
        bottom center;
    }
  }
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: clamp(5.6rem, 7vw, 8rem);
  letter-spacing: -2px;
`;

const Subtitle = styled.h3`
  font-family: 'DM Mono', monospace;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  font-size: clamp(1.2rem, 2vw, 1.8rem);
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
