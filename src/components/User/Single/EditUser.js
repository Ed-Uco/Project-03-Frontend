//./src/components/User/Single/EditUser.js

import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../../../context/User/UserContext';

import { useParams } from 'react-router-dom';
export default function EditUser() {
    // 1. ESTADO GLOBAL
    const params = useParams();
    const userId = params.id;

    const ctx = useContext(UserContext);

    const { currentUser, getUser, updateUser } = ctx;

    // 2. ESTADO LOCAL
    const [userData, setUserData] = useState({
        nombre: '',
        apellido: '',
        direccion: '',
        email: '',
    });

    // 3. FUNCIONES

    // USEEFFECT PARA ACTUALIZAR DATOS EN EL ESTADO GLOBAL
    useEffect(() => {
        getUser(userId);
    }, []);

    // USEEFFECT PARA ACTUALIZAR LOS DATOS DEL ESTADO GLOBAL AL ESTADO LOCAL
    useEffect(() => {
        const {
            nombre,
        apellido,
        direccion,
        email,
        } = ctx.currentUser;

        setUserData({
            nombre: nombre,
            apellido: apellido,
            direccion: direccion,
            email: email,
        });
    }, [currentUser]);

    const handleChange = e => {
        e.preventDefault();

        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        updateUser(userData, userId);
    };

    return (
        <>
            <form
                onSubmit={event => {
                    handleSubmit(event);
                }}
            >
                <div className="col-span-6 sm:col-span-3">
                    <label
                        for="autor"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Nombre
                    </label>
                    <input
                        onChange={event => {
                            handleChange(event);
                        }}
                        type="text"
                        name="nombre"
                        value={currentUser.nombre}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label
                        for="autor"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Apellido
                    </label>
                    <input
                        onChange={event => {
                            handleChange(event);
                        }}
                        type="text"
                        name="apellido"
                        value={currentUser.apellido}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label
                        for="autor"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Email
                    </label>
                    <input
                        onChange={event => {
                            handleChange(event);
                        }}
                        type="email"
                        name="email"
                        value={currentUser.email}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label
                        for="autor"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Dirección
                    </label>
                    <input
                        onChange={event => {
                            handleChange(event);
                        }}
                        type="text"
                        name="direccion"
                        value={currentUser.direccion}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                        type="submit"
                        className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Guardar cambios
                    </button>
                </div>
            </form>
        </>
    );
}
