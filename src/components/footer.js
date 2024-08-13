import React from "react";
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { i18n, t } = useTranslation();
    return(
        <div className="footerContainer">
            <div className="footerContent">
                <h1>© 2024 Magdalena Martínez Sánchez. {t("cr")}</h1>
            </div>
        </div>
    );
}

export default Footer;