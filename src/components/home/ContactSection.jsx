import styled from '@emotion/styled';
import ContactFormComponent from '../ContactForm';

const Section = styled.div`
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.darkBlue},
    #dd53ff
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 6rem;
`;
const SectionInfo = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 6.4rem;
  line-height: 6.4rem;
  letter-spacing: -2px;
`;
const Subtitle = styled.p`
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 2.4rem;
  letter-spacing: -0.1px;
`;

const ContactSection = () => {
  return (
    <Section>
      <SectionInfo>
        <Title>CONTACT US</Title>
        <Subtitle>Lets Build Your Digital Solution Together</Subtitle>
      </SectionInfo>
      <ContactFormComponent />
    </Section>
  );
};

export default ContactSection;
