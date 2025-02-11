const express = require('express');
const cors = require('cors')

const app = express();

// Express Middleware
// app.use() is used to register middleware.
// It can handle middleware functions, routers, or static file serving.
app.use(express.json()) //allow json data
app.use(express.urlencoded({extened:true}))  // url encoding
app.use(cors()) //Cross-Origin Resource Sharing

const userRoutes = require('./routes/userRoutes.js')

app.use('/',userRoutes)
// app.use('/', userRoutes) mounts userRoutes at /.
// Requests like /profile and /settings are handled inside userRoutes.
// If you mount at /users, routes become /users/profile, /users/settings.
// Express checks middleware in order and matches requests dynamically.
module.exports = app;