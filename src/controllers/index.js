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
        const { hora, dia, mes } = req.body

        const config = await ConfigModel.findByIdAndUpdate(req.params.userId, {hora, dia, mes}, { new: true })

        return res.send({ config })

    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: 'Não foi possível atualizar sua configuração'})
    }
})


module.exports = app => app.use('/configTime', router)