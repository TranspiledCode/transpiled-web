import styled from '@emotion/styled';

const Divider = styled.div`
  width: 80px;
  height: 3px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.primary} 0%,
    ${({ theme }) => theme.secondary} 100%
  );
`;

export default Divider;
