import styled from '@emotion/styled';
import EditableContent from 'organisms/EditableContent';

const StyledAbout = styled.div`
  background: lightgray;
  color: black;
  display: flex;
  justify-content: center;
  border: 1px solid red;
  margin: 0 auto;
  height: 100vh;

  padding-top: 100px;
`;

const StyledContent = styled.h1`
  border: 1px solid green;
`;
const About = () => {
  return (
    <StyledAbout>
      <EditableContent>
        <StyledContent>Editable Text</StyledContent>
      </EditableContent>
    </StyledAbout>
  );
};

export default About;
