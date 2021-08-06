const express = require('express');
const cors = require('cors');
const studentRoutes = require('./src/routes/StudentRoutes');
const groupRoutes = require('./src/routes/GroupRoutes');
const streamRoutes = require('./src/routes/StreamRoutes');
const paymentRoutes = require('./src/routes/PaymentRoutes');
const subjectRoutes = require('./src/routes/SubjectRoutes');
const teacherRoutes = require('./src/routes/TeacherRoutes');
const lessonRoutes = require('./src/routes/LessonRoutes');
const userRoutes = require('./src/routes/UserRoutes');
const { PORT } = require('./src/config/config');
require('./src/middleware/passport');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/students', studentRoutes);
app.use('/groups', groupRoutes);
app.use('/streams', streamRoutes);
app.use('/payments', paymentRoutes);
app.use('/subjects', subjectRoutes);
app.use('/teachers', teacherRoutes);
app.use('/lessons', lessonRoutes);
app.use('/users', userRoutes);

app.get('*', (req, res) =>
  res.status(200).send({
    message: 'Hello World!',
  })
);

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
