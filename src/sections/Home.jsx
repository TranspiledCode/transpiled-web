import styled from '@emotion/styled';
import Header from '../components/Header';
import background from '../assets/images/homeBackground.png';

const HomeSection = styled.div`
  height: 800px;
  background-color: ${(props) => props.theme.background};
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Home = () => {
  return (
    <HomeSection>
      <Header />
    </HomeSection>
  );
};

export default Home;
