import styled from '@emotion/styled';

const TestWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.mediaQueries.md} {
    gap: 2rem;
    padding: 6rem;
  }
`;

const Container = styled.div`
  height: 46rem;
  width: 44rem;
  border-image: linear-gradient(
      ${({ theme }) => theme.colors.lightBlue},
      ${({ theme }) => theme.colors.green}
    )
    1;
  border-width: 4px;
  border-style: solid;
`;

const Image = styled.div`
  background-image: url('https://images.unsplash.com/photo-1726137570078-1faa70beb6ad?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 70%;
  width: 100%;
`;
const Heading = styled.h3`
  font-family: ${({ theme }) => theme.fonts.poppins};
`;
const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.manrope};
`;

// const CardHeading = '';
// const CardDescription = '';

const Card = () => {
  return (
    <TestWrapper>
      <Container>
        <Image></Image>
        <Heading>Web Development</Heading>
        <Description>
          We build responsive, scalable websites with clean, future-proof code,
          optimized for performance and built to grow with your business.
        </Description>
      </Container>
      <Container>
        <Image></Image>
        <Heading>Mobile App Development</Heading>
        <Description>
          Native and cross-platform mobile apps designed for performance and
          user satisfaction, ensuring smooth navigation and fast load times.
        </Description>
      </Container>
      <Container>
        <Image></Image>
        <Heading>Custom Solutions</Heading>
        <Description>
          Optimized, secure e-commerce platforms designed to convert visitors
          into customers while delivering a smooth shopping experience.
        </Description>
      </Container>
    </TestWrapper>
  );
};
export default Card;
