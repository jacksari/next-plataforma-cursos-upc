import React from 'react';

function TeamItem({team}) {
    const { correo, facebook, imagen, linkedin, nombre, puesto, twiter } = team;
    return (
        <div className="col-md-3 col-sm-6 col-xs-6">
            <div className="team-member">
                <div className="member-img">
                {
                    imagen && <img className="img-responsive" src={imagen.url} alt={nombre}/>
                }
                </div>
                <h4>{nombre}</h4>
                <span className="pos">{puesto}</span>
                <div className="team-socials">
                    <a href={facebook}><i className="fab fa-facebook"></i></a>
                    <a href={correo}><i className="fab fa-google-plus"></i></a>
                    <a href={twiter}><i className="fab fa-twitter"></i></a>
                    <a href={linkedin}><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    );
}

export default TeamItem;
