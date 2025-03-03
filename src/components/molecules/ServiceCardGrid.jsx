import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Card from 'molecules/Card';

const CardArea = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 3rem;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
`;

const ServiceCardGrid = ({ cards }) => {
  return (
    <CardArea>
      {cards.map((card, index) => (
        <Card
          key={index}
          url={card.url}
          label={card.label}
          heading={card.heading}
          description={card.description}
        />
      ))}
    </CardArea>
  );
};

ServiceCardGrid.propTypes = {
  cards: PropTypes.array,
};

export default ServiceCardGrid;
