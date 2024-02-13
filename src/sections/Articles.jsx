import React from 'react';
import { useQuery, gql } from '@apollo/client';
import styled from '@emotion/styled';
import Divider from '../components/Divider';
import ArticleCard from '../components/ArticleCard';

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

const Articles = styled.section`
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

const Contact = () => {
  const { loading, error, data } = useQuery(ARTICLES_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    // TODO: Implement error handling
    console.error('Error fetching articles: ', error.message);
    return <p>{`Error ->> ${error.message}`}</p>;
  }

  return (
    <Articles id='articles'>
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
    </Articles>
  );
};

export default Contact;
