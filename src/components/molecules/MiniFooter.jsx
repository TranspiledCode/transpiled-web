import styled from '@emotion/styled';
import useScrollToTop from 'hooks/useScrollToTop';
import { Copyright, MoveUp } from 'lucide-react';

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

const CopyRightWrapper = styled.div`
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
      <CopyRightWrapper>
        <Copyright /> Transpiled {currentYear}
      </CopyRightWrapper>
      {isVisible && (
        <ScrollTop aria-label="Scroll to top" onClick={scrollToTop}>
          Scroll to Top
          <MoveUp />
        </ScrollTop>
      )}
    </ContentWrapper>
  );
};

export default MiniFooter;
