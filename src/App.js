import styled from '@emotion/styled';
import Header from './components/Header';
import Hero from './components/Hero';
import { GlobalProvider } from './context/GlobalContext';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const App = () => (
  <GlobalProvider>
    <PageContainer>
      <Header />
      <Hero />
    </PageContainer>
  </GlobalProvider>
);

export default App;
