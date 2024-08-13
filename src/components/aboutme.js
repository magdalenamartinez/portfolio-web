import React from "react";
import { useTranslation } from 'react-i18next';

const AboutMe = () => {
    const { i18n, t } = useTranslation();
    return(
        <div id="Aboutme" className="flexContainer flexAbout">
            <div className="flex_1 aboutClass">
                <p className="aboutParagraph">{t('aboutme')}</p>
            </div>
        </div>
    );
}

export default AboutMe;