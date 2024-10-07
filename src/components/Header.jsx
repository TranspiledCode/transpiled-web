// header.jsx
import styled from '@emotion/styled';
import config from '../config';

const StyledHeader = styled.header`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 60px;
  background-color: transparent;
`;

const StyledLogo = styled.img`
  height: 40px;
`;

const StyledNav = styled.nav`
  color: black;
  display: flex;
  gap: 20px;
`;

const StyledLink = styled.a`
  color: black;
  font-size: 1.8rem;
`;
const StyledLinkWrapper = styled.div``;

const Header = () => (
  <StyledHeader>
    <StyledLogo src={config.siteImages.headerLogo} alt='Transpiled Logo' />
    <StyledNav>
      {config.siteInfo.navLinks.map((link) => (
        <StyledLinkWrapper key={link.name}>
          <StyledLink href={link.url}>{link.name}</StyledLink>
        </StyledLinkWrapper>
      ))}
    </StyledNav>
  </StyledHeader>
);

export default Header;
