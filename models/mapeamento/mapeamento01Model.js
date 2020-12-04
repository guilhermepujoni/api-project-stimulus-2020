import mongoose from 'mongoose'

const mapeamento01Schema = mongoose.Schema({
    endereco: {
        type: String,
        require: true
    },
    telefone: {
        type: String,
        require: true
    }, 
    razaoSocial: {
        type: String,
        require: true
    },
    cnpj: {
        type: String,
        require: true,
    },
    idadeEmpresa: {
        type: String,
        require: true,
    },
})

const mapeamento01Model = mongoose.model('mapeamento01', mapeamento01Schema, 'mapeamento01')

export default mapeamento01Model