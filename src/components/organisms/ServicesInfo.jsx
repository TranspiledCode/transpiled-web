import styled from '@emotion/styled';
import InfoTab from 'molecules/InfoTab';
import content from 'data/services';

const TabArea = styled.section`
  width: 100%;
  ${({ theme }) => theme.mixins.flexColCenter};
  padding: ${({ theme }) => theme.layouts.sectionPadding};
`;

const AreaContent = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  display: flex;
  flex-direction: column;
  gap: clamp(4rem, 4vw, 8rem);
`;

const ServicesInfo = () => {
  const {
    serviceTabs: { infoTabs },
  } = content;

  return (
    <TabArea>
      <AreaContent>
        {infoTabs.map((infoTab, index) => (
          <InfoTab
            key={index}
            title={infoTab.title}
            subtitle={infoTab.subtitle}
            features={infoTab.features}
            titleColor={infoTab.titleColor}
          />
        ))}
      </AreaContent>
    </TabArea>
  );
};
export default ServicesInfo;
