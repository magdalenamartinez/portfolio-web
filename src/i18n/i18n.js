import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const resources = {
    en: {
        translation: {
            portfolio: "My Portfolio",
            home: "home",
            resume: "resume",
            projects: "projects",
            contact: "contact",
            engineer: "Computer Engineer",
            graduate: "Recent Computer Engineer Graduate",
            fullStack: "Full Stack Developer",
            cybersecurity: "Cybersecurity Student",
            born: "Born in 2002",
            unity: "Experienced in Unity & Blender",
            hardworker: "hardworker",
            aboutme: "  I am a recently graduated Computer Engineer, enthusiastic about cybersecurity, web development and computing in general. I am studying a master's degree in Cybersecurity at the Polytechnic University of Madrid (UPM).",
            education: "Education",
            degree: "Computer Engineering Degree",
            university: "Huelva University",
            programming: "Programming Languages",
            frontend: "Frontend Development",
            backend: "Backend Development",
            database: "Database Administration",
            game: "Game Development",
            animation: "Animation & Graphics",
            tools: "Tools & Platforms",
            abilities: "Skills",
            languages: "Languages",
            native: "NATIVE",
            cr: "All rights reserved.",
        }
    },
    es: {
        translation: {
            portfolio: "Mi Portfolio",
            home: "inicio",
            resume: "curriculum",
            projects: "proyectos",
            contact: "contacto",
            engineer: "Ingeniera Informática",
            graduate: "Recien Graduada en Ingeniería Informática",
            fullStack: "Desarrolladora Full Stack",
            cybersecurity: "Estudiante de Ciberseguridad",
            born: "Nacida en 2002",
            unity: "Experiencia con Unity y Blender",
            hardworker: "trabajadora",
            aboutme: "Soy una Ingeniera Informática recién graduada, entusiasta de la ciberseguridad, el desarrollo web y la informática en general. Estoy estudiando un máster en Ciberseguridad en la Universidad Politécnica de Madrid (UPM).",
            education: "Educación",
            degree: "Grado en Ingeniería Informática",
            university: "Universidad de Huelva",
            programming: "Lenguajes de Programación",
            frontend: "Desarrollo Frontend",
            backend: "Desarrollo Backend",
            database: "Administración de Bases de Datos",
            game: "Desarrollo de Videojuegos",
            animation: "Animación y Gráficos",
            tools: "Herramientas y Plataformas",
            abilities: "Habilidades",
            languages: "Idiomas",
            native: "NATIVA",
            cr: "Todos los derechos reservados.",
        }
    },
    fr: {
        translation: {
            portfolio: "Mon Portfolio",
            home: "accueil",
            resume: "cv",
            projects: "projets",
            contact: "contact",
            engineer: "Ingénieure en Informatique",
            graduate: "Récemment diplômée en ingénierie informatique",
            fullStack: "Développeuse Full Stack",
            cybersecurity: "Étudiante en Cybersécurité",
            born: "Née en 2002",
            unity: "Expérience en Unity & Blender",
            hardworker: "travailleuse",
            aboutme:  "Je suis une ingénieure en informatique récemment diplômée, passionnée par la cybersécurité, le développement web et l'informatique en général. Je suis en train de suivre un master en cybersécurité à l'Université Polytechnique de Madrid (UPM).",
            education: "Éducation",
            degree: "Diplôme en Ingénierie Informatique",
            university: "Université de Huelva",
            programming: "Langages de Programmation",
            frontend: "Développement Frontend",
            backend: "Développement Backend",
            database: "Administration des Bases de Données",
            game: "Développement de Jeux",
            animation: "Animation et Graphismes",
            tools: "Outils et Plateformes",
            abilities: "Compétences",
            languages: "Langues",
            native: "NATIVE",
            cr: "Tous droits réservés.",
        }
    }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;