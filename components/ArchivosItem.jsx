import React from 'react';

function ArchivosItem({archivo}) {
    const { fecha, descripcion } = archivo;
    return (
        <div className="archivos-item">
            <strong className="archivos-main">{fecha}</strong>
            <p className="archivos-main">{descripcion}</p>
        </div>
    );
}

export default ArchivosItem;
