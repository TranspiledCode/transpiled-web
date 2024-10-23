// Footer.jsx
import React from 'react';
import styled from '@emotion/styled';

import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.white};
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const CopyRightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <ContactContainer>
        <ContactInfo />
        <ContactForm />
      </ContactContainer>
      <CopyRightContainer>
        ©Copyright 2023 Transpiled | All Rights Reserved
      </CopyRightContainer>
    </FooterWrapper>
  );
};

export default Footer;
