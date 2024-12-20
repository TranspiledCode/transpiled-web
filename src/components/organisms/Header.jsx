import { useEffect, useContext } from 'react';
import styled from '@emotion/styled';

import GlobalContext from 'context/GlobalContext';
import NavMenu from 'molecules/NavMenu';
import MobileNavMenu from 'organisms/MobileNavMenu';
import MobileMenuButton from 'atoms/MobileMenuButton';
import links from 'data/navigation';

const SampleHeader = () => {
  const { scrolled, handleScroll } = useContext(GlobalContext);
  const { menuOpen, toggleMenu } = useContext(GlobalContext);

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
  background-color: ${({ scrolled }) => (scrolled ? 'black' : 'transparent')};
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
`;

export default SampleHeader;
