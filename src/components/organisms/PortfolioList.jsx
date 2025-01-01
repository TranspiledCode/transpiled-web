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
  gap: clamp(2rem, 4vw, 4rem);
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
        {/* <CoverImage>
          <CoverTextContainer>
            <CoverTitle>StyleHub</CoverTitle>
            <CoverSubtitleArea>
              <Industry>E-Commerce</Industry>
              <Summary>Web Store Engineering</Summary>
            </CoverSubtitleArea>
          </CoverTextContainer>
          <Overlay></Overlay>
          <Image url={url} label={label} zIndex={-2} />
        </CoverImage>
        <CoverImage>
          <CoverTextContainer>
            <CoverTitle>Fresh Wave LLC.</CoverTitle>
            <CoverSubtitleArea>
              <Industry>Tech</Industry>
              <Summary>Digital Ecosystem Design & Build</Summary>
            </CoverSubtitleArea>
          </CoverTextContainer>
          <Overlay></Overlay>
          <Image url={url} label={label} zIndex={-2} />
        </CoverImage> */}
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
