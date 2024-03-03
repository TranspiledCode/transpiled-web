import styled from '@emotion/styled';
import { Input, useTheme } from '@transpiled/ui';
import Icon from '../components/Icon';
import Button from '../components/Button';
import { phoneNumber, email } from '../config';

const FooterSection = styled.div`
  background-color: ${({ theme }) => theme.darkBlue};
  color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  width: 50%;
  gap: 1rem;
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 50%;
  max-width: 500px;
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.secondary};
  font-size: 3rem;
  font-weight: 500;
  text-align: center;
`;
const SubHeading = styled.h2`
  color: ${({ theme }) => theme.white};
  font-weight: 500;
  font-size: 2rem;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 15px 0;
`;

const DetailText = styled.h3`
  color: ${({ theme }) => theme.white};
  font-size: 1.5rem;
  font-weight: 300;
`;

const SocialIcons = styled.div`
  & > *:not(:last-child) {
    margin-right: 10px; // Adds spacing between icons, adjust as necessary
  }
`;

const StyledInput = styled.div`
  margin-bottom: 20px;
`;

const Footer = () => {
  const { theme } = useTheme();

  return (
    <FooterSection id='footer'>
      <ContactContainer>
        <Heading>Stay in touch with us!</Heading>
        <DetailsWrapper>
          <SubHeading>Phone Number</SubHeading>
          <DetailText>{phoneNumber}</DetailText>
        </DetailsWrapper>
        <DetailsWrapper>
          <SubHeading>Email</SubHeading>
          <DetailText>{email}</DetailText>
        </DetailsWrapper>
        <SocialIcons>
          <Icon iconName='facebook' size='3x' iconType='brand' />
          <Icon iconName='twitter' size='3x' iconType='brand' />
          <Icon iconName='instagram' size='3x' iconType='brand' />
        </SocialIcons>
      </ContactContainer>
      <FormContainer as='form' action='#'>
        <StyledInput>
          <Input
            id='usersName'
            name='usersName'
            type='text'
            size='l'
            placeholder='Enter your name'
            clearable
            borderStyle='box'
            theme={theme}
          />
        </StyledInput>
        <label>
          <SubHeading>Email</SubHeading>
          <input type='email' placeholder='Enter your email' required />
        </label>
        <label>
          <SubHeading>Message</SubHeading>
          <textarea placeholder='Enter your message' required />
        </label>
        <Button type='submit' variant='primary'>
          Submit
        </Button>
      </FormContainer>
    </FooterSection>
  );
};

export default Footer;
