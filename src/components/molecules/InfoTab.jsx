import styled from '@emotion/styled';

const TabContainer = styled.div``;
const Title = styled.h3``;
const Subtitle = styled.p``;
const FeatureArea = styled.div``;
const Feature = styled.div``;
const FeatureTitle = styled.h4``;
const FeatureCaption = styled.p``;

const InfoTab = () => {
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
  return (
    <TabContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <FeatureArea>
        {features.map((feature, index) => (
          <Feature key={index}>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureCaption>{feature.caption}</FeatureCaption>
          </Feature>
        ))}
      </FeatureArea>
    </TabContainer>
  );
};
export default InfoTab;
