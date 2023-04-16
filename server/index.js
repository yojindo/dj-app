import express from 'express';
import cors from 'cors';
import generate from './generate.js';

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3009;

app.get('/', (req, res) => {
  res.send('Hello world from our API');
});

app.post('/generate', async (req, res) => {
  const song = req.body.song;
  try {
    const songSearch = await generate(song);
    res.json({ response: songSearch });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
