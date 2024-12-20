import React from 'react';
import styled from '@emotion/styled';
import EditableContent from 'organisms/EditableContent';

const StyledTestimonoals = styled.div`
  background-color: black;
  color: #fff;
  min-height: 100vh;
  padding: 20rem;
  font-size: 2rem;
`;

const Testimonoals = () => {
  return (
    <StyledTestimonoals>
      <EditableContent>
        <h1>Testimonoals</h1>
      </EditableContent>
    </StyledTestimonoals>
  );
};

export default Testimonoals;
