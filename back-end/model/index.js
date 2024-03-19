const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize('e-academy', process.env.DB_USER, process.env.DB_PASSWORD, {
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

// relation Between user , material & teacher here >




//connect to database here > 




module.exports = db