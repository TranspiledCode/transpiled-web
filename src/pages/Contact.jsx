import SEO from 'components/templates/SEO';
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
  const { title, canonical, description } = content.seo;
  return (
    <>
      <SEO title={title} canonical={canonical} description={description} />
      <PageHero style={heroStyle} content={heroContent} />
      <ContactSection formTitle={formTitle} formSubtitle={formSubtitle} />
      <PageCTA style={ctaStyle} content={ctaContent} />
    </>
  );
};
export default ContactPage;
