import React from 'react';
import styled from '@emotion/styled';
import TitleSubtitle from '../molecules/TitleSubtitle';
import content from '../../data/about';

const Container = styled.section`
  ${({ theme }) => theme.mixins.flexColCenter};
  padding: ${({ theme }) => theme.layouts.sectionPadding};
`;
const Content = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  display: flex;
  flex-direction: column;
  gap: clamp(4rem, 4vw, 8rem);
`;

const TranspiledVision = () => {
  return (
    <Container>
      <Content>
        <TitleSubtitle
          title={content.vision.title}
          subtitle={content.vision.subtitle}
          titleColor="fuchsia"
          stMaxWidth={100}
        />
      </Content>
    </Container>
  );
};

export default TranspiledVision;
