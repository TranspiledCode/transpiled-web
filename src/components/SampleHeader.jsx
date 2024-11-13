import { useEffect, useContext } from 'react';
import styled from '@emotion/styled';

import GlobalContext from '../context/GlobalContext';
// import Icon from './Icon';
import NavBar from './NavBar';
import MobileMenuButton from './MobileMenuButton';

const SampleHeader = () => {
  const { scrolled, handleScroll } = useContext(GlobalContext);
  const { menuOpen, toggleMenu } = useContext(GlobalContext);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { url: '/', label: 'Home' },
    { url: '/services', label: 'Services' },
  ];

  return (
    <HeaderContainer scrolled={scrolled}>
      <Logo>Transpiled</Logo>
      <Nav>
        <NavBar links={links} />
        {/* <Hamburger>
          <Icon
            name={menuOpen ? 'FaTimes' : 'FaBars'}
            size={1.8}
            onClick={toggleMenu}
          />
        </Hamburger> */}
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
  z-index: 10;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

// const Hamburger = styled.div`
//   font-size: 1.8rem;
//   @media (min-width: 768px) {
//     display: none;
//   }
// `;

export default SampleHeader;
