import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const CardWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-auto-rows: max-content;
`;

const Header = styled.h4`
  color: ${({ theme }) => theme.colors.black};
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

const ApproachCard = ({ header, paragraph }) => {
  return (
    <CardWrapper>
      <Header>{header}</Header>
      <Paragraph>{paragraph}</Paragraph>
    </CardWrapper>
  );
};

ApproachCard.propTypes = {
  header: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

export default ApproachCard;
