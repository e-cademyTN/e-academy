const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize('Eacademy', process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: "mysql",
})

const User = require('../model/user.model.js')(sequelize, DataTypes)
const Material = require('../model/material.model.js')(sequelize, DataTypes)
const Teacher = require("../model/teacher.model.js")(sequelize, DataTypes)

const db = {}

db.sequelize= sequelize
db.Sequelize= Sequelize
db.User= User
db.Material= Material
db.Teacher =Teacher

// relation Between user , material & teacher 

User.belongsToMany(Material, { through: 'UserMaterial' }, { foreignKey: 'userID' })
Material.belongsToMany(User, { through: 'UserMaterial' }, { foreignKey: 'userID' }) 

Teacher.hasOne(Material, { foreignKey: 'teacherId' })
Material.belongsTo(Teacher, { foreignKey: 'teacherId' })


//connection to the database 

const connect = async () => {
    try {
        await db.sequelize.authenticate();
        await db.sequelize.sync({force :false})
        console.log('Connected to database successfully')
    } catch (error) {
        console.error('Connection failed to connect with database', error)
    }
}


connect();


module.exports = db