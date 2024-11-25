import styled from '@emotion/styled';
import ServicesHero from '../components/organisms/ServicesHero';
import ServicesContact from '../components/organisms/ServicesContact';

const ServicesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.white};
`;

const Services = () => {
  return (
    <ServicesWrapper>
      <ServicesHero />
      <ServicesContact />
    </ServicesWrapper>
  );
};

export default Services;
