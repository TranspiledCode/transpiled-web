import styled from 'styled-components';
import { useTheme } from '../styles/ThemeProvider';

const HomeSection = styled.div`
  height: 800px;
  background-color: ${(props) => props.theme.tertiaryColor};
`;

const Home = () => {
  const { theme } = useTheme();

  return (
    <HomeSection id='home' theme={theme}>
      <div>Home</div>
    </HomeSection>
  );
};

export default Home;
