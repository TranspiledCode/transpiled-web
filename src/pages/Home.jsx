// src/App.js
import styled from '@emotion/styled';
import AnimatedSection from 'components/AnimatedSection';

// Hero section to take up the full viewport height
const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000;
`;

// Wrapper for the Title and Subtitle
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

// Title and Subtitle inside the Hero section
const Title = styled.h1`
  font-size: 48px;
  color: #fff;
  margin: 0;
`;

const Subtitle = styled.h3`
  font-size: 24px;
  color: #fff;
  margin: 0;
`;

const Home = () => {
  return (
    <>
      <HeroWrapper>
        <AnimatedSection>
          <TitleWrapper>
            <Title>Transpiled</Title>
            <Subtitle>Transpiling Tech Complexity Into Simplicity</Subtitle>
          </TitleWrapper>
        </AnimatedSection>
      </HeroWrapper>
    </>
  );
};

export default Home;
