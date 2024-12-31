import styled from '@emotion/styled';
import PropTypes from 'prop-types';

/**
 * Inner page hero component.
 * Allowed colors are hinted with PropTypes, defaults are assigned to required props as an example.
 *
 * @component
 * @param {string} gradTopCol - The upper half of the background gradient.
 * @param {string} gradBotCol - The lower half of the background gradient.
 * @param {string} textColor - The color of all text.
 * @param {string} title - The large, bold text at the top.
 * @param {string} subtitle - The medium, normal weight text in the middle.
 * @param {string} caption - The small, monospaced text at the bottom.
 * @param {string} stMaxWidth - The maximum width of the subtitle. Accepts a number to be used in rems. Only adjust for specific typesetting purposes.
 * @param {string} capMaxWidth - The maximum width of the caption. Accepts a number to be used in rems. Only adjust for specific typesetting purposes.
 */

const SectionContainer = styled.section`
  min-height: 68vh;
  width: 100%;
  max-width: 100vw;
  background: linear-gradient(
    to bottom,
    ${({ theme, gradTopCol }) => theme.colors[gradTopCol]},
    ${({ theme, gradBotCol }) => theme.colors[gradBotCol]}
  );
  ${({ theme }) => theme.mixins.flexColCenter};
  padding: ${({ theme }) => theme.layouts.sectionPadding};
`;

const SectionContent = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
`;
const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme, textColor }) => theme.colors[textColor]};
  font-weight: 700;
  font-size: clamp(4.8rem, 10vw, 9.6rem);
  line-height: 0.95em;
  letter-spacing: -0.04em;
  text-transform: uppercase;

  ${({ theme }) => theme.mediaQueries.md} {
    max-width: 80rem;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    max-width: 95rem;
  }
`;

const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 4vw, 4rem);
`;
const Subtitle = styled.p`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.manrope};
  color: ${({ theme, textColor }) => theme.colors[textColor]};
  font-weight: 400;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  text-align: justify;
  line-height: 1.4em;
  letter-spacing: -0.015em;

  ${({ theme }) => theme.mediaQueries.lg} {
    width: clamp(0rem, 100%, ${({ stMaxWidth }) => stMaxWidth}rem);
    text-align: left;
  }
`;
const Caption = styled.p`
  width: 80vw;
  max-width: ${({ capMaxWidth }) => capMaxWidth}rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme, textColor }) => theme.colors[textColor]};
  font-weight: 400;
  font-size: clamp(1.4rem, 2vw, 1.6rem);
  text-transform: uppercase;
  line-height: 1.4em;
  letter-spacing: 0.015em;

  ${({ theme }) => theme.mediaQueries.lg} {
    width: 50vw;
  }
`;

const PageHero = ({
  gradTopCol = 'darkBlue',
  gradBotCol = 'lightBlue',
  textColor = 'white',
  title = 'title',
  subtitle,
  caption,
  stMaxWidth = 90,
  capMaxWidth = 40,
}) => {
  return (
    <SectionContainer gradTopCol={gradTopCol} gradBotCol={gradBotCol}>
      <SectionContent>
        <Title textColor={textColor}>{title}</Title>
        <SubtitleContainer>
          <Subtitle textColor={textColor} stMaxWidth={stMaxWidth}>
            {subtitle}
          </Subtitle>
          <Caption textColor={textColor} capMaxWidth={capMaxWidth}>
            {caption}
          </Caption>
        </SubtitleContainer>
      </SectionContent>
    </SectionContainer>
  );
};

PageHero.propTypes = {
  gradTopCol: PropTypes.oneOf(['darkBlue', 'lightBlue', 'green', 'fuchsia']),
  gradBotCol: PropTypes.oneOf(['darkBlue', 'lightBlue', 'green', 'fuchsia']),
  textColor: PropTypes.oneOf(['black', 'white']),
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  caption: PropTypes.string,
  stMaxWidth: PropTypes.number,
  capMaxWidth: PropTypes.number,
};
export default PageHero;
