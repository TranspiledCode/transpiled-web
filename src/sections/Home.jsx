import styled from '@emotion/styled';
import Header from '../components/Header';
import Banner from '../components/Banner';
import { siteImages } from '../config';

const { backgroundImage, logoOverlayImage } = siteImages;

const HomeSection = styled.div`
  position: relative;
  height: 100vh;
  min-height: 700px;
  max-height: 1000px;
  background-color: ${({ theme }) => theme.background};
  background-image: url(${backgroundImage});
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
    opacity: 1;
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
