import { Router } from 'express'
import { ArticuloController } from '../controllers/articulos.js'

export const createArticuloRouter = ({ articuloModel }) => {
    const articulosRouter = Router()

    const articuloController = new ArticuloController({ articuloModel })

    articulosRouter.get('/', articuloController.getAll)

    articulosRouter.get('/:id', articuloController.getById)

    return articulosRouter
}


