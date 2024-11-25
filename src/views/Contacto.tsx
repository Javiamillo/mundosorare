const Contacto = () => {

    return (
        <>
            <br></br>
            <div className="font-markazi bg-blue-400 mt-12 m-auto h-auto w-64 sm:w-128 flex justify-center flex flex-col rounded-lg  border-solid border-blue-600 pb-3">
                <span className="text-slate-100 text-4xl sm:text-6xl text-center pt-4 pb-8">CONTACTAME AQUÍ</span>
                <form className="flex flex-col" action="https://api.web3forms.com/submit" method="POST">

                    <input type="hidden" name="access_key" value="53a07fdd-febf-49ae-af60-dc6c3a505c59"></input>

                    <div className="flex flex-col m-auto pb-3">
                        <label className="text-slate-100 w-16 text-2xl">Nombre</label>
                        <input className="w-48 sm:w-80 h-8 m-auto rounded-md border-2 border-solid border-blue-600 mt-2.5 mb-5 pl-2.5 text-2xl" type="text" name="nombre" placeholder="Ingrese su nombre"></input>
                    </div>
                    <div className="flex flex-col m-auto pb-3">
                        <label className="text-slate-100 w-16 text-2xl">Email</label>
                        <input className="w-48 sm:w-80 h-8 m-auto rounded-md border-2 border-solid border-blue-600 mt-2.5 mb-5 pl-2.5 text-2xl" type="email" name="email" placeholder="Ingrese su email"></input>               </div>
                    <div className="flex flex-col m-auto pb-3">
                        <label className="text-slate-100 w-16 text-2xl">Asunto</label>
                        <input className="w-48 sm:w-80 h-8 m-auto rounded-md border-2 border-solid border-blue-600 mt-2.5 mb-5 pl-2.5 text-2xl" type="text" name="asunto" placeholder="Ingrese su asunto"></input>
                    </div>
                    <div className="flex flex-col m-auto pb-3">

                        <label className="text-slate-100 w-16 text-2xl">Mensaje</label>
                        <textarea className="w-48 sm:w-80 h-48 m-auto rounded-md border-2 border-solid border-blue-600 mt-2.5 mb-5 pl-2.5 pt-2.5 text-2xl" name="mensaje" placeholder="Ingrese su mensaje"></textarea>
                    </div>

                    <button className="text-slate-100 text-2xl w-24 h-8 m-auto bg-blue-600 mb-2 rounded-lg" type="submit">ENVIAR</button>
                </form>

            </div>
        </>

    )

}

export default Contacto;