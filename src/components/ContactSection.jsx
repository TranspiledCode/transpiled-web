import styled from '@emotion/styled';
import config from '../config/home';
import ContactForm from './ContactForm';

const ScrollTo = styled.div`
  pointer-events: none;
  position: absolute;
  transform: translateY(-4rem);

  ${({ theme }) => theme.mediaQueries.md} {
    transform: translateY(-2rem);
  }
`;

const Section = styled.div`
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.darkBlue},
    ${({ theme }) => theme.colors.fuchsia}
  );
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionContent = styled.div`
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4rem;

  padding: 4rem 2rem;

  ${({ theme }) => theme.mediaQueries.md} {
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

  ${({ theme }) => theme.mediaQueries.md} {
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

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 2.4rem;
    line-height: 2.4rem;
    letter-spacing: -0.1px;
  }
`;

const ContactSection = () => {
  return (
    <>
      <ScrollTo id="contact" aria-hidden={true}></ScrollTo>
      <Section>
        <SectionContent>
          <SectionInfo>
            <Title>{config.contact.title}</Title>
            <Subtitle>{config.contact.subtitle}</Subtitle>
          </SectionInfo>
          <ContactForm />
        </SectionContent>
      </Section>
    </>
  );
};

export default ContactSection;
