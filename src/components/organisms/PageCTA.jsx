import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import Button from '../atoms/Button';
import PropTypes from 'prop-types';

/**
 * Page call to action component.
 * Allowed colors are hinted with PropTypes, defaults are assigned as an example.
 *
 * @component
 * @param {string} gradTopCol - The upper half of the background gradient.
 * @param {string} gradBotCol - The lower half of the background gradient.
 * @param {string} textColor - The color of all text.
 * @param {string} title - The large, bold text at the top.
 * @param {string} subtitle - The medium, normal weight text in the middle.
 * @param {string} btnText - The contents of the button at the bottom.
 * @param {string} stMaxWidth - The maximum width of the subtitle. Accepts a number to be used in rems. Only adjust for specific typesetting purposes.
 */

const SectionContainer = styled.section`
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
`;
const Title = styled.h3`
  color: ${({ theme, textColor }) => theme.colors[textColor]};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: 700;
  font-size: clamp(4.2rem, 8vw, 6.4rem);
  line-height: 0.95em;
  letter-spacing: -0.04em;
  text-transform: uppercase;
`;

const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: clamp(2rem, 4vw, 4rem);
`;

const Subtitle = styled.p`
  width: 100%;
  color: ${({ theme, textColor }) => theme.colors[textColor]};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 400;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  text-align: justify;
  line-height: 1.4em;
  letter-spacing: -0.01em;

  ${({ theme }) => theme.mediaQueries.lg} {
    width: clamp(0rem, 100%, ${({ stMaxWidth }) => stMaxWidth}rem);
    text-align: left;
  }
`;

const PageCTA = ({
  gradTopCol = 'darkBlue',
  gradBotCol = 'lightBlue',
  textColor = 'white',
  title = 'Title',
  subtitle,
  btnText = 'Button Text',
  btnUrl = '*',
  stMaxWidth = 80,
}) => {
  return (
    <SectionContainer
      id="contact-cta"
      gradTopCol={gradTopCol}
      gradBotCol={gradBotCol}
    >
      <SectionContent>
        <Title textColor={textColor}>{title}</Title>
        <SubtitleContainer>
          <Subtitle stMaxWidth={stMaxWidth} textColor={textColor}>
            {subtitle}
          </Subtitle>
          <Link to={btnUrl}>
            <Button icon="FaArrowRight" variant="outline" size="medium">
              {btnText}
            </Button>
          </Link>
        </SubtitleContainer>
      </SectionContent>
    </SectionContainer>
  );
};

PageCTA.propTypes = {
  gradTopCol: PropTypes.oneOf(['darkBlue', 'lightBlue', 'green', 'fuchsia']),
  gradBotCol: PropTypes.oneOf(['darkBlue', 'lightBlue', 'green', 'fuchsia']),
  textColor: PropTypes.oneOf(['black', 'white']),
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  btnText: PropTypes.string.isRequired,
  btnUrl: PropTypes.string.isRequired,
  stMaxWidth: PropTypes.number,
};
export default PageCTA;
