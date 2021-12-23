import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../../context/User/UserContext';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';



export default function Profile() {
    const ctx = useContext(UserContext);
    const { currentUser, getUser } = ctx;
    const userId = currentUser._id;
     

     // 2. ESTADO LOCAL
     const [userData, setUserData] = useState({
         nombre: '',
         apellido: '',
        direccion: '',
         email: '',
 
     });

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


    return (
        <>
            {/* <label
                for="nombre"
                className="block text-sm font-medium text-gray-700"
            >
                Nombre
            </label>
            <p className="leading-relaxed">{userData.nombre}</p>
            <label
                for="apellido"
                className="block text-sm font-medium text-gray-700"
            >
                Apellido
            </label>
            <p className="leading-relaxed">{userData.apellido}</p>
            <label
                for="email"
                className="block text-sm font-medium text-gray-700"
            >
                Email
            </label>
            <p className="leading-relaxed">{userData.email}</p>
            <label
                for="direccion"
                className="block text-sm font-medium text-gray-700"
            >
                Dirección
            </label>
            <p className="leading-relaxed">{userData.direccion}</p> */}

            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    {/*  <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                Personal Information
                            </h3>
                            <p className="mt-1 text-sm text-gray-600">
                                Use a permanent address where you can receive
                                mail.
                            </p>
                        </div>
                    </div> */}
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
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
                                            <p className="leading-relaxed">
                                                {userData.nombre}
                                            </p>
                                            <input
                                                type="text"
                                                name="nombre"
                                                id="first-name"
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
                                            <p className="leading-relaxed">
                                                {userData.apellido}
                                            </p>
                                            <input
                                                type="text"
                                                name="apellido"
                                                id="last-name"
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
                                            <p className="leading-relaxed">
                                                {userData.email}
                                            </p>
                                            <input
                                                type="text"
                                                name="email"
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
                                            <p className="leading-relaxed">
                                                {userData.direccion}
                                            </p>
                                            <input
                                                type="text"
                                                name="direccion"
                                                id="street-address"
                                                autoComplete="street-address"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <Link to={`/users/${userId}/editar`}>
                                        <button
                                            type="button"
                                            class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Editar perfil de usuario
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </form>
                        <div class="mt-4 flex md:mt-0"></div>
                    </div>
                </div>
            </div>
        </>
    );
}


