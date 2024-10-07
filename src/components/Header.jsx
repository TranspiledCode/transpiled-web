// header.jsx
import { useContext } from 'react';
import styled from '@emotion/styled';
import { GlobalContext } from '../context/GlobalContext';
import config from '../config';
import Icon from './Icon';
import NavMenu from './NavMenu';

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

const MobileMenu = styled.div`
  cursor: pointer;
  font-size: 1.8rem
  height: 18px;
  width: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  svg {
    transition: color 0.2s ease-in-out;
  }

  svg:hover {
    color: #000000;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const { setMenuOpen, toggleMenu } = useContext(GlobalContext);

  return (
    <StyledHeader>
      <StyledLogo
        src={config.siteImages.headerLogo}
        alt='Transpiled Logo'
        onClick={() => setMenuOpen(false)}
      />
      <MobileMenu onClick={toggleMenu}>
        <Icon iconName='bars' size='3x' iconType='solid' />
      </MobileMenu>
      <NavMenu />
    </StyledHeader>
  );
};

export default Header;
