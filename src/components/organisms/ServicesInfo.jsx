import styled from "@emotion/styled";
import InfoTab from '../../components/molecules/InfoTab';
import config from '../../data/services';

const TabAreaWrapper = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.layouts.sectionPadding};
  display: flex;
  flex-direction: column;
  gap: clamp(4rem, 4vw, 8rem);
`;

const ServicesInfo = () => {
    const { infoTabs } = config.serviceTabs;
    return (
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
    )
}
export default ServicesInfo