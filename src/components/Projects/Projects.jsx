import './Projects.css'
import projectsData from '../../data/projectsData.json'
import ProjectCard from '../ProjectCard/ProjectCard'

const Projects = () => {


    return (
        <>
            <h1>Projects</h1>
            <section className="projects-list">
                {projectsData.map((project)=>(
                    <ProjectCard
                    key={project.link}
                    project= {project}
                    />
                ))}
            </section>
        </>
    )

}
export default Projects