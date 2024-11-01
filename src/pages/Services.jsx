import styled from '@emotion/styled';
import NavBar from 'components/NavBar';

const ServicesWrapper = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.white};
`;

const StyledHeading = styled.h1`
  flex: 1;
  color: ${({ theme }) => theme.colors.white};

  border: 2px dashed red;
`;

const NavBarWrapper = styled.div`
  flex: 1;

  border: 2px dashed red;
`;

const links = [
  { url: '/', label: 'Home' },
  { url: '/services', label: 'Services' },
];

const Services = () => {
  return (
    <ServicesWrapper>
      <StyledHeading>Services Page</StyledHeading>
      <NavBarWrapper>
        <NavBar links={links} />
      </NavBarWrapper>
    </ServicesWrapper>
  );
};

export default Services;
