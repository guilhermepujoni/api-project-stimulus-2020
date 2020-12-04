import express from 'express'
import userModel from '../models/userModel.js'
const app = express()

// MÉTODO DE CRIAR USUÁRIO
app.post("/api/cadastrar/:name/:email/:password", async (request, response ) => {
    const dados = {
        nomeEmpresa: request.params.name,
        email: request.params.email,
        senha: request.params.password,
    }
    try {
        const emailExiste = await userModel.findOne({email: email})
        const nomeExiste = await userModel.findOne({nomeEmpresa: nomeEmpresa})

        if(emailExiste || nomeExiste) {
            response.send({existeUsuario: true})
        } else {
            const user = new userModel(dados)

            await user.save()
            response.send({message: 'success', nomeEmpresa: dados.nomeEmpresa})
        }

        
    } catch (error) {
        response.status(500).send(error)
    }
});


//MÉTODO DE BUSCAR USUÁRIO PELO EMAIL E SENHA
app.post("/api/procurar/:email/:password", async (request, response) => {
   try {
    var senhaUser = request.params.password
    var emailUser = request.params.email

       const user = await userModel.findOne({email: emailUser, senha: senhaUser})

       if(user) {
           response.send({message: 'success', user: user.nomeEmpresa, coletaFragilidade: user.coletaFragilidade })
       } else {
        response.send({message: 'Não encontrado'})
       }

   } catch (error) {
       response.status(500).send(error)
   }
});



export {app as userRouter}


