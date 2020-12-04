import mongoose from 'mongoose'

const mapeamento02Schema = mongoose.Schema({
    email: {
        type: String,
        require: true
    },
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
    enderecoComercial: {
        type: String,
        require: true
    },
    municipio: {
        type: String,
        require: true
    },
    estado: {
        type: String,
        require: true
    }, 
    telefoneComercial: {
        type: String,
        require: true
    },
})

const mapeamento02Model = mongoose.model('mapeamento02', mapeamento02Schema, 'mapeamento02')

export default mapeamento02Model