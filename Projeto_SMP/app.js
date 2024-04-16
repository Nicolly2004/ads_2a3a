//fazer  importação do express
const express = require('express');
const router = require('./routes/index');
//configurações básicas do app
const app = express();
app.use('/', router);

//exportando o app, pois iremos importá-los no servidor
module.exports = app;