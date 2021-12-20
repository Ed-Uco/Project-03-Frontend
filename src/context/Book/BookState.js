// ./client/src/context/Guitar/GuitarState.js

// ESTADO GLOBAL - STORE

// LA ARQUITECTURA QUE SE UTILIZA PARA GENERAR EL ESTADO GLOBAL SE LE CONOCE COMO FLUX.

import { useReducer } from 'react';

import BookReducer from './BookReducer';

import axiosClient from './../../config/axios';
import BookContext from './BookContext';

const BookState = props => {
    // 1. INITIAL STATE (ESTADO INICIAL)
    const initialState = {
        books: [],
        singleBook: {
            _id: '',
            titulo: '',
            autor: '',
            paginas: '',
            imagenc: '',
            imageng: '',
            description: '',
            lenguaje: '',
            publicacion: '',
            editorial: '',
            isbn: '',
            categoria: '',
            cantidad: '',
            estatus: '',
            userCreator: '',
            usereserver: '',
        },
        hola: 'mundo',
    };

    // 2. CONFIGURACIÓN DE REDUCER Y CREACIÓN DE ESTADO GLOBAL
    // REDUCERS SON FUNCIONES QUE ALTERAN EL ESTADO GLOBAL
    const [globalState, dispatch] = useReducer(BookReducer, initialState);

    // 3. FUNCIONES DE CAMBIO EN ESTADO GLOBAL
    const changeText = () => {
        dispatch({
            // ESTE OBJETO SE LE CONOCE COMO ACTION
            type: 'CHANGE_TEXT',
            payload: 'Estoy aprendiendo Context sin morir.',
        });
    };

    const getBooks = async () => {
        const res = await axiosClient.get('books/readall');

        console.log('Obteniendo libros...');

        const list = res.data.data;

        dispatch({
            type: 'GET_BOOKS',
            payload: list,
        });
    };

    const getBook = async bookId => {
        console.log(bookId);

        const res = await axiosClient.get(`books/readone/${bookId}`);

        console.log(res);

        const selectedBook = res.data.data;

        dispatch({
            type: 'GET_BOOK',
            payload: selectedBook,
        });
    };

    const createBook = async form => {
        const res = await axiosClient.post('books/create', form);

        console.log(res);
    };

    const updateBook = async (form, idBook) => {
        const res = await axiosClient.put(`books/edit/${idBook}`, form);

        const updatedBook = res.data.data;

        dispatch({
            type: 'UPDATE_BOOK',
            payload: updatedBook,
        });
    };

    // 4. RETORNO
    return (
        <BookContext.Provider
            value={{
                books: globalState.books,
                hola: globalState.hola,
                singleBook: globalState.singleBook,
                changeText,
                getBooks,
                getBook,
                createBook,
                updateBook,
            }}
        >
            {props.children}
        </BookContext.Provider>
    );
};

export default BookState;
