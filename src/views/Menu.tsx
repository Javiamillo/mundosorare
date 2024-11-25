import { Link } from "react-router-dom";

const Menu = () => {

    return (
        <>
              <div className="m-auto h-2 w-2/3 pt-2 flex justify-end block">
                    <ul className="">
                        <Link to="/comojugar">
                            <li className=" font-markazi text-3xl font-bold sm-pb-4 inline-block pl-7 pr-7 text-blue-900">COMO JUGAR</li>
                        </Link>
                        <Link to="/noticias">
                            <li className=" font-markazi text-3xl font-bold sm-pb-4 inline-block pl-7 pr-7 text-blue-900">NOTICIAS</li>
                        </Link>
                    </ul>

                </div>
                <div className="m-auto h-32 w-48 pt-10 sm:pt-2 justify-start block">
                <Link to="/">
                        <img src="src/img/logo.png" alt="Logo" className="w-48 pl-1" />
                </Link>

                </div>
        </>

    )
};

export default Menu;