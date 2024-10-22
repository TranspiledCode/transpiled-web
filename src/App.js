// App.js
import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000;
`;

const Title = styled.h1`
  font-size: 48px;
  color: #fff;
`;

const Subtitle = styled.h3`
  font-size: 24px;
  color: #fff;
`;

const App = () => {
  return (
    <Container>
      <Title>Transpiled</Title>
      <Subtitle>Transpiling Tech Complexity Into Simplicity</Subtitle>
    </Container>
  );
};

export default App;
