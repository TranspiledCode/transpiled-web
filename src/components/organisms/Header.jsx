import { useEffect, useContext } from 'react';

import AuthContext from 'context/AuthContext';
import styled from '@emotion/styled';

import GlobalContext from 'context/GlobalContext';
import NavMenu from 'molecules/NavMenu';
import MobileNavMenu from 'organisms/MobileNavMenu';
import MobileMenuButton from 'atoms/MobileMenuButton';
import links from 'data/navigation';
import ProfileDropdown from 'organisms/ProfileDropdown';

const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${({ scrolled, theme }) =>
    scrolled ? theme.colors.black : 'transparent'};
  color: ${({ theme }) => theme.colors.white};
  transition:
    background-color 0.3s,
    color 0.3s;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: ${({ theme }) => theme.zIndices.header};
  padding: ${({ theme }) => theme.layouts.sectionPadding};
  padding-top: 0rem;
  padding-bottom: 0rem;
`;

const HeaderContent = styled.div`
  height: 6rem;
  width: 100%;
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: 700;
  font-size: clamp(2.4rem, 3vw, 3.4rem);
  letter-spacing: -0.04em;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const SampleHeader = () => {
  const { scrolled, handleScroll } = useContext(GlobalContext);
  const { menuOpen, toggleMenu } = useContext(GlobalContext);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer scrolled={scrolled}>
      <HeaderContent>
        <MobileNavMenu links={links} />
        <Logo>Transpiled</Logo>
        <Nav>
          <NavMenu links={links} />
          <MobileMenuButton onClick={toggleMenu} isOpen={menuOpen} />
          {currentUser && <ProfileDropdown />}
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default SampleHeader;
