import ContactSection from '../components/organisms/ContactSection';
import PageHero from '../components/organisms/PageHero';
import PageCTA from '../components/organisms/PageCTA';
import content from '../data/contact';

const ContactPage = () => {
  const {
    hero: { title, subtitle, caption },
    form: { formTitle, formSubtitle },
    cta: { ctaTitle, ctaSubtitle, btnText, btnUrl },
  } = content;
  return (
    <>
      <PageHero
        gradTopCol="darkBlue"
        gradBotCol="fuchsia"
        title={title}
        subtitle={subtitle}
        caption={caption}
        stMaxWidth={70}
      />
      <ContactSection formTitle={formTitle} formSubtitle={formSubtitle} />
      <PageCTA
        gradTopCol="lightBlue"
        gradBotCol="darkBlue"
        title={ctaTitle}
        subtitle={ctaSubtitle}
        btnText={btnText}
        btnUrl={btnUrl}
        stMaxWidth={75}
      />
    </>
  );
};
export default ContactPage;
