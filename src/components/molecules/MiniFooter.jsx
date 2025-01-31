import styled from '@emotion/styled';
import useScrollToTop from 'hooks/useScrollToTop';
import Icon from 'atoms/Icon';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${({ theme }) => theme.layouts.maxWidth};
`;

const ScrollTop = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font: inherit;

  &:hover {
    opacity: 0.8;
  }
`;

const CopyRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
`;

const MiniFooter = () => {
  const { isVisible, scrollToTop } = useScrollToTop();

  const currentYear = new Date().getFullYear();

  return (
    <ContentWrapper>
      <CopyRight>
        <Icon name="FaCopyright" size={1.5} /> Transpiled {currentYear}
      </CopyRight>
      {isVisible && (
        <ScrollTop aria-label="Scroll to top" onClick={scrollToTop}>
          Scroll to Top
          <Icon name="FaArrowUp" size={1.5} />
        </ScrollTop>
      )}
    </ContentWrapper>
  );
};

export default MiniFooter;
