'use strict'

const express = require('express');
const cors = require('cors');
const topics = require('./app/topics');

const app = express();
const port = 8000;

app.use(cors());

app.get('/topics/list', topics.getTopics);
app.get('/topics/detail', topics.getTopicDetail);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
