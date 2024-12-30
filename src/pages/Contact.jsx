import styled from '@emotion/styled';
import ContactSection from '../components/organisms/ContactSection';
import PageHero from '../components/organisms/PageHero';
import PageCTA from '../components/organisms/PageCTA';

const PageWrapper = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.darkBlue},
    ${({ theme }) => theme.colors.fuchsia}
  );
`;

const ContactPage = () => {
  return (
    <PageWrapper>
      <PageHero
        gradTopCol="darkBlue"
        gradBotCol="fuchsia"
        title="Build your future here, today"
        subtitle="Whether you need a website refresh or something totally custom, we're here to make it happen."
        caption="Ask about your upcoming project or schedule a consultation below."
      />
      <ContactSection />
      <PageCTA
        gradTopCol="lightBlue"
        gradBotCol="darkBlue"
        title="Still on the Fence?"
        subtitle="Feel free to meet our team, and learn more about how we approach every project with creativity, dedication and care."
        btnText="About Us"
        btnUrl="/about"
      />
    </PageWrapper>
  );
};
export default ContactPage;
