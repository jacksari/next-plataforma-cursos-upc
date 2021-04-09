import React,{ useContext } from 'react';
import Link from "next/link";
import Layout from "../components/layout/Layout";
import {useRouter} from "next/router";
import {useFormik} from "formik";
import * as Yup from 'yup';
import authContext from "../context/auth/authContext";

function Registro() {
    const { register, mensaje, error, loading } = useContext(authContext)
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('El nombre es obligatorio'),
            email: Yup.string().required('El email es obligatorio'),
            password: Yup.string().required('El password es obligatorio').min(6,'El password debe contener al menos 6 caracteres')
        }),
        onSubmit: (valores) => {
            //console.log('enviando form', valores)
            register(valores)
        }

    })
    return (
        <Layout path="registro">
            <div className="container-auth">
                <h1>Crear cuenta de usuario</h1>
                <form
                      onSubmit={formik.handleSubmit}
                >
                    {
                        error ? (<p className="error-input">{mensaje}</p>) : null
                    }
                    <div className="form-group">
                        <label htmlFor="">Nombre:</label>
                        <input
                            type="text"
                            placeholder="nombre de usuario"
                            id="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {
                            formik.touched.name && formik.errors.name ? (
                                <p className="error-input">{formik.errors.name}</p>
                            ) : null
                        }
                    </div>
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
                            id="email"
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
                    <p>¿Tienes cuenta?</p>
                    <Link href="/iniciar-sesion">
                        <a className="">Iniciar sesión</a>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}

export default Registro;
