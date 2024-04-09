//fazer  importação do express

const express = require('express');

//rotas (quabdo o servidor for acessado, pra onde ele vai???)

const router = express.Router();
router.get('/',(req,res) => {
    res.send('Olá turma de ADS -  manhã!!!')
});

//configurações básicas do app

const app = express();
app.use('/', router);

//exportando o app, pois iremos importá-los no servidor
module.exports = app;