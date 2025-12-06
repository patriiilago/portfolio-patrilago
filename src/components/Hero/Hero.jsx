import './Hero.css'

import iconGithub from "./../../assets/iconos/iconGithub.png"
import iconLinkedin from "./../../assets/iconos/iconLinkedin.png"
import patriCv from "./../../assets/cv/patri-lago-CV.pdf"

const Hero = () => {

    return (
        <section className="home-content">

            <div className="container-title">
                <h1 className="name-title">Patri Lago</h1>
                <h2 className="role-title">Software Developer</h2>
            </div>


            <div className="home-social">
                <a
                    href="https://github.com/patriiilago"
                    className="home-social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={iconGithub} alt="GitHub" />
                </a>

                <a
                    href="https://www.linkedin.com/in/patri-lago/"
                    className="home-social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <img src={iconLinkedin} alt="Linkedin" />
                </a>
            </div>

            <div className="home-button-container">
                <a
                    href={patriCv}
                    target="_blank" rel="noopener noreferrer"
                    className="cv-button"
                >
                    Visualizar CV
                </a>

            </div>
        </section>
    )

}
export default Hero