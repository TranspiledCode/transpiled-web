import styled from '@emotion/styled';
import PropTypes from 'prop-types';

// styling is mobile by default, media query for desktops
const ButtonWrapper = styled.div`
  cursor: pointer;
  height: 1.6rem;
  width: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;

  padding: 0.2rem 0;

  .MenuElements {
    background-color: ${({ theme }) => theme.colors.white};
    height: 0.15rem;
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
    transform: translateY(5.5px);
  }

  :hover .MenuElementBottom {
    transform: translateY(-5px);
  }

  /* Apply isOpen styles */
  ${({ isOpen, theme }) =>
    isOpen &&
    `
        .MenuElements {
            background-color: ${theme.colors.green};
        }
            
        .MenuElementTop {
            transform: translateY(5.5px) rotate(45deg);
        }
            
        .MenuElementBottom {
            transform: translateY(-5px) rotate(-45deg);
        }
            
        :hover .MenuElements {
            background-color: ${theme.colors.white};
        }
    `}

  @media (min-width: 768px) {
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
