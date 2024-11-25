import styled from '@emotion/styled';
import SampleHeader from 'organisms/SampleHeader';
import ServicesHero from '../components/organisms/ServicesHero';
import InfoTab from '../components/molecules/InfoTab';
import ServicesContact from '../components/organisms/ServicesContact';

const ServicesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 100vh;
`;

// Remove After Debug //
const TestWrapper = styled.div`
  width: 100%;
  max-width: 100vw;
  ${({ theme }) => theme.mixins.flexColCenter};
  padding: ${({ theme }) => theme.layouts.sectionPadding};
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  padding: 2vw 0;
`;

const Services = () => {
  const title = 'WEB DEVELOPMENT';
  const subtitle =
    'A great website is the foundation of your online presence. We build responsive, high-performance sites designed to impress and convert.';
  const features = [
    {
      title: 'Responsive Design',
      caption: 'Websites that look and work beautifully on all devices.',
    },
    {
      title: 'Optimized Performance',
      caption: 'Fast load times and smooth functionality.',
    },
    {
      title: 'E-Commerce',
      caption:
        'Secure, scalable online stores with payment and inventory systems.',
    },
    {
      title: 'SEO-Ready',
      caption: 'Built to help your site rank higher on search engines.',
    },
  ];
  // Remove After Debug //

  return (
    <ServicesWrapper>
      <SampleHeader />
      <ServicesHero />
      <TestWrapper>
        <ContentWrapper>
          <InfoTab title={title} subtitle={subtitle} features={features} />
        </ContentWrapper>
      </TestWrapper>
      <ServicesContact />
    </ServicesWrapper>
  );
};

export default Services;
