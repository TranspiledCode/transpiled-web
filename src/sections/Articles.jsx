import React from 'react';
import { useQuery, gql } from '@apollo/client';
import styled from '@emotion/styled';
import Divider from '../components/Divider';
import ArticleCard from '../components/ArticleCard';
import Loading from '../components/Loading';

import { flexCenter } from '../utils/css';

const ARTICLES_QUERY = gql`
  {
    topLikedArticles {
      _id
      imageURL
      title
      summary
      views
      likes
      tags
    }
  }
`;

const ArticlesSection = styled.section`
  ${flexCenter('column')}
  background-color: ${(props) => props.theme.background};
  padding: 100px 20px;
  gap: 40px;
`;

const ArticlesHeading = styled.h2`
  color: ${(props) => props.theme.text};
  font-size: 6rem;
  font-weight: 700;
`;

const ArticleCards = styled.div`
  ${flexCenter('column')}
  gap: 50px;

  @media (min-width: 768px) {
    ${flexCenter('row')}
  }
`;

const Articles = () => {
  const { loading, error, data } = useQuery(ARTICLES_QUERY);

  if (loading) {
    return (
      <ArticlesSection id='articles'>
        <Loading />
      </ArticlesSection>
    );
  }
  if (error || !data.topLikedArticles || data.topLikedArticles.length === 0) {
    // TODO: Implement error handling and feedback mechanism for articles
    console.error(
      'Error fetching articles or no articles available: ',
      error?.message
    );
    return null;
  }

  return (
    <ArticlesSection id='articles'>
      <ArticlesHeading>Articles</ArticlesHeading>
      <Divider />
      <ArticleCards>
        {data.topLikedArticles.map(
          ({ _id, title, views, likes, imageURL, summary, tags }) => (
            <ArticleCard
              key={_id}
              id={_id}
              title={title}
              summary={summary}
              views={views}
              image={imageURL}
              likes={likes}
              tags={tags}
            />
          )
        )}
      </ArticleCards>
    </ArticlesSection>
  );
};

export default Articles;
