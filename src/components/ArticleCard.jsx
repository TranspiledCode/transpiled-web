import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { flexCenter } from '../utils/css';
import Image from './Image';

const ArticleCardContainer = styled.div`
  ${flexCenter('column')}
  width: 300px;
  background-color: ${({ theme }) => theme.background};
  border-radius: 10px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.neutral};
  position: relative;
  color: ${({ theme }) => theme.text};
`;

const CardTitle = styled.div`
  width: 100%;
  padding: 10px 0;
`;

const Title = styled.h3`
  display: block;
  text-align: left;
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

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 1.5rem;
  font-weight: 400;
  height: 50px;
`;

const ArticleCard = ({ id, title, summary, image }) => (
  <ArticleCardContainer>
    <StyledLink to={`article/${id}`}>
      <StyledImage src={image} alt={title} />
    </StyledLink>
    <CardTitle>
      <StyledLink to={`article/${id}`}>
        <Title>{title}</Title>
      </StyledLink>
    </CardTitle>
    <Summary>{summary}</Summary>
  </ArticleCardContainer>
);

ArticleCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ArticleCard;
