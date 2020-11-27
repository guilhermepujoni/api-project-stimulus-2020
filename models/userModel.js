import mongoose from 'mongoose'


const userSchema = mongoose.Schema({
    nomeEmpresa: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    senha: {
      type: String,
      require: true
    }, 
    coletaFragilidade: {
      type: Boolean,
      require: true,
      default: false
    }
})

const userModel = mongoose.model('user', userSchema, 'user')

export default userModel