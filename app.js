require("dotenv-safe").config();
const express = require('express');
const bodyParser = require('body-parser');
const sinespApi = require('sinesp-api');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('Welcome API info car');
  return res.send('Welcome API info car');
});

app.get('/sinesp/:plate', async (req, res) => {
  try {
    const { plate } = req.params;

    if (!plate)
      return res.json({ message: 'Parameter plate is required' }).status(400);

    let vehicle = await sinespApi.search(plate);
    return res.json({ data: vehicle }).status(200);
  } catch (err) {
    console.log(err);
    return res.json({ message: 'Not found', error: err.message }).status(404);
  }
});

app.use((req, res) => {
  console.log('Usuário tentou entrar em uma página que não existe');
  return res.status(404).json({ error: 'Not found' });
});

app.listen(process.env.SVR_PORT || 3333, process.env.SVR_HOST, () => {
  console.log(`Server started http://${process.env.SVR_HOST}:${process.env.SVR_PORT}`);
});