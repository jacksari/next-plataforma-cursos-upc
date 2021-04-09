import React from 'react';
import Link from "next/link";

function PlanItem({plan}) {
    const { title, precio, moneda, favorito, cursos } = plan;
    return (
        <div className="col-lg-3 col-md-3 col-xs-6">
            <ul className={favorito ? 'plan plan1 featured' : 'plan plan1'}>
                <li className="plan-name">{title}</li>
                <li className="plan-price">
                    <strong>{moneda} {precio}</strong> Fee
                </li>
                {
                    cursos.map((curso, index) => (
                        <li key={index}>
                            <strong>{ curso.valor }</strong>
                        </li>
                    ))
                }
                <li className="plan-action">
                    <Link href="/iniciar-sesion">
                        <a className="btn">Iniciar</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default PlanItem;
