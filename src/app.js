import express,{ json } from 'express'
import { createArticuloRouter }  from "./routes/articulos.js"
/*import { corsMiddleware } from './middlewares/cors.js'*/
import 'dotenv/config'
import cors from "cors";


// después
export const createApp = ({ articuloModel }) => {
  const app = express()
  app.use(json())
  app.use(cors())

  app.disable('x-powered-by')

  app.use('/articulos', createArticuloRouter({ articuloModel }))
  const PORT = process.env.PORT || 1234
  app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
  })
}