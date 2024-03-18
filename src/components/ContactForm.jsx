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

const StyledInput = styled.div`
  margin: 10px 0;
  width: 100%;
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
      <StyledInput>
        <Input
          id='name'
          name='name'
          type='text'
          size='l'
          placeholder='Name'
          clearable
          borderStyle='bottom'
          theme={theme}
        />
      </StyledInput>
      <StyledInput>
        <Input
          id='email'
          name='email'
          type='email'
          size='l'
          placeholder='Email'
          clearable
          borderStyle='bottom'
          theme={theme}
        />
      </StyledInput>
      <StyledInput>
        <Input
          id='phone'
          name='phone'
          type='text'
          size='l'
          placeholder='Phone'
          clearable
          borderStyle='bottom'
          theme={theme}
        />
      </StyledInput>
      <StyledInput>
        <Input
          id='message'
          name='message'
          type='text'
          size='l'
          placeholder='Message'
          clearable
          borderStyle='bottom'
          theme={theme}
          // textarea
        />
      </StyledInput>
      <Button variant='secondary'>Send</Button>
    </StyledForm>
  );
};

export default ContactForm;
