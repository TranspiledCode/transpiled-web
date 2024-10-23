import React, { useState } from 'react';
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

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: ${({ theme }) => theme.colors.darkOrange};
  }
`;

const Footer = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // State for button status: 'Send', 'Sending', 'Sent'
  const [buttonStatus, setButtonStatus] = useState('Send');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonStatus('Sending');

    // Prepare form data for Netlify
    const formPayload = new FormData();
    formPayload.append('form-name', 'contact-form');
    Object.entries(formData).forEach(([key, value]) => {
      formPayload.append(key, value);
    });

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setButtonStatus('Sent');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });

        // Reset button after 3 seconds
        setTimeout(() => {
          setButtonStatus('Send');
        }, 3000);
      } else {
        // Handle server errors
        setButtonStatus('Send');
        alert('There was an error submitting the form. Please try again.');
      }
    } catch (error) {
      // Handle network errors
      setButtonStatus('Send');
      alert('There was an error submitting the form. Please try again.');
    }
  };

  return (
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
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact-form" />
            <InputField
              type="text"
              name="name"
              label="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <InputField
              type="email"
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <InputField
              type="phone"
              name="phone"
              label="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                padding: '1rem',
                borderRadius: '0.5rem',
                border: '1px solid #ccc',
                marginBottom: '2rem',
                width: '100%',
                minHeight: '150px',
                resize: 'vertical',
                fontSize: '1.6rem',
              }}
            />
            <SubmitButton type="submit" disabled={buttonStatus === 'Sending'}>
              {buttonStatus}
            </SubmitButton>
          </ContactForm>
        </ContactFormWrapper>
      </ContactContainer>
      <CopyRightContainer>
        <p>©Copyright 2023 Transpiled | All Rights Reserved</p>
      </CopyRightContainer>
    </FooterWrapper>
  );
};

export default Footer;
