import {
    FORM_CONTACT,
    GET_CATEGORIES,
    GET_CONTACTO_PAGE,
    GET_COURSE,
    GET_COURSES,
    GET_HOME,
    GET_LECCIOENS, GET_LECCIONES_SECTIONES,
    GET_NOSOTROS,
    GET_PREMIUM,
    GET_SECCIONES, GET_TEACHER,
    GET_TEAM,
    RESET_AUTH_MESSAGE,
    RESET_FORM_CONTACT, SELECT_LECCION,
    VIDEO_HOME
} from "../types";

const pageReducer = (state,action) => {
    switch (action.type) {

        case GET_TEACHER:
            return {
                ...state,
                teacherSelect: action.payload
            }
        case SELECT_LECCION:
            return {
                ...state,
                leccionSelect: action.payload
            }
        case GET_LECCIOENS:
            return {
                ...state,
                lecciones: action.payload
            }
        case GET_SECCIONES:
            if(!state.courseSelect) return {
                ...state
            }
            return {
                ...state,
                secciones: action.payload.filter((seccion) => seccion.curso.slug === state.courseSelect.slug)
            }
        case GET_COURSE:
            return {
                ...state,
                courseSelect: action.payload
            }
        case RESET_FORM_CONTACT:
            return {
                ...state,
                mensajeFormContacto: null
            }
        case FORM_CONTACT:
            return {
                ...state,
                mensajeFormContacto: 'Mensaje recibido de forma correcta'
            }
        case GET_CONTACTO_PAGE:
            return {
                ...state,
                correoContacto: action.payload.correo,
                direccionContacto: action.payload.direccion,
                subtitleContacto: action.payload.descripcion,
                mensajeContacto: action.payload.mensaje,
                telefonoContacto: action.payload.telefono   ,
                titleContacto: action.payload.titulo
            }
        case GET_PREMIUM:
            return {
                ...state,
                titlePremium: action.payload.titulo,
                subtitlePremium: action.payload.descripcion,
                costoPremium: action.payload.costo,
                rangoPremium: action.payload.rango,
                planes: action.payload.planes,
            }
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case GET_TEAM:
            return {
                ...state,
                team: action.payload
            }
        case GET_NOSOTROS:
            return {
                ...state,
                titleNosotros: action.payload.titulo,
                subtitleNosotros: action.payload.descripcion,
                nosotrosNosotros: action.payload.nosotros,
                archivosNosotros: action.payload.archivos,
                teamNosotros: action.payload.team
            }
        case GET_COURSES:
            return {
                ...state,
                courses: action.payload
            }
        case VIDEO_HOME:
            return {
                ...state,
                videoHome: !state.videoHome
            }
        case GET_HOME:
            //console.log(action.payload)
            return {
                ...state,
                experiencias: action.payload.experiencias,
                sliders: action.payload.Sliders,
                testimonios: action.payload.testimonios,
                nosotrosHome: action.payload.nosotros
            }
        default:
            return state;
    }
}

export default pageReducer;
