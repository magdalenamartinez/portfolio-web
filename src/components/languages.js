import React, { useState, useEffect } from "react";
import spanishIco from '../assets/spanish.ico';
import frenchIco from '../assets/french.ico';
import englishIco from '../assets/english.ico';
import {CircularProgressbarWithChildren } from 'react-circular-progressbar';
import CircleLevel from "./circleLevel";
import { useTranslation } from 'react-i18next';

const Languages = () => {
    const { i18n, t } = useTranslation();

    return(
        <div>
        <h1 className="title_center">{t("languages")}</h1>
        <div className="languagesContainer">
            <div className="circleBox">
                <CircleLevel maxValue={70} icon={englishIco} alt={"English"} levelText={"C1"}/>
            </div>
            <div className="circleBox">
                <CircleLevel maxValue={100} icon={spanishIco} alt={"Spanish"} levelText={t("native")}/>
            </div>
            <div className="circleBox">
                <CircleLevel maxValue={40} icon={frenchIco} alt={"French"} levelText={"B2"}/>
            </div>
        </div>
        </div>

    );
}

export default Languages;