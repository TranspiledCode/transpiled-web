import styled from '@emotion/styled';
import { Input, useTheme } from '@transpiled/ui';
import Icon from '../components/Icon';
import Button from '../components/Button';
import { phoneNumber, companyLink, email, socialLinks } from '../config';

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
  a {
    color: ${({ theme }) => theme.white};
  }
`;

const SocialIcons = styled.div`
  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;

const StyledInput = styled.div`
  height: 70px;
  width: 100%;
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
          <DetailText>
            <a href={`mailto:${email}`}>{email}</a>
          </DetailText>
        </DetailsWrapper>
        <SocialIcons>
          <Icon
            iconName='xTwitter'
            size='3x'
            iconType='brand'
            url={socialLinks.twitter}
          />
          <Icon
            iconName='linkedinIn'
            size='3x'
            iconType='brand'
            url={socialLinks.linkedin}
          />
          <Icon iconName='globe' size='3x' iconType='solid' url={companyLink} />
        </SocialIcons>
      </ContactContainer>
      <FormContainer as='form' action='#'>
        <StyledInput>
          <Input
            id='name'
            name='name'
            type='text'
            size='xl'
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
            size='xl'
            placeholder='Email address'
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
            size='xl'
            placeholder='Message'
            clearable
            borderStyle='bottom'
            theme={theme}
          />
        </StyledInput>

        <Button type='submit' variant='secondary'>
          Submit
        </Button>
      </FormContainer>
    </FooterSection>
  );
};

export default Footer;
