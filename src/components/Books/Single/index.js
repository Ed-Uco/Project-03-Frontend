import React, { useContext, useEffect } from 'react';
import BookContext from '../../../context/Book/BookContext';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


///Para mensage emergente


const Single = () => {
    const ctx = useContext(BookContext);
    const { getBook, singleBook, deleteBook } = ctx;

    const params = useParams();
    const id = params.id;

    ///Para mensaje emergente
const [showModal, setShowModal] = React.useState(false);

    useEffect(() => {
        getBook(id);
    }, []);

    return (
        <div>
            <section class="text-gray-700 body-font overflow-hidden bg-white">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <img
                            alt="ecommerce"
                            class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                            src={singleBook.imageng}
                        />
                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 class="text-sm title-font text-gray-500 tracking-widest">
                                {singleBook.autor}
                            </h2>
                            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                                {singleBook.titulo}
                            </h1>
                            <div class="flex mb-4">
                                <span class="flex items-center">
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        class="w-4 h-4 text-red-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        class="w-4 h-4 text-red-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        class="w-4 h-4 text-red-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        class="w-4 h-4 text-red-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        class="w-4 h-4 text-red-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span class="text-gray-600 ml-3">
                                        4 Reviews
                                    </span>
                                </span>
                                <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                                    <a class="text-gray-500">
                                        <svg
                                            fill="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            class="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a class="ml-2 text-gray-500">
                                        <svg
                                            fill="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            class="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a class="ml-2 text-gray-500">
                                        <svg
                                            fill="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            class="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <p class="leading-relaxed">
                                {singleBook.descripcion}
                            </p>
                            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                <div class="flex">
                                    <span class="mr-3 font-medium">
                                        Páginas:
                                    </span>
                                    <span class="mr-3">
                                        {singleBook.paginas}
                                    </span>
                                </div>
                                <div class="flex ml-6 items-center">
                                    <span class="mr-3 font-medium">
                                        Lenguaje:
                                    </span>
                                    <span class="mr-3">
                                        {singleBook.lenguaje}
                                    </span>
                                    <div class="relative">
                                        <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"></span>
                                    </div>
                                </div>
                            </div>

                            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                <div class="flex">
                                    <span class="mr-3 font-medium">
                                        Fecha Publicación:
                                    </span>
                                    <span class="mr-3">
                                        {singleBook.publicacion}
                                    </span>
                                </div>
                                <div class="flex">
                                    <span class="mr-3 font-medium">
                                        Editorial:
                                    </span>
                                    <span class="mr-3">
                                        {singleBook.editorial}
                                    </span>
                                    <div class="relative">
                                        <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"></span>
                                    </div>
                                </div>
                            </div>

                            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                <div class="flex">
                                    <span class="mr-3 font-medium">ISBN:</span>
                                    <span class="mr-3">{singleBook.isbn}</span>
                                </div>
                                <div class="flex">
                                    <span class="mr-3 font-medium">
                                        Categoría:
                                    </span>
                                    <span class="mr-3">
                                        {singleBook.categoria}
                                    </span>
                                    <div class="relative">
                                        <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                <div class="flex">
                                    <span class="mr-3 font-medium">
                                        Cantidad:
                                    </span>
                                    <span class="mr-3">
                                        {singleBook.cantidad}
                                    </span>
                                </div>
                                <div class="flex">
                                    <span class="mr-3 font-medium">
                                        Estatus:
                                    </span>
                                    <span class="mr-3">
                                        {singleBook.estatus}
                                    </span>
                                    <div class="relative">
                                        <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex" style={{ float: 'left' }}>
                                <button
                                    class="ml-3 inline-flex items-center px-5 py-2 border border-transparent rounded-md shadow-sm text-sm text-white  bg-red-500 border-0 py-2 px-6 focus:ring-2 focus:ring-offset-2  font-medium hover:bg-red-600 rounded focus:ring-red-600"
                                    type="button"
                                    onClick={() => setShowModal(true)}
                                >
                                    Reservar libro
                                </button>
                            </div>

                            <div class="flex" style={{ float: 'left' }}>
                                <Link to={`/books/${id}/editar`}>
                                    <button
                                        type="button"
                                        class="ml-3 inline-flex items-center px-5 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Editar libro
                                    </button>
                                </Link>
                            </div>
                            <div class="flex" style={{ float: 'left' }}>
                                <Link to={`/books`}>
                                    <button
                                        onClick={() => deleteBook(id)}
                                        type="button"
                                        class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Borrar libro
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-sm">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                {/*     <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"> */}
                                {/*                                     <h3 className="text-3xl font-semibold">
                                       Reservación
                                    </h3> */}
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModal(false)}
                                >
                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                        ×
                                    </span>
                                </button>
                                {/* </div> */}
                                {/*body*/}
                                <div className="flex items-center relative p-6 flex-auto">
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        Está seguro de realizar la reservación?
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Sí
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    );
};

export default Single;
