// header.jsx
import { useContext } from 'react';
import styled from '@emotion/styled';
import { GlobalContext } from '../context/GlobalContext';
import config from '../config';
import Icon from './Icon';
import NavBar from './NavBar';
import NavMenu from './NavMenu';

const StyledHeader = styled.header`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: 100px;
  background-color: transparent;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

const StyledLogo = styled.img`
  height: 40px;
`;

const MobileMenu = styled.div`
  cursor: pointer;
  display: flex;
  color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const { menuOpen, setMenuOpen, toggleMenu } = useContext(GlobalContext);

  console.log(menuOpen);

  return (
    <StyledHeader>
      <StyledLogo
        src={config.siteImages.headerLogo}
        alt='Transpiled Logo'
        onClick={() => setMenuOpen(false)}
      />
      <NavBar />
      <NavMenu />
      <MobileMenu>
        <Icon iconName='bars' size='3x' iconType='solid' onClick={toggleMenu} />
      </MobileMenu>
    </StyledHeader>
  );
};

export default Header;
