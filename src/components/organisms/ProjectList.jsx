import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import TitleSubtitle from 'molecules/TitleSubtitle';
import CoverImage from 'molecules/CoverImage';

const SectionContainer = styled.section`
  padding: ${({ theme }) => theme.layouts.sectionPadding};
  ${({ theme }) => theme.mixins.flexColCenter}
`;
const SectionContent = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  ${({ theme }) => theme.mixins.flexColCenter};
  gap: clamp(2rem, 4vw, 4rem);
`;
const ProjectList = ({ content }) => {
  const { title, subtitle, projects } = content;
  return (
    <SectionContainer>
      <SectionContent>
        <TitleSubtitle
          title={title}
          subtitle={subtitle}
          titleColor="orange"
          stMaxWidth={60}
        />
        <>
          {projects.map((project, index) => (
            <CoverImage
              key={index}
              projectUrl={project.projectUrl}
              imageUrl={project.imageUrl}
              label={project.label}
              title={project.title}
              category={project.category}
              caption={project.caption}
              catColor={project.catColor}
            />
          ))}
        </>
      </SectionContent>
    </SectionContainer>
  );
};
ProjectList.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};
export default ProjectList;
