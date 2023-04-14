const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/json
app.use(bodyParser.json());

// mock data for friends list
const friends = [
  { id: 1, name: 'Alice', username: 'alice', avatar: 'https://bit.ly/2UzWbuR' },
  { id: 2, name: 'Bob', username: 'bob', avatar: 'https://bit.ly/3xW8H2z' },
  { id: 3, name: 'Charlie', username: 'charlie', avatar: 'https://bit.ly/3mO7BFi' },
];

// GET /friends - get the list of friends
app.get('/api', (req, res) => {
  res.json(friends);
});

// POST /comments - post a new comment
app.post('/comments', (req, res) => {
  const { comment } = req.body;
  // do something with the comment
  console.log(comment);
  res.json({ message: 'Comment received' });
});

// start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
