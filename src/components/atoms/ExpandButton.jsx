import { useState } from 'react';
import styled from '@emotion/styled';

const Menu = styled.div`
  display: flex;

  color: ${({ theme }) => theme.colors.white};
  transition: top 0.5s ease-in-out;
  z-index: 1;
`;
const ExpandButton = () => {
  const [menuOpen, toggleMenu] = useState(false);

  const handleClick = () => {
    toggleMenu(!menuOpen);
  };

  return (
    <>
      <Menu menuOpen={menuOpen}>
        <Menu onClick={handleClick} />
      </Menu>
    </>
  );
};

export default ExpandButton;
