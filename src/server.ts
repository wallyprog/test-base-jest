import express, { request, response } from 'express'
import 'reflect-metadata'
import './databases/connect'
import router from './routes'

const app = express()

app.use(express.json())
app.use(router)
app.listen(3000)
