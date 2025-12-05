import './Tech.css'
import { ICONS } from "../../data/iconsData.js";

const Tech = () => {

    return (
        <section className="tech-section-container">
            
            <h1 className="tech-title">Tecnologías</h1>

            <div className="carousel-wrapper">
                <div className="carousel-track">
                    {ICONS.concat(ICONS).map((icon, index) => (
                        <div key={icon.name} className="icon-card">
                            <div
                                className="icon-svg"
                                dangerouslySetInnerHTML={{ __html: icon.svgPath }}
                            />
                            <p>{icon.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )

}
export default Tech