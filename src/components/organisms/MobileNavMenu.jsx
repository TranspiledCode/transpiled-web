import React, { useContext, memo } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import GlobalContext from 'context/GlobalContext';

const StyledMobileNav = styled.nav`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndices.mobileNavOverlay};
  transition:
    opacity 0.4s ease,
    visibility 0.4s ease;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};

  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 400;
  font-size: clamp(2rem, 2vw, 2.4rem);
  letter-spacing: -0.015em;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: opacity 0.4s ease;
  transition-delay: ${({ delay }) => `${delay}s`};
`;

const BgOverlay = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  transform: scaleY(${({ isOpen }) => (isOpen ? '1' : '0')});
  transform-origin: top;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition:
    transform 0.4s ease,
    visibility 0.4s ease;

  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`;

const MobileNavMenu = ({ links }) => {
  const { menuOpen, toggleMenu } = useContext(GlobalContext);

  return (
    <>
      <StyledMobileNav isOpen={menuOpen} aria-hidden={!menuOpen}>
        {links.map(({ url, label }, index) => (
          <StyledLink
            key={url}
            to={url}
            onClick={toggleMenu}
            aria-label={label}
            isOpen={menuOpen}
            delay={menuOpen ? index * 0.1 : 0}
          >
            {label}
          </StyledLink>
        ))}
      </StyledMobileNav>
      <BgOverlay isOpen={menuOpen} aria-label="menu background overlay" />
    </>
  );
};

MobileNavMenu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default memo(MobileNavMenu);
