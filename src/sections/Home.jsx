import styled from '@emotion/styled';
import Header from '../components/Header';
import { useTheme } from '../styles/ThemeProvider';

const HomeSection = styled.div`
  height: 800px;
  background-color: ${(props) => props.theme.background};
`;

const Home = () => {
  const { theme } = useTheme();

  return (
    <HomeSection id='home' theme={theme}>
      <Header />
      <h3>Home</h3>
    </HomeSection>
  );
};

export default Home;
