import styled from '@emotion/styled';

const TestWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 2rem;

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: repeat(3, 1fr);
    padding: 6rem;
  }
`;

const Container = styled.div`
  height: 100%;
  min-height: 50rem;
  width: 100%;
  border-image: linear-gradient(
      ${({ theme }) => theme.colors.lightBlue},
      ${({ theme }) => theme.colors.green}
    )
    1;
  border-width: 4px;
  border-style: solid;
  display: grid;
  grid-template-rows: 1.5fr 1fr;
`;
const Image = styled.div`
  background-image: url('https://images.unsplash.com/photo-1726137570078-1faa70beb6ad?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
`;
const TextContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Heading = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: 2.4rem;
  letter-spacing: -0.4px;
`;
const Description = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: 1.6rem;
  text-align: justify;
`;

// const CardHeading = '';
// const CardDescription = '';

const Card = () => {
  return (
    <TestWrapper>
      <Container>
        <Image></Image>
        <TextContainer>
          <Heading>Web Development</Heading>
          <Description>
            We build responsive, scalable websites with clean, future-proof
            code, optimized for performance and built to grow with your
            business.
          </Description>
        </TextContainer>
      </Container>
      <Container>
        <Image></Image>
        <TextContainer>
          <Heading>Mobile App Development</Heading>
          <Description>
            Native and cross-platform mobile apps designed for performance and
            user satisfaction, ensuring smooth navigation and fast load times.
          </Description>
        </TextContainer>
      </Container>
      <Container>
        <Image></Image>
        <TextContainer>
          <Heading>Custom Solutions</Heading>
          <Description>
            Optimized, secure e-commerce platforms designed to convert visitors
            into customers while delivering a smooth shopping experience.
          </Description>
        </TextContainer>
      </Container>
    </TestWrapper>
  );
};
export default Card;
