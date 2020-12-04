import express from 'express'
import mapeamento01Model from '../../models/mapeamento/mapeamento01Model.js'

import mapeamento02Model from '../../models/mapeamento/mapeamento02Model.js'

const app = express()

app.put('/api/mapeamento/02/:email/:dados1/:dados2/:dados3/:dados4/', async (request, response) => {
    var email = request.params.email
    
    try {
        const retorno = await mapeamento01Model.findOne({email: email})
        const dados = {
            ...retorno,
            enderecoComercial: request.params.dados1,
            municipio: request.params.dados2,
            estado: request.params.dados3,
            telefoneComercial: request.params.dados4,
        }
        const buscaMap01 = await mapeamento02Model.findOneAndUpdate({email: email}, dados)
 
  

        
        response.send({message: 'success', mapeamento02: buscaMap01})
    } catch (error) {
        response.status(500).send(error)
    }
}) 

app.post('/api/buscar/mapeamento/01', async (request, response) => {

    try {
        const map01 = await mapeamento02Model.find()
        
        if(map01) {
            response.send({message: 'success', mapeamento02: map01})
        } else {
        response.send({message: 'Não encontrado'})
        }
    } catch (error) {
        response.status(500).send(error)
    }
}) 



export {app as mapeamento02Router}