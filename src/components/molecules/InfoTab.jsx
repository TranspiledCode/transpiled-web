import styled from '@emotion/styled';

const TabContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray};
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

  ${({ theme }) => theme.mediaQueries.lg} {
    width: clamp(60rem, 100%, 85rem);
    text-align: left;
  }
`;
const FeatureArea = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: clamp(2rem, 6vw, 15rem);
  row-gap: clamp(2rem, 4vw, 8rem);
  padding: clamp(4rem, 4vw, 8rem) 0;
  ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns: repeat(2, clamp(10rem, 30vw, 40rem));
  }
`;
const Feature = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.8rem, 1vw, 1.4rem);
`;

const FeatureTitle = styled.h4`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 700;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  line-height: 1.2em;
  letter-spacing: -0.015em;
  width: 90%;
`;
const FeatureCaption = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 400;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
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
