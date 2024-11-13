import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ButtonWrapper = styled.div`
  cursor: pointer;
  height: 1.8rem;
  width: 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;

  padding: 0.2rem 0;

  .MenuElements {
    background-color: ${({ theme }) => theme.colors.white};
    height: 0.2rem;
    width: 100%;
    transform-origin: center;
    transition-property: color, transform;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
  }

  /* Apply hover styles */
  :hover .MenuElements {
    background-color: ${({ theme }) => theme.colors.green};
  }

  :hover .MenuElementTop {
    transform: translateY(6px);
  }

  :hover .MenuElementBottom {
    transform: translateY(-6px);
  }

  /* Apply isOpen styles */
  ${({ isOpen, theme }) =>
    isOpen &&
    `
        .MenuElements {
            background-color: ${theme.colors.green};
        }
            
        .MenuElementTop {
            transform: translateY(6px) rotate(45deg);
        }
            
        .MenuElementBottom {
            transform: translateY(-6px) rotate(-45deg);
        }
            
        :hover .MenuElements {
            background-color: ${theme.colors.white};
        }
    `}

  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`;
const MobileMenuButton = ({ onClick, isOpen }) => {
  return (
    <ButtonWrapper onClick={onClick} isOpen={isOpen}>
      <div className="MenuElements MenuElementTop" aria-hidden={true}></div>
      <div className="MenuElements MenuElementBottom" aria-hidden={true}></div>
    </ButtonWrapper>
  );
};

MobileMenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
export default MobileMenuButton;
