import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { FaBars } from 'react-icons/fa';
import NavBar from './NavBar';

const SampleHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
        <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </Hamburger>
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

const Hamburger = styled.div`
  font-size: 1.8rem;
  @media (min-width: 768px) {
    display: none;
  }
`;

export default SampleHeader;
