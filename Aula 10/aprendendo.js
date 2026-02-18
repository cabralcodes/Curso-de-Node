import mongoose from "mongoose";
//Configurando o mongoose
mongoose.connect("mongodb://localhost/aprendendo").then(() =>{
    console.log("MongoDB Conectado...")
}).catch((err)=>{
    console.log("Houve um erro ao se conectar ao mongoDB: "+err)
})

// Model - Usuários
//Definindo Model
const UsuarioSchema = mongoose.Schema({
    nome:{
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String
    }
})
//Collection
mongoose.model('usuarios', UsuarioSchema)

    const Victor = mongoose.model('usuarios')

    new Victor({
        nome: "Victor",
        sobrenome: "Lima",
        email: "email@email.com",
        idade: 19,
        pais: "Brasil"
    }).save().then(()=>{
        console.log("Usuário criado com sucesso!")
    }).catch((err)=>{
        console.log("Houve um erro ao registrar um usuário: "+err)
    })
