import React from 'react';
import { CommentOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './article.css';

const Article = ({id, title, uploaded_at, comments}) => {
  const history = useHistory();

  return (
    <div className="article-wrapper__component">
      <div>
        <h2 data-testid="title" onClick={() => history.push(`/topic/${id}`)} className="article-title__h2">{title}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
      <div className="article-action__wrapper">
        <p data-testid="published_at">published at: <b>{uploaded_at}</b></p>
        <p data-testid="comments"><CommentOutlined style={{ fontSize: '16px', color: '#08c' }} /> {comments}</p>
      </div>
    </div>
  )
}

Article.prototype = {
  id: PropTypes.number,
  title: PropTypes.string,
  uploaded_at: PropTypes.string,
  comments: PropTypes.number
}

export default Article;
