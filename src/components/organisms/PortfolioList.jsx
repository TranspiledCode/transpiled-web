import styled from '@emotion/styled';
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

const PortfolioList = () => {
  return (
    <SectionContainer>
      <SectionContent>
        <TitleSubtitle />
      </SectionContent>
    </SectionContainer>
  );
};
export default PortfolioList;
