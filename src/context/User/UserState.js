// ./src/context/User/UserState.js
import { useReducer } from 'react';

import UserReducer from './UserReducer';
import UserContext from './UserContext';
import axiosClient from './../../config/axios';

const UserState = props => {
    // 1. INITIAL STATE
    const initialState = {
        currentUser: {
            nombre: '',
            apellido: '',
            pais: '',
            direccion: '',
            email: '',
            password: '',
            admin: '',
            _id: '',
        },
        authStatus: false,
    };

    // 2. CONFIGURACIÓN DEL REDUCER
    const [globalState, dispatch] = useReducer(UserReducer, initialState);

    // 3. FUNCIONES
    const registerUser = async form => {
        const res = await axiosClient.post('users/create', form);
        const token = res.data.data;

        dispatch({
            type: 'REGISTRO_EXITOSO',
            payload: token,
        });
         window.location.replace('/');
    };

    const updateUser = async (form, userId) => {
        const res = await axiosClient.put(`users/edituser/${userId}`, form);

        const updatedUser = res.data.data;
        dispatch({
            type: 'UPDATE_USER',
            payload: updatedUser,
        });
         window.location.replace('/');
    };


    const getUser = async userId => {
        const res = await axiosClient.get(`users/readoneuser/${userId}`);
        const selectedUser = res.data.data;

        dispatch({
            type: 'GET_USER',
            payload: selectedUser,
        });
    };





    const loginUser = async form => {
        const res = await axiosClient.post('users/login', form);
        const token = res.data.data;

        dispatch({
            type: 'LOGIN_EXITOSO',
            payload: token,
        });
         window.location.replace('/');
    };

    const verifyingToken = async () => {
        const token = localStorage.getItem('token');

        // ANEXAR TOKEN A LA SIGUIENTE PETICIÓN DE AXIOS
        if (token) {
            axiosClient.defaults.headers.common['x-auth-token'] = token;
        } else {
            delete axiosClient.defaults.headers.common['x-auth-token'];
        }

        try {
            const res = await axiosClient.get('users/verifytoken');
            const userData = res.data.data;

            dispatch({
                type: 'GET_DATA_USER',
                payload: userData,
            });
        } catch (error) {
            console.log(error);
        }
    };
    const logoutUser = async () => {
    dispatch({
        type: 'LOGOUT_USUARIO',
    });
    };
    // 4. RETORNO
    return (
        <UserContext.Provider
            value={{
                currentUser: globalState.currentUser,
                authStatus: globalState.authStatus,
                registerUser,
                loginUser,
                verifyingToken,
                logoutUser,
                updateUser,
                getUser
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};

export default UserState;
