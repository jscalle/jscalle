import React, { Component, useState } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Certificate';
import Skills from './components/Skills';
import Languages from './components/Languages';
import './main.css';

const languages = [
  { code: 'en', name: 'English'},
  { code: 'es', name: 'Español'},
  { code: 'fr', name: 'Français'}
]

const App = () => {

    const [lang, setLang] = useState('es')

    const changeLanguageHandler = (lang) => {
      setLang( lang );
    }

  const translations = {
    'en': {
      // avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC3AcUIAAFkqh/QAAAAAElFTkSuQmCC',
      avatar: 'https://i.pinimg.com/originals/af/1a/7d/af1a7dffcc95abe22dc27844169fa010.jpg',
      name: 'Juan Sebastian Calle Loaiza',
      birth: 'November, 27th, 1995',
      profession: 'BackEnd Developer',
      bio: '❤ BackEnd Developer - Enterpreneur - Maker, Javascript Lover, Blockchain is the Future. I prefer to be constantly learning.',
      address: 'Medellín, Antioquia - Colombia.',
      social: [
        {name: 'instagram', url: 'https://instagram.com/jscalle'},
        {name: 'github', url: 'https://github.com/JuanSebas-Tian'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/sebastian-calle-loaiza/'},
      ],
      tExperience: 'EXPERIENCE',
      experience: [
        {jobTitle: 'Backend Developer', company: 'Triario - NMK Software', startDate: 'March 2021', endDate: 'September 2021', jobDescription: 'Responsible of different development functionalities such as API construction for migration of projects and functionalities according to the client´s requirement usuing NodeJS as a language on the BackEnd side, ReactJS as a language on the FrontEnd side and in database with PostgresSQL'},
        {jobTitle: 'Apprentice / Practitioner', company: 'Bancolombia', startDate: 'July 2019', endDate: 'December 2019', jobDescription: 'Responsible for generating reports and indicators of the human resources area, it was possible to optimize the process for the management of stimuli to employees recognized by their bosses.'},
        {jobTitle: 'FullStack Developer', company: 'Formactiva', startDate: 'November 2018', endDate: 'July 2019', jobDescription: 'Responsible of the gamification of the internal projects and required by the clients, also the support of the previous developments, the company´s website was developed mostly using ReactNative.'},
      ],
      tEducation: 'EDUCATION',
      education: [
        {degree: 'Ingenieria Informatica', institution: 'Universidad Autónoma Latinoamericana', startDate: 'January 2015', endDate: 'Present', description: 'Basic computer engineering average to the other engineering courses in the country, the complementary courses were mandatory which were: Software Quality, Computer Security and Hacking in 2 levels, all of them already completed with satisfaction.'},
        {degree: 'Tenico en programación de Software', institution: 'Sena', startDate: 'October 2013', endDate: 'March 2014', description: 'Software programming technique training stage without practices, focus on HTML, CSS, Javascript, PHP, programming logic and MySQL, base of all knowledge in development.'},
        {degree: 'Tenico en sistemas', institution: 'Sena', startDate: 'Jan 2011', endDate: 'December 2012', description: 'High school technical, focus on maintenance of computer systems and network cabling.'},
      ],
      tCertificate: 'CERTIFICATE',
      certificate: [
        {name: 'Creation of NFTs', institution: 'Platzi', date: 'October 2021', description: 'token creation under the ethereum network in the ERC-721 and ERC-1155 standards..' },
        {name: 'Introduction to DeFi Investing', institution: 'Platzi', date: 'November 2021', description: 'Creation of investment portfolios, conceptualization of decentralized finance, similarities and differences between traditional investments and DeFi investments..', certificate: 'diplomaDefi' },
      ],
      tSkills: 'SKILLS',
      skills: [
        {name: 'HTML5', percentage: '95%'},
        {name: 'CSS', percentage: '90%'},
        {name: 'JavaScript', percentage: '75%'},
        {name: 'PHP', percentage: '50%'},
        {name: 'Wordpress', percentage: '50%'},
        {name: 'ReactJS', percentage: '60%'},
        {name: 'ReactNative', percentage: '45%'},
        {name: 'NodeJS', percentage: '75%'},
        {name: 'MySQL', percentage: '60%'},
        {name: 'PostgresSQL', percentage: '40%'},
        {name: 'MongoDB', percentage: '40%'},
        {name: 'Apollo', percentage: '40%'},
        {name: 'GraphQL', percentage: '40%'},
        {name: 'Firebase', percentage: '60%'},
        {name: 'Java', percentage: '30%'},
      ],
      tLanguages: 'LANGUAGES',
      languages: [
        {name: 'Spanish (Native)', percentage: '100%'},
        {name: 'English', percentage: '50%'},
        {name: 'French', percentage: '15%'},
      ],
      language: 'Choose the language'
    },
    'es': {
      // avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC3AcUIAAFkqh/QAAAAAElFTkSuQmCC',
      avatar: 'https://i.pinimg.com/originals/af/1a/7d/af1a7dffcc95abe22dc27844169fa010.jpg',
      name: 'Juan Sebastian Calle Loaiza',
      birth: 'Noviembre 27 de 1995',
      profession: 'Desarrollador BackEnd',
      bio: '❤ Desarrollador BackEnd - Emprendedor - Me gusta hacer y aprender algo nuevo constantemente, desarrollo en todas las tecnologias de Javascript, pienso que Blockchain es el futuro del desarrollo, es la nueva cara del internet, es la base de la web 3.',
      address: 'Medellín, Antioquia - Colombia.',
      social: [
        {name: 'instagram', url: 'https://instagram.com/jscalle'},
        {name: 'github', url: 'https://github.com/JuanSebas-Tian'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/sebastian-calle-loaiza/'},
      ],
      tExperience: 'EXPERIENCIA',
      experience: [
        {jobTitle: 'Desarrollador Backend', company: 'Triario - NMK Software', startDate: 'marzo 2021', endDate: 'septiembre 2021', jobDescription: 'Responsable de diferentes funciones de desarrollo como construcción API para migración de proyectos y funcionalidades según requerimiento del cliente utilizando NodeJS como lenguaje en el lado BackEnd, ReactJS como lenguaje en el lado FrontEnd y en base de datos con PostgresSQL'},
        {jobTitle: 'Aprendiz / Practicante', company: 'Bancolombia', startDate: 'julio 2019', endDate: 'diciembre 2019', jobDescription: 'Responsable de generar informes e indicadores del área de recursos humanos, se logró optimizar el proceso para la gestión de estímulos a los empleados reconocidos por sus jefes.'},
        {jobTitle: 'Desarrollador FullStack', company: 'Formactiva', startDate: 'noviembre 2018', endDate: 'julio 2019', jobDescription: 'Responsable de la gamificación de los proyectos internos y requeridos por los clientes, también el apoyo de los desarrollos anteriores, el sitio web de la empresa fue desarrollado en su mayoría utilizando ReactNative.'},
      ],
      tEducation: 'EDUCACIÓN',
      education: [
        {degree: 'Ingenieria Informatica', institution: 'Universidad Autónoma Latinoamericana', startDate: 'Enero 2015', endDate: 'actualmente', description: 'Ingenieria informatica basicas promedio a las demas ingenierias del pais, los cursos complementarios fueron obligatiorios las cuales fueron: Calidad de software, Seguridad Informatica y Hacking en 2 niveles todas estás ya culminadas con satisfacción'},
        {degree: 'Tenico en programación de Software', institution: 'Sena', startDate: 'octubre 2013', endDate: 'marzo 2014', description: 'Etapa de formación de técnicas de programación de software sin prácticas, enfoque en HTML, CSS, Javascript, PHP, lógica de programación y MySQL, base de todos los conocimientos en desarrollo.'},
        {degree: 'Tenico en sistemas', institution: 'Sena', startDate: 'enero 2011', endDate: 'diciembre 2012', description: 'Técnico superior, centrado en el mantenimiento de sistemas informáticos y cableado de redes.'},
      ],
      tCertificate: 'CERTIFICACIONES',
      certificate: [
        {name: 'Creación de NFTs', institution: 'Platzi', date: 'Octubre 2021', description: 'Creación de tokens bajo la red de ethereum en los estandares ERC-721 y ERC-1155.', certificate: 'diplomaNfts' },
        {name: 'Introducción a Inversión en DeFi', institution: 'Platzi', date: 'Noviembre 2021', description: 'Creación de portafolio de inversión, conceptualización de que son Finanzas descentralizadas, que similitudes y diferencias existen entre las inversiones tradicionales e inversiones DeFi.', certificate: 'diplomaDefi' },
      ],
      tSkills: 'HABILIDADES',
      skills: [
        {name: 'HTML5', percentage: '95%'},
        {name: 'CSS', percentage: '90%'},
        {name: 'JavaScript', percentage: '75%'},
        {name: 'PHP', percentage: '50%'},
        {name: 'Wordpress', percentage: '50%'},
        {name: 'ReactJS', percentage: '60%'},
        {name: 'ReactNative', percentage: '45%'},
        {name: 'NodeJS', percentage: '75%'},
        {name: 'MySQL', percentage: '60%'},
        {name: 'PostgresSQL', percentage: '40%'},
        {name: 'MongoDB', percentage: '40%'},
        {name: 'Apollo', percentage: '40%'},
        {name: 'GraphQL', percentage: '40%'},
        {name: 'Firebase', percentage: '60%'},
        {name: 'Java', percentage: '30%'},
      ],
      tLanguages: 'IDIOMAS',
      languages: [
        {name: 'Español (idioma materno)', percentage: '100%'},
        {name: 'Ingles', percentage: '50%'},
        {name: 'Francés', percentage: '15%'},
      ],
      language: 'Elija el idioma'
    },
    'fr': {
      // avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC3AcUIAAFkqh/QAAAAAElFTkSuQmCC',
      avatar: 'https://i.pinimg.com/originals/af/1a/7d/af1a7dffcc95abe22dc27844169fa010.jpg',
      name: 'Juan Sebastian Calle Loaiza',
      birth: '27 Novembre 1995',
      profession: 'Développeur BackEnd',
      bio: '❤ BackEnd Developer - Entrepreneur - J´aime faire et apprendre quelque chose de nouveau constamment, j´aime développer dans toutes les technologies Javascript, pour moi Blockchain est l´avenir du développement, c´est le nouveau visage de l´internet, c´est la base du web 3.0..',
      address: 'Medellín, Antioquia - Colombia.',
      social: [
        {name: 'instagram', url: 'https://instagram.com/jscalle'},
        {name: 'github', url: 'https://github.com/JuanSebas-Tian'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/sebastian-calle-loaiza/'},
      ],
      tExperience: 'EXPÉRIENCE',
      experience: [
        {jobTitle: 'Développeur Backend', company: 'Triario - NMK Software', startDate: 'Mars 2021', endDate: 'Septembre 2021', jobDescription: 'Responsable de différentes fonctionnalités de développement telles que la construction d´API pour la migration de projets et de fonctionnalités selon les exigences du client en utilisant NodeJS comme langage du côté BackEnd, ReactJS comme langage du côté FrontEnd et une base de données avec PostgresSQL.'},
        {jobTitle: 'Apprentissage / Praticien', company: 'Bancolombia', startDate: 'Juillet 2019', endDate: 'Décembre 2019', jobDescription: 'Responsable de la génération de rapports et d´indicateurs pour le secteur des ressources humaines, il a été possible d´optimiser le processus de gestion des incitations pour les employés reconnus par leurs patrons.'},
        {jobTitle: 'Développeur FullStack', company: 'Formactiva', startDate: 'Novembre 2018', endDate: 'Juillet 2019', jobDescription: 'Responsable de la gamification des projets internes et des projets demandés par les clients, soutenant également les développements précédents, le site web de l´entreprise a été principalement développé à l´aide de ReactNative.'},
      ],
      tEducation: 'EDUCATION',
      education: [
        {degree: 'Ingenieria Informatica', institution: 'Universidad Autónoma Latinoamericana', startDate: 'Janvier 2015', endDate: 'Présent', description: 'Ingénierie informatique de base : dans la moyenne des autres formations d´ingénieurs du pays, les cours complémentaires étaient obligatoires, à savoir : Qualité des logiciels, Sécurité informatique et Hacking en 2 niveaux, qui ont tous déjà été suivis avec satisfaction.'},
        {degree: 'Tenico en programación de Software', institution: 'Sena', startDate: 'octobre 2013', endDate: 'marzo 2014', description: 'Formation aux techniques de programmation de logiciels sans formation pratique, axée sur HTML, CSS, Javascript, PHP, la logique de programmation et MySQL, la base de toutes les connaissances en matière de développement.'},
        {degree: 'Tenico en sistemas', institution: 'Sena', startDate: 'enero 2011', endDate: 'diciembre 2012', description: 'Technicien supérieur, spécialisé dans la maintenance des systèmes informatiques et le câblage des réseaux.'},
      ],
      tCertificate: 'CERTIFICACIONES',
      certificate: [
        {name: 'Création de NFTs', institution: 'Platzi', date: 'octobre 2021', description: 'création de jetons sous le réseau ethereum sur les standards ERC-721 et ERC-1155..', certificate: 'diplomaNfts' },
        {name: 'Introduction à l´investissement DeFi', institution: 'Platzi', date: 'Novembre 2021', description: 'Création de portefeuilles d´investissement, conceptualisation de ce qu´est la finance décentralisée, quelles sont les similitudes et les différences entre les investissements traditionnels et les investissements DeFi.', certificate: 'diplomaDefi' },
      ],
      tSkills: 'COMPÉTENCES',
      skills: [
        {name: 'HTML5', percentage: '95%'},
        {name: 'CSS', percentage: '90%'},
        {name: 'JavaScript', percentage: '75%'},
        {name: 'PHP', percentage: '50%'},
        {name: 'Wordpress', percentage: '50%'},
        {name: 'ReactJS', percentage: '60%'},
        {name: 'ReactNative', percentage: '45%'},
        {name: 'NodeJS', percentage: '75%'},
        {name: 'MySQL', percentage: '60%'},
        {name: 'PostgresSQL', percentage: '40%'},
        {name: 'MongoDB', percentage: '40%'},
        {name: 'Apollo', percentage: '40%'},
        {name: 'GraphQL', percentage: '40%'},
        {name: 'Firebase', percentage: '60%'},
        {name: 'Java', percentage: '30%'},
      ],
      tLanguages: 'LANGUE',
      languages: [
        {name: 'Langue maternelle Espagnole', percentage: '100%'},
        {name: 'Anglaise', percentage: '50%'},
        {name: 'française', percentage: '15%'},
      ],
      language: 'Choisir la langue'
    },
  }

  const getTranslation = (lang, text) => {
    return translations[lang][text]
  }

    return (
      <header>
        <div className='wrapper'>
          <div className='sidebar'>
            <div className='languageSwitcher'>
              <p>{getTranslation(lang, 'language')}</p>
              <LanguageSwitcherSelector 
                lang={lang}
                handleChangeLanguage={changeLanguageHandler}
                />
            </div>
            <About
              avatar={getTranslation(lang, 'avatar')}
              name={getTranslation(lang, 'name')}
              birth={getTranslation(lang, 'birth')}
              profession={getTranslation(lang, 'profession')}
              bio={getTranslation(lang, 'bio')}
              address={getTranslation(lang, 'address')}
              social={getTranslation(lang, 'social')}
            />
            
          </div>

          <div className='content-wrapper'>
              <div className='content'>
                <Experience title={getTranslation(lang, 'tExperience')} experience={getTranslation(lang, 'experience')} />
                <Education title={getTranslation(lang, 'tEducation')} education={getTranslation(lang, 'education')} />
                <Certificate title={getTranslation(lang, 'tCertificate')} certificate={getTranslation(lang, 'certificate')} />
                <Skills title={getTranslation(lang, 'tSkills')} skills={getTranslation(lang, 'skills')} />
                <Languages title={getTranslation(lang, 'tLanguages')} languages={getTranslation(lang, 'languages')} />
              </div>
          </div>

        </div>
      </header>
    );
  }
// }

const LanguageSwitcherSelector = ({lang, handleChangeLanguage}) => {

  const onChange = e =>{
    handleChangeLanguage(e.target.className);
  }

  const options = languages.map(language => {
    if(language.code != lang){
      return <li onClick={onChange}><div value={language.code} className={language.code} ></div></li>
    }  
  });
    
  return (
    <div className="lang"> 
      <div 
        className={lang}
      >
      </div>
      <ul class="dropdown" >
        {options}
      </ul>
    </div>
  )
}

export default App;
