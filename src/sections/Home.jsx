import styled from '@emotion/styled';
import Header from '../components/Header';
import background from '../assets/images/AltBannerImage.png';
import logoOverlayImage from '../assets/images/leftSideLogoTransparent.svg';
import Banner from '../components/Banner';

const HomeSection = styled.div`
  position: relative;
  height: 100vh;
  min-height: 700px;
  max-height: 1000px;
  background-color: ${({ theme }) => theme.background};
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const LogoOverlay = styled.div`
  @media (min-width: 768px) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-image: url(${logoOverlayImage});
    background-repeat: no-repeat;
    opacity: 0.5;
  }
`;

const Home = () => (
  <HomeSection id='home'>
    <Header />
    <Banner />
    <LogoOverlay />
  </HomeSection>
);

export default Home;
