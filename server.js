const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 8000;

app.use(cors());

app.get('*', (req, res) => res.status(200).send({
  message: 'Hello World!'
}));

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});