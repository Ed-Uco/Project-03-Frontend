import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../../context/User/UserContext';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';



export default function Profile() {
    const params = useParams();
    const userId = params.id;
    const ctx = useContext(UserContext);

    
    
    console.log("ctx de Profile",ctx)

     const { currentUser, getUser, updateUser } = ctx;

     // 2. ESTADO LOCAL
     const [userData, setUserData] = useState({
         nombre: '',
/*          autor: '',
         paginas: '',
         imagenc: '',
         imageng: '',
         descripcion: '', */
     });

     useEffect(() => {
         getUser(userId);
         console.log("userID", userId);
     }, []);

     // USEEFFECT PARA ACTUALIZAR LOS DATOS DEL ESTADO GLOBAL AL ESTADO LOCAL
     useEffect(() => {
         const {
             nombre,
     /*         autor,
             paginas,
             imagenc,
             imageng,
             descripcion,
             lenguaje,
             publicacion,
             editorial,
             isbn,
             categoria,
             cantidad,
             estatus,
             userCreator,
             usereserver, */
         } = ctx.currentUser;

         setUserData({
             nombre: nombre,
/*              autor: autor,
             paginas: paginas,
             imagenc: imagenc,
             imageng: imageng,
             descripcion: descripcion,
             lenguaje: lenguaje,
             publicacion: publicacion,
             editorial: editorial,
             isbn: isbn,
             categoria: categoria,
             cantidad: cantidad,
             estatus: estatus,
             userCreator: userCreator,
             usereserver: usereserver, */
         });
     }, [currentUser]);
/* 
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
     }; */

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
            <p className="leading-relaxed">{currentUser.nombre}</p>
            <label
                for="apellido"
                className="block text-sm font-medium text-gray-700"
            >
                Apellido
            </label>
            <p className="leading-relaxed">{currentUser.apellido}</p>
            <label
                for="email"
                className="block text-sm font-medium text-gray-700"
            >
                Email
            </label>
            <p className="leading-relaxed">{currentUser.email}</p>
            <label
                for="direccion"
                className="block text-sm font-medium text-gray-700"
            >
                Dirección
            </label>
            <p className="leading-relaxed">{currentUser.direccion}</p>
        </>
    );
}


