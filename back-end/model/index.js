const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize('Eacademy', process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: "mysql",
})

const User = require('../model/user.model.js')(sequelize, DataTypes)
const Material = require('../model/material.model.js')(sequelize, DataTypes)

const db = {}

db.sequelize= sequelize
db.Sequelize= Sequelize
db.User= User
db.Material= Material

// relation Between user , material & teacher 

User.belongsToMany(Material, { through: 'UserMaterial' }, { foreignKey: 'userID' })
Material.belongsToMany(User, { through: 'UserMaterial' }, { foreignKey: 'userID' }) 


//connection to the database 

const connect = async () => {
    try {
        await db.sequelize.authenticate();
        await db.sequelize.sync({force :true})
        console.log('Connected to database successfully')
    } catch (error) {
        console.error('Connection failed to connect with database', error)
    }
}


connect();


module.exports = db