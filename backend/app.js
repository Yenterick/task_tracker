const express = require('express');
const user = require('./routes/user');

app = express();
app.use(express.json());

app.use('/api/user', user);

app.listen(5000, () => {
    console.log("App is listening on port 5000...");
})