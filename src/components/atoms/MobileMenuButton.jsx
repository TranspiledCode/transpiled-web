import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ButtonWrapper = styled.button`
  cursor: pointer;
  height: 1.8rem;
  width: 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 0;
  background: none;
  border: none;
  outline: none;
  z-index: ${({ theme }) => theme.zIndices.mobileNavButton};

  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`;

const MenuElement = styled.div`
  background-color: ${({ isOpen, theme }) =>
    isOpen ? theme.colors.green : theme.colors.white};
  height: 0.2rem;
  width: 100%;
  transform-origin: center;
  transition:
    background-color 0.2s ease-in-out,
    transform 0.2s ease-in-out;
`;

const MenuElementTop = styled(MenuElement)`
  transform: ${({ isOpen }) =>
    isOpen ? 'translateY(6px) rotate(45deg)' : 'none'};
`;

const MenuElementBottom = styled(MenuElement)`
  transform: ${({ isOpen }) =>
    isOpen ? 'translateY(-6px) rotate(-45deg)' : 'none'};
`;

const MobileMenuButton = ({ onClick, isOpen }) => (
  <ButtonWrapper
    onClick={onClick}
    aria-expanded={isOpen}
    aria-label="mobile navigation menu toggle button"
    role="button"
  >
    <MenuElementTop isOpen={isOpen} aria-hidden="true" />
    <MenuElementBottom isOpen={isOpen} aria-hidden="true" />
  </ButtonWrapper>
);

MobileMenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default MobileMenuButton;
