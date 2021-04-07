import axios from 'axios';

export const getArticle = async (offset, limit) => {
  return await axios.get(`/topics/list?offset=${offset}&limit=${limit}`).then(res => res.data);
}

export const getArticleDetail = async (id, show_less) => {
  return await axios.get(`/topics/detail?topic_id=${id}&show_less=${show_less}`).then(res => res.data);
}
