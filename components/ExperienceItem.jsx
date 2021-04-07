import React, { useState } from 'react';
import styles from '../styles/course.module.css';
import Modal from 'react-modal';
import ReactPlayer from 'react-player'

function ExperienceItem({type}) {
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
                <h4>Online Courses</h4>
                <div className={styles.imageExperience} onClick={openModal}>
                    <img  src="/img/news2.jpg" alt=""/>
                </div>
                <p className={styles.parrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus eleifend risus ut
                    congue
                    eset nec lacus elit dor broma.
                </p>
                <p><a href="#"><em>Read More</em></a></p>
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
                            url='https://www.youtube.com/watch?v=sT0jGBa7VQA'
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
