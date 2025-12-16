import  Sequelize  from "sequelize";

const sequelize = new Sequelize('test', 'matheusdev', '260910@cabralcodes', {   host: "localhost",
    dialect: 'mysql'

} );

 const Postagem = sequelize.define('postagens', {

    titulo: {
         type: Sequelize.STRING   
    },
    conteudo: {
        type: Sequelize.TEXT
    }

 })




const Usuario = sequelize.define('usuarios', {
    nome: { 
        type: Sequelize.STRING
    },

    sobrenome: {
        type: Sequelize.STRING
    },

    idade: {
        type: Sequelize.INTEGER
    },
    
    email: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: "Matheus",
    sobrenome: "Augusto",
    idade: 15,
    email:"matheusaugustodev.web@gmail.com"

})
