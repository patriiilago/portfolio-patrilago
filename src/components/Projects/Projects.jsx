import './Projects.css'
import projectsData from '../../data/projectsData.json'
import ProjectCard from '../ProjectCard/ProjectCard'

const Projects = () => {


    return (
        <section className="projects-container">
            <h1 className='section-title-projects'>Projects</h1>
            <div className="projects-list">
                {projectsData.map((project)=>(
                    <ProjectCard key={project.link} project= {project} />
                ))}
            </div>
        </section>
    )

}
export default Projects