
const Noticias = () => {

    return (
        <section className="m-auto w-[300px] sm:w-[500px] md:w-[700px] lg:w-[1000px] font-sans flex flex-col">
            <span className="font-markazi text-2xl text-slate-500 pb-2 pt-4">12 de Noviembre de 2024</span>
            <img src="src/img/nations_special.jpg" className="pb-9"></img>
            <h1 className="sm:text-base md:text-2xl lg:text-3xl font-bold pb-4 text-center">Llega la Nations Special (12-15 Nov)</h1>
            <article className="m-auto w-full font-sans flex flex-row pt-9 pb-9">

                <div className="w-1/2">
                    <img src="src/img/reglas_nations_special.jpg" className="pb-4"></img>
                </div>
                <div className="w-1/2 pl-5">

                    <p className="font-markazi sm:text-base md:text-xl lg:text-2xl text-slate-500 pb-2">Se viene una competición especial con suculentos premios, para ello hay hacer una alineación de jugadores de la Nations League, podemos usar cartas comunes o 4 comunes y 1 limited, que te sumará un 20% extra de puntos. <br></br>El ganador se llevará 5 cartas del pais elegido, hay premios para los 10 primeros, entradas para partidos, camisetas, cartas...</p>
                </div>
                <hr></hr>
            </article>
        </section>
    )

}

export default Noticias;