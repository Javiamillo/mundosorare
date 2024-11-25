import { validateArticulo, validatePartialArticulo } from "../schemas/articulos.js";

export class ArticuloController {
    constructor ({ articuloModel }) {
        this.articuloModel = articuloModel
    }

    getAll = async (req, res) => {
        const articulos = await this.articuloModel.getAll()
        res.json(articulos)
    }

    getById = async (req, res) => {
        const { id } = req.params
        const articulo = await this.articuloModel.getById({ id })
        if (articulo) return res.json(articulo)
        res.status(404).json({ message: 'Artículo no encontrado' })
      }
}