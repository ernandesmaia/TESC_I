/** Este arquivo está relacionado à abertura da conexão com o MongoDB e com o Express */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

/*const charts = require('./routs/charts');*/

//Set public folder
app.use(express.static(path.join(__dirname, 'public')));

//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: false}));

//Enable CORS
app.use(cors());

/*app.use('/charts', charts);*/

const porta = 3000;

//Iniciando o servidor
app.listen(porta, () => console.log('Servidor iniciado na porta ${porta}'));