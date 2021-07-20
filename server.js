const express = require('express');
const cors = require('cors');
const studentRoutes = require('./src/routes/StudentRoutes');
const groupRoutes = require('./src/routes/GroupRoutes');
const streamRoutes = require('./src/routes/StreamRoutes');
const { PORT } = require('./src/config/config');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/students', studentRoutes);
app.use('/groups', groupRoutes);
app.use('/streams', streamRoutes);

app.get('*', (req, res) =>
  res.status(200).send({
    message: 'Hello World!',
  })
);

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
