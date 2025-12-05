import './Projects.css'
import ProjectCard from '../ProjectCard/ProjectCard'
import projectsData from './../../data/projectsData';

const Projects = () => {


    return (
        <section className="projects-container">
            <h1 className='section-title-projects'>Proyectos</h1>
            <div className="projects-list">
                {projectsData.map((project)=>(
                    <ProjectCard key={project.link} project= {project} />
                ))}
            </div>
        </section>
    )

}
export default Projects