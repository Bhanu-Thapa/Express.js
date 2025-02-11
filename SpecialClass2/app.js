const express = require('express');
const cors = require('cors')

const app = express();

// Express Middleware
app.use(express.json()) //allow json data
app.use(express.urlencoded({extened:true}))  // url encoding
app.use(cors()) //Cross-Origin Resource Sharing

const userRoutes = require('./routes/userRoutes.js')

app.use('/',userRoutes)

module.exports = app;