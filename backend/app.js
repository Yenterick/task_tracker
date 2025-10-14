const express = require('express');
const user = require('./routes/user');
const task = require('./routes/task');

app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', user);
app.use('/api/task', task);

app.listen(5000, () => {
    console.log("App is listening on port 5000...");
})