import mongoose from 'mongoose'

const mentorSchema = mongoose.Schema({
    imagemPerfil = {
        type: String,
        require: true
    },
    nomeMentor = {
        type: String,
        require: true
    }, 
    areaMentor = {
        type: String,
        require: true
    },
    classificacaoMentor = {
        type: String,
        require: true,
        default: "0"
    },
})

const mentorModel = mongoose.model('mentores', mentorSchema, 'mentores')

export default mentorModel