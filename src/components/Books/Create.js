import React, { useState, useContext } from 'react';
import BookContext from '../../context/Book/BookContext';

const CreateBook = () => {
    //1. Estado Global
    const ctx = useContext(BookContext);
    const {
        createBook, 
    } = ctx;

    console.log(createBook);

    //2. Estado Local
    const [newBook, setNewBook] = useState({
      titulo: '',
      autor: '',
      paginas: '',
      imagenc: '',
      imageng: '',
      descripcion: '',
      lenguaje: '',
      publicacion: '',
      editorial: '',
      isbn: '',
      categoria: '',
      cantidad: '',
      estatus: 'Disponible',
      userCreator: 'admin',
      usereserver: '',
    });

    // 3. FUNCIONES
    const handleChange = e => {
        e.preventDefault();

        setNewBook({
            ...newBook,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        createBook(newBook);
    };

    return (
        <>
            <form
                onSubmit={event => {
                    handleSubmit(event);
                }}
            >
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                        <div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Personal Information
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                                Use a permanent address where you can recieve
                                mail.
                            </p>
                        </div>

                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    for="titulo"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Titulo
                                </label>
                                <input
                                    onChange={event => {
                                        handleChange(event);
                                    }}
                                    type="text"
                                    name="titulo"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    for="autor"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Autor
                                </label>
                                <input
                                    onChange={event => {
                                        handleChange(event);
                                    }}
                                    type="text"
                                    name="autor"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                                <label
                                    for="paginas"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Páginas
                                </label>
                                <input
                                    type="number"
                                    name="paginas"
                                    onChange={event => {
                                        handleChange(event);
                                    }}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                                <label
                                    for="imagenc"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Imagen Portada
                                </label>
                                <input
                                    type="text"
                                    name="imageng"
                                    onChange={event => {
                                        handleChange(event);
                                    }}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-6 lg:col-span-4">
                                <label
                                    for="descripcion"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Descripción
                                </label>
                                <textarea
                                    onChange={event => {
                                        handleChange(event);
                                    }}
                                    type="text"
                                    name="descripcion"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-6 lg:col-span-4">
                                <label
                                    for="lenguaje"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Lenguaje
                                </label>
                                <select
                                    onChange={event => {
                                        handleChange(event);
                                    }}
                                    name="lenguaje"
                                    class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option value={''}>---</option>
                                    <option value={'en'}>Inglés</option>
                                    <option value={'es'}>Español</option>
                                </select>
                            </div>
                            <div className="col-span-6 sm:col-span-6 lg:col-span-4">
                                <label
                                    for="publicacion"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Fecha de Publicación
                                </label>
                                <textarea
                                    onChange={event => {
                                        handleChange(event);
                                    }}
                                    type="date"
                                    name="publicacion"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-6 lg:col-span-4">
                                <label
                                    for="editorial"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Editorial
                                </label>
                                <textarea
                                    onChange={event => {
                                        handleChange(event);
                                    }}
                                    type="text"
                                    name="editorial"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-6 lg:col-span-4">
                                <label
                                    for="isbn"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    ISBN
                                </label>
                                <textarea
                                    onChange={event => {
                                        handleChange(event);
                                    }}
                                    type="text"
                                    name="isbn"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-6 lg:col-span-4">
                                <label
                                    for="categoria"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Categoria
                                </label>
                                <select
                                    onChange={event => {
                                        handleChange(event);
                                    }}
                                    name="categoria"
                                    class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option value={''}>---</option>
                                    <option value={'Fiction'}>Ficción</option>
                                    <option value={'Fantasy'}>Juvenil</option>
                                    <option value={'Poetic'}>Poético</option>
                                    <option value={'Recreational'}>
                                        Recreativo
                                    </option>
                                    <option value={'Monograph'}>
                                        Monografía
                                    </option>
                                    <option value={'Travel'}>De Viaje</option>
                                    <option value={'Science'}>Ciencia</option>
                                    <option value={'Literature'}>
                                        Literatura
                                    </option>
                                </select>
                            </div>
                            <div className="col-span-6 sm:col-span-6 lg:col-span-4">
                                <label
                                    for="cantidad"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Cantidad de libros
                                </label>
                                <input
                                    onChange={event => {
                                        handleChange(event);
                                    }}
                                    type="number"
                                    min="0"
                                    name="cantidad"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                            type="submit"
                            className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Guardar libro
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default CreateBook;
