import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import ContentBlock from '../components/ContentBlock';
import { flexCenter } from '../utils/css';

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

const ArticleContainer = styled.div`
  /* your styles here */
  ${flexCenter('column')}
  margin: 20px;
  padding: 20px;
`;

const ArticleTitle = styled.h1`
  /* your styles here */
  color: ${(props) => props.theme.text};
  font-size: 2em;
`;

const Article = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_ARTICLE, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data.getArticleById);

  return (
    <ArticleContainer>
      <ArticleTitle>{data.getArticleById.title}</ArticleTitle>
      <ContentBlock contentBlocks={data.getArticleById.contentBlocks} />
    </ArticleContainer>
  );
};

export default Article;
