import React from 'react';
import styled from '@emotion/styled';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import Input from './Input';

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

const ContactDetailWrapper = styled.p`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`;

const ContactFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  flex: 1;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  width: 80%;
  padding: 2rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.blueAccent};
  width: 95%;
`;

const InputField = styled(Input)`
  margin-bottom: 2rem;
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

const Email = styled(ContactDetailWrapper)`
  color: ${({ theme }) => theme.colors.white};
`;

const EmailTitle = styled.p`
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.orange};
`;

const EmailLink = styled.a`
  font-size: 2rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white};
`;

const Phone = styled(ContactDetailWrapper)`
  color: ${({ theme }) => theme.colors.white};
`;

const PhoneTitle = styled.p`
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.orange};
`;

const PhoneLink = styled.a`
  font-size: 2rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white};
`;

const Social = styled(ContactDetailWrapper)`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2rem;
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

const CopyRightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
`;

const Footer = () => (
  <FooterWrapper>
    <ContactContainer>
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
          </ContactDetailWrapper>
        </ContactInfo>
      </ContactInfoWrapper>

      <ContactFormWrapper>
        <ContactForm
          name="contact-form"
          aria-labelledby="contact-form"
          method="post"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <InputField type="text" name="name" label="Name" />
          <InputField type="email" name="email" label="Email" />
          <InputField type="tel" name="phone" label="Phone" />
          <InputField as="textarea" name="message" label="Message" rows="5" />
          <button>Send</button>
        </ContactForm>
      </ContactFormWrapper>
    </ContactContainer>
    <CopyRightContainer>
      <p>©Copyright 2023 Transpiled | All Rights Reserved</p>
    </CopyRightContainer>
  </FooterWrapper>
);

export default Footer;
