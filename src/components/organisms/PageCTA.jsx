import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import Button from 'atoms/Button';
import PropTypes from 'prop-types';
import { ArrowRight } from 'lucide-react';

/**
 * Page call to action component.
 * Allowed colors are hinted with PropTypes, defaults are assigned as an example.
 *
 * @component
 * @param {string} gradientStart - The upper half of the background gradient.
 * @param {string} gradientEnd - The lower half of the background gradient.
 * @param {string} textColor - The color of all text.
 * @param {string} title - The large, bold text at the top.
 * @param {string} subtitle - The medium, normal weight text in the middle.
 * @param {string} btnText - The contents of the button at the bottom.
 * @param {string} subtitleWidth - The maximum width of the subtitle. Accepts a number to be used in rems. Only adjust for specific typesetting purposes.
 */

const SectionContainer = styled.section`
  width: 100%;
  max-width: 100vw;
  background: linear-gradient(
    to bottom,
    ${({ theme, gradientStart }) =>
      theme.colors[gradientStart] || theme.colors.darkBlue},
    ${({ theme, gradientEnd }) =>
      theme.colors[gradientEnd] || theme.colors.blue}
  );
  ${({ theme }) => theme.mixins.flexColCenter};
  padding: ${({ theme }) => theme.layouts.sectionPadding};
`;
const SectionContent = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layouts.maxWidth};
`;
const Title = styled.h3`
  color: ${({ theme, textColor }) =>
    theme.colors[textColor] || theme.colors.white};
  ${({ theme }) => theme.mixins.textH2};
`;

const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: clamp(2rem, 4vw, 4rem);
`;

const Subtitle = styled.p`
  color: ${({ theme, textColor }) =>
    theme.colors[textColor] || theme.colors.white};
  ${({ theme }) => theme.mixins.textBody};

  ${({ theme }) => theme.mediaQueries.lg} {
    width: clamp(0rem, 100%, ${({ subtitleWidth = 90 }) => subtitleWidth}rem);
  }
`;

const Icon = styled(ArrowRight)`
  margin-left: 2rem;
`;

const PageCTA = ({ style, content }) => {
  const { gradientStart, gradientEnd, subtitleWidth } = style;
  const { title, subtitle, btnText, btnUrl } = content;
  return (
    <SectionContainer
      id="contact-cta"
      gradientStart={gradientStart}
      gradientEnd={gradientEnd}
    >
      <SectionContent>
        <Title>{title}</Title>
        <SubtitleContainer>
          <Subtitle subtitleWidth={subtitleWidth}>{subtitle}</Subtitle>
          <Link to={btnUrl}>
            <Button variant="outline" size="medium">
              {btnText}
              <Icon />
            </Button>
          </Link>
        </SubtitleContainer>
      </SectionContent>
    </SectionContainer>
  );
};

PageCTA.propTypes = {
  style: PropTypes.shape({
    gradientStart: PropTypes.string,
    gradientEnd: PropTypes.string,
    subtitleWidth: PropTypes.number,
  }),
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    btnText: PropTypes.string.isRequired,
    btnUrl: PropTypes.string.isRequired,
  }),
};
export default PageCTA;
