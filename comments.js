// Create web server
const express = require('express');
const app = express();
// Create comments array
let comments = [
  { username: 'Todd', comment: 'lol so funny' },
  { username: 'Skyler', comment: 'I like turtles' },
  { username: 'Sk8erBoi', comment: 'Plz delete this post' },
  { username: 'Ada', comment: 'that is so 2008' }
];
// Set view engine
app.set('view engine', 'ejs');
// Listen to port
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
// Render comments.ejs
app.get('/comments', (req, res) => {
  res.render('comments', { comments });
});
// Add a comment
app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  res.redirect('/comments');
});
// Create a form
app.get('/comments/new', (req, res) => {
  res.render('new');
});
