import './Hero.css'

import iconGithub from "./../../assets/iconos/iconGithub.png"
import iconLinkedin from "./../../assets/iconos/iconLinkedin.png"
import patriCv from "./../../assets/cv/patri-lago-CV.pdf"

const Hero = () => {

    return (
        <header className="hero">

            <div className="hero__title-container">
                <h2 className="hero__name">Patri Lago</h2>
                <h2 className="hero__role">Software Developer</h2>
            </div>

            <nav className="hero__social">
                <a
                    href="https://github.com/patriiilago"
                    className="hero__social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={iconGithub} alt="GitHub" />
                </a>

                <a
                    href="https://www.linkedin.com/in/patri-lago/"
                    className="hero__social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={iconLinkedin} alt="LinkedIn" />
                </a>
            </nav>

            <div className="hero__button-wrapper">
                <a
                    href={patriCv}
                    className="hero__cv-button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visualizar CV
                </a>
            </div>

        </header>
    )
}
export default Hero