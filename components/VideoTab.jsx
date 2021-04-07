import React, {useState} from 'react';

function VideoTab() {
    const [tab, setTab] = useState(true);
    return (
        <div className="tab-sections-preguntas">
            <div className="container-tab">
                <button
                    onClick={()=>setTab(!tab)}
                    className={tab ? 'boton active': 'boton'}
                >
                    Secciones
                </button>
                <button
                    onClick={()=>setTab(!tab)}
                    className={!tab ? 'boton active': 'boton'}
                >
                    Preguntas
                </button>
            </div>

            <div className={tab ? 'tab-container active sections-container' : 'tab-container sections-container'}>
                <div className="files-container">
                    <a className="boton" href="">Archivos</a>
                    <button className="boton">Reportar problema</button>
                </div>
                <div className="section-container">
                    <div className="section-item">
                        <p>
                            <i className="fas fa-directions"></i>
                            Section1
                        </p>
                        <ul>
                            <li>
                                <button>
                                    <i className="far fa-play-circle"></i>
                                    {'  '}
                                    Leccion 1
                                </button>
                            </li>
                            <li>
                                <button>
                                    <i className="far fa-play-circle"></i>
                                    {'  '}
                                    Leccion 1
                                </button>
                            </li>
                            <li>
                                <button>
                                    <i className="far fa-play-circle"></i>
                                    {'  '}
                                    Leccion 1
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="section-item">
                        <p>
                            <i className="fas fa-directions"></i>
                            Section1
                        </p>
                        <ul>
                            <li>
                                <button>
                                    <i className="far fa-play-circle"></i>
                                    {'  '}
                                    Leccion 1
                                </button>
                            </li>
                            <li>
                                <button>
                                    <i className="far fa-play-circle"></i>
                                    {'  '}
                                    Leccion 1
                                </button>
                            </li>
                            <li>
                                <button>
                                    <i className="far fa-play-circle"></i>
                                    {'  '}
                                    Leccion 1
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="section-item">
                        <p>
                            <i className="fas fa-directions"></i>
                            Section1
                        </p>
                        <ul>
                            <li>
                                <button>
                                    <i className="far fa-play-circle"></i>
                                    {'  '}
                                    Leccion 1
                                </button>
                            </li>
                            <li>
                                <button>
                                    <i className="far fa-play-circle"></i>
                                    {'  '}
                                    Leccion 1
                                </button>
                            </li>
                            <li>
                                <button>
                                    <i className="far fa-play-circle"></i>
                                    {'  '}
                                    Leccion 1
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="section-item">
                        <p>
                            <i className="fas fa-directions"></i>
                            Section1
                        </p>
                        <ul>
                            <li>
                                <button>
                                    <i className="far fa-play-circle"></i>
                                    {'  '}
                                    Leccion 1
                                </button>
                            </li>
                            <li>
                                <button>
                                    <i className="far fa-play-circle"></i>
                                    {'  '}
                                    Leccion 1
                                </button>
                            </li>
                            <li>
                                <button>
                                    <i className="far fa-play-circle"></i>
                                    {'  '}
                                    Leccion 1
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="section-item">
                        <p>
                            <i className="fas fa-directions"></i>
                            Section1
                        </p>
                        <ul>
                            <li>
                                <button>
                                    <i className="far fa-play-circle"></i>
                                    {'  '}
                                    Leccion 1
                                </button>
                            </li>
                            <li>
                                <button>
                                    <i className="far fa-play-circle"></i>
                                    {'  '}
                                    Leccion 1
                                </button>
                            </li>
                            <li>
                                <button>
                                    <i className="far fa-play-circle"></i>
                                    {'  '}
                                    Leccion 1
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={!tab ? 'tab-container sections-preguntas active' : 'tab-container sections-preguntas'}>
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
            </div>
        </div>
    );
}

export default VideoTab;
