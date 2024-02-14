import React from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism, oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from '@emotion/styled';
import { useTheme } from '@transpiled/ui';

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

// Improved error handling and feedback mechanism for copy functionality
const handleCopy = async (code) => {
  try {
    await navigator.clipboard.writeText(code);
    console.log('Code copied to clipboard');
    // Ideally, replace console.log with a toast notification for user feedback
  } catch (error) {
    console.error('Failed to copy code to clipboard:', error);
    // Implement error feedback to the user, possibly with a toast notification
  }
};

const CodeBlock = ({ language, code }) => {
  const { isDarkTheme } = useTheme();
  const style = isDarkTheme ? oneDark : prism;

  return (
    <Container>
      <CopyButton onClick={() => handleCopy(code)}>Copy</CopyButton>
      <SyntaxHighlighter language={language} style={style} showLineNumbers>
        {code}
      </SyntaxHighlighter>
    </Container>
  );
};

CodeBlock.propTypes = {
  language: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

export default CodeBlock;

/**
 * Component Documentation: CodeBlock
 *
 * Description:
 * The CodeBlock component is designed to display code snippets with syntax
 * highlighting and a copy-to-clipboard feature.
 * It leverages `react-syntax-highlighter` for highlighting and supports
 * light and dark themes through `@transpiled/ui`'s `useTheme`.
 *
 * Props:
 * - language: A string indicating the programming language of the code snippet.
 * This is required for syntax highlighting.
 * - code: The code snippet to be displayed and copied.
 *
 * Usage:
 * ```
 * <CodeBlock language="javascript" code="console.log('Hello, world!');" />
 * ```
 *
 * Features:
 * - Syntax highlighting for the specified programming language.
 * - A copy button to easily copy the code snippet to the clipboard.
 * - Theme support: Automatically switches between light and dark syntax
 * highlighting themes based on the `isDarkTheme` flag from `useTheme`.
 *
 * Implementation Notes:
 * - The `handleCopy` function utilizes the Clipboard API. It should handle
 * both success and failure cases, ideally with user feedback (e.g., toast notifications).
 * - The styled components `Container` and `CopyButton` use `@emotion/styled`
 * for styling based on the theme context.
 *
 * This component is a part of the "Transpiled" project, aiming to provide
 * developer-friendly UI components for software development tutorials and projects.
 */
