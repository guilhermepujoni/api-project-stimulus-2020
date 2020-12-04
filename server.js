import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import { mainRouter } from './routes/mainRouter.js'
import { userRouter } from './routes/userRouter.js'
import { modelRouter } from './routes/mentorRouter.js'
import { mapeamento01Router } from './routes/mapeamento/mapeamento01Router.js'
//import { mapeamento02Router } from './routes/mapeamento/mapeamento02Router.js'
dotenv.config

async function startMongo()  {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.USERDB}:${process.env.PWDDB}@guipujonicluster.7lmmk.mongodb.net/project-stimulus-2020?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },);
  } catch (error) {
    console.log(error)
  }
}

startMongo()
const app = express()
app.use(express.json())


app.use(mainRouter)
app.use(userRouter)
app.use(modelRouter)

app.use(mapeamento01Router)
//app.use(mapeamento02Router)


app.listen(process.env.PORT, () =>{
  console.log('Starter API Project Stimulus')
})
