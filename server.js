const express = require('express');
const app = express();
const cors = require('cors');
const studentRoutes = require('./src/routes/StudentRoutes');

const port = 8080;

app.use(cors());
app.use(express.json());

app.use('/students', studentRoutes);

app.get('*', (req, res) => res.status(200).send({
  message: 'Hello World!'
}));

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});