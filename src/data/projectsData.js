import miauyudaImage from './../assets/proyectos/miauyuda.png'
import bricksBreakerImage from './../assets/proyectos/bricksbreaker.png'
import ingeinaImage from './../assets/proyectos/ingeina.png'
import lecturApp from './../assets/proyectos/lecturApp.png'

const projects = [
    {
        "image": lecturApp, 
        "link": "https://lecturapp.netlify.app",
        "title": "LecturApp",
        "description":"Explorador de libros inmersivo que utiliza la API de Open Library. Gestiona tus listas de lectura (pendientes y leídos) en una interfaz inspirada en una biblioteca mágica nocturna."
    },

    {
        "image": miauyudaImage, 
        "link": "https://miiauyuda.netlify.app/",
        "title": "Miauyuda",
        "description":"Plataforma que une a veterinarios y dueños de mascotas. Ofrece dos tipos de usuario, consultas inmediatas con chatbot y localización de profesionales mediante mapas."
    },
    
    {
        "image": ingeinaImage, 
        "link": "https://ingeina.netlify.app",
        "title": "Ingeina",
        "description": "Conecta a estudiantes y exalumnos para resolver dudas técnicas. Desarrollada con React."
    },

    {
        "image": bricksBreakerImage, 
        "link": "https://bricks-breaker-pcgame.netlify.app",
        "title": "Bricks Breaker",
        "description": "Videojuego desarrollado bajo arquitectura Desktop-first. Lógica y físicas construidas desde cero con HTML, CSS y JavaScript para entorno de ordenador."
    }
]

export default projects;