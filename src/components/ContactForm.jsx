import styled from '@emotion/styled';
import { Input, useTheme } from '@transpiled/ui';
import Button from './Button';

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 800px;
`;

const StyledInputContainer = styled.div`
  margin: 10px 0;
  width: 100%;
  font-size: 22px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const ContactForm = () => {
  const { theme } = useTheme();
  return (
    <StyledForm
      aria-labelledby='contact-form'
      name='contact-form'
      method='post'
      data-netlify='true'
    >
      <input type='hidden' name='form-name' value='contact-form' />
      <StyledInputContainer>
        <Input
          id='name'
          name='name'
          type='text'
          placeholder='Name'
          clearable
          ariaLabel='name field'
          theme={theme}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Input
          id='email'
          name='email'
          type='email'
          placeholder='Email'
          clearable
          ariaLabel='email field'
          theme={theme}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Input
          id='phone'
          name='phone'
          type='text'
          placeholder='Phone'
          clearable
          ariaLabel='phone number field'
          theme={theme}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <Input
          id='message'
          name='message'
          type='text'
          placeholder='Message'
          clearable
          ariaLabel='message field'
          theme={theme}
          // textarea
        />
      </StyledInputContainer>
      <Button variant='secondary'>Send</Button>
    </StyledForm>
  );
};

export default ContactForm;
