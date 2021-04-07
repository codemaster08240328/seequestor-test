import React, { useState } from 'react';
import moment from 'moment';
import { Pagination } from 'antd';
import Article from '../components/article';
import { getArticle } from '../services/topic';
import useFetch from '../hooks/useFetch';
import Layout from '../components/layout';

const ArticleList = () => {
  const [page, setpage] = useState(1);
  const [limit, setlimit] = useState(5);
  const { type, data } = useFetch(() => getArticle((page-1) * limit, page * limit), [page, limit]);

  return (
    <Layout
      loading={type === 'loading'}
      error={type === 'error'}
    >
      {
        data?.topics?.sort((a, b) => b.time_uploaded - a.time_uploaded).map(article => (
          <Article title={article.title} id={article.topic_id} uploaded_at={moment(article.time_uploaded * 1000).format('DD MMM, YYYY')} comments={article.comments} key={article.topic_id.toString()} />
        ))
      }
      <Pagination
        current={page}
        total={data?.total_amounts}
        pageSize={limit}
        pageSizeOptions={[5, 10, 20]}
        onChange={(p) => setpage(p)}
        onShowSizeChange={(size) => setlimit(size)}
      />
    </Layout>
  )
}

export default ArticleList;
