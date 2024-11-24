import { useEffect, useContext } from 'react';
import styled from '@emotion/styled';
import NavMenu from 'molecules/NavMenu';
import GlobalContext from 'context/GlobalContext';
import MobileMenuButton from 'atoms/MobileMenuButton';
import MobileNavMenu from 'organisms/MobileNavMenu';
import links from 'data/navigation';

const Header = () => {
  const { scrolled, handleScroll } = useContext(GlobalContext);
  const { menuOpen, toggleMenu } = useContext(GlobalContext);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer scrolled={scrolled}>
      <MobileNavMenu links={links} />
      <StyledLogo links={'Home'}>Transpiled</StyledLogo>
      <NavWrapper>
        <NavMenu links={links} />
        <MobileMenuButton onClick={toggleMenu} isOpen={menuOpen} />
      </NavWrapper>
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

const StyledLogo = styled.div`
  font-weight: Bold;
  font-size: 3rem;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: auto 5rem;
`;

export default Header;
