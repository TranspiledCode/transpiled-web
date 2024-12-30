import ContactSection from '../components/organisms/ContactSection';
import PageHero from '../components/organisms/PageHero';
import PageCTA from '../components/organisms/PageCTA';

const ContactPage = () => {
  return (
    <>
      <PageHero
        gradTopCol="darkBlue"
        gradBotCol="fuchsia"
        title="Build your future here, today"
        subtitle="Whether you need a website refresh or something totally custom, we're here to make it happen."
        caption="Ask about your upcoming project or schedule a consultation below."
      />
      <ContactSection title={title} subtitle={subtitle} />
      <PageCTA
        gradTopCol="lightBlue"
        gradBotCol="darkBlue"
        title="Still on the Fence?"
        subtitle="Feel free to meet our team, and learn more about how we approach every project with creativity, dedication and care."
        btnText="About Us"
        btnUrl="/about"
      />
    </>
  );
};
export default ContactPage;
