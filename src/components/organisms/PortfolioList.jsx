import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import TitleSubtitle from '../molecules/TitleSubtitle';

const SectionContainer = styled.section`
  padding: ${({ theme }) => theme.layouts.sectionPadding};
  ${({ theme }) => theme.mixins.flexColCenter}
`;
const SectionContent = styled.div`
  min-width: 100%;
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  ${({ theme }) => theme.mixins.flexColCenter}
`;
const ImageArea = styled.div``;

const CoverImage = styled.div``;
const CoverTitle = styled.h3``;
const CoverIndustry = styled.p``;
const CoverSummary = styled.p``;

const Image = styled.img``;

const PortfolioList = ({ title, subtitle }) => {
  return (
    <SectionContainer>
      <SectionContent>
        <TitleSubtitle
          title={title}
          subtitle={subtitle}
          titleColor="orange"
          stMaxWidth={60}
        />
        <ImageArea>
          <CoverImage>
            <CoverTitle>Fitlife inc.</CoverTitle>
            <CoverIndustry>Healthcare</CoverIndustry>
            <CoverSummary>Mobile app redesign & Rebuild</CoverSummary>
            <Image></Image>
          </CoverImage>
        </ImageArea>
      </SectionContent>
    </SectionContainer>
  );
};
PortfolioList.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
export default PortfolioList;
