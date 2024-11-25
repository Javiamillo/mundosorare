import { useEffect, useState } from "react";
import { getArticuloRequest } from "../api/articulos.api.js";
import { useParams } from "react-router-dom";


let titulo: string;
let descripcion_ext: string;
let imagen: string;

const Articulo = () => {

let id = useParams()
let idABuscar = id.id
console.log(idABuscar)

    const [articulo, setArticulo] = useState([])

    useEffect(() => {
        const obtenerArticulo = async () => {
            try {
                const result = await getArticuloRequest(idABuscar);
                console.log(articulo)
                setArticulo(result.data);
                console.log(result)
                titulo = result.data.titulo;
                descripcion_ext = result.data.descripcion_ext;
                imagen = result.data.link_img;
            } catch (err) {
                console.log(err)
            }
        }
        obtenerArticulo();
        
    }, []);

    return (
        <>

        <div className="m-auto w-[250px] sm:w-[400px] md:w-[600px] lg:w-[800px] font-sans flex flex-col">
            <h2 className="font-markazi pt-4 pb-8 text-4xl sm:text-5xl font-bold text-blue-900 dark:text-white text-center">{titulo}</h2>
            <img src={imagen} className="w-[800-px]"></img>
            <p className="font-markazi sm:text-base md:text-xl lg:text-2xl text-slate-500 pt-16" dangerouslySetInnerHTML={{__html: descripcion_ext}}></p>
        </div>
        </>
    )

};

export default Articulo;
