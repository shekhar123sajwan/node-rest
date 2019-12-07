const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
require('dotenv').config();
app.use(express.json());
const uri = process.env.ALTS_URI;
app.use(cors());

mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB connected'))
    .catch(err => { console.log('DB connection err'); });


app.use((req, res, next) => {
    const err = new Error('Url not found');
    next(err);
})

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: { message: err.message } })
})
module.exports = app;