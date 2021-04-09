import {
    REGISTRO_USUARIO,
    REGISTRO_USUARIO_ERROR,
    REGISTRO_USUARIO_EXITOSO,
    USUARIO_AUTENTICADO,
    RESET_AUTH_MESSAGE,
    LOGIN_USUARIO,
    LOGIN_USUARIO_EXITOSO,
    LOGIN_USUARIO_ERROR,
    OBTENER_USUARIO,
    CERRAR_SESION,
    OBTENER_USUARIO_EXITO, OBTENER_USUARIO_ERROR
} from "../types";

const authReducer = (state,action) => {
    switch (action.type) {

        case USUARIO_AUTENTICADO:
            return {
                ...state,
                autenticado: true,
                usuario: action.payload,
                loading: false
            }
        case CERRAR_SESION:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                autenticado: false,
                usuario: null,
                mensaje: null,
                loading: false,
                error: false
            }
        case LOGIN_USUARIO_EXITOSO:
            localStorage.setItem('token', action.payload.jwt)
            return {
                ...state,
                autenticado: true,
                usuario: action.payload.user,
                token: action.payload.jwt,
                loading: false
            }
        case LOGIN_USUARIO:
            return {
                ...state,
                loading: true
            }
        case RESET_AUTH_MESSAGE:
            return {
                ...state,
                mensaje: null,
                error: false
            }
        case REGISTRO_USUARIO_ERROR:
            return {
                ...state,
                mensaje: 'Error en el correo, o correo ya fue registrado',
                error: true,
                loading: false
            }
        case REGISTRO_USUARIO_EXITOSO:
            localStorage.setItem('token', action.payload.jwt)
            return {
                ...state,
                autenticado: true,
                usuario: action.payload.user,
                token: action.payload.jwt,
                loading: false
            }
        case REGISTRO_USUARIO:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

export default authReducer;
