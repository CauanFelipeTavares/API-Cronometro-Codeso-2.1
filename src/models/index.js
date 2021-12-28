const mongoose = require('../database/index')

const Dia = parseInt((new Date).getUTCDate())
const Mes = parseInt((new Date).getMonth() + 1)


const DataSchema = new mongoose.Schema({
    dia: {
        type: Number,
        require: true,
    },
    mes: {
        type: Number,
        require: true,
    },
    DiaDeAtualizacao: {
        type: Number,
        default: Dia,
    },
    MesDeAtualizacao: {
        type: Number,
        default: Mes,
    }
})

const Data = mongoose.model('Data', DataSchema)

module.exports = Data