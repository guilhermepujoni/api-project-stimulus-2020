import express from 'express'
import mentorModel from '../models/mentorModel.js'

const app = express()

app.post('api/cadastrar/mentores/:imagem/:nome/:area/', async (request, response) => {
    const dados = {
        nomeEmpresa: request.params.imagem,
        email: request.params.nome,
        senha: request.params.area,
    }
    try {
        const mentor = new mentorModel(dados)

        await mentor.save()
        response.send({message: 'success'})
    } catch (error) {
        response.status(500).send(error)
    }
}) 

app.post('api/buscar/mentores', async (request, response) => {

    try {
        const mentores = await mentorModel.find()
        
        if(mentores) {
            response.send({message: 'success', mentores: mentores})
        } else {
        response.send({message: 'Não encontrado'})
        }
    } catch (error) {
        response.status(500).send(error)
    }
}) 



export {app as modelRouter}