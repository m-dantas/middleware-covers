const dotenv = require('dotenv').config()
const express = require("express");
const app = express()
const { PORT } = require('./config')

const covers = require('./routes/covers')


app.use('/covers', covers)

app.listen(PORT, () => {
    console.log('Server listening on:', PORT)
})