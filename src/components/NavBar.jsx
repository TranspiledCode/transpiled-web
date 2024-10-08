import styled from '@emotion/styled';
import NavLinks from './NavLinks';

const StyledNav = styled.nav`
  opacity: 0;
  transform: translateX(100%);
  transition:
    opacity 0.5s ease-in-out,
    transform 0.5s ease-in-out;

  @media (min-width: 768px) {
    opacity: 1;
    transform: translateX(0);

    display: flex;
    gap: 20px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.8rem;
  }
`;

const NavMenu = () => (
  <StyledNav>
    <NavLinks />
  </StyledNav>
);

export default NavMenu;
