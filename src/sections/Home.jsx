import styled from '@emotion/styled';
import Header from '../components/Header';
import background from '../assets/images/homeBackground.png';
import Banner from '../components/Banner';

const HomeSection = styled.div`
  height: 100vh;
  min-height: 700px;
  max-height: 1000px;
  background-color: ${(props) => props.theme.background};
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Home = () => (
  <HomeSection id='home'>
    <Header />
    <Banner />
  </HomeSection>
);

export default Home;
