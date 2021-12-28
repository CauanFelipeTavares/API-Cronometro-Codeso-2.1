const express = require('express')
require('dotenv/config')
var cors = require('cors')

const app = express()

app.use(cors())


app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req,res) => {
    res.send('Ok.')
})

require('./src/controllers/index')(app)

app.listen(process.env.PORT || 8181, () => {
    console.log("Rodando em http://localhost:8181")
})