import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import ContentBlock from '../components/ContentBlock';

const GET_ARTICLE = gql`
  query getArticleById($id: ID!) {
    getArticleById(_id: $id) {
      title
      contentBlocks {
        type
        language
        data
        id
      }
    }
  }
`;
const ArticlePage = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  padding: 20px;
`;

const ArticleTitle = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 3em;
`;

const Article = () => {
  const { id } = useParams();
  const { loading, error, data, refetch } = useQuery(GET_ARTICLE, {
    variables: { id },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    refetch({ id });
  }, [id, refetch]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ArticlePage>
      <ArticleContainer>
        <ArticleTitle>{data.getArticleById.title}</ArticleTitle>
        <ContentBlock contentBlocks={data.getArticleById.contentBlocks} />
      </ArticleContainer>
    </ArticlePage>
  );
};

export default Article;
