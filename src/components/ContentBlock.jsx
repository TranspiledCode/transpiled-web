import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from './Image';

import CodeBlock from './CodeBlock';

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 8px;
`;

const Subheading = styled.h2`
  font-size: 20px;
  margin-bottom: 6px;
`;

const renderBlock = (block) => {
  switch (block.type) {
    case 'heading':
      return <Heading key={block.id}>{block.data}</Heading>;
    case 'subheading':
      return <Subheading key={block.id}>{block.data}</Subheading>;
    case 'paragraph':
      return <Paragraph key={block.id}>{block.data}</Paragraph>;
    case 'code':
      return (
        <CodeBlock key={block.id} code={block.data} language={block.language} />
      );
    case 'image':
      return (
        <Image key={block.id} src={block.data} alt={block.altText || 'Image'} />
      );
    default:
      return <Paragraph key={block.id}>{block.data}</Paragraph>;
  }
};

const ContentBlock = ({ contentBlocks }) => (
  <div>{contentBlocks.map(renderBlock)}</div>
);

ContentBlock.propTypes = {
  contentBlocks: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      data: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      language: PropTypes.string, // Optional, only for code blocks
      altText: PropTypes.string, // Optional, only for image blocks
    })
  ).isRequired,
};

export default ContentBlock;

/**
 * Component Documentation: ContentBlock
 *
 * Description:
 * The ContentBlock component is designed to render a dynamic block of content
 *  based on the provided `contentBlocks` prop.
 * It supports rendering headings, subheadings, paragraphs, codeblocks, and
 * images, making it highly versatile for a variety of content structures.
 *
 * Props:
 * - contentBlocks: An array of objects, each representing a content block.
 * Each object must include:
 *   - type: A string indicating the block type ('heading', 'subheading',
 * 'paragraph', 'code', 'image').
 *   - data: The content data as a string. For images, this should be the image
 *  source URL.
 *   - id: A unique identifier for the block.
 *   - language: (Optional) The programming language for code blocks.
 *   - altText: (Optional) Alternative text for images, aiding accessibility.
 *
 * Usage:
 * ```
 * const content = [
 *   { id: 1, type: 'heading', data: 'Welcome to Transpiled Bytes' },
 *   { id: 2, type: 'paragraph', data: 'Your guide to modern web development techniques.' },
 *   { id: 3, type: 'code', data: 'console.log("Hello, world!");', language: 'javascript' },
 *   { id: 4, type: 'image', data: 'https://example.com/image.png', altText: 'An example image' }
 * ];
 *
 * <ContentBlock contentBlocks={content} />
 * ```
 *
 * Notes:
 * - Ensure that each `contentBlocks` array element contains a unique `id` to prevent
 * key prop warnings in React.
 * - For `image` blocks, providing `altText` is recommended to enhance accessibility
 * for screen readers.
 *
 * This component is part of the "Transpiled" project, aimed at providing reusable
 * components for modern web development.
 */
