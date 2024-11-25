import styled from '@emotion/styled';
import SampleHeader from 'organisms/SampleHeader';
import ServicesHero from '../components/organisms/ServicesHero';
import InfoTab from '../components/molecules/InfoTab';
import ServicesContact from '../components/organisms/ServicesContact';
import config from '../data/services';

const ServicesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
`;

const TabAreaWrapper = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.layouts.maxWidth};
`;

const Services = () => {
  const { infoTabs } = config.serviceTabs;
  return (
    <ServicesWrapper>
      <SampleHeader />
      <ServicesHero />
      <TabAreaWrapper>
        {infoTabs.map((infoTab, index) => (
          <InfoTab
            key={index}
            title={infoTab.title}
            subtitle={infoTab.subtitle}
            features={infoTab.features}
            titleColor={infoTab.titleColor}
          />
        ))}
      </TabAreaWrapper>
      <ServicesContact />
    </ServicesWrapper>
  );
};

export default Services;
