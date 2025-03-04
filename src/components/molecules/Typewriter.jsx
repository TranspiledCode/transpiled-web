import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Cursor = styled.span`
  display: inline-block;
  width: 15px;
  height: 5px;
  background: ${({ theme, blinking }) =>
    blinking ? theme.colors.green : 'transparent'};
  margin-left: 2px;
  animation: ${({ blinking }) => (blinking ? 'blink 0.7s infinite' : 'none')};

  @media (min-width: 768px) {
    width: 30px;
    height: 10px;
  }
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;

/**
 * A component that types out a given string or array of strings one character
 * at a time. It will loop through the strings if the `loop` prop is true.
 *
 * @param {string|string[]} text
 * The text to be typed out. If an array is provided, it will loop through the
 * array and type out each string in sequence.
 *
 * @param {number} [speed=100]
 * The speed at which the text is typed out in milliseconds.
 *
 * @param {boolean} [loop=false]
 * Whether or not to loop through the text after it has been typed out.
 *
 * @param {number} [delay=1000]
 * The delay in milliseconds between typing out the last character of the
 * previous string and the first character of the next string.
 *
 * @param {boolean} [cursor=false]
 * If true, the typewriter will display a cursor at the end of the text at all
 * times. If false, the cursor will only be displayed while the text is being
 * typed out.
 *
 * @return {ReactElement}
 * A React element with the typed out text and a cursor if `cursor` is true.
 */
const Typewriter = ({
  text,
  speed = 100,
  loop = false,
  delay = 1000,
  cursor = false,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const words = React.useMemo(
    () => (Array.isArray(text) ? text : [text]),
    [text],
  );

  useEffect(() => {
    if (index < words[wordIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + words[wordIndex][index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (loop) {
      setTimeout(() => {
        setDisplayText('');
        setIndex(0);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, delay);
    } else {
      setIsTyping(false);
    }
  }, [index, words, wordIndex, speed, loop, delay]);

  return (
    <span>
      {displayText}
      {isTyping || cursor ? <Cursor blinking /> : ''}
    </span>
  );
};

Typewriter.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number,
  loop: PropTypes.bool,
  delay: PropTypes.number,
  cursor: PropTypes.bool,
};

export default Typewriter;
