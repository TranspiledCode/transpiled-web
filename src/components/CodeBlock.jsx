import React from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism, oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from '@emotion/styled';

const Container = styled.div`
  position: relative;
  margin: 16px 0;
`;

const CopyButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;

const handleCopy = (code) => {
  // implement copy to clipboard with CopyToClipboard
  const textToCopy = code; // Replace 'code' with the actual code you want to copy
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      console.log('Code copied to clipboard');
      // Add a success message for the user
    })
    .catch((error) => {
      console.error('Failed to copy code to clipboard:', error);
      // Add additional error handling logic here for the user.
    });
};

const CodeBlock = ({ language, code }) => (
  <Container>
    <CopyButton onClick={() => handleCopy(code)}>Copy</CopyButton>
    <SyntaxHighlighter language={language} style={prism} showLineNumbers>
      {code}
    </SyntaxHighlighter>
  </Container>
);

CodeBlock.propTypes = {
  language: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

export default CodeBlock;
