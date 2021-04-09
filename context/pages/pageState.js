import React, {useReducer, useState} from 'react';
import {
    FORM_CONTACT,
    GET_CATEGORIES,
    GET_CONTACTO_PAGE,
    GET_COURSE,
    GET_COURSES,
    GET_HOME,
    GET_LECCIOENS,
    GET_LECCIONES_SECTIONES,
    GET_NOSOTROS,
    GET_PREMIUM,
    GET_SECCIONES, GET_TEACHER,
    GET_TEAM,
    RESET_FORM_CONTACT, SELECT_LECCION,
    VIDEO_HOME
} from "../types";
import clienteAxios from "../../config/axios";
import {useRouter} from "next/router";
import tokenAuth from "../../config/tokenAuth";
import { v4 as uuidv4 } from 'uuid';
import pageContext from "./pageContext";
import pageReducer from "./pageReducer";
import axios from "axios";



const PageState = ({children}) => {

    const router = useRouter();

    // Definir state inicial
    const initialState = {
        experiencias: [],
        sliders: [],
        testimonios: [],
        videoHome: false,
        courses: [],
        nosotrosHome: null,
        titleNosotros: null,
        subtitleNosotros: null,
        nosotrosNosotros: null,
        teamNosotros: null,
        archivosNosotros: [],
        team: [],
        categories: [],
        titlePremium: null,
        subtitlePremium: null,
        costoPremium: null,
        rangoPremium: null,
        planes: [],
        correoContacto: null,
        direccionContacto: null,
        subtitleContacto: null,
        mensajeContacto: null,
        telefonoContacto: null,
        titleContacto: null,
        mensajeFormContacto: null,
        courseSelect: [],
        secciones: [],
        lecciones: [],
        leccionesSectiones: [],
        leccionSelect: null,
        teacherSelect: null
    }

    // Definir el reducer
    const [state, dispatch] = useReducer(pageReducer, initialState);

    const getHome = async () => {
        const token = localStorage.getItem('token')
        if(token){
            tokenAuth(token)
        }
        try {
            const resp = await axios.get('https://api-proyecto-upc.herokuapp.com/home')
            dispatch({
                type: GET_HOME,
                payload: resp.data
            })
            //console.log(resp.data)
        } catch (e){
            console.log(e.response)
        }
    }

    const videoHomeFunction = () => {
        dispatch({
            type: VIDEO_HOME
        })
    }

    const getCourses = async () => {
        try {
            const resp = await axios.get('https://api-proyecto-upc.herokuapp.com/cursos')
            dispatch({
                type: GET_COURSES,
                payload: resp.data
            })

            //console.log(resp.data)
        } catch (e){
            console.log(e.response)
        }
    }

    const getNosotros = async () => {
        try {
            const resp = await axios.get('https://api-proyecto-upc.herokuapp.com/nosotros')
            dispatch({
                type: GET_NOSOTROS,
                payload: resp.data
            })
            //console.log(resp.data)
        } catch (e){
            console.log(e.response)
        }
    }

    const getTeam = async () => {
        try {
            const resp = await axios.get('https://api-proyecto-upc.herokuapp.com/teams')
            dispatch({
                type: GET_TEAM,
                payload: resp.data
            })

            //console.log(resp.data)
        } catch (e){
            console.log(e.response)
        }
    }

    const getCategories = async () => {
        try {
            const resp = await axios.get('https://api-proyecto-upc.herokuapp.com/categorias')
            dispatch({
                type: GET_CATEGORIES,
                payload: resp.data
            })

            //console.log(resp.data)
        } catch (e){
            console.log(e.response)
        }
    }

    const getPremium = async () => {
        try {
            const resp = await axios.get('https://api-proyecto-upc.herokuapp.com/premium')
            dispatch({
                type: GET_PREMIUM,
                payload: resp.data
            })

            //console.log(resp.data)
        } catch (e){
            console.log(e.response)
        }
    }

    const getPageContacto = async () => {
        try {
            const resp = await axios.get('https://api-proyecto-upc.herokuapp.com/page-contacto')

            dispatch({
                type: GET_CONTACTO_PAGE,
                payload: resp.data
            })

            //console.log(resp.data)
        } catch (e){
            console.log(e.response)
        }
    }

    const createContactoMensaje = async (valores) => {
        valores.fecha = new Date();
        try {
            const resp = await axios.post('https://api-proyecto-upc.herokuapp.com/contactos', valores);
            dispatch({
                type: FORM_CONTACT
            })

            //console.log(resp.data)
            setTimeout(()=>{
                dispatch({
                    type: RESET_FORM_CONTACT
                })
                router.push('/')
            },2000)
        } catch (e){
            console.log(e.response)
        }
    }

    const getCourse = async (slug) => {
        //console.log(slug)
        try {
            const resp = await axios(`https://api-proyecto-upc.herokuapp.com/cursos/slug/${slug}`);

            dispatch({
                type: GET_COURSE,
                payload: resp.data[0]
            })


            //console.log(resp1.data)

        } catch (e){
            console.log(e)
        }
    }

    const getSecciones = async () => {
        try {
            const resp = await axios(`https://api-proyecto-upc.herokuapp.com/secciones`);
            //console.log(resp.data)
            dispatch({
                type: GET_SECCIONES,
                payload: resp.data
            })

        } catch (e){
            console.log(e.response)
        }
    }

    const getLecciones = async () => {
        try {
            const resp = await axios(`https://api-proyecto-upc.herokuapp.com/lecciones`);
            //console.log(resp.data)
            dispatch({
                type: GET_LECCIOENS,
                payload: resp.data
            })

        } catch (e){
            console.log(e.response)
        }
    }

    const getLeccionesSections = (id) => {
        //console.log(id)
        let lessons;
        lessons = state.lecciones.filter(leccion => leccion.seccion.id === id);

        return lessons
    }

    const getLeccion = (leccion) => {
        //console.log(leccion)
        dispatch({
            type: SELECT_LECCION,
            payload: leccion
        })
    }

    const getTeacher = async (profesor) => {
        //console.log(profesor)
        try {
            const resp = await axios(`https://api-proyecto-upc.herokuapp.com/profesores/${profesor.profesor.id}`);
            dispatch({
                type: GET_TEACHER,
                payload: resp.data
            })
            //console.log(resp.data)


        } catch (e){
            console.log(e.response)
        }
    }

    const createProblemas = async (valores) => {
        try {
            const resp = await axios.post(`https://api-proyecto-upc.herokuapp.com/problemas`, valores);
            console.log(resp.data)


        } catch (e){
            console.log(e.response)
        }
    }




    return (
        <pageContext.Provider
            value={{
                experiencias: state.experiencias,
                sliders: state.sliders,
                testimonios: state.testimonios,
                videoHome: state.videoHome,
                courses: state.courses,
                nosotrosHome: state.nosotrosHome,
                titleNosotros: state.titleNosotros,
                subtitleNosotros: state.subtitleNosotros,
                nosotrosNosotros: state.nosotrosNosotros,
                teamNosotros: state.teamNosotros,
                archivosNosotros: state.archivosNosotros,
                team: state.team,
                categories: state.categories,
                titlePremium: state.titlePremium,
                subtitlePremium: state.subtitlePremium,
                costoPremium: state.costoPremium,
                rangoPremium: state.rangoPremium,
                planes: state.planes,
                correoContacto: state.correoContacto,
                direccionContacto: state.direccionContacto,
                subtitleContacto: state.subtitleContacto,
                mensajeContacto: state.mensajeContacto,
                telefonoContacto: state.telefonoContacto,
                titleContacto: state.titleContacto,
                mensajeFormContacto: state.mensajeFormContacto,
                courseSelect: state.courseSelect,
                secciones: state.secciones,
                lecciones: state.lecciones,
                leccionSelect: state.leccionSelect,
                leccionesSectiones: state.leccionesSectiones,
                teacherSelect: state.teacherSelect,
                getHome,
                videoHomeFunction,
                getCourses,
                getNosotros,
                getTeam,
                getCategories,
                getPremium,
                getPageContacto,
                createContactoMensaje,
                getCourse,
                getSecciones,
                getLecciones,
                getLeccionesSections,
                getLeccion,
                getTeacher,
                createProblemas,
            }}
        >
            {children}
        </pageContext.Provider>
    )
}

export default PageState;
