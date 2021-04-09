import React, {useContext} from 'react';
import pageContext from "../context/pages/pageContext";
import {useFormik} from "formik";
import * as Yup from "yup";

function ContactoForm() {
    const { mensajeContacto, direccionContacto, correoContacto, telefonoContacto, createContactoMensaje, mensajeFormContacto } = useContext(pageContext)
    const formik = useFormik({
        initialValues: {
            nombre: '',
            email: '',
            telefono: '',
            titulo: '',
            mensaje : '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required('El email es obligatorio'),
            nombre: Yup.string().required('El nombre es obligatorio'),
            telefono: Yup.string().required('El telefono es obligatorio'),
            titulo: Yup.string().required('El título es obligatorio'),
            mensaje: Yup.string().required('El mensaje es obligatorio'),
        }),
        onSubmit: (valores) => {
            //console.log('enviando form', valores)
            createContactoMensaje(valores)
        }

    })
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h3 className="section-title">Su mensaje</h3>
                    <p>{mensajeContacto}</p>

                    <form className="form-light mt-20" role="form"
                          onSubmit={formik.handleSubmit}
                    >
                        {
                            mensajeFormContacto && (<p className="error-input form-mensaje">{mensajeFormContacto}</p>)
                        }
                        <div className="form-group">
                            <label>Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Su nombre"
                                id="nombre"
                                value={formik.values.nombre}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.touched.nombre && formik.errors.nombre ? (
                                    <p className="error-input">{formik.errors.nombre}</p>
                                ) : null
                            }
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
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
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Teléfono</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Número telefónico"
                                        id="telefono"
                                        value={formik.values.telefono}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {
                                        formik.touched.telefono && formik.errors.telefono ? (
                                            <p className="error-input">{formik.errors.telefono}</p>
                                        ) : null
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Título</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Título del mensaje"
                                id="titulo"
                                value={formik.values.titulo}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.touched.titulo && formik.errors.titulo ? (
                                    <p className="error-input">{formik.errors.titulo}</p>
                                ) : null
                            }
                        </div>
                        <div className="form-group">
                            <label>Mensaje</label>
                            <textarea
                                className="form-control"
                                placeholder="Contenido del mensaje"
                                id="mensaje"
                                value={formik.values.mensaje}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.touched.mensaje && formik.errors.mensaje ? (
                                    <p className="error-input">{formik.errors.mensaje}</p>
                                ) : null
                            }
                        </div>
                        <button type="submit" className="btn btn-two">Enviar mensaje</button>
                        <p><br/></p>
                    </form>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="section-title">Dirección de la oficina</h3>
                            <div className="contact-info">
                                <h5>Dirección</h5>
                                <p>{direccionContacto}</p>
                                <h5>Email</h5>
                                <p>{correoContacto}</p>
                                <h5>Teléfono</h5>
                                <p>{telefonoContacto}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactoForm;
