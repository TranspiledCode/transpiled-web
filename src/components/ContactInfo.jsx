// ContactInfo.jsx
import React from 'react';
import styled from '@emotion/styled';
import SocialIcons from './SocialIcons';

const ContactInfoComponent = () => (
  <ContactInfoWrapper>
    <ContactInfo>
      <Title>Contact Us</Title>
      <ContactDetailWrapper>
        <Email>
          <EmailTitle>Email</EmailTitle>
          <EmailLink href="mailto:info@transpiled.com">
            info@transpiled.com
          </EmailLink>
        </Email>
      </ContactDetailWrapper>
      <ContactDetailWrapper>
        <Phone>
          <PhoneTitle>Phone</PhoneTitle>
          <PhoneLink href="tel:+14582569363">(458) 256-9363</PhoneLink>
        </Phone>
      </ContactDetailWrapper>
      <ContactDetailWrapper>
        <SocialIcons />
      </ContactDetailWrapper>
    </ContactInfo>
  </ContactInfoWrapper>
);

const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex: 1;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: flex-start;
  margin: 3rem auto;

  @media (min-width: 768px) {
    align-items: flex-start;
    width: 80%;
  }
`;

const Title = styled.h3`
  font-size: 4rem;
  text-transform: uppercase;
  font-weight: 700;

  @media (min-width: 768px) {
    color: ${({ theme }) => theme.colors.white};
    font-size: 5rem;
  }
`;

const ContactDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`;

const Email = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;

const EmailTitle = styled.p`
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.green};
`;

const EmailLink = styled.a`
  font-size: 2rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white};
`;

const Phone = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;

const PhoneTitle = styled.p`
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.green};
`;

const PhoneLink = styled.a`
  font-size: 2rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white};
`;

export default ContactInfoComponent;
