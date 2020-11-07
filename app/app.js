const express = require('express');
const port = (process.env.PORT || 3000)

//incializaciones 
const app = express()


//settings
app.set('port', port)

//middlewares
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//routes
app.use(require('./routes/bd.route'))
module.exports = app;