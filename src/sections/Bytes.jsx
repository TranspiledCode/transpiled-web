import React from 'react';
import styled from '@emotion/styled';

const BytesSection = styled.section`
  height: 800px;
  background-color: ${(props) => props.theme.background};
`;

const Bytes = () => (
  <BytesSection>
    <div>Bytes</div>
  </BytesSection>
);

export default Bytes;
