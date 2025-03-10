import React, { useContext } from 'react';
import styled from '@emotion/styled';
import GlobalContext from 'context/GlobalContext';
import useScrollToTop from 'hooks/useScrollToTop';
import { ArrowUpToLine } from 'lucide-react';

const StyledButton = styled.button`
  z-index: ${({ theme }) => theme.zIndices.scrollToTop};
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 25px;
  right: 25px;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  padding: 15px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 2px ${({ theme }) => theme.colors.orange};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transform: ${({ isVisible }) => (isVisible ? 'scale(1)' : 'scale(0.5)')};
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;

  @media (hover: hover) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.white};

      .icon-wrapper {
        transform: scale(1.5);
      }
    }
  }
`;

const IconWrapper = styled.div`
  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`;

// ScrollToTop Component
const ScrollToTopButton = () => {
  const { menuOpen } = useContext(GlobalContext);
  const { isVisible, scrollToTop } = useScrollToTop(menuOpen, 20);

  return (
    <StyledButton
      isVisible={isVisible}
      aria-label="Scroll to top"
      onClick={scrollToTop}
    >
      <IconWrapper className="icon-wrapper" isVisible={isVisible}>
        <ArrowUpToLine />
      </IconWrapper>
    </StyledButton>
  );
};

export default ScrollToTopButton;
