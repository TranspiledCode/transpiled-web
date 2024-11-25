import styled from '@emotion/styled';
import SampleHeader from 'organisms/SampleHeader';
import ServicesHero from '../components/organisms/ServicesHero';
import ServicesContact from '../components/organisms/ServicesContact';

const ServicesWrapper = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 100vh;
`;

const Services = () => {
  return (
    <ServicesWrapper>
      <SampleHeader />
      <ServicesHero />
      <ServicesContact />
    </ServicesWrapper>
  );
};

export default Services;
