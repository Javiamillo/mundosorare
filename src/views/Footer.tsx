import { Link } from "react-router-dom";

const Footer = () => {
    return (

        <footer className="fixed bg-zinc-500 w-full h-32 mt-auto flex justify-center items-center flex-col bottom-0">
            <div>
                <span className="text-slate-50 text-sm">Mundo Sorare © 2024&emsp;&emsp;</span>
                <Link to="/contacto">
                    <span className="text-slate-50 text-sm">Contacto</span>
                </Link>
            </div>
            <div>
                <p className="text-slate-50 text-sm pt-3 pb-1 text-center">Siguenos en</p>
                <div className="flex flex-row">
                    <Link to="https://www.facebook.com/profile.php?id=61567035036115">
                        <img src="src/img/facebook.svg" alt="Facebook" className="w-10 p-1"></img>
                    </Link>
                    <Link to="https://www.instagram.com/mundosorare/">
                        <img src="src/img/instagram.svg" alt="Instagram" className="w-10 p-1"></img>                    
                    </Link>
                    <Link to="https://x.com/Mundosorare">
                        <img src="src/img/x.svg" alt="X" className="w-10 p-1"></img>
                    </Link>
                </div>

            </div>
        </footer>

    )
};

export default Footer;

