import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';

import Input from './Input';
import Button from './Button';
import Textarea from './Textarea';
import FormContext from 'context/ContactForm';
import { useToast } from 'context/ToastContext'; // Import useToast hook

const ContactFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  flex: 1;
`;

const ContactFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  width: 80%;
  padding: 2rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  width: 95%;

  @media (min-width: 768px) {
    width: 80%;
  }
`;

const InputField = styled(Input)`
  margin-bottom: 2rem;
`;

const TextareaField = styled(Textarea)`
  margin-bottom: 2rem;
`;

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const ContactFormComponent = () => {
  const { formData, resetFormData } = useContext(FormContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addToast } = useToast(); // Get the addToast function from ToastContext

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact-form', ...formData }),
    })
      .then((response) => {
        if (response.ok) {
          addToast('Form submitted successfully!', 'success'); // Show success toast
          resetFormData();
        } else {
          throw new Error(`HTTP status ${response.status}`);
        }
      })
      .catch((error) => {
        addToast(`Error: ${error.message}`, 'danger'); // Show error toast
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <ContactFormWrapper>
      <ContactFormStyled
        name="contact-form"
        aria-labelledby="contact-form"
        method="post"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact-form" />
        <InputField type="text" name="name" label="Name" />
        <InputField type="email" name="email" label="Email" />
        <InputField type="tel" name="phone" label="Phone" />
        <TextareaField name="message" label="Message" maxLength={120} />
        <Button
          type="submit"
          disabled={isSubmitting}
          variant="primary"
          size="medium"
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </Button>
      </ContactFormStyled>
    </ContactFormWrapper>
  );
};

export default ContactFormComponent;
