const mongoose = require('../database/index')

var Dia = parseInt((new Date).getUTCDate())
var Mes = parseInt((new Date).getMonth() + 1)
var ExactDate = parseInt((new Date).getUTCMinutes())
console.log(Dia)
console.log(Mes)
console.log(ExactDate)


var DataSchema = new mongoose.Schema({
    dia: {
        type: Number,
        require: true,
    },
    mes: {
        type: Number,
        require: true,
    },
    hora: {
        type: Number,
        require: true,
    },
    minuto: {
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
    },
    MinutoDeAtualizacao: {
        type: Number,
        default: ExactDate,
    },
})


const Data = mongoose.model('Data', DataSchema)

module.exports = Data