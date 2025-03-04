// src/components/molecules/HeroBackground.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { Terminal, Code, Layers } from 'lucide-react';
import codeSnippets from 'data/codeSnippets';

// Animated background elements
const floatAnimation = keyframes`
  0% { transform: translateY(0) rotate(0deg); opacity: 0.8; }
  50% { transform: translateY(-15px) rotate(5deg); opacity: 1; }
  100% { transform: translateY(0) rotate(0deg); opacity: 0.8; }
`;

const BackgroundShape = styled.div`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  animation: ${floatAnimation} ${(props) => `${props.duration / props.speed}s`}
    ease-in-out infinite;
  animation-delay: ${(props) => `${props.delay / props.speed}s`};
  z-index: 1;
`;

const CodeBlock = styled.div`
  position: absolute;
  font-family: 'Fira Code', monospace;
  color: rgba(255, 255, 255, 0.1);
  font-size: clamp(0.7rem, 1vw, 1rem);
  z-index: 1;
  user-select: none;
  animation: ${floatAnimation} ${(props) => `${props.duration / props.speed}s`}
    ease-in-out infinite;
  animation-delay: ${(props) => `${props.delay / props.speed}s`};
`;

const FloatingIcon = styled.div`
  position: absolute;
  animation: ${floatAnimation} ${(props) => `${props.duration / props.speed}s`}
    ease-in-out infinite;
  animation-delay: ${(props) => `${props.delay / props.speed}s`};
  opacity: 0.2;
  z-index: 1;
`;

const HeroBackground = ({ speed = 1 }) => {
  // Speed should be positive - higher values mean faster animations

  // Generate random positions for background elements
  const [backgroundElements, setBackgroundElements] = useState([]);

  useEffect(() => {
    const elements = [];

    // Add shapes
    for (let i = 0; i < 8; i++) {
      elements.push({
        type: 'shape',
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 300 + 100}px`,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      });
    }

    // Add code snippets
    for (let i = 0; i < 3; i++) {
      elements.push({
        type: 'code',
        top: `${Math.random() * 80}%`,
        left: `${Math.random() * 80}%`,
        content: codeSnippets[i],
        duration: Math.random() * 10 + 15,
        delay: Math.random() * 5,
      });
    }

    // Add icons
    for (let i = 0; i < 5; i++) {
      elements.push({
        type: 'icon',
        top: `${Math.random() * 90}%`,
        left: `${Math.random() * 90}%`,
        icon: i % 3 === 0 ? Terminal : i % 3 === 1 ? Code : Layers,
        size: `${Math.random() * 20 + 20}px`,
        duration: Math.random() * 10 + 8,
        delay: Math.random() * 5,
      });
    }

    setBackgroundElements(elements);
  }, []);

  return (
    <>
      {backgroundElements.map((element, index) => {
        if (element.type === 'shape') {
          return (
            <BackgroundShape
              key={`shape-${index}`}
              style={{
                top: element.top,
                left: element.left,
                width: element.size,
                height: element.size,
              }}
              duration={element.duration}
              delay={element.delay}
              speed={speed}
            />
          );
        } else if (element.type === 'code') {
          return (
            <CodeBlock
              key={`code-${index}`}
              style={{
                top: element.top,
                left: element.left,
                maxWidth: '300px',
              }}
              duration={element.duration}
              delay={element.delay}
              speed={speed}
            >
              <pre>{element.content}</pre>
            </CodeBlock>
          );
        } else if (element.type === 'icon') {
          const IconComponent = element.icon;
          return (
            <FloatingIcon
              key={`icon-${index}`}
              style={{
                top: element.top,
                left: element.left,
              }}
              duration={element.duration}
              delay={element.delay}
              speed={speed}
            >
              <IconComponent
                size={element.size}
                color="rgba(255,255,255,0.1)"
              />
            </FloatingIcon>
          );
        }
        return null;
      })}
    </>
  );
};

HeroBackground.propTypes = {
  speed: PropTypes.number,
};

export default HeroBackground;
