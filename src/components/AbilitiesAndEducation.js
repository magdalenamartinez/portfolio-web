import React from "react";
import "./../css/importcss.js"
import Education from "./education";
import Abilities from "./abilities";

const AbilitiesAndEducation = () => {
    return (
        <div className="flexContainer abContainer">
            <Education/>
            <Abilities/>
        </div>
    );
}

export default AbilitiesAndEducation;