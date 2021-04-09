import React from 'react';

function ArchivosItem({archivo}) {
    const { fecha, descripcion } = archivo;
    return (
        <>
            <strong>{fecha}</strong>
            <p>{descripcion}</p>
        </>
    );
}

export default ArchivosItem;
