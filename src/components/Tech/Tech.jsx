import './Tech.css'
import { ICONS } from "../../data/techData.js";

const Tech = () => {

    return (
        <div className="tech">

            {/* Título global + específico del bloque */}
            <h1 className="section-title tech__title">Tecnologías</h1>

            <div className="tech__carousel-wrapper">
                <div className="tech__carousel-track">
                    {ICONS.concat(ICONS).map((icon, index) => (
                        <div key={`${icon.name}-${index}`} className="tech__icon-card">

                            <div
                                className="tech__icon-svg"
                                dangerouslySetInnerHTML={{ __html: icon.svgPath }}
                            />

                            <p className="tech__icon-name">{icon.name}</p>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Tech