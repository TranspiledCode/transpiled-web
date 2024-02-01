import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { flexCenter } from '../utils/css';
import Image from './Image';
import Button from './Button';
import Pill from './Pill';
import Divider from './Divider';

const ArticleCardContainer = styled.div`
  ${flexCenter('column')}
  width: 250px;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 1.5rem;
  font-weight: 400;
  height: 50px;
  margin: 10px 0;
`;
const Details = styled.div`
  ${flexCenter('column')}
  justify-content: space-between;
  width: 100%;
  gap: 10px;
`;

const DetailsLower = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const TagsContainer = styled.div`
  ${flexCenter()}
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
`;

const ArticleCard = ({ title, description, image, tags, time, url }) => (
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
      <Divider />
      <DetailsLower>
        <span>{time}</span>
        <a href={url}>Read more</a>
      </DetailsLower>
    </Details>
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
