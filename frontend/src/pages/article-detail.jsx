import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Comment, List } from 'antd';
import moment from 'moment';
import Layout from '../components/layout';
import useFetch from '../hooks/useFetch';
import { getArticleDetail } from '../services/topic';

const ArticleDetail = () => {
  const { id } = useParams();
  const [less, setless] = useState(1);

  const {type, data} = useFetch(() => getArticleDetail(id, less), [id, less])

  const showLess = useMemo(() => {
    return (data?.total_comments !== data?.comments.length) || (less === 0)
  }, [less, data])

  return (
    <Layout
      loading={type === 'loading'}
      error={type === 'error'}
    >
      <div className="article-detail__page">
        <h1>{data?.topic.title}</h1>
        <img src={data?.topic.thumbnail_url} alt="article-thumbnail" style={{ maxWidth: 800 }} />
        <p style={{ marginTop: 30 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <List
          className="comment-list__component"
          header={`${data?.total_comments} replies`}
          itemLayout="horizontal"
          dataSource={data?.comments}
          renderItem={item => (
            <li>
              <Comment
                author={`${item.user.first_name} ${item.user.last_name}`}
                avatar='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                content={<p style={{ textAlign: 'left' }}>{item.comment}</p>}
                datetime={moment(item.timestamp * 1000).format('DD MMM, YYYY')}
              />
            </li>
          )}
        />
        {
          showLess &&
          <div style={{ textAlign: 'left', paddingLeft: 42 }}>
            <span style={{ color: '#08c', cursor: 'pointer' }} onClick={() => setless(Math.abs(less - 1))}>
              { less === 1 ? 'Show more...' : 'Show less...' }
            </span>
          </div>
        }
      </div>
    </Layout>
  )
}

export default ArticleDetail;
