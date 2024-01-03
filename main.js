// index.js
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/task-route.js');

// const agenda = require('agenda');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use('', router)

// Connect to MongoDB
try {
    mongoose.connect('mongodb://localhost/task_scheduler_database', { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('Connection to database established')
    db = mongoose.connection
} catch (err) {
    console.log(`Error occured: ${err}`)
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});