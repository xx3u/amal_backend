const express = require('express');
const app = express();
const cors = require('cors');
const test = require('./app/test');

const port = 8000;

app.use('/', test);
app.use(cors());

app.listen(port, () => {
  console.log(`Server has been started at http://localhost:${port}`);
});