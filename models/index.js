const Sequelize = require("sequelize");
const db = require("../config/db.config");

const sequelize = new Sequelize(db.DB,db.USER, db.PASSWORD, {
    host: db.HOST,
    dialect: db.DIALECT,
    operatorsAlias:false,
    pool: db.pool
})
const conn = {};
conn.Sequelize = Sequelize;
conn.sequelize = sequelize;

conn.users = require("./all.model").users(sequelize,Sequelize);
conn.blogs = require("./all.model").blogs(sequelize,Sequelize);

module.exports = conn;