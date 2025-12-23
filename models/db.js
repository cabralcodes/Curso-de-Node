import  Sequelize  from "sequelize";

//Conexão com banco de dados MySql
    const sequelize = new Sequelize('postapp', 'matheusdev', '260910@cabralcodes', {
    host: "localhost",
    dialect: 'mysql'
    } );

export default  {
    Sequelize : Sequelize,
    sequelize : sequelize
}
