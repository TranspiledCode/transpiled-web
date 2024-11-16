import { useEffect, useContext } from 'react';
import styled from '@emotion/styled';
import NavBar from './NavBar';
import GlobalContext from '../context/GlobalContext';
import MobileNavMenu from './MobileNavMenu';
import MobileMenuButton from './MobileMenuButton';
import links from 'config/navigation';

const Header = () => {
  const { scrolled, handleScroll } = useContext(GlobalContext);
  const { menuOpen, toggleMenu } = useContext(GlobalContext);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer scrolled={scrolled}>
      <StyledLogo links={'Home'}>Transpiled</StyledLogo>
      <NavWrapper>
        <NavBar links={links} />
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
// const HeaderWrapper = styled.div`
//   position: fixed;
//   display: flex;
//   justify-content: space-between;
//   color: ${({ theme }) => theme.colors.white};
//   font-family: ${({ theme }) => theme.fonts.poppins};
//   border: border: 1px solid ${({ theme }) => theme.colors.darkBlue};
//   background: border: 1px solid ${({ theme }) => theme.colors.darkBlue};;
//   padding: 1rem 2rem;
//   align-items: center;
//   position: fixed;
//   top: 0;
//   z-index: 2;
//   width: 100%;
// `;

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
