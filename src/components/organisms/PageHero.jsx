import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import EditableContent from 'organisms/EditableContent';

const SectionContainer = styled.section`
  min-height: 68vh;
  width: 100%;
  max-width: 100vw;
  background: linear-gradient(
    to bottom,
    ${({ theme, gradientStart }) =>
      theme.colors[gradientStart] || theme.colors.darkBlue},
    ${({ theme, gradientEnd }) =>
      theme.colors[gradientEnd] || theme.colors.lightBlue}
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
  color: ${({ theme, textColor }) =>
    theme.colors[textColor] || theme.colors.white};
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
  color: ${({ theme, textColor }) =>
    theme.colors[textColor] || theme.colors.white};
  font-weight: 400;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  text-align: justify;
  line-height: 1.4em;
  letter-spacing: -0.015em;

  ${({ theme }) => theme.mediaQueries.lg} {
    width: clamp(
      0rem,
      100%,
      ${({ subtitleWidth = 90 }) => `${subtitleWidth}rem`}
    );
  }
`;

const Caption = styled.p`
  width: 80vw;
  max-width: ${({ captionWidth = 40 }) => `${captionWidth}rem`};

  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme, textColor }) =>
    theme.colors[textColor] || theme.colors.white};
  font-weight: 400;
  font-size: clamp(1.4rem, 2vw, 1.6rem);
  text-transform: uppercase;
  line-height: 1.4em;
  letter-spacing: 0.015em;

  ${({ theme }) => theme.mediaQueries.lg} {
    width: 50vw;
  }
`;

/**
 * PageHero component.
 *
 * @param {object} style - Style object with optional keys:
 *   - `gradientStart`: The top color of the gradient.
 *   - `gradientEnd`: The bottom color of the gradient.
 *   - `textColor`: The text color.
 *   - `subtitleWidth`: The maximum width of the subtitle in rems.
 *   - `captionWidth`: The maximum width of the caption in rems.
 * @param {object} content - Content object with required keys:
 *   - `title`: The title string.
 *   - `subtitle`: The subtitle string.
 *   - `caption`: The caption string.
 *
 * @returns {JSX.Element} The PageHero component.
 *
 * Example usage:
 * <PageHero style={} content={} />
 */
const PageHero = ({ style, content }) => {
  const { gradientStart, gradientEnd, textColor, subtitleWidth, captionWidth } =
    style;
  const { title, subtitle, caption } = content;

  return (
    <SectionContainer gradientStart={gradientStart} gradientEnd={gradientEnd}>
      <SectionContent>
        <EditableContent>
          <Title textColor={textColor}>{title}</Title>
        </EditableContent>
        <SubtitleContainer>
          <Subtitle textColor={textColor} subtitleWidth={subtitleWidth}>
            {subtitle}
          </Subtitle>
          <Caption textColor={textColor} captionWidth={captionWidth}>
            {caption}
          </Caption>
        </SubtitleContainer>
      </SectionContent>
    </SectionContainer>
  );
};

PageHero.propTypes = {
  style: PropTypes.shape({
    gradientStart: PropTypes.string,
    gradientEnd: PropTypes.string,
    textColor: PropTypes.string,
    subtitleWidth: PropTypes.number,
    captionWidth: PropTypes.number,
  }).isRequired,
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    caption: PropTypes.string,
  }).isRequired,
};
export default PageHero;
