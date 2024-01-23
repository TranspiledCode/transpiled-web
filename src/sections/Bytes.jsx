import React from 'react';
import styled from '@emotion/styled';
import bytesBackground from '../assets/images/bytesBackground.svg';

const BytesSection = styled.section`
  height: 100vh;
  min-height: 700px;
  max-height: 1000px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.black};
  background-image: url(${bytesBackground});
`;

const Bytes = () => (
  <BytesSection id='bytes'>
    <div>Bytes</div>
  </BytesSection>
);

export default Bytes;
