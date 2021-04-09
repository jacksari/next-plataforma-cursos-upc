import React from 'react';

function TabPreguntas(props) {
    return (
        <>
            <div className="create-pregunta-item">
                <p>Crear pregunta:</p>
                <input type="text" placeholder="Título de pregunta"/>
                <textarea rows="5" placeholder="Pregunta"/>
            </div>
            <div className="pregunta-item">
                <p className="pregunta">¿No sé nada?</p>
                <div className="usuario">
                    <img src="/img/photo-2.jpg" alt=""/>
                    <p className="nombre">Jack Sari</p>
                </div>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam aut consectetur eveniet explicabo fuga.</span>
            </div>
            <div className="pregunta-item">
                <p className="pregunta">¿No entiendo nada de esto?</p>
                <div className="usuario">
                    <img src="/img/photo-2.jpg" alt=""/>
                    <p className="nombre">Jack Sari</p>
                </div>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam aut consectetur eveniet explicabo fuga.</span>
            </div>
            <div className="pregunta-item">
                <p className="pregunta">¿No sé nada?</p>
                <div className="usuario">
                    <img src="/img/photo-2.jpg" alt=""/>
                    <p className="nombre">Jack Sari</p>
                </div>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam aut consectetur eveniet explicabo fuga.</span>
            </div>
            <div className="pregunta-item">
                <p className="pregunta">¿No sé nada?</p>
                <div className="usuario">
                    <img src="/img/photo-2.jpg" alt=""/>
                    <p className="nombre">Jack Sari</p>
                </div>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam aut consectetur eveniet explicabo fuga.</span>
            </div>
            <div className="pregunta-item">
                <p className="pregunta">¿No sé nada?</p>
                <div className="usuario">
                    <img src="/img/photo-2.jpg" alt=""/>
                    <p className="nombre">Jack Sari</p>
                </div>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam aut consectetur eveniet explicabo fuga.</span>
            </div>
        </>
    );
}

export default TabPreguntas;
