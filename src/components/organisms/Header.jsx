import { useEffect, useContext } from 'react';

import AuthContext from 'context/AuthContext';
import styled from '@emotion/styled';

import GlobalContext from 'context/GlobalContext';
import NavMenu from 'molecules/NavMenu';
import MobileNavMenu from 'organisms/MobileNavMenu';
import MobileMenuButton from 'atoms/MobileMenuButton';
import links from 'data/navigation';
import ProfileDropdown from 'organisms/ProfileDropdown';

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
      <MobileNavMenu links={links} />
      <Logo>Transpiled</Logo>
      <Nav>
        <NavMenu links={links} />
        <MobileMenuButton onClick={toggleMenu} isOpen={menuOpen} />
        {currentUser && <ProfileDropdown />}
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: ${({ scrolled }) =>
    scrolled ? '${({ theme }) => theme.colors.black}' : 'transparent'};
  color: ${({ theme }) => theme.colors.white};
  transition:
    background-color 0.3s,
    color 0.3s;
  z-index: ${({ theme }) => theme.zIndices.header};
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export default SampleHeader;
