// ./client/src/Router.js

// 1. IMPORTACIONES
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Home from './components/Home';
import Layout from './components/Layout';
import Books from './components/Books';
import Single from './components/Books/Single';
import CreateBook from './components/Books/Create';
/* import BookState from './context/Book/BookState'; */
import BookState from './context/Book/BookState';
import UserState from './context/User/UserState';
import Auth from './routes/Auth';
import Private from './routes/Private';
import Profile from './components/User/Profile';
import EditBook from './components/Books/Single/Edit';

// 2. FUNCIÓN
const Router = () => {
    return (
        <>
            <UserState>
                    <BookState>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Layout />}>
                                    <Route index element={<Home />} />
                                    <Route
                                        path="registro"
                                        element={<Auth component={Register} />}
                                    />
                                    <Route
                                        path="iniciar-sesion"
                                        element={<Auth component={Login} />}
                                    />
                                    <Route
                                        path="books"
                                        element={<Books />}
                                    />

                                    <Route
                                        path="books/crear"
                                        element={<CreateBook />}
                                    />
                                    <Route
                                        path="books/:id"
                                        element={<Single />}
                                    />
                                    <Route
                                        path="books/:id/editar"
                                        element={<EditBook />}
                                    /> 
                                    <Route
                                        path="profile"
                                        element={
                                            <Private component={Profile} />
                                        }
                                    />
                                </Route>
                            </Routes>
                        </BrowserRouter>
                      </BookState>
            </UserState>
        </>
    );
};

// 3. EXPORTACIÓN
export default Router;
