// src/components/NavLinks.js
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import config from '../config';

const StyledLink = styled.a`
  font-size: inherit;
  color: inherit;
  cursor: pointer;
`;

const LinkWrapper = styled.div``;

const NavLinks = ({ onLinkClick }) => (
  <>
    {config.siteInfo.navLinks.map((link) => (
      <LinkWrapper key={link.name}>
        <StyledLink href={link.url} onClick={onLinkClick}>
          {link.name}
        </StyledLink>
      </LinkWrapper>
    ))}
  </>
);

NavLinks.propTypes = {
  onLinkClick: PropTypes.func.isRequired,
};

export default NavLinks;
