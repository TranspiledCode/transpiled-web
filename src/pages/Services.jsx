import styled from '@emotion/styled';
import SampleHeader from 'organisms/SampleHeader';
import ServicesHero from '../components/organisms/ServicesHero';
import ServicesContact from '../components/organisms/ServicesContact';
import InfoTab from '../components/molecules/InfoTab';

const ServicesWrapper = styled.section`
  display: flex;
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
// Remove After Debug //

const Services = () => {
  return (
    <ServicesWrapper>
      <SampleHeader />
      <ServicesHero />
      <ServicesContact />
      <TestWrapper>
        <ContentWrapper>
          <InfoTab />
        </ContentWrapper>
      </TestWrapper>
    </ServicesWrapper>
  );
};

export default Services;
