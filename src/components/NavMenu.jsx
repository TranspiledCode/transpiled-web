import { useContext } from 'react';
import styled from '@emotion/styled';
import config from '../config';
import { GlobalContext } from '../context/GlobalContext'; // Import GlobalContext

const StyledNav = styled.nav`
  box-sizing: border-box;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  display: none;
  color: black;
  gap: 20px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const StyledLink = styled.a`
  color: black;
  font-size: 1.8rem;
`;
const StyledLinkWrapper = styled.div``;

const NavMenu = () => {
  const { menuOpen, setMenuOpen } = useContext(GlobalContext); // Access context

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <StyledNav isOpen={menuOpen}>
      {config.siteInfo.navLinks.map((link) => (
        <StyledLinkWrapper key={link.name}>
          <StyledLink href={link.url} onClick={handleLinkClick}>
            {link.name}
          </StyledLink>
        </StyledLinkWrapper>
      ))}
    </StyledNav>
  );
};

export default NavMenu;
