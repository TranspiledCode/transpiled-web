import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import TitleSubtitle from '../molecules/TitleSubtitle';

const SectionContainer = styled.section`
  padding: ${({ theme }) => theme.layouts.sectionPadding};
  ${({ theme }) => theme.mixins.flexColCenter}
`;
const SectionContent = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  ${({ theme }) => theme.mixins.flexColCenter};
  gap: 4rem;
`;

const CoverImage = styled.div`
  position: relative;
  height: 60rem;
  width: 100%;
  ${({ theme }) => theme.mixins.flexColCenter};
`;
const CoverTextContainer = styled.div`
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  ${({ theme }) => theme.mixins.flexColCenter};
  gap: 1rem;
`;
const CoverTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: clamp(4.8rem, 8vw, 6.4rem);
  line-height: 0.95em;
  letter-spacing: -0.04em;
`;
const CoverSubtitleArea = styled.div`
  ${({ theme }) => theme.mixins.flexColCenter};
`;
const Industry = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  text-transform: uppercase;
  font-size: 1.2rem;
  line-height: 1.4em;
  letter-spacing: -0.01em;
`;
const Summary = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  text-transform: uppercase;
  font-size: 1.2rem;
  line-height: 1.4em;
  letter-spacing: -0.01em;
`;
const Overlay = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.8;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
`;
const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
`;

const PortfolioList = ({
  title,
  subtitle,
  url = 'https://transpiled.s3.us-west-2.amazonaws.com/assets/img/nvmFish/m.webp',
  label = 'test image',
}) => {
  return (
    <SectionContainer>
      <SectionContent>
        <TitleSubtitle
          title={title}
          subtitle={subtitle}
          titleColor="orange"
          stMaxWidth={60}
        />
        <CoverImage>
          <CoverTextContainer>
            <CoverTitle>Fitlife Inc.</CoverTitle>
            <CoverSubtitleArea>
              <Industry>Healthcare</Industry>
              <Summary>Mobile app redesign & Rebuild</Summary>
            </CoverSubtitleArea>
          </CoverTextContainer>
          <Overlay></Overlay>
          <Image src={url} alt={label} aria-label={label} loading="lazy" />
        </CoverImage>
      </SectionContent>
    </SectionContainer>
  );
};
PortfolioList.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  url: PropTypes.string,
  label: PropTypes.string.isRequired,
};
export default PortfolioList;
