import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import ContactForm from 'organisms/ContactForm';
import TitleSubtitle from '../molecules/TitleSubtitle';

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

const ContactSection = ({ formTitle, formSubtitle }) => {
  return (
    <>
      <ScrollTo id="contact" aria-hidden={true}></ScrollTo>
      <Section>
        <SectionContent>
          <TitleSubtitle
            title={formTitle}
            subtitle={formSubtitle}
            titleColor="fuchsia"
          />
          <ContactForm />
        </SectionContent>
      </Section>
    </>
  );
};
ContactSection.propTypes = {
  formTitle: PropTypes.string.isRequired,
  formSubtitle: PropTypes.string.isRequired,
};
export default ContactSection;
