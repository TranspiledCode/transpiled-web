import styled from '@emotion/styled';
import ServicesHero from '../components/organisms/ServicesHero';
import ServicesContact from '../components/organisms/ServicesContact';
import ServicesInfo from '../components/organisms/ServicesInfo';

const ServicesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
`;

const Services = () => {
  return (
    <ServicesWrapper>
      <ServicesHero />
      <ServicesInfo />
      <ServicesContact />
    </ServicesWrapper>
  );
};

export default Services;
