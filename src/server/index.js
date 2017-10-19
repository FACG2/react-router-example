import express from 'express';
import path from 'path';

import logger from './middleware/logger';

const PORT = 3000;

const app = express();

app.use(logger);
app.use(express.static(path.join(__dirname, '../../public')));

app.post('/login', (req, res) => {
  // Login logic goes here
  setTimeout(() => {
    res.json({ username: 'mantagen', role: 'admin' });
  }, 2500);
});
app.post('/logout', (req, res) => {
  res.json({ });
});

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  // res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
  res.json('Page not Found 404');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
