import styled from '@emotion/styled';
import Header from './components/Header';
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
    </PageContainer>
  </GlobalProvider>
);

export default App;
