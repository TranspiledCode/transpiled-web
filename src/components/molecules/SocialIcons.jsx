// SocialIcons.jsx
import React from 'react';
import styled from '@emotion/styled';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Social = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SocialIcon = styled.a`
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.5rem;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

const SocialIcons = () => (
  <Social>
    <SocialIcon
      href="https://www.facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
    >
      <FaFacebookF />
    </SocialIcon>
    <SocialIcon
      href="https://www.instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <FaInstagram />
    </SocialIcon>
    <SocialIcon
      href="https://www.linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <FaLinkedinIn />
    </SocialIcon>
  </Social>
);

export default SocialIcons;
