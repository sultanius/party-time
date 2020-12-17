const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/partytime', { useUnifiedTopology: true, useNewUrlParser: true })


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req,res)=> {
    res.send('work')
})

module.exports = app;