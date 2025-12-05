import './Hero.css'

const Hero = () => {

    return (

        <div className="home-content">
            <h1 className="name-title">Patri Lago</h1>
            <h2 className="role-title">Software Developer</h2>

            <div className="home-social">
                <a
                    href="https://github.com/patriiilago"
                    className="home-social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="src\assets\iconos\iconGithub.png" alt="GitHub" />
                </a>

                <a
                    href="https://www.linkedin.com/in/patri-lago/"
                    className="home-social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="src\assets\iconos\iconLinkedin.png" alt="Linkedin" />
                </a>
            </div>

            <a
                href="public\cv\Patri-Lago-CV.pdf"
                target="_blank" rel="noopener noreferrer"
                className="cv-button"
            >
                Visualizar CV
            </a>

        </div>
    )

}
export default Hero