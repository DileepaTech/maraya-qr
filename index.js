const express = require('express'); 
const app = express();
let path = require('path')
let cookieParser = require('cookie-parser');
let createError = require('http-errors')
const cors = require('cors'),
      secure = require('ssl-express-www'),
      mongoose = require('mongoose');
const PORT = process.env.PORT || 8080 || 5000 || 3000
let api = require('./routes/api'),
    server = require('./routes/server');

app.set('trust proxy', true);
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(cookieParser());
app.use(express.static("public"))
app.use('/api', api)
app.use('/server', server)


app.listen(PORT, () => {
    console.log(`【﻿😈Maraya-MD Public😈】
								 
 Server running on http://localhost:` + PORT)
console.log(`RUNNING YOUR QR CODE`)
})

module.exports = app
