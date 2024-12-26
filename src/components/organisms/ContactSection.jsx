import styled from '@emotion/styled';
import config from 'data/home';
import ContactForm from 'organisms/ContactForm';

const ScrollTo = styled.div`
  pointer-events: none;
  position: absolute;
  transform: translateY(-4rem);

  ${({ theme }) => theme.mediaQueries.md} {
    transform: translateY(-2rem);
  }
`;

const Section = styled.section`
  ${({ theme }) => theme.mixins.flexColCenter};
  padding: ${({ theme }) => theme.layouts.sectionPaddingNoTop};
  padding-top: clamp(6rem, 6vw, 8rem);
  padding-bottom: clamp(4rem, 4vw, 6rem);
`;

const SectionContent = styled.div`
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4rem;
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
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: 700;
  font-size: clamp(5rem, 8vw, 6.4rem);
  line-height: clamp(5rem, 8vw, 6.4rem);
`;
const Subtitle = styled.p`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 400;
  font-size: clamp(1.6rem, 4vw, 2.4rem);

  ${({ theme }) => theme.mediaQueries.md} {
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
