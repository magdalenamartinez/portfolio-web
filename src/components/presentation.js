import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faShield, faGamepad, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';
import { useTranslation } from 'react-i18next';

const Presentation = () => {
    const { i18n, t } = useTranslation();
    return(
        <div className="fullScreen flexContainer">
            <div className="flex_1">
                <h1 className="Text_8 titleClass">Magdalena Martínez Sánchez</h1>
                <h2 className="Text_4 subtitleClass">{t('engineer')}</h2>
            </div>
            <div className="flex_1 dashboardClass">
                <div className="flexContainer center">
                    <div className="flex_1">
                        <h3 className="boxClass"><FontAwesomeIcon icon={faGraduationCap} className='iconClass_1'/>{t('graduate')}</h3>
                        
                    </div>
                    <div className="flex_1">
                        <h3 className="boxClass"><FontAwesomeIcon icon={faFileCode} className='iconClass_1'/>{t('fullStack')}</h3>
                    </div>
                </div>
                <div className="flexContainer center">
                    <h3 className="boxClass">Java</h3>
                    <h3 className="boxClass">C++</h3>
                    <h3 className="boxClass">C</h3>
                    <h3 className="boxClass">Python</h3>
                </div>
                <div className="flexContainer center">
                    <h3 className="boxClass"><FontAwesomeIcon icon={faShield} className='iconClass_1'/>{t('cybersecurity')}</h3>
                    <h3 className="boxClass">{t('born')}</h3>
                </div>
                <div className="flexContainer center">
                    <h3 className="boxClass"><FontAwesomeIcon icon={faGamepad} className='iconClass_1'/>{t('unity')}</h3>
                </div>
                <div className="flexContainer center">
                    <h3 className="boxClass"><FontAwesomeIcon icon={faBriefcase} className='iconClass_1'/>{t('hardworker')}</h3>
                </div>
            </div> 
        </div>
    );
}

export default Presentation;