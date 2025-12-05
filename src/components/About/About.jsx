import './About.css'

import fotoPerfil from "./../../assets/foto-perfil/patri-foto.jpg"

const About = () => {

    return (
        <section id="about-me" className="about-me-section">

            <h1 className="section-title">Sobre mí</h1>

            <div className="about-me-container">

                <div className="about-me-image-wrapper">
                    <img
                        src={fotoPerfil}
                        alt="Foto de perfil de la desarrolladora"
                        className="profile-photo"
                    />
                </div>
                <div className="about-me-text-content">
                    <p>Me llamo <span className="highlight-color">Patri Lago</span> y soy desarrolladora frontend con una gran pasión por entender la lógica detrás del código y por transformar ideas en experiencias digitales claras, usables y bien construidas.</p>
                    <p>Después de graduarme del bootcamp de Desarrollo Web Fullstack en <span className="highlight-color">Ironhack</span>, tuve el honor de que mi proyecto final quedara segundo en el <span className="highlight-color">Hackshow</span>. Esta experiencia no solo reforzó mi confianza como desarrolladora, sino que también me recordó lo mucho que disfruto los retos y el aprendizaje continuo.</p>

                    <p>Antes de entrar en el mundo tech trabajé en ventas e inventario, desarrollando organización y capacidad de resolución de problemas. Ahora me especializo en frontend, ampliando conocimientos en backend, y me considero curiosa, responsable y con muchas ganas de aprender y aportar valor.</p>

                </div>
            </div>
        </section>
    )

}
export default About