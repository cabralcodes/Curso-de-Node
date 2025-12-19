import  Sequelize  from "sequelize";
import express from 'express';
import {engine} from 'express-handlebars';
const app = express();

//config
    //Template Engine
        app.engine('handlebars', engine({
            defaultLayout: 'main'

        }));

        app.set('view engine', 'handlebars')

    //Conexão com banco de dados MySql
    const sequelize = new Sequelize('test', 'matheusdev', '260910@cabralcodes', {   host: "localhost",
    dialect: 'mysql'
    } );

//Rotas

app.get('/cadastro', function(req, res){
    res.render('formulario')
})

app.post('/adicionado', function(req, res){
    res.send('RECEBIDO!')
})

app.listen(49823, function(){
    console.log("Servidor rodando na URL http://localhost:49823/");
});

