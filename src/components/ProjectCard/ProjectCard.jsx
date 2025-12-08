import React from 'react';

import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    const { image, link, title, description } = project;

    return (
        <article className="project-card">

            {/* Imagen del proyecto */}
            <div className="project-card__image-container">
                <a href={link} target="_blank" rel="noopener noreferrer" className="project-card__btn-live">
                    <img
                        src={image}
                        alt={`Captura de ${title}`}
                        className="project-card__image"
                    />
                </a>
            </div>

            {/* Contenido del proyecto */}
            <div className="project-card__content">
                <h3 className="project-card__title">{title}</h3>
                <p className="project-card__description">{description}</p>
            </div>

        </article>
    );
};

export default ProjectCard;