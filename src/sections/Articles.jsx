import React from 'react';
import styled from '@emotion/styled';
import Divider from '../components/Divider';
import ArticelCard from '../components/ArticleCard';
import { articles } from '../config';

import { flexCenter } from '../utils/css';

const Articles = styled.section`
  ${flexCenter('column')}
  background-color: ${(props) => props.theme.background};
  padding: 100px 20px;
  gap: 40px;
`;

const AticlesHeading = styled.h2`
  color: ${(props) => props.theme.text};
  font-size: 6rem;
  font-weight: 700;
`;

const ArticelCards = styled.div`
  ${flexCenter('column')}
  gap: 50px;

  @media (min-width: 768px) {
    ${flexCenter('row')}
  }
`;

const Contact = () => (
  <Articles id='articles'>
    <AticlesHeading>Articles</AticlesHeading>
    <Divider />
    <ArticelCards>
      {articles.map((article) => (
        <ArticelCard
          id={article.id}
          key={article.id}
          title={article.title}
          description={article.description}
          image={article.image}
          tags={article.tags}
          time={article.time}
        />
      ))}
    </ArticelCards>
  </Articles>
);

export default Contact;
