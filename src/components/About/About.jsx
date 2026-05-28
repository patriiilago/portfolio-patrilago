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
                        Me enganché al código la primera vez que vi cómo unas pocas líneas podían cambiarlo todo. Desde entonces no he parado.
                    </p>

                    <p>
                        Disfruto el ciclo completo: pensar la arquitectura, construir la lógica, y conseguir que lo que se ve en pantalla tenga tanto peso como lo que ocurre por detrás. El <span className="highlight-color">frontend</span> y el <span className="highlight-color">backend</span> no son opciones para mí, son dos caras del mismo problema.
                    </p>

                    <p>
                        He desarrollado un <span className="highlight-color">e-commerce</span> de principio a fin para cliente real con <span className="highlight-color">WordPress</span>, <span className="highlight-color">PHP</span> y <span className="highlight-color">CSS</span>, y el proyecto final de mi equipo quedó segundo en el <span className="highlight-color">Hackshow de Ironhack</span>.
                    </p>
                </div>



            </div>
        </div>
    )
}

export default About;