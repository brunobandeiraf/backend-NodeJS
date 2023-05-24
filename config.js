let Sequelize = require("sequelize")

const sequelize = new Sequelize('app', 'root', '123456789', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
});

sequelize.sync()
  .then(() => {
    console.log('Tabela "users" criada com sucesso.');
  })
  .catch((error) => {
    console.error('Erro ao criar tabela "users":', error);
});

module.exports = sequelize;