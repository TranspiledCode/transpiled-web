import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const CodeBlock = styled.pre`
  background-color: #f6f8fa;
  border-radius: 5px;
  padding: 15px;
  overflow-x: auto;
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  margin-bottom: 1.6em;
`;

const ContentBlock = ({ contentBlocks }) => (
  <div>
    {contentBlocks.map((block) => {
      switch (block.type) {
        case 'paragraph':
          return <Paragraph key={block.id}>{block.data}</Paragraph>;
        case 'code':
          return (
            <CodeBlock key={block.id}>
              <code>{block.data}</code>
            </CodeBlock>
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
