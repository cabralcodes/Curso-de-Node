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


app.listen(49823, function(){
    console.log("Servidor rodando na URL http://localhost:49823/");
});

