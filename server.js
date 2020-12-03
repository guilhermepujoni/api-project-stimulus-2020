import express from 'express'
import {userRouter} from './routes/userRouter.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

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

app.use(userRouter)


app.listen(process.env.PORT, () =>{
  console.log('Starter API Project Stimulus')
})
