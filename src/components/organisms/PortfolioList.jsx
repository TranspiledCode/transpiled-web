import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import TitleSubtitle from '../molecules/TitleSubtitle';
import CoverImage from '../molecules/CoverImage';

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
  coverTitle = 'Fitlife Inc.',
  industry = 'Healthcare',
  summary = 'Web and Mobile App Design',
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
        <CoverImage
          url={url}
          label={label}
          title={coverTitle}
          industry={industry}
          summary={summary}
        />
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
