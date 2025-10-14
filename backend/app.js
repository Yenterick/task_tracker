const express = require('express');
const user = require('./routes/user.js');
const task = require('./routes/task.js');
const subtask = require('./routes/subtask.js')

app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', user);
app.use('/api/task', task);
app.use('/api/subtask', subtask);

app.listen(5000, () => {
    console.log("App is listening on port 5000...");
})