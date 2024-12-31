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
      </SectionContent>
    </SectionContainer>
  );
};
PortfolioList.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
export default PortfolioList;
