const mockDataJSON = require('../mock/data.json');

const getCommentsByTopic = () => {
  const commentsByTopic = {};

  mockDataJSON.comments.forEach(comment => {
    if (comment.topic_id.toString() in commentsByTopic) {
      commentsByTopic[comment.topic_id.toString()].push(comment);
    } else {
      commentsByTopic[comment.topic_id.toString()] = [comment];
    }
  });

  return commentsByTopic;
}

const getUsersById = () => {
  const usersById = {};

  mockDataJSON.users.forEach(user => {
    usersById[user.user_id] = user;
  });

  return usersById;
}

const getTopics = (req, res, next) => {
  const offset = req.query.offset ? req.query.offset : 0;
  const limit = req.query.limit ? req.query.limit : 10;
  const topics = [];

  const commentsByTopic = getCommentsByTopic();
  
  let total_amounts = 0;

  mockDataJSON.topics.forEach((topic, index) => {
    total_amounts ++;
    if (index >= offset && (index < offset + limit)) {
      topics.push({
        ...topic,
        comments: commentsByTopic[topic.topic_id.toString()].length
      })
    }
  });

  res.json({
    offset,
    topics,
    total_amounts,
  });
}

const getTopicDetail = (req, res, next) => {
  const topic_id = req.query.topic_id;
  const show_less = req.query.show_less;

  console.log(topic_id);

  const topic = mockDataJSON.topics.filter(item => String(item.topic_id) === String(topic_id))[0];

  console.log(topic);

  if (!topic) {
    res.status(404).json({error: 'No topic'})
  };
  
  const usersById = getUsersById();
  
  let comments = [];
  let total_comments = 0;

  mockDataJSON.comments.forEach(comment => {
    if (String(comment.topic_id) === String(topic_id)) {
      total_comments ++;
      comments.push({
        ...comment,
        user: usersById[comment.user_id]
      });
    }
  });

  if (String(show_less) === '1') {
    comments.splice(3);
  }

  res.json({
    topic,
    comments,
    total_comments
  });
}

module.exports = {
  getTopics,
  getTopicDetail
}
