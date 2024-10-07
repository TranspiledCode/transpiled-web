import styled from '@emotion/styled';
import NavLinks from './NavLinks';

const StyledNav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 20px;
    color: #000000;
    font-size: 1.8rem;
  }
`;

const NavMenu = () => (
  <StyledNav>
    <NavLinks />
  </StyledNav>
);

export default NavMenu;
