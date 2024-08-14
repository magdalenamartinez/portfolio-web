import React from "react";
import './../App.css';
import './../css/importcss.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import mePhoto from './../assets/me.jpg';
import { Reveal } from './reveal.tsx';

const Contact = () => {
    return(
      <Reveal>
        <div className='bodyClass'>
          <div className="flexContainer boxClass">
            <div className="flex_1">
            <img src={mePhoto} alt="Descripción de la imagen" className="imageClass" />
            </div>
            <div className="flex_2 contactBox">
              <h1 className="Text_4 spaceAfter">Magdalena Martínez Sánchez</h1>
              <h2 className="Text_1_5 paddingLeft"><FontAwesomeIcon icon={faEnvelope} className='iconClass_1'/>  magdalena.martinezsanchez01@gmail.com</h2>
              <h2 className="Text_1_5 paddingLeft"><FontAwesomeIcon icon={faGithub} className='iconClass_1'/>  https://github.com/magdalenamartinez</h2>
              <h2 className="Text_1_5 paddingLeft"><FontAwesomeIcon icon={faLinkedin} className='iconClass_1'/>  www.linkedin.com/in/magdalena-martinez-sanchez</h2>
            </div>
          </div>
        </div>
        </Reveal>
    );
}

export default Contact;