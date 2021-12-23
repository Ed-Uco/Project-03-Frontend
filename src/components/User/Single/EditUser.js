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
                {/* <div className="col-span-6 sm:col-span-3">
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
                        value={userData.nombre}
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
                        value={userData.apellido}
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
                        value={userData.email}
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
                        value={userData.direccion}
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
                </div> */}

                <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="first-name"
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
                                            id="first-name"
                                            value={userData.nombre}
                                            autoComplete="given-name"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="last-name"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Apellidos
                                        </label>
                                        <input
                                            onChange={event => {
                                                handleChange(event);
                                            }}
                                            type="text"
                                            name="apellido"
                                            id="last-name"
                                            value={userData.apellido}
                                            autoComplete="family-name"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-4">
                                        <label
                                            htmlFor="email-address"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Correo electrónico
                                        </label>
                                        <input
                                            onChange={event => {
                                                handleChange(event);
                                            }}
                                            type="text"
                                            name="email"
                                            value={userData.email}
                                            id="email-address"
                                            autoComplete="email"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                    <div className="col-span-6">
                                        <label
                                            htmlFor="street-address"
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
                                            value={userData.direccion}
                                            id="street-address"
                                            autoComplete="street-address"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Guardar
                                </button>
                            </div>
                        </div>
                </div>
            </form>
        </>
    );
}
