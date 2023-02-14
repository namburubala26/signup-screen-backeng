const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const sequelize = require('./util/dataBase')
const userRoute = require('./routes/user')
const getRoute = require('./routes/get')
const delRoute = require('./routes/delData')

const cors = require('cors')

app.use(cors())

app.use(bodyParser.json({extended:false}))

const bookingData = require('./model/formData')

app.use(userRoute)
app.use(getRoute)
app.use(delRoute)

sequelize.sync()
.then((result)=>{
    app.listen(3000)
})
.catch((err)=>{
    console.log(err)
})