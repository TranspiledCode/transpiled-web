import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import content from 'data/home';
import Button from 'atoms/Button';
import RevealWrapper from 'molecules/RevealWrapper';
import { MoveDownRight, Terminal, Code, Layers } from 'lucide-react';

// Animated background elements
const floatAnimation = keyframes`
  0% { transform: translateY(0) rotate(0deg); opacity: 0.8; }
  50% { transform: translateY(-15px) rotate(5deg); opacity: 1; }
  100% { transform: translateY(0) rotate(0deg); opacity: 0.8; }
`;

const slideInAnimation = keyframes`
  0% { transform: translateY(30px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const HeroWrapper = styled.section`
  min-height: 100vh;
  max-width: 100vw;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.darkBlue},
    ${({ theme }) => theme.colors.lightBlue}
  );
  ${({ theme }) => theme.mixins.flexColCenter};
  padding: ${({ theme }) => theme.layouts.sectionPadding};
`;

const BackgroundShape = styled.div`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  animation: ${floatAnimation} ${(props) => props.duration || '10s'} ease-in-out
    infinite;
  animation-delay: ${(props) => props.delay || '0s'};
  z-index: 1;
`;

const CodeBlock = styled.div`
  position: absolute;
  font-family: 'Fira Code', monospace;
  color: rgba(255, 255, 255, 0.1);
  font-size: clamp(0.7rem, 1vw, 1rem);
  z-index: 1;
  user-select: none;
  animation: ${floatAnimation} ${(props) => props.duration || '15s'} ease-in-out
    infinite;
  animation-delay: ${(props) => props.delay || '0s'};
`;

const HeroContent = styled.div`
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
  padding: 4rem 0;
  position: relative;
  z-index: 2;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  animation: ${slideInAnimation} 0.6s ease-out forwards;
`;

const Title = styled.h1`
  ${({ theme }) => theme.mixins.textH1};
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(2.8rem, 7.6vw, 5rem);
  margin: 0;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1024px) {
    font-size: clamp(8rem, 10vw, 5rem);
  }
`;

const TitleCode = styled.span`
  position: relative;
  color: ${({ theme }) => theme.colors.green};
  font-family: 'JetBrains Mono', monospace;
  text-transform: lowercase;

  &::before {
    content: '<';
    margin-right: 0.2rem;
  }

  &::after {
    content: '/>';
    margin-left: 0.2rem;
  }
`;

const SubTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: clamp(2rem, 5vw, 5rem);
`;

const SubtitleText = styled.div`
  ${({ theme }) => theme.mixins.textSubtitle};
  color: ${({ theme }) => theme.colors.white};
  max-width: 80rem;
  font-size: clamp(2rem, 3.5vw, 2.6rem);
  animation: ${slideInAnimation} 0.8s ease-out forwards;
  animation-delay: 0.3s;
  opacity: 0;
`;
const LearnMoreWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
`;

const LearnMoreText = styled.div`
  ${({ theme }) => theme.mixins.textMono};
  color: ${({ theme }) => theme.colors.white};
  max-width: 50rem;
  animation: ${slideInAnimation} 1s ease-out forwards;
  animation-delay: 0.6s;
  opacity: 0;
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  line-height: 1;
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
  animation: ${slideInAnimation} 1.2s ease-out forwards;
  animation-delay: 0.9s;
  opacity: 0;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const StyledButton = styled(Button)`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &:hover {
    .icon-wrapper {
      transform: translateX(5px);
    }
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: auto;
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  transition: transform 0.3s ease;
`;

const FloatingIcon = styled.div`
  position: absolute;
  animation: ${floatAnimation} ${(props) => props.duration || '10s'} ease-in-out
    infinite;
  animation-delay: ${(props) => props.delay || '0s'};
  opacity: 0.2;
  z-index: 1;
`;

// Sample code snippets for background
const codeSnippets = [
  `const transpile = (code) => {
  return babel.transform(code, {
    presets: ['@babel/preset-env']
  }).code;
};`,
  `function createComponent(name, props) {
  return React.createElement(
    name,
    props,
    ...children
  );
}`,
  `export const Button = styled.button\`
  background: \${props => props.theme.colors.primary};
  color: white;
  border-radius: 4px;
  padding: 0.5em 1em;
\`;`,
];

const HomeHero = () => {
  const {
    hero: { subtitle1, subtitle2, learnMore1, learnMore2, buttonText },
  } = content;

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
        duration: `${Math.random() * 10 + 10}s`,
        delay: `${Math.random() * 5}s`,
      });
    }

    // Add code snippets
    for (let i = 0; i < 3; i++) {
      elements.push({
        type: 'code',
        top: `${Math.random() * 80}%`,
        left: `${Math.random() * 80}%`,
        content: codeSnippets[i],
        duration: `${Math.random() * 10 + 15}s`,
        delay: `${Math.random() * 5}s`,
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
        duration: `${Math.random() * 10 + 8}s`,
        delay: `${Math.random() * 5}s`,
      });
    }

    setBackgroundElements(elements);
  }, []);

  return (
    <HeroWrapper>
      {/* Background elements */}
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

      <HeroContent>
        <ContentContainer>
          <Title>
            <span>Designed for You.</span>
            <span>
              Built from <TitleCode>Scratch</TitleCode>
            </span>
          </Title>

          <SubTitleWrapper>
            <SubtitleText>{subtitle1}</SubtitleText>
            <SubtitleText>{subtitle2}</SubtitleText>
          </SubTitleWrapper>

          <LearnMoreWrapper>
            <LearnMoreText>{learnMore1}</LearnMoreText>
            <LearnMoreText>{learnMore2}</LearnMoreText>
          </LearnMoreWrapper>

          <ButtonWrapper>
            <RevealWrapper>
              <Link to="#services" aria-label="Contact Us">
                <StyledButton variant="outline" size="small">
                  {buttonText}
                  <IconWrapper className="icon-wrapper">
                    <MoveDownRight />
                  </IconWrapper>
                </StyledButton>
              </Link>
            </RevealWrapper>
          </ButtonWrapper>
        </ContentContainer>
      </HeroContent>
    </HeroWrapper>
  );
};

export default HomeHero;
