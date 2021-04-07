# Seequesteor Test Assignment

## Run Local

1. Use node version correctly. 15.6.0

```
$ nvm use
```

2. Run backend locally.

```
$ yarn
$ yarn dev
```

Backend will run on your localhost:8000

3. Run frontend locally.

```
$ cd frontend
$ yarn
$ yarn start
```

Frontend will run on your localhost:3000

## About Endpoint

Backend server was built using _Express.js_

1. GET: `/topics/list`

This endpoint will be used to get all topics list from `data.json`.

```
Method: Get

Param:
  offset: 0
  limit: 10

Response:
  {
    total_amounts: 10,
    topics: [
      ...
    ],
    offset: 0
  }
```

This endpoint is supported by pagination option putting params into url.

Example Request:

```
$ curl http://localhost:8000/topics/list?offset=0&limit=5
```

2. GET: `/topics/detail`

This will be used to get a topic's detail and its all comments.

```
Method: GET

Params:
  topic_id: 123456
  show_less: 1 / 0

Response:
  {
    topic: {
      ...
    },
    comments: [
      ...
    ],
    total_comments: 30
  }
```

This endpoint will be supported by less showing comments or not putting `show_less` param into url.

Example Request:

```
$ curl http://localhost:8000/topics/detail?topic_id=123456&show_less=1
```

- If `show_less` is equal to 1, server will respond with 3 of comoment at maximum.
- If `show_less` is equal to 0, server will respond with all comments for the topic.

## About Frontend

Frontend was built using _React.js_.

### **All Articles** page.

- You can see all topics sorted by `released_date`.
- Topics are being paginated.
- If you click a topic, it will redirect you to Article Detail page.

### **Article Detail** page

- You can see details of a topic.
- Descriptions are _LoremIpsum_ text for now.
- If you click `Show more...`, you can see all comments for the topic.
- If you click `Article Detail` in header, it will redirect you to `All Articles` page.
- Default image is being used for a user avatar for now.

## Test

Frontend is being test using `react-testing` library for now.

Inside `/frontend`

```
$ yarn test
```

## What could be done better?

- 100% Coverage Unit test, E2E test for frontend side, integration test for backend side ( lack of time ).
- Adding comments, adding `like/dislike` feature using simple database like SQLite.
- `Typescript`, `eslint/prettier` could be used for code linting, free bugging.
