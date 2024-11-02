import styled from '@emotion/styled';
import Header from 'components/SampleHeader';

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
      <Header />
    </ServicesWrapper>
  );
};

export default Services;
