import express from 'express';
import {engine} from 'express-handlebars';
import Post from '../models/Post.js';
import bodyParser from "body-parser";
const app = express();

//config
    //Template Engine
        app.engine('handlebars', engine({
            defaultLayout: 'main'

        }));

        app.set('view engine', 'handlebars')

        //body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())

//Rotas

app.get('/', function(req, res){
    Post.findAll().then(function(posts){
    res.render('home', 
        {posts: posts})
    });
})

app.get('/cadastro', function(req, res){
    res.render('formulario')
})

app.post('/adicionado', function(req, res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("Houve um erro "+ erro)
    })
})

app.listen(49823, function(){
    console.log("Servidor rodando na URL http://localhost:49823/");
});

