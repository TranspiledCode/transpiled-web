import styled from '@emotion/styled';

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background-color: #000;
  color: #fff;
`;

const Title = styled.h1`
  font-size: clamp(4rem, 10vw, 6.5rem);
  font-weight: 700;
`;

const SubHeading = styled.h2`
  font-size: clamp(1rem, 3vw, 1.5rem);
  font-weight: 400;
  white-space: nowrap;
`;

const App = () => (
  <PageContainer>
    <Title>Transpiled</Title>
    <SubHeading>Cutting-Edge Design and Development</SubHeading>
  </PageContainer>
);

export default App;
