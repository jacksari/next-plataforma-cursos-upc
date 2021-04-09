import React, {useState, useContext, useEffect} from 'react';
import TabPreguntas from "./TabPreguntas";
import pageContext from "../context/pages/pageContext";
import TabSectionItem from "./TabSectionItem";
import Link from "next/link";
import Modal from 'react-modal';
import ReactPlayer from "react-player";
import FormProblemas from "./FormProblemas";

function VideoTab() {
    const { secciones, courseSelect, videoHomeFunction  } = useContext(pageContext)
    const [doc, setDoc] = useState('https://www.pexels.com/es-es/video/imagenes-de-drones-de-la-cima-de-la-montana-2871916/');

    const [tab, setTab] = useState(true);
    useEffect(() => {
        if(courseSelect){
            setDoc(`${courseSelect.documentos}`)
        }
    }, [courseSelect]);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    function openModal() {
        setModalIsOpen(true);
    }
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        //subtitle.style.color = '#f00';
    }
    function closeModal(){
        setModalIsOpen(false);
        videoHomeFunction()
    }

    const customStyles = {
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            padding               : 0,
            overflow: 'hidden',
            transform             : 'translate(-50%, -50%)',
            backgroundColor: 'transparent',
            border: 'transparent'
        }
    };


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
                    {
                        courseSelect ? (
                            <>
                                <Link href={doc}>
                                    <a target="_blank" className="boton">Archivos</a>
                                </Link>
                                <button onClick={()=>{
                                    openModal()
                                    videoHomeFunction()

                                }} className="boton">Reportar problema</button>
                            </>
                        ) : null
                    }

                </div>
                <div className="section-container">
                    {
                        secciones.length > 0 ? (
                            secciones.map((seccion, index) => (
                                <TabSectionItem seccion={seccion} key={index}/>
                            ))
                        ) : (<div className="spinner"></div>)
                    }
                </div>
            </div>
            <Modal
                ariaHideApp = {false}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="container-modal container-problemas">
                    <FormProblemas/>
                </div>

            </Modal>
            <div className={!tab ? 'tab-container sections-preguntas active' : 'tab-container sections-preguntas'}>
                <TabPreguntas/>
            </div>
        </div>
    );
}

export default VideoTab;
