import React, { useReducer } from 'react';
import authContext from "./authContext";
import authReducer from "./authReducer";
import {
    USUARIO_AUTENTICADO,
    REGISTRO_USUARIO,
    REGISTRO_USUARIO_ERROR,
    REGISTRO_USUARIO_EXITOSO,
    RESET_AUTH_MESSAGE,
    LOGIN_USUARIO,
    LOGIN_USUARIO_EXITOSO,
    LOGIN_USUARIO_ERROR,
    OBTENER_USUARIO, CERRAR_SESION, OBTENER_USUARIO_EXITO,
    OBTENER_USUARIO_ERROR
} from "../types";
import clienteAxios from "../../config/axios";
import {useRouter} from "next/router";
import tokenAuth from "../../config/tokenAuth";
import { v4 as uuidv4 } from 'uuid';


const AuthState = ({children}) => {

    const router = useRouter();

    // Definir state inicial
    const initialState = {
        token: typeof window !== 'undefined' ? localStorage.getItem('token'): '',
        autenticado: false,
        usuario: null,
        mensaje: null,
        loading: false,
        error: false
    }

    // Definir el reducer
    const [state, dispatch] = useReducer(authReducer, initialState);

    // Crear usuarios
    const register = async (datos) => {
        datos.image = 'https://ui-avatars.com/api/?name=John+Doe';
        datos.username =  datos.name + uuidv4();
        //console.log(datos)
        dispatch({
            type: REGISTRO_USUARIO
        })
        try {
            const resp = await clienteAxios.post('/auth/local/register', datos);
            dispatch({
                type: REGISTRO_USUARIO_EXITOSO,
                payload: resp.data
            })
            //console.log(resp.data)
            router.push('/')

        }catch (e){
            //console.log(e.response.data)
            dispatch({
                type: REGISTRO_USUARIO_ERROR
            })
        }
        setTimeout(()=>{
            dispatch({
                type: RESET_AUTH_MESSAGE
            })
        },3000)
    }

    // Login usuarios
    const login = async (datos) => {
        datos.identifier = datos.email
        dispatch({
            type: LOGIN_USUARIO
        })
        try {
            const resp = await clienteAxios.post('/auth/local', datos);
            //console.log(resp.data)
            dispatch({
                type: LOGIN_USUARIO_EXITOSO,
                payload: resp.data
            })

            router.push('/')

        }catch (e){
            console.log(e.response.data)
        }
        setTimeout(()=>{
            dispatch({
                type: RESET_AUTH_MESSAGE
            })
        },3000)

    }

    // Usuario autenticado
    const usuarioAutenticado = async () => {
        console.log('usuarioAutenticado')
        const token = localStorage.getItem('token')
        if(token){
            tokenAuth(token)
        }
        try{
            const resp = await clienteAxios.get('users/me')
            //console.log(resp.data)
            dispatch({
                type: USUARIO_AUTENTICADO,
                payload: resp.data
            })
        }catch (e) {
            console.log(e)
        }
    }
    // Cerrar sesión
    const logout = () => {
        dispatch({
            type: CERRAR_SESION
        })
        router.push('/')
    }


    return (
        <authContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                loading: state.loading,
                error: state.error,
                usuarioAutenticado,
                register,
                login,
                logout
            }}
        >
            {children}
        </authContext.Provider>
    )
}

export default AuthState;
