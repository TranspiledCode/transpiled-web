import styled from '@emotion/styled';
import ContactFormComponent from '../ContactForm';

const SectionTitle = styled.div``;
const Title = styled.h2``;
const Subtitle = styled.p``;

const ContactSection = () => {
  return (
    <>
      <SectionTitle>
        <Title>CONTACT US</Title>
        <Subtitle>Lets Build Your Digital Solution Together</Subtitle>
      </SectionTitle>
      <ContactFormComponent />
    </>
  );
};

export default ContactSection;
