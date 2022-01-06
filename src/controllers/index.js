const express = require('express')
const ConfigModel = require('../models/index')
const router = express.Router()


router.get('/Get/:userId', async (req,res) => {
    try {
        const config = await ConfigModel.findById(req.params.userId)

        return res.send({ config })

    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: 'Não foi possível encontrar sua configuração'})
    }
})


router.put('/put/:userId', async (req,res) => {
    try {
        const { hora, dia, mes, minuto } = req.body

        const config = await ConfigModel.findByIdAndUpdate(req.params.userId, {hora, dia, mes, minuto}, { new: true })

        return res.send({ config })

    } catch(err) {
        console.log(err)
        return res.status(400).send({ error: 'Não foi possível atualizar sua configuração'})
    }
})

router.post('/create', async (req,res) => {
    try {
        const { hora, dia, mes, minuto } = req.body

        const config = await ConfigModel.create({ hora, dia, mes, minuto})

        return res.send({ config })

    } catch(err) {
        console.log(err)
        return res.status(400).send({ error: 'Não foi possível criar sua configuração'})
    }
})

router.get('/Get', async (req,res) => {
    try {
        const config = await ConfigModel.find()

        return res.send({ config })

    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: 'Não foi possível encontrar suas configurações'})
    }
})

//idOficial:  61ca7e9666a93f9f47646679
//idTeste:  61d68526acf88b6cb8f9f42c


module.exports = app => app.use('/configTime', router)