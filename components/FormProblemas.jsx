import React from 'react';
import {useFormik} from "formik";
import * as Yup from "yup";

function FormProblemas() {
    const formik = useFormik({
        initialValues: {
            problema: '',
        },
        validationSchema: Yup.object({
            problema: Yup.string().required('El problema es obligatorio'),
        }),
        onSubmit: (valores) => {
            console.log('enviando form', valores)
        }

    })
    return (
        <form className="form-problemas"
              onSubmit={formik.handleSubmit}
        >
            <div className="form-group-problemas">
                <label htmlFor="">Problema:</label>
                <textarea
                    type="text"
                    placeholder="Correo de usuario"
                    id="problema"
                    value={formik.values.problema}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.problema && formik.errors.problema ? (
                        <p className="error-input">{formik.errors.problema}</p>
                    ) : null
                }
            </div>
            <button type="submit" className="btn btn-two">Cargando...</button>
        </form>
    );
}

export default FormProblemas;
