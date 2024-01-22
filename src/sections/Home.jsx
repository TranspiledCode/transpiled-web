import styled from '@emotion/styled';
import Header from '../components/Header';

const HomeSection = styled.div`
  height: 800px;
  background-color: ${(props) => props.theme.background};
`;

const Home = () => {
  return (
    <HomeSection>
      <Header />
      <h3>Home</h3>
    </HomeSection>
  );
};

export default Home;
