import styled from '@emotion/styled';
import ContactFormComponent from '../ContactForm';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.darkBlue},
    #dd53ff
  );
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
  font-size: 6.4rem;
  line-height: 6.4rem;
`;
const Subtitle = styled.p`
  font-size: 2.4rem;
  line-height: 2.4rem;
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
