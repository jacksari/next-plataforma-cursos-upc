import React, {useContext, useEffect} from 'react';
import Layout from "../components/layout/Layout";
import {useRouter} from "next/router";
import Link from "next/link";
import {useFormik} from "formik";
import * as Yup from "yup";
import authContext from "../context/auth/authContext";
import pageContext from "../context/pages/pageContext";

function IniciarSesion() {
    const { getHome, getCourses, getNosotros, getTeam, getCategories, getPremium, getPageContacto } = useContext(pageContext)
    const { usuarioAutenticado, autenticado, token } = useContext(authContext)
    useEffect(() => {
        usuarioAutenticado()
        getHome()
        getCourses()
        getNosotros()
        getTeam()
        getCategories()
        getPremium()
        getPageContacto()

    }, []);
    const { loading, login } = useContext(authContext)
    const formik = useFormik({
        initialValues: {
            email: 'jack123@gmail.com',
            password: '123456'
        },
        validationSchema: Yup.object({
            email: Yup.string().required('El email es obligatorio'),
            password: Yup.string().required('El password es obligatorio').min(6,'El password debe contener al menos 6 caracteres')
        }),
        onSubmit: (valores) => {
            //console.log('enviando form', valores)
            login(valores)
        }

    })
    return (
        <Layout path="iniciar-sesion">
            <div className="container-auth">
                <h1>Iniciar sesión</h1>
                <form
                    onSubmit={formik.handleSubmit}
                >
                    <div className="form-group">
                        <label htmlFor="">Correo:</label>
                        <input
                            type="text"
                            placeholder="Correo de usuario"
                            id="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {
                            formik.touched.email && formik.errors.email ? (
                                <p className="error-input">{formik.errors.email}</p>
                            ) : null
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Contraseña:</label>
                        <input
                            type="password"
                            placeholder="Contraseña de usuario"
                            id="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {
                            formik.touched.password && formik.errors.password ? (
                                <p className="error-input">{formik.errors.password}</p>
                            ) : null
                        }
                    </div>
                    {
                        loading ? (<button type="submit" className="btn btn-two">Cargando...</button>) : (<button type="submit" className="btn btn-two">Crear usuario</button>)
                    }
                </form>
                <div className="register">
                    <p>¿No tienes cuenta?</p>
                    <Link href="/registro">
                        <a className="">Crea cuenta</a>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}

export default IniciarSesion;
