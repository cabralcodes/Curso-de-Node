import  Sequelize  from "sequelize";

const sequelize = new Sequelize('test', 'matheusdev', '260910@cabralcodes', {   host: "localhost",
    dialect: 'mysql'

} );

// const Postagem = sequelize.define()

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!");
}).catch(function(erro){
    console.log("falha ao se conectar: " + erro);
})


