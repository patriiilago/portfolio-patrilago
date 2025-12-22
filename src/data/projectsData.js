import miauyudaImage from './../assets/proyectos/miauyuda.png';
import bricksBreakerImage from './../assets/proyectos/bricksbreaker.png';
import ingeinaImage from './../assets/proyectos/ingeina.png';

const projects = [
    {
        // El valor de 'image' ahora es el path final y optimizado que genera React/el bundler
        "image": miauyudaImage, 
        "link": "https://miauyuda.netlify.app/",
        "title": "Miauyuda",
        "description":"Plataforma que une a veterinarios y dueños de mascotas. Ofrece dos tipos de usuario, consultas inmediatas con IA y localización de profesionales mediante mapas."
    },

    {
        "image": bricksBreakerImage, 
        "link": "https://bricks-breaker-pcgame.netlify.app",
        "title": "Bricks Breaker",
        "description": "Proyecto inspirado en el clásico Bricks Breaker, desarrollado desde cero utilizando HTML, CSS y JavaScript."
    },
    
    {
        "image": ingeinaImage, 
        "link": "https://ripcamp.netlify.app/",
        "title": "Ingeina",
        "description": "Conecta a estudiantes y exalumnos para resolver dudas técnicas. Desarrollada con React."
    }
];la 

export default projects;