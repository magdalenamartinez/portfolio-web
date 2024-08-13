import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons';
import {easeIn, motion} from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Abilities = () => {
    const { i18n, t } = useTranslation();

    const [currentIndex, setCurrentIndex] = useState(0);
    const SkillsData = {
        [t('programming')]: [
            {name: "C", level: 90},
            {name: "C++", level: 90},
            {name: "Java", level: 85},
            {name: "Python", level: 50},
        ],
        [t('frontend')]: [
            {name: "HTML", level: 90},
            {name: "CSS", level: 90},
            {name: "JavaScript", level: 80},
            {name: "React", level: 90},
        ],
        [t('backend')]: [
            {name: "Node.js", level: 80},
            {name: "Spring Boot", level: 70},
            {name: "Express.js", level: 70},
        ],
        [t('database')]: [
            {name: "MySQL", level: 80},
            {name: "Oracle DB", level: 70},
            {name: "phpMyAdmin", level: 80},
        ],
        [t('game')]: [
            {name: "Unity C#", level: 80},
            {name: "CSFML/SFML", level:70},
        ],
        [t('animation')]: [
            {name: "Blender", level: 70},
        ],
        [t('tools')]: [
            {name: "Git & GitHub", level: 90},
            {name: "Linux Commands", level: 80},
            {name: "MatLab (Computer Vision)", level:50},
        ],
    };

    const categories = Object.keys(SkillsData);

    const prevCategory = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const nextCategory = () => {
        if (currentIndex < categories.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };



    return(
        <div className="flex_2 ab_box">
            <h1 className="Text_4 title_margin">{t("abilities")}</h1>
            <div className="flexContainer">
                <button className="buttonClass" onClick={prevCategory} disabled={currentIndex == 0}>
                {(currentIndex > 0) && (<FontAwesomeIcon icon={faLeftLong} className='iconClass_2'/>)}</button>
                <motion.div 
                    className="skillsContainer"
                    initial={{ opacity: 0, height: "300px"}}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    key={currentIndex}
                >
                    <h2 className="Text_2 title_margin">{categories[currentIndex]}</h2>
                    {SkillsData[categories[currentIndex]].map(skill => (
                        <motion.div className="itemClass" 
                            key={currentIndex}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1}}
                        >
                            <span className="itemNameClass" key={skill.name}>{skill.name}</span>
                            <div className="skillbar">
                                <motion.div className="level"
                                    key={currentIndex + skill.name} 
                                    initial={{width: '0%'}}
                                    animate={{ width: `${skill.level}%`}} 
                                    transition={{ duration: 2 }}
                                />
                            </div>
                        </motion.div>
                    ))}                            
                </motion.div>
                <button className="buttonClass" onClick={nextCategory} disabled={currentIndex == categories.length - 1}>
                    {(currentIndex != categories.length - 1) && (<FontAwesomeIcon icon={faRightLong} className='iconClass_2'/>)}</button>
            </div>
        </div>
    );
}

export default Abilities;