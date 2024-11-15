import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';

import Input from 'atoms/Input';
import Button from 'atoms/Button';
import Textarea from 'atoms/Textarea';
import FormContext from 'context/ContactForm';
import { useToast } from 'context/ToastContext'; // Import useToast hook

const ContactFormWrapper = styled.div`
  width: 100%;

  ${({ theme }) => theme.mediaQueries.md} {
    max-width: 75%;
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    max-width: 50%;
  }
`;
const ContactFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const FormInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  button {
    align-self: flex-end;
  }
`;

const InputField = styled(Input)``;

const TextareaField = styled(Textarea)``;

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const ContactForm = () => {
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
        <FormInputs>
          <InputField type="text" name="name" label="Name" />
          <InputField type="email" name="email" label="Email" />
          <InputField type="tel" name="phone" label="Phone" />
          <TextareaField name="message" label="Message" maxLength={250} />
          <Button
            type="submit"
            disabled={isSubmitting}
            variant="outline"
            icon="FaArrowRight"
            size="medium"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </FormInputs>
      </ContactFormStyled>
    </ContactFormWrapper>
  );
};

export default ContactForm;