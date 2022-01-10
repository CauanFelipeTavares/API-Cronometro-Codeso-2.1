const mongoose = require('mongoose')
//require('dotenv/config')

mongoose.connect(`mongodb+srv://Calires:${procces.env.DB_CLUSTER}@cluster0.v9dm3.mongodb.net/Codeso2`)
//console.log(process.env.DB_CLUSTER)

mongoose.Promise = global.Promise

module.exports = mongoose