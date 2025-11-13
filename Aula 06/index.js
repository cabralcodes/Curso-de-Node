// lembrar do package, e se tiver muita dúvida rever o curso de node aula 07.

import express from 'express';
const app = express();

app.get("/", function(req,res){
    res.send("Seja Bem Vindo ao meu app!");
});

app.get("/sobre", function(req,res){
    res.send("minha página sobre")

});

app.get("/blog", function(req,res){
    res.send("Bem vindo ao meu Blog!")
});

app.get('/ola/:nome/:cargo', function(req, res){
    res.send("<h1>Ola " + req.params.nome + "</h1>"+"<h2>Seu cargo é: " + req.params.cargo + "</h2>");
  
})

app.listen(49823, function(){
    console.log("Servidor rodando na URL http://localhost:49823/");
});

