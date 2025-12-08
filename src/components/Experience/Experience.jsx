import './Experience.css'
import { experiences } from '../../data/experienceData';

const Experience = () => {

  return (
    <div className="experience">

      {/* Título global + específico del bloque */}
      <h1 className="section-title experience__title">Experiencia</h1>

      <div className="experience__list">
        {experiences.map((exp, index) => (
          <article key={index} className="experience__card">

            <h3 className="experience__role">{exp.role}</h3>
            <h4 className="experience__company">{exp.company}</h4>

            <span className="experience__period">{exp.period}</span>
            <span className="experience__location">{exp.location}</span>

            <ul className="experience__tasks">
              {exp.tasks.map((task, i) => (
                <li key={i} className="experience__task">{task}</li>
              ))}
            </ul>

          </article>
        ))}
      </div>

    </div>
  );
};
export default Experience