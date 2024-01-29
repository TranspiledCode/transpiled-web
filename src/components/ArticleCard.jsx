import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { flexCenter } from '../utils/css';
import Image from './Image';
import Button from './Button';
import Pill from './Pill';

const ArticleCardContainer = styled.div`
  ${flexCenter('column')}
  width: 300px;
  background-color: ${(props) => props.theme.white};
  border-radius: 10px;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.neutral};
  position: relative;
`;

const Title = styled.h3`
  ${flexCenter()}
  font-size: 1.5rem;
  font-weight: 700;
  height: 50px;
`;

const Description = styled.div`
  ${flexCenter()}
  font-size: 1rem;
  font-weight: 400;
  height: 50px;
`;
const Details = styled.div`
  ${flexCenter()}
  justify-content: space-between;
  width: 100%;
  height: 50px;
`;

const TagsContainer = styled.div`
  ${flexCenter()}
  gap: 10px;
  height: 50px;
`;

const ArticleCard = ({ title, description, image, tags, time }) => (
  <ArticleCardContainer>
    <Image src={image} alt={title} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Details>
      <TagsContainer>
        {tags.map((tag) => (
          <Pill key={tag} text={tag} />
        ))}
      </TagsContainer>
      <span>{time}</span>
    </Details>
    <Button
      variant='ghost'
      size='small'
      alignText='left'
      ariaLabel='view article'
      role='link'
    >
      Read More
    </Button>
  </ArticleCardContainer>
);

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  time: PropTypes.string.isRequired,
};

export default ArticleCard;
