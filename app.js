/** Este arquivo está relacionado à abertura da conexão com o MongoDB e com o Express */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

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

//Consulta
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    
    dbo.collection("PauDosFerrosSIM").find({"dia_semana_obito": "dom"}).toArray(function(err, result) {
        if (err) throw err;
            console.log(result.length);
            db.close();
    });
    
    dbo.collection("PauDosFerrosSIM").find({"dia_semana_obito": "seg"}).toArray(function(err, result) {
        if (err) throw err;
            console.log(result.length);
            db.close();
    });
    
    dbo.collection("PauDosFerrosSIM").find({"dia_semana_obito": "ter"}).toArray(function(err, result) {
        if (err) throw err;
            console.log(result.length);
            db.close();
    });

    dbo.collection("PauDosFerrosSIM").find({"dia_semana_obito": "qua"}).toArray(function(err, result) {
        if (err) throw err;
            console.log(result.length);
            db.close();
    });
    
    /*dbo.collection("PauDosFerrosSIM").find({"dia_semana_obito": "qui"}).toArray(function(err, result) {
        if (err) throw err;
            console.log(result.length);
            vetor[4] = result.length;
            db.close();
    });

    dbo.collection("PauDosFerrosSIM").find({"dia_semana_obito": "sex"}).toArray(function(err, result) {
        if (err) throw err;
            console.log(result.length);
            vetor[5] = result.length;
            db.close();
    });*/

});