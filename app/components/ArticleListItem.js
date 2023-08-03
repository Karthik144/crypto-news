import React from 'react';

const ArticleListItem = ({ article }) => {
  return (
    <li className="articleTitle" key={article.title}>
      <a href={article.titleURL} target="_blank" rel="noopener noreferrer">
        {article.title}
      </a>
    </li>
  );
};

export default ArticleListItem;