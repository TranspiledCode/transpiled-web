import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { flexCenter } from '../utils/css';
import Image from './Image';
import Pill from './Pill';

const ArticleCardContainer = styled.div`
  ${flexCenter('column')}
  width: 300px;
  background-color: ${(props) => props.theme.background};
  border-radius: 10px;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.neutral};
  position: relative;
  color: ${(props) => props.theme.text};
`;

const Title = styled.h3`
  ${flexCenter()}
  font-size: 1.5rem;
  font-weight: 700;
  height: 50px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledImage = styled(Image)`
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
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

const TagsContainer = styled.div`
  ${flexCenter()}
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
`;

const ArticleCard = ({ id, title, description, image, tags }) => (
  <ArticleCardContainer>
    <StyledLink to={`article/${id}`}>
      <StyledImage src={image} alt={title} />
    </StyledLink>
    <StyledLink to={`article/${id}`}>
      <Title>{title}</Title>
    </StyledLink>
    <Description>{description}</Description>
    <Details>
      <TagsContainer>
        {tags.map((tag) => (
          <Pill key={tag} text={tag} />
        ))}
      </TagsContainer>
    </Details>
  </ArticleCardContainer>
);

ArticleCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ArticleCard;
