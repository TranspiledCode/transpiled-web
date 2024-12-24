import styled from '@emotion/styled';
import ContactSection from '../components/organisms/ContactSection';

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
      <ContactSection />
    </PageWrapper>
  );
};
export default ContactPage;
