const express = require('express');
const mongoose = require('mongoose');

const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(
        () => console.log('MongoDB connected successfully!')
    )
    .catch(
        (e) => console.log(e)
    );

app.get('/', (req, res) => res.send('Hello'));

const port = process.env.PORT || 30012;

app.listen(port, () => console.log(`Server running on port ${port}`));