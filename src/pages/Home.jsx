import styled from '@emotion/styled';
import Header from '../components/Header';
import Hero from '../components/Hero';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Homme = () => (
  <PageContainer>
    <Header />
    <Hero />
  </PageContainer>
);

export default Homme;
