import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import curriculum from './../assets/CV_EN.pdf';
import { useTranslation } from 'react-i18next';
import spanishIco from '../assets/spain.png';
import  englishIco from '../assets/uk.png';
import frenchIco from '../assets/france.png';
import { Link } from 'react-router-dom';


const Header = () => {
    const { i18n, t } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return(
    <div className="headerClass">
        <div className='flex_1'>
            <div className='leftHeaderClass'>
                <FontAwesomeIcon icon={faClipboard} className='iconClass'/>
                <h1 className='Text_2'>{t('portfolio')}</h1>
            </div>
        </div>
        <div className='flex_1'>
            <button onClick={() => changeLanguage('en')} className='buttonLanguage'><img src={englishIco} alt={"EN"} className="languageClass"/></button>
            <button onClick={() => changeLanguage('es')} className='buttonLanguage'><img src={spanishIco} alt={"ES"} className="languageClass"/></button>
            <button onClick={() => changeLanguage('fr')} className='buttonLanguage'><img src={frenchIco} alt={"FR"} className="languageClass"/></button>
        </div>
      
        <nav className='flex_1'>
            <ul className='ulClass'>
                <li className='liClass'><Link className="linkClass" to="/">{t('home')}</Link></li>
                <li className='liClass'><a className="linkClass" href={curriculum} download="curriculum.pdf">{t('resume')}</a></li>
                <li className='liClass'><Link className="linkClass" to="#Projects">{t('projects')}</Link></li>
                <li className='liClass'><Link className="linkClass" to="/contact">{t('contact')}</Link></li>
            </ul>
        </nav>
    </div>
    );
}

export default Header;