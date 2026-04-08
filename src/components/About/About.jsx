import './About.css'

import fotoPerfil from "./../../assets/foto-perfil/patri-foto.jpg"

const About = () => {
    return (
        <div className="about">

            {/* Título global */}
            <h1 className="section-title about__title">Sobre mí</h1>

            <div className="about__container">

                {/* Imagen de perfil */}
                <div className="about__image-wrapper">
                    <img
                        src={fotoPerfil}
                        alt="Foto de perfil de la desarrolladora"
                        className="about__profile-photo"
                    />
                </div>

                {/* Contenido de texto */}
                <div className="about__text-content">
                    <p>Mi nombre es <span className="highlight-color">Patri Lago</span> y soy desarrolladora web junior con formación full stack, especializada en frontend con React. Me apasiona entender la lógica detrás del código y transformar ideas en experiencias digitales claras y usables.</p>

                    <p>Actualmente estoy realizando prácticas donde trabajo con <span className="highlight-color">WordPress</span> y <span className="highlight-color">Figma</span>, participando en el desarrollo y rediseño de páginas web reales.</p>

                    <p>Tras formarme en desarrollo web, participé junto a un equipo de tres personas en nuestro proyecto final, que fue reconocido entre los mejores en el <span className="highlight-color">Hackshow</span>. Esta experiencia reforzó mi motivación por seguir aprendiendo y enfrentando nuevos retos.</p>

                    <p>Antes de entrar en el sector tecnológico trabajé en ventas e inventario, donde desarrollé organización y capacidad de resolución de problemas. Actualmente, mi foco está en ganar experiencia práctica como desarrolladora y seguir aprendiendo día a día en entornos reales.</p>
                </div>

            </div>
        </div>
    )
}

export default About;