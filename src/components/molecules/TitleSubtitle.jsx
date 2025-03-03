import styled from '@emotion/styled';
import PropTypes from 'prop-types';

/**
 * Section title & subtitle component.
 * Allowed colors are hinted with PropTypes, defaults are assigned as an example.
 *
 * @component
 * @param {string} title - The large size, bold text at the top.
 * @param {string} subtitle - The medium size, normal weight text at the bottom.
 * @param {string} titleColor - The color of the title.
 * @param {string} subtitleColor - The color of the subtitle.
 * @param {string} stMaxWidth - The maximum width of the subtitle. Accepts a number to be used in rems. Only adjust for specific typesetting purposes.
 */

const Container = styled.div`
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;
const Title = styled.h2`
  color: ${({ theme, titleColor }) => theme.colors[titleColor]};
  ${({ theme }) => theme.mixins.textH2};
`;
const Subtitle = styled.p`
  color: ${({ theme, subtitleColor }) => theme.colors[subtitleColor]};
  ${({ theme }) => theme.mixins.textBody};

  ${({ theme }) => theme.mediaQueries.md} {
    width: clamp(0rem, 100%, ${({ stMaxWidth }) => stMaxWidth}rem);
  }
`;
const TitleSubtitle = ({
  title = 'Section Title',
  subtitle = 'Section Subtitle',
  titleColor = 'darkBlue',
  subtitleColor = 'darkGray',
  stMaxWidth = 70,
}) => {
  return (
    <Container>
      <Title titleColor={titleColor}>{title}</Title>
      <Subtitle subtitleColor={subtitleColor} stMaxWidth={stMaxWidth}>
        {subtitle}
      </Subtitle>
    </Container>
  );
};
TitleSubtitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  titleColor: PropTypes.oneOf([
    'darkBlue',
    'lightBlue',
    'green',
    'fuchsia',
    'orange',
  ]),
  subtitleColor: PropTypes.oneOf(['white', 'darkGray']),
  stMaxWidth: PropTypes.number,
};
export default TitleSubtitle;
