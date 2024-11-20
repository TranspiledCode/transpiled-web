import styled from '@emotion/styled';

const TabContainer = styled.div``;
const Title = styled.h3``;
const Subtitle = styled.p``;
const FeatureArea = styled.div``;
const Feature = styled.div``;
const FeatureTitle = styled.h4``;
const FeatureCaption = styled.p``;

const InfoTab = () => {
  return (
    <TabContainer>
      <Title></Title>
      <Subtitle></Subtitle>
      <FeatureArea>
        <Feature>
          <FeatureTitle></FeatureTitle>
          <FeatureCaption></FeatureCaption>
        </Feature>
      </FeatureArea>
    </TabContainer>
  );
};
export default InfoTab;
