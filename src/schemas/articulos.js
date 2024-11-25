import z from 'zod'

const articuloSchema = z.object({
    titulo: z.string({
        invalid_type_error: 'El titulo del artículo debe ser un texto',
        required_error: 'El tituto del artículo es requerido'
    }),
    descripcion: z.string({
        invalid_type_error: 'La descripción del artículo debe ser un texto',
        required_error: 'La descripción del artículo es requerida'
    }),
    link_img: z.string().url({
        message: 'La imagen debe ser una URL válida'
    })
})

export function validateArticulo (input) {
    return articuloSchema.safeParse(input)
  }
  
  export function validatePartialArticulo (input) {
    return articuloSchema.partial().safeParse(input)
  }