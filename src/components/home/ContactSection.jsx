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
  padding: 2rem;

  @media (min-width: 768px) {
    padding: 6rem;
  }
`;
const SectionInfo = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
`;
const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 5rem;
  line-height: 5rem;
  letter-spacing: -2px;

  @media (min-width: 768px) {
    font-size: 6.4rem;
    line-height: 6.4rem;
  }
`;
const Subtitle = styled.p`
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 1.8rem;
  letter-spacing: 0.1px;

  @media (min-width: 768px) {
    font-size: 2.4rem;
    line-height: 2.4rem;
    letter-spacing: -0.1px;
  }
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
