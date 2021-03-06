import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/User/UserContext';
import logo from './../images/logo.png'

export default function Header() {
    const ctx = useContext(UserContext);

    const { currentUser, verifyingToken, logoutUser } = ctx;
    console.log(ctx);
    useEffect(() => {
        verifyingToken();
    }, []);

    return (
        <header className="bg-black">
            <nav
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                aria-label="Top"
            >
                <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
                    <div className="flex items-center">
                        <Link to="/">
                            <img className="h-20 w-25" src={logo} alt="" />
                        </Link>
                        <div className="ml-10 space-x-8 lg:block">
                            <Link
                                to="/books"
                                className="text-base font-medium text-white hover:text-indigo-50"
                            >
                                Libros
                            </Link>
                            <Link
                                to="/sobre-nosotros"
                                className="text-base font-medium text-white hover:text-indigo-50"
                            >
                                Sobre nosotros
                            </Link>
                        </div>
                    </div>
                    <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        {currentUser.nombre ? (
                            <>
                                <Link
                                    to="/profile"
                                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-black-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white "
                                >
                                    Tu perfil
                                </Link>
                                <a
                                    onClick={() => logoutUser()}
                                    href="/"
                                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-black-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white "
                                >
                                    Cerrar sesi??n
                                </a>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/registro"
                                    class="ml-8 whitespace-nowrap inline-flex items-center justify-center text-white"
                                >
                                    Crear cuenta
                                </Link>
                                <Link
                                    to="/iniciar-sesion"
                                    class="ml-8 whitespace-nowrap inline-flex items-center justify-center text-white"
                                >
                                    Iniciar sesi??n
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}
