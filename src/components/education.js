import React, { useEffect } from "react";
import {animate, motion, useAnimation} from "framer-motion";
import mapImage from "./../mapbg.png";
import { useTranslation } from 'react-i18next';

const Education = () => {
    const { i18n, t } = useTranslation();

    return(
        <a className="flex_1 ab_box education_box" target="_blank" href="https://maps.app.goo.gl/3wFTcPek4SvBPAd79">
       
            <motion.div 
                className="mapImageClass"
                style={{backgroundImage: `url(${mapImage})`}}
                animate={{backgroundPositionX: ["0%", "100%", "0%"], backgroundPositionY: ["0%", "100%", "0%"]}}
                transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
            }}            
            >
            <h1 className="Text_4 title_margin">{t('education')}</h1>
            <h1 className="Text_1_5 Text_Color_1">{t('degree')}</h1>
            <h2 className="Text_1_5 Text_Box_1 ">{t('university')}</h2>
            <h2 className="Text_1 Text_Box_1 Black_Box">Epitech Paris</h2>
            <h3 className="Text_1_5 Text_Color_1">2020 - 2024</h3>
            </motion.div>
        </a>
    );
}

export default Education;