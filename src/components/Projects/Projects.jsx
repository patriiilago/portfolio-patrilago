import './Projects.css'
import ProjectCard from '../ProjectCard/ProjectCard'
import projectsData from './../../data/projectsData';

const Projects = () => {

    return (
        <div className="projects">

            {/* Título global + específico del bloque */}
            <h1 className="section-title projects__title">Proyectos</h1>

            {/* Lista de tarjetas */}
            <div className="projects__list">
                {projectsData.map((project) => (
                    <ProjectCard key={project.link} project={project} />
                ))}
            </div>
        </div>
    )
}

export default Projects