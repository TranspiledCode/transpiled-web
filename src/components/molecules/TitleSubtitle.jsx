import styled from '@emotion/styled';
import PropTypes from 'prop-types';

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
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: 700;
  font-size: clamp(4.8rem, 8vw, 6.4rem);
  line-height: 0.95em;
  letter-spacing: -0.04em;
`;
const Subtitle = styled.p`
  width: 100%;
  color: ${({ theme, subtitleColor }) => theme.colors[subtitleColor]};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 400;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  text-align: justify;
  line-height: 1.4em;
  letter-spacing: -0.01em;

  ${({ theme }) => theme.mediaQueries.lg} {
    width: clamp(60rem, 100%, 70rem);
    text-align: left;
  }
`;
const TitleSubtitle = ({ title, subtitle, titleColor, subtitleColor }) => {
  return (
    <Container>
      <Title titleColor={titleColor}>{title}</Title>
      <Subtitle subtitleColor={subtitleColor}>{subtitle}</Subtitle>
    </Container>
  );
};
TitleSubtitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  titleColor: PropTypes.oneOf(['darkBlue', 'lightBlue', 'green', 'fuchsia'])
    .isRequired,
  subtitleColor: PropTypes.oneOf(['white', 'darkGray']).isRequired,
};
export default TitleSubtitle;
