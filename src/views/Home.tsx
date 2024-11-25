import { Link } from "react-router-dom";
import { getArticulosRequest } from "../api/articulos.api.js";
import { useEffect } from "react";
import { useState } from "react";

import Pagination from "./Pagination";

const Articulos = () => {

    const [articulos, setArticulos] = useState([])

    const totalArticulos = articulos.length

    const articulosPorPagina = 4
    const [paginaActual, setPaginaActual] = useState(1)

    const lastIndex = paginaActual * articulosPorPagina
    const firstIndex = lastIndex - articulosPorPagina

    useEffect(() => {
        const obtenerTodosArticulos = async () => {
            try {
                const result = await getArticulosRequest();
                
                setArticulos(result.data);
            } catch (err) {

                console.log(err)
            }
        }
        obtenerTodosArticulos();
    }, []);

    return (
        <>
            <section className="m-auto w-[400px] sm:w-[600px] md:w-[700px] lg:w-[1000px] font-sans flex flex-col pt-5">

                {articulos.map((articulo) => (

                        <article key={articulo.id_articulos} className="m-auto w-full font-sans flex flex-col sm:flex-row sm:pt-3 md:pt-6 lg:pt-9 sm:pb-3 md:pb-6 lg:pb-9">
                            <div className="w-full sm:w-1/2 pt-16 sm:pt-0 pb-3 sm:pb-0">
                                <Link to={`/${articulo.id_articulos}`}>
                                    <img src={articulo.link_img} className=""></img>
                                </Link>

                            </div>
                            <div className="w-full sm:w-1/2 pl-5">
                                <h1 className="sm:text-xs md:text-lg lg:text-2xl font-bold pb-2 text-blue-900">{articulo.titulo}</h1>
                                <h2 className="font-markazi text-base sm:text-lg md:text-xl lg:text-2xl text-blue-300" dangerouslySetInnerHTML={{ __html: articulo.descripcion }}></h2>
                            </div>
                            <hr></hr>
                        </article>
                        
                )).slice(firstIndex, lastIndex)}
                <Pagination
                    articulosPorPagina={articulosPorPagina}
                    paginaActual={paginaActual}
                    setPaginaActual={setPaginaActual}
                    totalArticulos={totalArticulos}>
                </Pagination>
            </section>

        </>

    )
}
    ;

export default Articulos;