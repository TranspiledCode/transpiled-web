// ContactInfo.jsx
import React from 'react';
import styled from '@emotion/styled';
import SocialIcons from 'molecules/SocialIcons';
import NavMenu from 'molecules/NavMenu';
import links from 'data/navigation';

const ContactInfo = () => (
  <FooterWrapper>
    <Column>
      <ContactDetails>
        <ContactItem>
          <ContactLabel>Email:</ContactLabel>
          <ContactLink href="mailto:info@yourcompany.com">
            info@yourcompany.com
          </ContactLink>
        </ContactItem>
        <ContactItem>
          <ContactLabel>Phone:</ContactLabel>
          <ContactLink href="tel:+14582569363">(458) 256-9363</ContactLink>
        </ContactItem>
        <ContactItem>
          <ContactLabel>Address:</ContactLabel>
          <ContactText>123 Main St, City, Country</ContactText>
        </ContactItem>
      </ContactDetails>
    </Column>

    <Column>
      <NavLinks>
        <NavMenu links={links} />
      </NavLinks>
    </Column>

    <Column>
      <CompanyInfo>
        <CompanyName>Transpiled</CompanyName>
        <SocialIconsWrapper>
          <SocialIcons />
        </SocialIconsWrapper>
      </CompanyInfo>
    </Column>
  </FooterWrapper>
);

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: ${({ theme }) => theme.layouts.maxWidth};

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Column = styled.div`
  flex: 1;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:not(:last-child) {
    margin-right: 0;

    @media (min-width: 768px) {
      margin-right: 2rem;
    }
  }
`;

/* First Column Styles */
const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  @media (min-width: 768px) {
    align-items: flex-end;
  }
`;

const CompanyName = styled.h3`
  font-size: 2.5rem;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const SocialIconsWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

/* Second Column Styles */
const NavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

/* Third Column Styles */
const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactItem = styled.div`
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
`;

const ContactLabel = styled.span`
  font-weight: 700;
  margin-right: 0.5rem;
`;

const ContactLink = styled.a`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`;

const ContactText = styled.span`
  font-size: 1.8rem;
  margin: 0;
`;

export default ContactInfo;
