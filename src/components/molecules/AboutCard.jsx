import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const CardWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-auto-rows: max-content;
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.colors.green};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  line-height: clamp(2rem, 4vw, 3rem);
  letter-spacing: -0.4px;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: 1.6rem;
  text-align: justify;
`;

const AboutCard = ({ url, label, header, paragraph }) => {
  return (
    <CardWrapper>
      <StyledImage src={url} alt={label} aria-label={label} loading="lazy" />
      <Header>{header}</Header>
      <Paragraph>{paragraph}</Paragraph>
    </CardWrapper>
  );
};

AboutCard.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

export default AboutCard;
