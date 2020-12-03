import express from 'express'

const app = express()

//METODO PARA CONFIRMAR O FUNCIONAMENTO DA APLICACAO
app.get('/', (request, response) => {
    response.send('Seja bem vindo a Project Stimulus 2020 API')
})


export {app as mainRouter}