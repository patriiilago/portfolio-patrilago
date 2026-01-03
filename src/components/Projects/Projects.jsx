import './Projects.css'
import ProjectCard from '../ProjectCard/ProjectCard'
import projectsData from './../../data/projectsData';

const Projects = () => {

    const [featuredProject, ...otherProjects] = projectsData;

    return (
        <div className="projects">

            {/* 1. SECCIÓN PRINCIPAL */}
            <div className="projects__featured">
                <h1 className="section-title projects__title">Proyectos</h1>
                {featuredProject && (

                    <div className="projects__featured-card">
                         <ProjectCard project={featuredProject} />
                    </div>
                )}
            </div>

            {/* 2. REJILLA INFERIOR (Los 3 de abajo) */}
            <div className="projects__grid">
                {otherProjects.map((project) => (
                    <ProjectCard key={project.link} project={project} />
                ))}
            </div>

        </div>
    )
}

export default Projects