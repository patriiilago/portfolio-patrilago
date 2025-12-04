import './Experience.css'
import { experiences } from '../../data/experienceData';

const Experience = () => {

return (
<section className="experience-section">
      <h1 
      id="Experience" className="section-title">Experiencia</h1>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3 className="experience-role">{exp.role}</h3>
            <h4 className="experience-company">{exp.company}</h4>
            <span className="experience-period">{exp.period}</span>
            <span className="experience-location">{exp.location}</span>
            <ul className="experience-tasks">
              {exp.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Experience