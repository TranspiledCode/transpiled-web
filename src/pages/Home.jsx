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

// Wrapper for the content below the Hero section
const ContentWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #333;
  padding: 20px;
  text-align: center;
  color: #fff;
  height: 100vh;
`;

const Card = styled.div`
  background-color: #fff;
  color: #333;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
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

      <ContentWrapper>
        <AnimatedSection direction="up">
          <Card>
            <h2>This section will fade in!</h2>
            <p>More content that animates into view.</p>
          </Card>
        </AnimatedSection>
        <AnimatedSection direction="up">
          <Card>
            <h2>Another section!</h2>
            <p>This one also appears as you scroll down.</p>
          </Card>
        </AnimatedSection>
        <AnimatedSection direction="up">
          <Card>
            <h2>Another section!</h2>
            <p>This one also appears as you scroll down.</p>
          </Card>
        </AnimatedSection>
      </ContentWrapper>
    </>
  );
};

export default Home;
