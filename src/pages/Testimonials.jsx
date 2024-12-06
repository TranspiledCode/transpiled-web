import React from 'react';
import styled from '@emotion/styled';
import withEditableText from 'organisms/withEditableText'; // Make sure the path matches your directory
// Ensure AuthContext and other necessary providers are set at a higher level (e.g., in App.js)

const StyledTestimonoals = styled.div`
  background-color: black;
  color: #fff;
  min-height: 100vh;
  padding: 20rem;
  font-size: 2rem;
`;

// This component just displays whatever text is passed in
function ParagraphContent({ text }) {
  return <p>{text}</p>;
}

// Wrap the paragraph component with our HOC
const EditableParagraph = withEditableText(ParagraphContent);

const Testimonoals = () => {
  // Just render the editable paragraph.
  // The user must be authenticated to see the edit icon, as handled by the HOC.
  return (
    <StyledTestimonoals>
      <EditableParagraph initialText="This is some editable text." />
    </StyledTestimonoals>
  );
};

export default Testimonoals;
