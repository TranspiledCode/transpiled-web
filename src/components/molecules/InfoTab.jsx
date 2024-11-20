import styled from '@emotion/styled';

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  color: ${({ theme }) => theme.colors.green};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: 700;
  font-size: clamp(5rem, 8vw, 6.4rem);
  line-height: 0.95em;
  letter-spacing: -0.04em;
`;
const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 400;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  text-align: justify;
  line-height: 1.4em;
  letter-spacing: -0.015em;
`;
const FeatureArea = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 2vw 0;
`;
const Feature = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FeatureTitle = styled.h4`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 700;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  text-align: justify;
  line-height: 1.4em;
  letter-spacing: -0.015em;
`;
const FeatureCaption = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 400;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  text-align: justify;
  line-height: 1.4em;
  letter-spacing: -0.015em;
`;

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
