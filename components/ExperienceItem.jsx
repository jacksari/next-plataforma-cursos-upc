import React, { useState, useContext } from 'react';
import styles from '../styles/course.module.css';
import Modal from 'react-modal';
import ReactPlayer from 'react-player'
import pageContext from "../context/pages/pageContext";

function ExperienceItem({type, experiencia}) {
    //console.log(experiencia)
    const { link, titulo, valor, video, imgaen } = experiencia
    const img = `${process.env.backendURL}${imgaen.url}`;
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { videoHomeFunction } = useContext(pageContext)
    function openModal() {
        setModalIsOpen(true);
    }
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        //subtitle.style.color = '#f00';
    }
    function closeModal(){
        setModalIsOpen(false);
        videoHomeFunction();
    }
    const clase = `grey-box-icon ${type}`

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
        <div className="col-md-3 experience-item">
            <div className={clase}>
                <h4>{titulo}</h4>
                <div className={styles.imageExperience} onClick={()=>{
                    openModal();
                    videoHomeFunction();
                }}>
                    <img  src={img} alt=""/>
                </div>
                <p className={styles.parrafo}>{valor}</p>
                <p><a href={link}><em>Read More</em></a></p>
            </div>
            <Modal
                ariaHideApp = {false}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="container-modal">
                    <button className="btn-close" onClick={closeModal}>
                        <i className="far fa-times-circle"></i>
                    </button>
                    <div className="player-wrapper">
                        <ReactPlayer
                            url={video}
                            width='100%'
                            height='100%'
                        />
                    </div>

                </div>

            </Modal>
        </div>
    );
}

export default ExperienceItem;
