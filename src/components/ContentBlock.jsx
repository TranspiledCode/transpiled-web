import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CodeBlock from './CodeBlock';

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const ContentBlock = ({ contentBlocks }) => (
  <div>
    {contentBlocks.map((block) => {
      switch (block.type) {
        case 'paragraph':
          return <Paragraph key={block.id}>{block.data}</Paragraph>;
        case 'code':
          return (
            <CodeBlock
              key={block.id}
              code={block.data}
              language={block.language}
            />
          );
        default:
          return null;
      }
    })}
  </div>
);

ContentBlock.propTypes = {
  contentBlocks: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      data: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ContentBlock;
