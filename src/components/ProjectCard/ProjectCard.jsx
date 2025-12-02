import React from 'react';

import './ProjectCard.css'; 

const ProjectCard = ({ project }) => {
   
    const { image, link, title, description} = project; 
    
    return (
        <article className="project-card">
      
            <div className="card-image-container">
            
                <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-live">
                <img src={image} alt={`Captura de ${title}`} className="project-image" />
                </a>

            </div>

            <div className="card-content">
                <h3>{title}</h3>
                
                <p className="description">{description}</p>
                
            </div>
        </article>
    );
};

export default ProjectCard;