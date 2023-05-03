import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import { connectToMongoDB } from './config/db'
import { querysRouter } from './routes/querys'

connectToMongoDB()

export const app = express()
app.use(cors())
app.use(logger('test'))
app.use(express.json())

app.use('/querys', querysRouter)

app.get('/', (req, res) => res.send('Consulta CEP API'))
