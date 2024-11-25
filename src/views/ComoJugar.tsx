const ComoJugar = () => {

    return (
        <section className="m-auto w-[300px] sm:w-[500px] md:w-[600px] lg:w-[900px] xl:w-[1000px] font-sans flex flex-col">
            <img
                src="src/img/como_jugar.jpg"
                alt="Interface de Sorare"
                className="w-7/12 m-auto"
            />
            <p className="font-markazi sm:text-base md:text-xl lg:text-2xl text-slate-500 pb-2 pt-10">
                Bienvenidos al maravilloso mundo de Sorare, ¿eres un apasionado de los fantasy? Pues con Sorare disfrutaras al máximo con opción de ganar premios. <br></br>
                Os voy a dar unas pinceladas de como se juega en Sorare. Tienes 2 opciones, jugar gratis o jugar con dinero.<br></br>
                Para <b>jugar gratis</b>, tienes que usar las cartas comunes, que no cuestan dinero, vas a la opción de Rivals y todos los dias tienes un ticket gratuito, luego aparte tienes opción de ganar mas tickets completando misiones.<br></br>
                Al principio recomiendo jugar gratis, pero <b>si ya has decidido que vas a gastarte unos euros</b>, puedes comprar cartas de diferente rareza, las mas económicas son las Limited, estas las podras usar tanto en Rivals como en Pro, en Rivals juegas un partido contra otro jugador aleatorio y sumas puntos en tu división, en Pro haces alineación del juego seleccionado, ligas top, ligas secundarias, ligas under23...y en función de los puntos obtenidos podras obtener premios.<br></br>
                En ambos casos son alineaciones de 5 jugadores, Portero, Defensa, Centrocampista, Delantero y un jugador extra (que no podrá ser otro portero)<br></br>
                <b>ANIMATE A PROBARLO</b>

            </p>
        </section>
    )

}

export default ComoJugar;