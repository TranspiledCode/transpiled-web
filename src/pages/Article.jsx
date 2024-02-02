import React from 'react';
import { useParams } from 'react-router-dom';

const Article = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Article {id}</h1>
      <p>Article content goes here...</p>
    </div>
  );
};

export default Article;
