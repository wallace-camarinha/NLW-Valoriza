import express from 'express';

const app = express();

app.get('/test', (req, res) => {
  return res.send("Hello world")
});

app.post('/test-post', (req, res) => {
  return res.send('Hello you')
})

app.listen(3000, () => console.log('Server running on port: 3000'));