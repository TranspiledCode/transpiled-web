import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import theme from './style/theme';
import Header from './components/Header';
import Hero from './components/Hero';
import { GlobalProvider } from './context/GlobalContext';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalProvider>
      <PageContainer>
        <Header />
        <Hero />
      </PageContainer>
    </GlobalProvider>
  </ThemeProvider>
);

export default App;
