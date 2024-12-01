import React from 'react';
import styled from '@emotion/styled';
// import ExpandButton from 'atoms/ExpandButton';

const Container = styled.div`
  border-bottom: 0.3rem solid ${({ theme }) => theme.colors.darkGray};
  margin-bottom: clamp(2rem, 8vw, 8rem);
  margin: 4rem 4rem;
`;
const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.colors.fuchsia};
  font-weight: 700;
  font-size: clamp(3rem, 10vw, 6rem);
  line-height: clamp(4.8rem, 10vw, 8.6rem);
  padding-bottom: clamp(0.5rem, 8vw, 3rem);
  padding-right: 2rem;
`;
const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.manrope};
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: 400;
  font-size: clamp(0.75rem, 4vw, 2rem);
  line-height: clamp(1.8rem, 4vw, 2.6rem);
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  max-width: 50vw;
  margin-bottom: clamp(2rem, 8vw, 8rem);
`;

const CustomWeb = () => {
  return (
    <Container>
      {/* <ExpandButton /> */}
      <Title>Custom Web Solutions</Title>
      <Subtitle>
        When off-the-shelf software isn’t enough, we build custom solutions
        tailored to your unique needs.
      </Subtitle>
    </Container>
  );
};

export default CustomWeb;
