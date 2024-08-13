import React from "react";
import './../App.css';
import './../css/importcss.js';
import Presentation from './presentation';
import AboutMe from './aboutme';
import Languages from './languages';
import { Reveal } from './reveal.tsx';
import AbilitiesAndEducation from './AbilitiesAndEducation.js';

const Index = () => {
    return(
        <main className='bodyClass'>
        <Reveal>
          <Presentation/>
        </Reveal>
        <Reveal>
          <AboutMe/>
        </Reveal>
        <Reveal>
          <AbilitiesAndEducation/>
        </Reveal>
        <Reveal>
          <Languages/>
        </Reveal>
      </main>
    );
}

export default Index;