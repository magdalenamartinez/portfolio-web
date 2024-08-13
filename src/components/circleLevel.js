import React, { useEffect, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import {CircularProgressbarWithChildren } from 'react-circular-progressbar';

const CircleLevel = ({maxValue, icon, alt, levelText}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [progressValue, setProgressValue] = useState(0);
    useEffect(() => {
        if (isVisible) {
            const interval = setInterval(() => {
                if (progressValue < maxValue) {
                    setProgressValue(prevValue => prevValue + 1);
                } else {
                    clearInterval(interval);
                }
            }, 60);

            return () => clearInterval(interval);
        }
    }, [isVisible, progressValue, maxValue]);
    const circleStyles = {
        path: {
            stroke: `rgba(198, 33, 99, 1)`,
            strokeLinecap: 'round',
            transition: 'stroke-dashoffset 0.5s ease 0s',
            transform: 'rotate(0.5turn)',
            transformOrigin: 'center center',
        },
        trail: {
            stroke: 'white',
            strokeLinecap: 'round',
            transform: 'rotate(0.5turn)',
            transformOrigin: 'center center',
        },
        
    };

    const handleVisibilityChange = (visible) => {
        if (visible) {
            setIsVisible(true);
        }
    };

    return (
        <div className="circleBox">
            <VisibilitySensor onChange={handleVisibilityChange}>
                <CircularProgressbarWithChildren value={isVisible ? progressValue : 0} className="circleClass" styles={circleStyles}>
                    <img src={icon} alt={alt} className="iconClassLanguage"/>
                    <div className="hoverCircle">
                        <span className="spanCircleText">{levelText}</span>
                    </div>
                </CircularProgressbarWithChildren>
            </VisibilitySensor>
        </div>
    );
}

export default CircleLevel;