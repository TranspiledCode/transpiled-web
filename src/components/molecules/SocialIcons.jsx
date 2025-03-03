import React from 'react';
import styled from '@emotion/styled';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  min-height: 48px;
  padding: 12px;
  margin-right: ${(props) => (props.isLast ? '0' : '8px')};
  color: ${({ theme }) => theme.colors.white};
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

const SocialIcons = () => {
  return (
    <SocialContainer>
      <SocialLink
        href="https://www.facebook.com/Transpiled/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit our Facebook page"
      >
        <Facebook size={24} />
      </SocialLink>

      <SocialLink
        href="https://www.instagram.com/transpiled"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit our Instagram page"
      >
        <Instagram size={24} />
      </SocialLink>

      <SocialLink
        href="https://www.linkedin.com/company/transpiled"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit our LinkedIn page"
        isLast
      >
        <Linkedin size={24} />
      </SocialLink>
    </SocialContainer>
  );
};

export default SocialIcons;
