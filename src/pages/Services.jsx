import styled from '@emotion/styled';
import SampleHeader from 'organisms/SampleHeader';
import ServicesContact from '../components/organisms/ServicesContact';

const ServicesWrapper = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.white};
`;

const Services = () => {
  return (
    <ServicesWrapper>
      <SampleHeader />
      <ServicesContact />
    </ServicesWrapper>
  );
};

export default Services;
