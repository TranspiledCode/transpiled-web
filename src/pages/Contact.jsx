import ContactSection from 'components/organisms/ContactSection';
import PageHero from 'components/organisms/PageHero';
import PageCTA from 'components/organisms/PageCTA';
import content from 'data/contact';
import style from 'style/pages';

const ContactPage = () => {
  const {
    hero: heroContent,
    cta: ctaContent,
    form: { formTitle, formSubtitle },
  } = content;

  const { hero: heroStyle, cta: ctaStyle } = style.contact;

  return (
    <>
      <PageHero style={heroStyle} content={heroContent} />
      <ContactSection formTitle={formTitle} formSubtitle={formSubtitle} />
      <PageCTA style={ctaStyle} content={ctaContent} />
    </>
  );
};
export default ContactPage;
