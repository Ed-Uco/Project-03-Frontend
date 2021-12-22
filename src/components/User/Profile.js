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
            <div class="mt-4 flex md:mt-0">
                <Link to={`/users/${userId}/editar`}>
                    <button
                        type="button"
                        class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Editar perfil de usuario
                    </button>
                </Link>
            </div>
            <label
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
            <p className="leading-relaxed">{userData.direccion}</p>
        </>
    );
}


