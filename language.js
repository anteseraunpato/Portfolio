//Cambiar idioma

let languageContent = {
    "en": {
       "welcome": "👋 Hi, im Jahir Medina!",
       "aboutme": "<p>Crossplatform development software student. I have experience in <b>Java, HTML, CSS, and JavaScript</b>.</p> <p>I am passionate about learning new things and solving problems.</p>",
       "github": "Here's where you find my experiments and projects code.",
       "cuaclink": "See cuactype",
       "encriplink": "See encryptor",
       "pokelink": "See Pokestart"
    },
    "es": {
       "welcome": "👋 ¡Hola, soy Jahir Medina!",
       "aboutme": "<p>Estudiante de desarrollo de software multiplataforma. Tengo experiencia en <b>Java HTML, CSS y JavaScript</b>.</p> <p>Me fascina aprender cosas nuevas y resolver problemas.</p>",
       "github": "Aquí encuentras el código de mis proyectos y experimentos.",
       "cuaclink": "Ver cuactype",
       "encriplink": "Ver encriptador",
       "pokelink": "Ver PokeStart"
    }
 }
 function swithcLang(lang) {
    for (let key in languageContent[lang]) {
       document.getElementById(key).innerHTML = languageContent[lang][key];
    }
 }
