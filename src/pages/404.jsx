import styled from '@emotion/styled';

const ServicesWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.white};
`;

const Services = () => {
  return (
    <ServicesWrapper>
      <h1>404 - Page Not Found</h1>
    </ServicesWrapper>
  );
};

export default Services;
