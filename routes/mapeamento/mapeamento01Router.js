import express from 'express'
import mapeamento01Model from '../../models/mapeamento/mapeamento01Model'

const app = express()

app.post('/api/mapeamento/01/:email/:dados1/:dados2/:dados3/:dados4/:dados5/', async (request, response) => {
    const dados = {
        email: request.params.email,
        endereco: request.params.dados1,
        telefone: request.params.dados2,
        razaoSocial: request.params.dados3,
        cnpj: request.params.dados4,
        idadeEmpresa: request.params.dados5,
    }
    try {
        const map01 = new mapeamento01Model(dados)

        await map01.save()
        response.send({message: 'success', mapeamento01: dados})
    } catch (error) {
        response.status(500).send(error)
    }
}) 

app.post('/api/buscar/mapeamento/01', async (request, response) => {

    try {
        const map01 = await mapeamento01Model.find()
        
        if(map01) {
            response.send({message: 'success', mapeamento01: map01})
        } else {
        response.send({message: 'Não encontrado'})
        }
    } catch (error) {
        response.status(500).send(error)
    }
}) 



export {app as mapeamento01Router}