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
                        Desarrolladora web junior con formación full stack, con interés en <span className="highlight-color">frontend</span> y <span className="highlight-color">backend</span> y las ganas de construir productos digitales que funcionen bien y se sientan bien.
                    </p>

                    <p>
                        Acabo de finalizar unas prácticas donde desarrollé <span className="highlight-color">mymalamesa.com</span> de principio a fin, trabajando con <span className="highlight-color">Figma</span>, <span className="highlight-color">CSS</span> y <span className="highlight-color">WordPress</span> en un proyecto real con cliente real. Durante el bootcamp, el proyecto final de mi equipo quedó segundo en el <span className="highlight-color">Hackshow de Ironhack</span>.
                    </p>

                    <p>
                        Busco mi primera oportunidad profesional donde seguir creciendo, aportar desde el primer día y aprender sin parar.
                    </p>
                </div>



            </div>
        </div>
    )
}

export default About;