const { DataTypes } = require('sequelize')
const sequelize = require('../util/dataBase')

const bookingData = sequelize.define('SignUp',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    mobileNumber:{
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:true
    },
    password: {
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }
})

module.exports = bookingData