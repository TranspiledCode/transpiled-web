import React from 'react';
import styled from '@emotion/styled';
import Divider from '../components/Divider';
import ArticelCard from '../components/ArticleCard';
import { articles } from '../config';

import { flexCenter } from '../utils/css';

const Articles = styled.section`
  ${flexCenter('column')}
  margin: 40px;
  gap: 40px;
`;

const AticlesHeading = styled.h2`
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
          key={article.title}
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
