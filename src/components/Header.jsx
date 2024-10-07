// header.jsx
import styled from '@emotion/styled';
import config from '../config';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 60px;
  background-color: transparent;
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
    <div>
      <img src={config.siteInfo.logoUrl} alt='Transpiled' />
    </div>
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
