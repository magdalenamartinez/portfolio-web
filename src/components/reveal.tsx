import React, { useEffect, useRef } from "react";
import {motion, useInView, useAnimation, animate, easeIn} from 'framer-motion';

interface Props {
    children: JSX.Element;
    width ?: "fit-content" | "100%"
}

export const Reveal = ({children, width = "100%"}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, amount: "some"});
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("nothidden");
        }
    }, [isInView, controls]);

    return(
        <div ref={ref} style={({position: "relative", width, overflow:"hidden"})}>
        <motion.div variants={{
            hidden: {opacity: 0, y: 75},
            nothidden: {opacity: 1, y: 0},
        }}
        initial = "hidden"
        animate = {controls}
        transition = {{duration: 0.5, delay:0.25}}
        >
            {children}
        </motion.div>
        </div>
        
    );

}