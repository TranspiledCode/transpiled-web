import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div`
  display: flex;
  width: 100%;
`;
const Button = styled.button`
  margin-left: auto;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 2rem;
`;

const ExpandButton = () => {
  return (
    <Container>
      <Button>{'\u2795'}</Button>
    </Container>
  );
};

export default ExpandButton;
