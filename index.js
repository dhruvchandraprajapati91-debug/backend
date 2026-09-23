require('dotenv').config()
const express = require('express');
const app = express();
const PORT= process.env.PORT || 3000;

const githubdb ={
  "message": "Not Found",
  "documentation_url": "https://docs.github.com/rest",
  "status": "404"
}

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/github', (req, res) => {
  res.json(githubdb);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});