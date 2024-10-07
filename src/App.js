import styled from '@emotion/styled';
import Header from './components/Header';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const App = () => (
  <PageContainer>
    <Header />
  </PageContainer>
);

export default App;
