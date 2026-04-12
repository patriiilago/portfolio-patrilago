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
                    <p>
                        Mi nombre es <span className="highlight-color">Patri Lago</span> y soy desarrolladora web junior con formación full stack, especializada en frontend con React. Me apasiona la lógica del código y transformar ideas en experiencias digitales claras y funcionales.
                    </p>

                    <p>
                        Actualmente estoy realizando prácticas en desarrollo web, donde trabajo en el rediseño de páginas reales utilizando <span className="highlight-color">Figma</span>, <span className="highlight-color">CSS</span> y <span className="highlight-color">WordPress</span>.
                    </p>

                    <p>
                        Durante mi formación, participé en un proyecto final en equipo que fue seleccionado para la fase final del <span className="highlight-color">Hackshow</span>, donde competimos junto a otros proyectos de la promoción y obtuvimos el segundo puesto.
                    </p>

                    <p>
                        Anteriormente trabajé en ventas e inventario, desarrollando habilidades de organización, responsabilidad y resolución de problemas. Actualmente busco mi primera oportunidad profesional como desarrolladora web junior, con interés en seguir creciendo tanto en frontend como en backend.
                    </p>
                </div>



            </div>
        </div>
    )
}

export default About;